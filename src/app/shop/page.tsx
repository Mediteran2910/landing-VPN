import Routers from "@/components/Router";
import LottieAnimation from "@/components/LottieAnimation";
import SubscribeForm from "@/components/SubscribeForm";
import { h1 } from "framer-motion/client";
import Kickastarter from "@/components/Kickstarter";

export default function ShopPage() {
  return (
    <>
      <section
        id="kickstarter-announcement"
        className="min-h-screen py-20 flex flex-col items-center justify-center gap-10 bg-gradient-to-r from-[#0D0D0D] 44% via-[#171717] 50% to-[#0D0D0D] 56%"
      >
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent 
        bg-gradient-to-r from-gray-200 to-gray-500 px-1 mb-12 sm:mb-16 tracking-tight"
        >
          Welcome to the Shop
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:mb-20 w-[90%] md:w-[65%] mx-auto">
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
    </>
  );
}
