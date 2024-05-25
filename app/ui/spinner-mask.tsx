import Image from "next/image";
import React from "react";
import crown from "@/app/assets/mikan.png";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface Props {
    size?: "sm" | "md" | "lg";
}

export default function Loading({ size = "lg" }: Props) {
    const sizeClassVariants = {
        sm: "w-6 h-6",
        md: "w-12 h-12",
        lg: "w-14 h-14",
    };
    const sizeClass = sizeClassVariants[size];

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 pointer-events-none z-50">
            <div
                className={`${sizeClass} rounded-full flex items-center justify-center`}
            >
                <AiOutlineLoading3Quarters
                    size="125"
                    className="text-primary animate-spin absolute"
                />
                <Image src={crown} alt="Loading" className="animate-pulse" />
            </div>
        </div>
    );
}
