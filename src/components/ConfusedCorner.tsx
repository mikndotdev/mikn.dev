"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Confused from "@/assets/img/confused.png";

export function ConfusedCorner() {
  return (
    <motion.div
      initial={{ y: "110%" }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 55, damping: 14, delay: 0.1 }}
      className="pointer-events-none fixed bottom-0 right-0 select-none"
    >
      <Image
        src={Confused}
        alt=""
        aria-hidden
        priority
        className="h-auto w-40 sm:w-56 md:w-72 lg:w-80"
      />
    </motion.div>
  );
}
