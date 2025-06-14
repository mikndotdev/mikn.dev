"use client";
import { useState, useEffect, useRef, FC } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
// @ts-ignore
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { AnimationAction } from "three";
import { VRMLoaderPlugin } from "@pixiv/three-vrm";
import {
	VRMAnimationLoaderPlugin,
	createVRMAnimationClip,
} from "@pixiv/three-vrm-animation";
import { AnimationMixer, LoopOnce, LoopRepeat } from "three";
import { PiPlayPause, PiRepeat } from "react-icons/pi";

const animations = [
	{
		url: "https://cdn.mikn.dev/vroid/shikanoko.vrma",
		loop: true,
		percentage: 10,
	},
	{ url: "https://cdn.mikn.dev/vroid/hi.vrma", loop: false, percentage: 50 },
	{
		url: "https://cdn.mikn.dev/vroid/uishig.vrma",
		loop: false,
		percentage: 10,
	},
	{
		url: "https://cdn.mikn.dev/vroid/tetoris.vrma",
		loop: false,
		percentage: 10,
	},
	{
		url: "https://cdn.mikn.dev/vroid/telepathy.vrma",
		loop: false,
		percentage: 10,
	},
	{
		url: "https://cdn.mikn.dev/vroid/soware.vrma",
		loop: false,
		percentage: 10,
	},
];

export const VRMModel: FC<{
	vrm: import("@pixiv/three-vrm").VRM | null;
	mixer: AnimationMixer | null;
}> = ({ vrm, mixer }) => {
	useFrame(({ clock }, delta) => {
		if (vrm) {
			vrm.scene.position.set(0, -4.2, 0);
			vrm.scene.scale.set(6.5, 5, 5);
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
	const actionRef = useRef<AnimationAction | null>(null);

	useEffect(() => {
		const loader = new GLTFLoader();
		loader.register((parser: any) => new VRMLoaderPlugin(parser));
		loader.register((parser: any) => new VRMAnimationLoaderPlugin(parser));

		const loadModel = () => {
			return new Promise<import("@pixiv/three-vrm").VRM>(
				(resolve, reject) => {
					loader.load(
						"https://cdn.mikn.dev/vroid/mikan.dev(kyonyu).vrm",
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

		function pickAnimation() {
			const total = animations.reduce(
				(sum, anim) => sum + anim.percentage,
				0,
			);
			const rand = Math.random() * total;
			let acc = 0;
			for (const anim of animations) {
				acc += anim.percentage;
				if (rand < acc) return anim;
			}
			return animations[0]; // fallback
		}

		const loadAnimation = (loadedVrm: import("@pixiv/three-vrm").VRM) => {
			const { url, loop } = pickAnimation();

			loader.load(
				url,
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

							if (loop) {
								action.setLoop(LoopRepeat, Infinity);
							} else {
								action.setLoop(LoopOnce, 1);
								action.clampWhenFinished = true;
							}

							action.play();
							setMixer(animationMixer);
							actionRef.current = action;
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
		<div>
			<div className="flex flex-col justify-center items-center w-96 h-96">
				{!isLoaded ? (
					<div className="flex items-center justify-center p-4">
						<span className="loading loading-xl loading-spinner text-primary" />
					</div>
				) : (
					<a
						href={"https://youtube.com/@mikndotdev"}
						target="_blank"
						className={"block w-full h-full"}
					>
						<Canvas camera={{ position: [0, 0, 3] }}>
							<ambientLight intensity={1.7} />
							<VRMModel vrm={vrm} mixer={mixer} />
						</Canvas>
					</a>
				)}
			</div>
			<div className="flex gap-2 mt-5 w-full justify-center">
				<PiPlayPause
					className="text-primary w-10 h-10 cursor-pointer"
					onClick={() => {
						if (!actionRef.current) return;
						if (actionRef.current?.paused) {
							actionRef.current.paused = false;
						} else {
							actionRef.current.paused = true;
						}
					}}
				>
					Pause
				</PiPlayPause>
				<PiRepeat
					className="text-primary w-10 h-10 cursor-pointer"
					onClick={() => {
						if (actionRef.current) {
							actionRef.current.reset();
							actionRef.current.paused = false;
							actionRef.current.play();
						}
					}}
				>
					Restart
				</PiRepeat>
			</div>
		</div>
	);
}
