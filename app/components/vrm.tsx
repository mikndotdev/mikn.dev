"use client";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import React, { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
// @ts-ignore
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import { VRMLoaderPlugin } from "@pixiv/three-vrm";
import {
	VRMAnimationLoaderPlugin,
	createVRMAnimationClip,
} from "@pixiv/three-vrm-animation";
import { Vector3, AnimationMixer, Clock } from "three";

export const VRMModel: React.FC<{
	vrm: import("@pixiv/three-vrm").VRM | null;
	mixer: AnimationMixer | null;
}> = ({ vrm, mixer }) => {
	useFrame(({ clock }, delta) => {
		if (vrm) {
			vrm.scene.position.set(0, -4, 0);
			vrm.scene.scale.set(5, 5, 5);
			vrm.scene.rotation.y = Math.PI;
			vrm.expressionManager?.setValue("neutral", 1);

			vrm.update(delta);
		}
		if (mixer) {
			mixer.update(delta);
		}
	});

	return vrm ? <primitive object={vrm.scene} /> : null;
};

export function VRM() {
	const [vrm, setVrm] = useState<import("@pixiv/three-vrm").VRM | null>(null);
	const [mixer, setMixer] = useState<AnimationMixer | null>(null);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const loader = new GLTFLoader();
		loader.register((parser: any) => new VRMLoaderPlugin(parser));
		loader.register((parser: any) => new VRMAnimationLoaderPlugin(parser));

		const loadModel = () => {
			return new Promise<import("@pixiv/three-vrm").VRM>(
				(resolve, reject) => {
					loader.load(
						"https://mikn.dev/vroid/mikan.dev_short.vrm",
						(gltf: GLTF) => {
							const loadedVrm = gltf.userData.vrm;
							setVrm(loadedVrm);
							resolve(loadedVrm);
						},
						undefined,
						(error: Error) => {
							console.error(
								"An error occurred while loading the model:",
								error,
							);
							reject(error);
						},
					);
				},
			);
		};

		const loadAnimation = (loadedVrm: import("@pixiv/three-vrm").VRM) => {
			const animationUrl =
				Math.random() < 0.3
					? "https://mikn.dev/vroid/shikanoko.vrma"
					: "https://mikn.dev/vroid/hi.vrma";

			loader.load(
				animationUrl,
				(gltf: GLTF) => {
					const vrmAnimations = gltf.userData.vrmAnimations;
					if (vrmAnimations && vrmAnimations.length > 0) {
						if (loadedVrm && loadedVrm.humanoid) {
							const animationClip = createVRMAnimationClip(
								vrmAnimations[0],
								loadedVrm,
							);
							const animationMixer = new AnimationMixer(
								loadedVrm.scene,
							);
							const action =
								animationMixer.clipAction(animationClip);

							if (
								animationUrl ===
								"https://mikn.dev/vroid/hi.vrma"
							) {
								action.setLoop(THREE.LoopOnce, 1);
								action.clampWhenFinished = true;
							} else {
								action.setLoop(THREE.LoopRepeat, Infinity);
							}

							action.play();
							setMixer(animationMixer);
						} else {
							console.error(
								"VRM model or humanoid is not loaded correctly.",
							);
						}
					}
				},
				undefined,
				(error: Error) => {
					console.error(
						"An error occurred while loading the animation:",
						error,
					);
				},
			);
		};

		loadModel()
			.then((loadedVrm) => {
				setIsLoaded(true);
				loadAnimation(loadedVrm);
			})
			.catch((error) => {
				console.error("An error occurred:", error);
			});
	}, []);

	return (
		<div className="flex justify-center items-center w-96 h-96">
			{!isLoaded ? (
				<div className="flex items-center justify-center p-4">
					<AiOutlineLoading3Quarters
						className="animate-spin text-primary"
						size={100}
					/>
				</div>
			) : (
				<Canvas camera={{ position: [0, 0, 3] }}>
					<ambientLight intensity={2.1} />
					<VRMModel vrm={vrm} mixer={mixer} />
				</Canvas>
			)}
		</div>
	);
}
