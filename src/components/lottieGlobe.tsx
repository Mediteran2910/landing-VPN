"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";

interface LottieGlobeProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function LottieGlobe({ className, style }: LottieGlobeProps) {
  return (
    <div className={`relative ${className}`} style={style}>
      {" "}
      <DotLottieReact
        src="/lottieGlobe.lottie"
        loop
        autoplay
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
