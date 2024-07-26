import Image from "next/image";
import React, { useState, useEffect } from "react";
import mikanLogo from "@/app/assets/mikan-vtube.svg";
import { motion, AnimatePresence } from "framer-motion";


const backgroundVariants = {
  initial: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.8 } }
};

const imageVariants = {
    initial: { opacity: 0, scale: 1, y: 0 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      y: -30,
      transition: { 
        opacity: { duration: 0.8, ease: "easeOut" },
        y: { delay: 0.8, duration: 1, ease: "easeInOut" }
      }
    },
    exit: { 
      opacity: 0, 
      rotate: 90, 
      scale: 10, 
      transition: { duration: 0.8 } 
    }
  };

const textVariants = {
  initial: { opacity: 0, y: 0 },
  animate: { 
    opacity: 1,
    transition: { delay: 1, duration: 0.5 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.8 } 
  }
};

export default function CinematicLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(true);
    }, 1000);

    const exitTimer = setTimeout(() => {
      setIsVisible(false);
    }, 4000); // Increased to 4 seconds to allow time for the new animations

    return () => {
      clearTimeout(welcomeTimer);
      clearTimeout(exitTimer);
    };
  }, []);

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
            <Image src={mikanLogo} alt="Logo" width={700} height={700} />
            {showWelcome && (
              <motion.div
                className="text-4xl font-bold text-white mt-4"
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