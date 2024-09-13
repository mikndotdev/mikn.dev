import Image from "next/image";
import React, { useState, useEffect } from "react";
import mikanLogo from "@/app/assets/mikan-vtube.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "./useMediaQuery"; // Import the custom hook

const backgroundVariants = {
    initial: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.8 } },
};

const imageVariants = {
    initial: { opacity: 0, scale: 1, y: 0 },
    animate: {
        opacity: 1,
        scale: 1,
        y: -30,
        transition: {
            opacity: { duration: 0.8, ease: "easeOut" },
            y: { delay: 0.8, duration: 1, ease: "easeInOut" },
        },
    },
    exit: {
        opacity: 0,
        rotate: 90,
        scale: 10,
        transition: { duration: 0.8 },
    },
};

const textVariants = {
    initial: { opacity: 0, y: 0 },
    animate: {
        opacity: 1,
        transition: { delay: 1, duration: 0.5 },
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.8 },
    },
};

export default function CinematicLoader() {
    const [isVisible, setIsVisible] = useState(true);
    const [showWelcome, setShowWelcome] = useState(false);
    const isMobile = useMediaQuery("(max-width: 640px)");
    const isTablet = useMediaQuery("(max-width: 1024px)");

    useEffect(() => {
        const welcomeTimer = setTimeout(() => {
            setShowWelcome(true);
        }, 1000);

        const exitTimer = setTimeout(() => {
            setIsVisible(false);
        }, 4000);

        return () => {
            clearTimeout(welcomeTimer);
            clearTimeout(exitTimer);
        };
    }, []);

    const getImageSize = () => {
        if (isMobile) return 300;
        if (isTablet) return 500;
        return 700;
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    <motion.div
                        className="fixed inset-0 bg-on-tertiary pointer-events-none z-40"
                        variants={backgroundVariants}
                        initial="initial"
                        exit="exit"
                    />
                    <motion.div
                        className="fixed inset-0 flex flex-col items-center justify-center pointer-events-none z-50"
                        variants={imageVariants}
                        initial="initial"
                        animate={["animate", "moveUp"]}
                        exit="exit"
                    >
                        <Image
                            src={mikanLogo}
                            alt="Logo"
                            width={getImageSize()}
                            height={getImageSize()}
                            priority
                        />
                        {showWelcome && (
                            <motion.div
                                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-4 text-center px-4"
                                variants={textVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                            >
                                Welcome to MikanDev!
                            </motion.div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}