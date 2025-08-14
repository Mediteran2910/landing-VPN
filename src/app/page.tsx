import LottieAnimation from "@/components/LottieAnimation";
import SubscribeForm from "@/components/SubscribeForm";
import Routers from "@/components/Router";
import {
  HandCoins,
  MapPinHouse,
  GlobeLock,
  Shield,
  Wrench,
} from "lucide-react";
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
          <div className="relative z-20 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              VPN SOLUTION
            </h1>
            <p className="text-lg mb-8 text-gray-400">
              Experience true online freedom with our revolutionary VPN. Our
              service is a{" "}
              <a href="#onetimepayment" className="anchors_hero">
                one-time payment
              </a>
              , offering a secure{" "}
              <a href="#router" className="anchors_hero">
                router
              </a>{" "}
              that is completely{" "}
              <a href="#plugandplay" className="anchors_hero">
                plug and play
              </a>
              , and{" "}
              <a href="#workseverywhere" className="anchors_hero">
                works everywhere
              </a>
              . Protect your entire network with ease.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="#one-time-payment"
                className="bg-white/10 border border-white/30 text-white hover:bg-white/80 hover:text-black transition-all duration-300 ease-in-out py-3 px-7 rounded-xl shadow-lg hover:scale-105 text-lg"
              >
                Why Us?
              </a>
              <button className="cursor-pointer bg-white/10 border border-white/30 text-white hover:bg-white/80 hover:text-black transition-all duration-300 ease-in-out py-3 px-7 rounded-xl shadow-lg hover:scale-105 text-lg">
                Shop Now
              </button>
            </div>
          </div>
        </section>

        <section className="relative z-20 text-white bg-black">
          <article className="scroll-mt-20 w-full py-20 flex flex-col md:flex-row md:items-stretch gap-10 bg-gradient-to-r from-[#0D0D0D] via-[#171717] to-[#0D0D0D]">
            <div className="max-w-[95vw] lg:max-w-[65vw] mx-auto flex flex-col md:flex-row gap-10 items-stretch w-full">
              <div className="w-full md:w-2/5 text-left flex flex-col justify-center">
                <h2
                  id="one-time-payment"
                  className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500 px-1"
                >
                  One-Time Payment
                </h2>
                <hr className="w-24 h-1 bg-gray-600 my-4 rounded-full" />
                <ul className="custom-list-style space-y-2 text-gray-300 text-base md:text-lg">
                  <li>No subscriptions, no monthly bills.</li>
                  <li>A single purchase for a lifetime of access.</li>
                  <li>Secure your internet without recurring costs.</li>
                </ul>
              </div>
              <div className="w-full md:w-3/5 flex items-center justify-center h-full">
                <div className="w-full max-w-[500px] aspect-square flex items-center justify-center">
                  <LottieAnimation animation="payment.lottie" speed={0.8} />
                </div>
              </div>
            </div>
          </article>
          <article className="w-full py-20 flex flex-col md:flex-row-reverse md:items-stretch gap-10 bg-gradient-to-r from-[#0D0D0D] via-[#171717] to-[#0D0D0D]">
            <div className="max-w-[95vw] lg:max-w-[65vw] mx-auto flex flex-col md:flex-row-reverse gap-10 items-stretch w-full">
              <div className="w-full md:w-2/5 text-left flex flex-col justify-center">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500 px-1">
                  Router Protection
                </h2>
                <hr className="w-24 h-1 bg-gray-600 my-4 rounded-full" />
                <ul className="custom-list-style space-y-2 text-gray-300 text-base md:text-lg">
                  <li>Protects your entire network, not just one device.</li>
                  <li>No software to install on individual devices.</li>
                  <li>A simple and reliable hardware solution.</li>
                </ul>
              </div>
              <div className="w-full md:w-3/5 flex items-center justify-center h-full">
                <div className="w-full max-w-[500px] aspect-square flex items-center justify-center">
                  <LottieAnimation animation="router.lottie" speed={0.25} />
                </div>
              </div>
            </div>
          </article>
          <article className="w-full py-20 flex flex-col md:flex-row md:items-stretch gap-10 bg-gradient-to-r from-[#0D0D0D] via-[#171717] to-[#0D0D0D]">
            <div className="max-w-[95vw] lg:max-w-[65vw] mx-auto flex flex-col md:flex-row gap-10 items-stretch w-full">
              <div className="w-full md:w-2/5 text-left flex flex-col justify-center">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500 px-1">
                  Plug & Play Simplicity
                </h2>
                <hr className="w-24 h-1 bg-gray-600 my-4 rounded-full" />
                <ul className="custom-list-style space-y-2 text-gray-300 text-base md:text-lg">
                  <li>Instantly protected with zero configuration.</li>
                  <li>Easy to set up in just a few minutes.</li>
                  <li>Enjoy security without the technical hassle.</li>
                </ul>
              </div>
              <div className="w-full md:w-3/5 flex items-center justify-center h-full">
                <div className="w-full max-w-[500px] aspect-square flex items-center justify-center">
                  <LottieAnimation animation="p-p-new.lottie" speed={2} />
                </div>
              </div>
            </div>
          </article>
          <article className="w-full py-20 flex flex-col md:flex-row-reverse md:items-stretch gap-10 bg-gradient-to-r from-[#0D0D0D] via-[#171717] to-[#0D0D0D]">
            <div className="max-w-[95vw] lg:max-w-[65vw] mx-auto flex flex-col md:flex-row-reverse gap-10 items-stretch w-full">
              <div className="w-full md:w-2/5 text-left flex flex-col justify-center">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500 px-1">
                  Works Everywhere
                </h2>
                <hr className="w-24 h-1 bg-gray-600 my-4 rounded-full" />
                <ul className="custom-list-style space-y-2 text-gray-300 text-base md:text-lg">
                  <li>Bypass censorship and geo-restrictions.</li>
                  <li>Access content as if you were home.</li>
                  <li>Ultimate tool for internet freedom abroad.</li>
                </ul>
              </div>
              <div className="w-full md:w-3/5 flex items-center justify-center h-full">
                <div className="w-full max-w-[500px] aspect-square flex items-center justify-center">
                  <LottieAnimation animation="globe.lottie" />
                </div>
              </div>
            </div>
          </article>
          <article className="w-full py-20 flex flex-col md:flex-row md:items-stretch gap-10 bg-gradient-to-r from-[#0D0D0D] via-[#171717] to-[#0D0D0D]">
            <div className="max-w-[95vw] lg:max-w-[65vw] mx-auto flex flex-col md:flex-row gap-10 items-stretch w-full">
              <div className="w-full md:w-2/5 text-left flex flex-col justify-center">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500 px-1">
                  Residential IP
                </h2>
                <hr className="w-24 h-1 bg-gray-600 my-4 rounded-full" />
                <ul className="custom-list-style space-y-2 text-gray-300 text-base md:text-lg">
                  <li>Access to your Home IP from everywhere.</li>
                  <li>Avoid detection and online flagging.</li>
                  <li>Enjoy unblocked access to online services.</li>
                </ul>
              </div>
              <div className="w-full md:w-3/5 flex items-center justify-center h-full">
                <div className="w-full max-w-[500px] aspect-square flex items-center justify-center">
                  <LottieAnimation animation="home-ip.lottie" />
                </div>
              </div>
            </div>
          </article>
        </section>

        <article
          id="comparison"
          className="w-full py-16 md:py-20 bg-gradient-to-r from-[#F5F5F5] 44% via-[#BEBEBE] 50% to-[#F5F5F5] 56%"
        >
          <div className="max-w-[95vw] lg:max-w-[65vw] mx-auto text-center px-4 sm:px-6 md:px-12 text-black">
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent 
        bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 px-1 mb-12 sm:mb-16 tracking-tight"
            >
              We are better.
            </h2>
            <div className="flex mb-10 md:mb-12 font-bold tracking-wide">
              <div
                className="w-2/5 text-right pr-2 sm:pr-4 md:pr-6 text-[#2c2c2c] 
                  text-l sm:text-base md:text-xl lg:text-2xl"
              >
                Our Solution
              </div>
              <div className="w-1/5 text-center" />
              <div
                className="w-2/5 text-left pl-2 sm:pl-4 md:pl-6 text-[#2c2c2c] 
                  text-l sm:text-base md:text-xl lg:text-2xl"
              >
                Traditional VPNs
              </div>
            </div>

            <div className="space-y-0">
              {" "}
              {[
                {
                  left: "One-time payment for a lifetime of access, no subscriptions.",
                  icon: HandCoins,
                  right: "Endless subscription fees to maintain service.",
                  label: "Pricing",
                },
                {
                  left: "Dedicated residential IP that bypasses blocks.",
                  icon: MapPinHouse,
                  right:
                    "Shared, low-reputation IPs from anonymous data centers.",
                  label: "IP Address",
                },
                {
                  left: "Hardware-based protection for your entire network.",
                  icon: Shield,
                  right:
                    "Requires software on every device and leaves others unprotected.",
                  label: "Security",
                },
                {
                  left: "Your home IP works everywhere, bypassing all geo-blocks.",
                  icon: GlobeLock,
                  right:
                    "Easily detected and blocked by most streaming and financial sites.",
                  label: "Geo-Blocking",
                },
                {
                  left: "True plug-and-play simplicity with zero configuration.",
                  icon: Wrench,
                  right: "Complicated configuration on multiple devices.",
                  label: "Setup",
                },
              ].map((item, idx, arr) => (
                <div key={idx}>
                  <div className="flex flex-wrap items-center text-left py-6 md:py-8">
                    <div className="w-2/5 pr-2 sm:pr-4 md:pr-6 text-right">
                      <p className="text-sm sm:text-base md:text-lg text-black font-semibold leading-relaxed">
                        {item.left}
                      </p>
                    </div>
                    <div className="w-1/5 flex flex-col items-center">
                      <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500">
                        <item.icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" />
                      </div>
                      <span className="text-[10px] sm:text-xs md:text-sm font-medium mt-2 text-gray-600 tracking-wide">
                        {item.label}
                      </span>
                    </div>
                    <div className="w-2/5 pl-2 sm:pl-4 md:pl-6 text-left">
                      <p className="text-sm sm:text-base md:text-lg text-gray-700 font-normal leading-relaxed">
                        {item.right}
                      </p>
                    </div>
                  </div>
                  {idx !== arr.length - 1 && (
                    <hr className="border-t border-gray900 opacity-50" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </article>
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
      </main>
    </>
  );
}

//f7f7f7 --- white-grey - anime
//c7c7c7 --- little darker white - anime
//b7b7b7 --- grey - anime
//2c2c2c --- black - anime
