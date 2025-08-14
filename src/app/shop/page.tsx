import Routers from "@/components/Router";
import LottieAnimation from "@/components/LottieAnimation";
import SubscribeForm from "@/components/SubscribeForm";
import { h1 } from "framer-motion/client";

export default function ShopPage() {
  return (
    <>
      <h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent 
        bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 px-1 mb-12 sm:mb-16 tracking-tight"
      >
        Welcome to the Shop
      </h1>
      <section
        id="kickstarter-announcement"
        className="min-h-screen py-20 flex flex-col items-center justify-center gap-10 bg-gradient-to-r from-[#0D0D0D] 44% via-[#171717] 50% to-[#0D0D0D] 56%"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:mb-20 w-[90%] md:w-[65%] mx-auto">
          <Routers
            name="Single Router"
            price="85"
            alt="single router image"
            stock
            sale="120"
            qty={1}
          />
          <Routers
            name="Pair Routers"
            price="150"
            alt="2 routers image"
            stock
            sale="195"
            qty={2}
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-10 w-full max-w-[95vw] lg:max-w-[65vw] mx-auto">
          <div className="w-full md:w-1/2 text-left text-gray-300 flex flex-col">
            <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500 px-1">
              Kickstarter Launch — 29.9.2025
            </h2>
            <hr className="w-24 h-1 bg-gray-600 my-4 rounded-full" />
            <div className="space-y-4 text-gray-200 flex-grow">
              <p className="text-2xl md:text-3xl text-gray-400">
                Early Bird Offers — Save up to 35%!
              </p>
              <ul className="space-y-2 text-lg md:text-xl">
                <li>
                  <span className="font-semibold">Pair of devices:</span>{" "}
                  <span className="text-green-300 font-bold">€150</span>{" "}
                  <span className="line-through text-gray-500">€195</span>{" "}
                  <span className="text-green-400">(Save €45)</span>
                </li>
                <li>
                  <span className="font-semibold">Single device:</span>{" "}
                  <span className="text-green-300 font-bold">€85</span>{" "}
                  <span className="line-through text-gray-500">€120</span>{" "}
                  <span className="text-green-400">(Save €35)</span>
                </li>
              </ul>
              <ul className="custom-list-style">
                <li>Lifetime warranty on the device</li>
                <li>Lifetime priority support</li>
                <li>Early shipping before public release</li>
                <li>Exclusive backer updates & community access</li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col border border-gray-400">
            <div className="flex-grow flex items-center justify-center">
              <LottieAnimation animation="email.lottie" />
            </div>
            <div className="w-full p-4 rounded-lg shadow-lg mt-6">
              <h3 className="text-xl mb-1 text-gray-200 font-bold">
                Join Our Early Access Newsletter
              </h3>
              <p className="text-gray-400 mb-4">
                Be the first to know about launches, exclusive discounts, and
                behind-the-scenes updates.
              </p>

              <SubscribeForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
