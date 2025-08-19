import {
  HandCoins,
  MapPinHouse,
  GlobeLock,
  Shield,
  Wrench,
  Check,
  X,
} from "lucide-react";

export default function Comparison() {
  return (
    <article
      id="comparison"
      className="w-full py-16 md:py-20 bg-gradient-to-r from-[#F5F5F5] 44% via-[#BEBEBE] 50% to-[#F5F5F5] 56%"
    >
      <div className="max-w-[95vw] lg:max-w-[70vw] mx-auto text-center px-4 sm:px-6 md:px-12 text-black">
        <h2
          className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent 
            bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 px-1 mb-4 tracking-tight hover:from-gray-800 hover:via-gray-600 hover:to-gray-400 transition-all duration-300"
        >
          We are better.
        </h2>
        <p className="text-lg text-gray-700 hover:text-gray-900 transition-colors duration-300">
          Why we are better than traditional VPN solutions? It's simple.
        </p>

        <div className="grid gap-6 mt-10">
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
              right: "Shared, low-reputation IPs from anonymous data centers.",
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
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-sm shadow-sm rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-stretch gap-6 hover:bg-white/20 hover:shadow-lg hover:shadow-gray-400/30 hover:scale-[1.02] transition-all duration-300 ease-in-out group cursor-pointer"
            >
              <div className="flex items-start gap-2 md:w-2/5 group-hover:transform group-hover:translate-x-1 transition-transform duration-300 ease-in-out">
                <Check
                  className="h-6 w-6 text-green-600 shrink-0 mt-1 md:mt-0 group-hover:text-green-500 group-hover:scale-110 transition-all duration-300"
                  strokeWidth={3}
                />
                <p className="text-sm sm:text-base md:text-lg text-black font-semibold leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  {item.left}
                </p>
              </div>

              <div className="flex flex-col items-center md:w-1/5">
                <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 group-hover:from-gray-800 group-hover:via-gray-600 group-hover:to-gray-400 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-gray-600/50 transition-all duration-300 ease-in-out">
                  <item.icon className="h-6 w-6 md:h-8 md:w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-xs md:text-sm font-medium mt-2 text-gray-600 tracking-wide group-hover:text-gray-800 group-hover:font-semibold transition-all duration-300">
                  {item.label}
                </span>
              </div>

              <div className="flex items-start justify-between gap-2 md:w-2/5 group-hover:transform group-hover:-translate-x-1 transition-transform duration-300 ease-in-out">
                <p className="text-sm sm:text-base md:text-lg text-gray-700 font-normal leading-relaxed group-hover:text-gray-500 transition-colors duration-300">
                  {item.right}
                </p>
                <X
                  className="h-6 w-6 text-red-600 shrink-0 group-hover:text-red-500 group-hover:scale-110 group-hover:rotate-90 transition-all duration-300"
                  strokeWidth={3}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
