"use client";
import React, { useRef } from "react";
import { anchors_hero } from "@/constants/style-constants";
import LottieGlobe from "@/components/lottieGlobe";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["65vw", "0vw", "50vw", "0vw", "70vw"]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <>
      <main className="relative min-h-screen flex flex-col justify-center items-center">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover -z-10"
        >
          <source src="https://video-previews.elements.envatousercontent.com/a236a9dc-6c03-49e7-a481-e6c9dd464a62/watermarked_preview/watermarked_preview.mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>

        <section className="relative z-10 text-center text-white p-4 max-w-4xl h-screen flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">VPN SOLUTION</h1>
          <p className="text-lg mb-8 text-gray-400">
            Experience true online freedom with our revolutionary VPN. Our
            service is a{" "}
            <a href="#onetimepayment" className={anchors_hero}>
              one-time payment
            </a>
            , offering a secure{" "}
            <a href="#router" className={anchors_hero}>
              router
            </a>{" "}
            that is completely{" "}
            <a href="#plugandplay" className={anchors_hero}>
              plug and play
            </a>
            , and{" "}
            <a href="#workseverywhere" className={anchors_hero}>
              works everywhere
            </a>
            . Protect your entire network with ease.
          </p>
          <button className="bg-none border border-white hover:bg-white hover:text-black py-3 px-12 rounded-lg">
            Shop
          </button>
        </section>
      </main>
      <section
        ref={containerRef}
        className="relative z-20 p-10 bg-black text-white max-w-[70vw] mx-auto"
      >
        <section
          id="onetimepayment"
          className="h-screen flex items-center justify-center"
        >
          <div className="flex flex-col md:flex-row items-center gap-10 w-full">
            <div className="md:w-2/5 w-full flex flex-col justify-center items-center text-center">
              <h2 className="text-6xl font-bold mb-4">One-Time Payment</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>No subscriptions, no monthly bills.</li>
                <li>A single purchase for a lifetime of access.</li>
                <li>Secure your internet without recurring costs.</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="router" className="h-screen flex flex-col justify-center">
          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            <div className="md:w-2/5 w-full text-center md:text-left flex flex-col justify-center">
              <h2 className="text-6xl font-bold mb-4">Router Protection</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Protects your entire network, not just one device.</li>
                <li>No software to install on individual devices.</li>
                <li>A simple and reliable hardware solution.</li>
              </ul>
            </div>
          </div>
        </section>
        <section
          id="plugandplay"
          className="h-screen flex flex-col justify-center"
        >
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-2/5 w-full text-center md:text-left flex flex-col justify-center">
              <h2 className="text-6xl font-bold mb-4">
                Plug & Play Simplicity
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Instantly protected with zero configuration.</li>
                <li>Easy to set up in just a few minutes.</li>
                <li>Enjoy security without the technical hassle.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Works Everywhere Section */}
        <section
          id="workseverywhere"
          className="h-screen flex flex-col justify-center"
        >
          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            <div className="md:w-2/5 w-full text-center md:text-left flex flex-col justify-center">
              <h2 className="text-6xl font-bold mb-4">Works Everywhere</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Bypass censorship and geo-restrictions.</li>
                <li>Access content as if you were home.</li>
                <li>Ultimate tool for internet freedom abroad.</li>
              </ul>
            </div>
          </div>
        </section>
        <section
          id="residentialip"
          className="h-screen flex flex-col justify-center"
        >
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-2/5 w-full text-center md:text-left flex flex-col justify-center">
              <h2 className="text-6xl font-bold mb-4">Residential IP</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>
                  Dedicated IP address that looks like a normal home connection.
                </li>
                <li>Avoid detection and online flagging.</li>
                <li>Enjoy unblocked access to online services.</li>
              </ul>
            </div>
          </div>
        </section>
      </section>
      <motion.div
        className="fixed top-1/2 -translate-y-1/2 w-[75vw] max-w-[750px] z-30"
        style={{ x, opacity }}
      >
        <LottieGlobe />
      </motion.div>
    </>
  );
}
