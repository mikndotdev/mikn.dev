import React from "react";
import { motion, useInView, type Variants } from "framer-motion";
import Image from "next/image";
import { useMediaQuery } from "./useMediaQuery.ts"; // We'll create this custom hook

interface SpinningGalleryProps {
    centerImage: string;
    duration: string;
    images: string[];
}

const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const SpinningGallery: React.FC<SpinningGalleryProps> = ({
    centerImage,
    duration,
    images,
}) => {
    const filteredImages = images.slice(0, images.length);
    const shuffledImages = shuffleArray([...filteredImages]);
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    const isMobile = useMediaQuery("(max-width: 640px)");

    const containerVariants: Variants = {
        hidden: { scale: 0 },
        visible: { scale: 1, transition: { duration: 0.5 } },
    };

    const containerSize = isMobile ? 200 : 300;
    const orbitRadius = isMobile ? 120 : 200;
    const imageSize = isMobile ? 40 : 80;
    const centerImageSize = isMobile ? 100 : 150;

    return (
        <div className="relative w-full h-full flex justify-center items-center bg-transparent">
            <motion.div
                ref={ref}
                className="circle absolute"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                style={{
                    width: `${containerSize}px`,
                    height: `${containerSize}px`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                }}
            >
                <motion.div
                    className="rotating-container"
                    animate={{ rotate: 360 }}
                    transition={{
                        repeat: Infinity,
                        duration: duration,
                        ease: "linear",
                    }}
                    style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                    }}
                >
                    {shuffledImages.map((img, index) => {
                        const angle = index * (360 / filteredImages.length);
                        const transform = `rotate(${angle}deg) translate(${orbitRadius}px) rotate(-${angle}deg)`;

                        return (
                            <div
                                key={index}
                                className="absolute"
                                style={{
                                    transform,
                                    position: "absolute",
                                    width: `${imageSize}px`,
                                    height: `${imageSize}px`,
                                    borderRadius: "50%",
                                    top: `calc(50% - ${imageSize / 2}px)`,
                                    left: `calc(50% - ${imageSize / 2}px)`,
                                    transformOrigin: "50% 50%",
                                }}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    whileTap={{
                                        scale: 0.8,
                                        borderRadius: "100%",
                                    }}
                                >
                                    <motion.div
                                        animate={{ rotate: -360 }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: duration,
                                            ease: "linear",
                                        }}
                                    >
                                        <Image
                                            src={img}
                                            alt={`Image ${index + 1}`}
                                            width={imageSize}
                                            height={imageSize}
                                            className=""
                                        />
                                    </motion.div>
                                </motion.div>
                            </div>
                        );
                    })}
                </motion.div>
            </motion.div>
            <div className="relative z-10">
                <Image
                    src={centerImage}
                    alt="Center Image"
                    width={centerImageSize}
                    height={centerImageSize}
                    className="rounded-full"
                />
            </div>
        </div>
    );
};

export default SpinningGallery;