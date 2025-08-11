import LottieAnimation from "@/components/lottieAnimation";
export default function Home() {
  return (
    <>
      <main className="relative min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex flex-col justify-center items-center text-center text-white p-4">
          {/* Background Video and Overlay */}
          <video
            autoPlay
            muted
            loop
            className="absolute inset-0 w-full h-full object-cover -z-10"
          >
            <source src="https://video-previews.elements.envatousercontent.com/a236a9dc-6c03-49e7-a481-e6c9dd464a62/watermarked_preview/watermarked_preview.mp4" />
          </video>
          <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>

          {/* Hero Content */}
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
          className="w-full py-20 bg-gradient-to-r from-[#0D0D0D] 44% via-[#171717] 50% to-[#0D0D0D] 56%"
        >
          <div className="max-w-[95vw] lg:max-w-[65vw] mx-auto text-center">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500 px-1">
              Our Solution vs. Traditional VPNs
            </h2>

            <div className="flex flex-col md:flex-row justify-between gap-10">
              {/* Traditional VPNs Column */}
              <div className="w-full md:w-1/2 p-6 rounded-xl border border-gray-700 bg-gray-900 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-gray-400">
                  Traditional Data Center VPNs
                </h3>
                <ul className="text-left space-y-4">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <p className="text-gray-400">
                      **Subscription-based costs** with recurring monthly or
                      yearly fees.
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <p className="text-gray-400">
                      Shared, **flagged IP addresses** that are easily detected
                      and blocked.
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <p className="text-gray-400">
                      Requires **software installation** and configuration on
                      every device.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 p-6 rounded-xl border border-gray-700 bg-gray-900 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500">
                  Our VPN Solution
                </h3>
                <ul className="text-left space-y-4">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <p className="text-gray-200">
                      **One-time payment**, with no recurring subscription fees.
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <p className="text-gray-200">
                      **Dedicated residential IPs** that are undetectable and
                      reliable.
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <p className="text-gray-200">
                      **Hardware-based** protection for your entire home network
                      at once.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
