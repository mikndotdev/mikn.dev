"use client";
import { useEffect, useState } from "react";
import Mikan from "@/assets/img/mikan.png";
import Image from "next/image";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.body.style.cursor = "none";

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <div className="fixed" style={{ left: position.x, top: position.y }}>
      <Image
        src={Mikan.src}
        alt="Custom Cursor"
        className="w-8 h-8 z-50"
        width={20}
        height={20}
      />
    </div>
  );
}
