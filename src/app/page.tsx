import Routers from "@/components/Router";
import MilestoneSection from "@/components/MilestoneSection";
import Features from "../components/Features";
import Comparison from "@/components/Comparison";
import Kickastarter from "@/components/Kickstarter";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="relative min-h-screen">
        <section className="relative h-screen flex flex-col justify-center items-center text-center text-white p-4 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="https://video-previews.elements.envatousercontent.com/a236a9dc-6c03-49e7-a481-e6c9dd464a62/watermarked_preview/watermarked_preview.mp4" />
          </video>
          <div className="absolute inset-0 bg-black/80 z-10"></div>
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              VPN SOLUTION
            </h1>
            <p className="text-lg mb-8 text-gray-400">
              Experience true online freedom with our revolutionary VPN. Our
              service is a{" "}
              <a href="#one-time-payment" className="anchors_hero">
                one-time payment
              </a>
              , offering a secure{" "}
              <a href="#router" className="anchors_hero">
                router
              </a>{" "}
              that is completely{" "}
              <a href="#plug-and-play" className="anchors_hero">
                plug and play
              </a>
              , and{" "}
              <a href="#works-everywhere" className="anchors_hero">
                works everywhere
              </a>
              . Protect your entire network with ease and access your{" "}
              <a href="#residential-ip" className="anchors_hero">
                Home IP
              </a>{" "}
              from anywhere in the world.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="#one-time-payment"
                className="bg-white/10 border border-white/30 text-white hover:bg-white/80 hover:text-black transition-all duration-300 ease-in-out py-3 px-7 rounded-xl shadow-lg hover:scale-105 text-lg"
              >
                Why Us?
              </a>
              <Link
                href="/shop"
                className="cursor-pointer bg-white/10 border border-white/30 text-white hover:bg-white/80 hover:text-black transition-all duration-300 ease-in-out py-3 px-7 rounded-xl shadow-lg hover:scale-105 text-lg"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </section>
        <Features />
        <Comparison />
        <section
          id="kickstarter-announcement"
          className="min-h-screen py:14 md:py-20 flex flex-col items-center justify-center gap-10 bg-gradient-to-r from-[#0D0D0D] 44% via-[#171717] 50% to-[#0D0D0D] 56%"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-15 md:mt-0 md:mb-20 w-[90%] md:w-[65%] mx-auto ">
            <Routers
              name="Single Router"
              price="85"
              alt="single router image"
              stock
              sale="120"
              qty={1}
              ethPorts={3}
            />
            <Routers
              name="Pair Routers"
              price="150"
              alt="2 routers image"
              stock
              sale="195"
              qty={2}
              ethPorts={3}
            />
          </div>
          <Kickastarter />
        </section>
        <MilestoneSection />
      </main>
    </>
  );
}

//f7f7f7 --- white-grey - anime
//c7c7c7 --- little darker white - anime
//b7b7b7 --- grey - anime
//2c2c2c --- black - anime
