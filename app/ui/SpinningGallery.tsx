import React from "react";
import { motion, useInView, type Variants } from "framer-motion";
import Image from "next/image";

interface SpinningGalleryProps {
    centerImage: string;
    duration: string;
    images: string[];
}

const SpinningGallery: React.FC<SpinningGalleryProps> = ({
    centerImage,
    duration,
    images,
}) => {
    const filteredImages = images.slice(0, images.length);
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    const containerVariants: Variants = {
        hidden: { scale: 0 },
        visible: { scale: 1, transition: { duration: 0.5 } },
    };

    return (
        <div className="relative w-full h-full flex justify-center items-center bg-transparent">
            <motion.div
                ref={ref}
                className="circle absolute"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                style={{
                    width: "300px",
                    height: "300px",
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
                    {filteredImages.map((img, index) => {
                        const angle = index * (360 / filteredImages.length);
                        const transform = `rotate(${angle}deg) translate(200px) rotate(-${angle}deg)`;

                        return (
                            <div
                                key={index}
                                className="absolute"
                                style={{
                                    transform,
                                    position: "absolute",
                                    width: "80px",
                                    height: "80px",
                                    borderRadius: "50%",
                                    top: "calc(50% - 40px)",
                                    left: "calc(50% - 40px)",
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
                                            width={80}
                                            height={80}
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
                    width={150}
                    height={150}
                    className="rounded-full"
                />
            </div>
        </div>
    );
};

export default SpinningGallery;
