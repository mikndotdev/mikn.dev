import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface SpinningGalleryProps {
    centerImage: string;
    images: string[];
}

const SpinningGallery: React.FC<SpinningGalleryProps> = ({
    centerImage,
    images,
}) => {
    const filteredImages = images.slice(0, 7);

    return (
        <div className="relative w-full h-full flex justify-center items-center bg-transparent">
            <Image
                src={centerImage}
                alt="Center Image"
                width={150}
                height={150}
                className="rounded-full"
            />
            <motion.div
                className="circle absolute"
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear",
                }}
                style={{
                    width: "300px",
                    height: "300px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                }}
            >
                {filteredImages.map((img, index) => {
                    const angle = index * 51.4;
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
                                animate={{ rotate: -360 }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 20,
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
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default SpinningGallery;
