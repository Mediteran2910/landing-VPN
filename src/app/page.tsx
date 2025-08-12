import LottieAnimation from "@/components/lottieAnimation";
import SubscribeForm from "@/components/subscribeForm";
import Router from "@/components/Router";
export default function Home() {
  return (
    <>
      <main className="relative min-h-screen">
        <section className="relative h-screen flex flex-col justify-center items-center text-center text-white p-4">
          <video
            autoPlay
            muted
            loop
            className="absolute inset-0 w-full h-full object-cover -z-10"
          >
            <source src="https://video-previews.elements.envatousercontent.com/a236a9dc-6c03-49e7-a481-e6c9dd464a62/watermarked_preview/watermarked_preview.mp4" />
          </video>
          <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>
          <div className="relative z-10 max-w-4xl">
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
            <div className="flex justify-center gap-10">
              <a
                href="#onetimepayment"
                className="bg-none border border-white hover:bg-white hover:text-black py-3 px-12 rounded-lg"
              >
                Why Us?
              </a>
              <button className="bg-none border border-white hover:bg-white hover:text-black py-3 px-12 rounded-lg">
                Shop Now
              </button>
            </div>
          </div>
        </section>
        <section className="relative z-20 text-white bg-black">
          <article
            id="onetimepayment"
            className="w-full py-20 flex flex-col justify-center gap-10 md:flex-row md:items-center bg-gradient-to-r from-[#0D0D0D] 44% via-[#171717] 50% to-[#0D0D0D] 56%"
          >
            <div className="max-w-[95vw] lg:max-w-[65vw] mx-auto flex flex-col md:flex-row gap-10 items-center w-full">
              <div className="w-full md:w-2/5 text-left">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500 px-1">
                  One-Time Payment
                </h2>
                <hr className="w-24 h-1 bg-gray-600 my-4 rounded-full" />
                <ul className="custom-list-style space-y-2 text-gray-300 text-base md:text-lg">
                  <li>No subscriptions, no monthly bills.</li>
                  <li>A single purchase for a lifetime of access.</li>
                  <li>Secure your internet without recurring costs.</li>
                </ul>
              </div>
              <div className="w-full md:w-3/5">
                <LottieAnimation animation="home-ip.lottie" />
              </div>
            </div>
          </article>

          <article
            id="router"
            className="w-full py-20 flex flex-col justify-center gap-10 md:flex-row-reverse md:items-center bg-gradient-to-r from-[#0D0D0D] 44% via-[#171717] 50% to-[#0D0D0D] 56%"
          >
            <div className="max-w-[95vw] lg:max-w-[65vw] mx-auto flex flex-col md:flex-row-reverse gap-10 items-center w-full">
              <div className="w-full md:w-2/5 text-left">
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
              <div className="w-full md:w-3/5">
                <LottieAnimation animation="p-and-p.lottie" />
              </div>
            </div>
          </article>

          <article
            id="plugandplay"
            className="w-full py-20 flex flex-col justify-center gap-10 md:flex-row md:items-center bg-gradient-to-r from-[#0D0D0D] 44% via-[#171717] 50% to-[#0D0D0D] 56%"
          >
            <div className="max-w-[95vw] lg:max-w-[65vw] mx-auto flex flex-col md:flex-row gap-10 items-center w-full">
              <div className="w-full md:w-2/5 text-left">
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
              <div className="w-full md:w-3/5">
                <LottieAnimation animation="home-ip.lottie" />
              </div>
            </div>
          </article>

          <article
            id="workseverywhere"
            className="w-full py-20 flex flex-col justify-center gap-10 md:flex-row-reverse md:items-center bg-gradient-to-r from-[#0D0D0D] 44% via-[#171717] 50% to-[#0D0D0D] 56%"
          >
            <div className="max-w-[95vw] lg:max-w-[65vw] mx-auto flex flex-col md:flex-row-reverse gap-10 items-center w-full">
              <div className="w-full md:w-2/5 text-left">
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
              <div className="w-full md:w-3/5">
                <LottieAnimation animation="home-ip.lottie" />
              </div>
            </div>
          </article>

          <article
            id="residentialip"
            className="w-full py-20 flex flex-col justify-center gap-10 md:flex-row md:items-center bg-gradient-to-r from-[#0D0D0D] 44% via-[#171717] 50% to-[#0D0D0D] 56%"
          >
            <div className="max-w-[95vw] lg:max-w-[65vw] mx-auto flex flex-col md:flex-row gap-10 items-center w-full">
              <div className="w-full md:w-2/5 text-left">
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
              <div className="w-full md:w-3/5">
                <LottieAnimation animation="p-and-p.lottie" />
              </div>
            </div>
          </article>
        </section>
        <article
          id="comparison"
          className="w-full py-20 bg-gradient-to-r from-[#F5F5F5] 44% via-[#BEBEBE] 50% to-[#F5F5F5] 56%"
        >
          <div className="max-w-[95vw] lg:max-w-[65vw] mx-auto text-center px-6 md:px-12 text-black">
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent 
    bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 px-1 mb-16 tracking-tight"
            >
              We are better.
            </h2>
            <div className="hidden md:flex mb-12">
              <div className="w-2/5 text-right pr-6">
                <h4 className="text-3xl md:text-4xl font-bold text-[#2c2c2c] tracking-wide">
                  Our Solution
                </h4>
              </div>
              <div className="w-1/5" />
              <div className="w-2/5 text-left pl-6">
                <h4 className="text-3xl md:text-4xl font-bold text-[#2c2c2c] tracking-wide">
                  Traditional VPNs
                </h4>
              </div>
            </div>
            <div className="space-y-20">
              {[
                {
                  left: "One-time payment for a lifetime of access, no subscriptions.",
                  icon: <svg className="h-10 w-10 text-gray-700" />,
                  right: "Endless subscription fees to maintain service.",
                  label: "Pricing",
                },
                {
                  left: "Dedicated residential IP that bypasses blocks.",
                  icon: <svg className="h-10 w-10 text-gray-700" />,
                  right:
                    "Shared, low-reputation IPs from anonymous data centers.",
                  label: "IP Address",
                },
                {
                  left: "Hardware-based protection for your entire network.",
                  icon: <svg className="h-10 w-10 text-gray-700" />,
                  right:
                    "Requires software on every device and leaves others unprotected.",
                  label: "Security",
                },
                {
                  left: "Your home IP works everywhere, bypassing all geo-blocks.",
                  icon: <svg className="h-10 w-10 text-gray-700" />,
                  right:
                    "Easily detected and blocked by most streaming and financial sites.",
                  label: "Geo-Blocking",
                },
                {
                  left: "True plug-and-play simplicity with zero configuration.",
                  icon: <svg className="h-10 w-10 text-gray-700" />,
                  right: "Complicated configuration on multiple devices.",
                  label: "Setup",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col md:flex-row items-center md:items-start text-left"
                >
                  <div className="w-full md:w-2/5 text-right pr-6">
                    <p className="text-lg md:text-xl text-black font-semibold leading-relaxed">
                      {item.left}
                    </p>
                  </div>
                  <div className="w-full md:w-1/5 flex flex-col items-center">
                    {item.icon}
                    <span className="text-sm font-medium mt-1 text-gray-600 tracking-wide">
                      {item.label}
                    </span>
                  </div>
                  <div className="w-full md:w-2/5 text-left pl-6">
                    <p className="text-lg md:text-xl text-gray-700 font-normal leading-relaxed">
                      {item.right}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
        <section
          id="kickstarter-announcement"
          className="w-full min-h-screen py-20 flex flex-col gap-10 bg-gradient-to-r from-[#0D0D0D] 44% via-[#171717] 50% to-[#0D0D0D] 56%"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full md:mb-20 w-screen">
            <Router price="85" />
            <Router price="150" />
          </div>
          <div className="flex flex-col md:flex-row items-start justify-center gap-10 w-full max-w-[95vw] lg:max-w-[80vw] mx-auto">
            <div className="w-full md:w-1/2 text-left text-gray-300">
              <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500 px-1">
                Kickstarter Launch — 29.9.2025
              </h2>
              <hr className="w-24 h-1 bg-gray-600 my-4 rounded-full" />
              <div className="space-y-4 text-gray-200">
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
                  <li>Lifetime priority support</li>
                  <li>Early shipping before public release</li>
                  <li>Exclusive backer updates & community access</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start gap-6 w-full md:w-1/2">
              <div className="w-full">
                <LottieAnimation animation="p-and-p.lottie" />
              </div>
              <div className="w-full p-4 rounded-lg shadow-lg border border-gray-400">
                <h3 className="text-xl mb-6 text-gray-200">
                  Subscribe for Early Access
                </h3>
                <SubscribeForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
