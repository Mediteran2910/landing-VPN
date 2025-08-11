"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";

type Props = {
  animation: "p-and-p.lottie" | "home-ip.lottie";
};

export default function LottieAnimation({
  animation = "p-and-p.lottie",
}: Props) {
  return (
    <DotLottieReact src={animation} loop autoplay style={{ height: "100%" }} />
  );
}
