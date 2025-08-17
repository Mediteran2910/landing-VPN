import Image from "next/image";

const AnimatedFeatures = () => {
  const features = [
    {
      id: "one-time-payment",
      title: "One-Time Payment",
      description: [
        "No subscriptions, no monthly bills.",
        "A single purchase for a lifetime of access.",
        "Secure your internet without recurring costs.",
      ],
      image: "/card.png",
      alt: "paying with card icon",
      reverse: false,
    },
    {
      id: "router-protection",
      title: "Router Protection",
      description: [
        "Protects your entire network, not just one device.",
        "No software to install on individual devices.",
        "A simple and reliable hardware solution.",
      ],
      image: "/router.png",
      alt: "router icon",
      reverse: true,
    },
    {
      id: "plug-play-simplicity",
      title: "Plug & Play Simplicity",
      description: [
        "Instantly protected with zero configuration.",
        "Easy to set up in just a few minutes.",
        "Enjoy security without the technical hassle.",
      ],
      image: "/plug.png",
      alt: "plug icon",
      reverse: false,
    },
    {
      id: "works-everywhere",
      title: "Works Everywhere",
      description: [
        "Bypass censorship and geo-restrictions.",
        "Access content as if you were home.",
        "Ultimate tool for internet freedom abroad.",
      ],
      image: "/world.png",
      alt: "world icon",
      reverse: true,
    },
    {
      id: "residential-ip",
      title: "Residential IP",
      description: [
        "Access to your Home IP from everywhere.",
        "Avoid detection and online flagging.",
        "Enjoy unblocked access to online services.",
      ],
      image: "/home.png",
      alt: "home icon",
      reverse: false,
    },
  ];

  return (
    <section className="relative z-20 text-white bg-black">
      {features.map((feature, index) => (
        <article
          key={feature.id}
          className={`${
            index === 0 ? "scroll-mt-20" : ""
          } w-full py-14 md:py-20 flex flex-col ${
            feature.reverse ? "md:flex-row-reverse" : "md:flex-row"
          } md:items-stretch gap-6 md:gap-10 bg-gradient-to-r from-[#0D0D0D] via-[#171717] to-[#0D0D0D]`}
        >
          <div
            className={`max-w-[95vw] lg:max-w-[65vw] mx-auto flex flex-col ${
              feature.reverse ? "md:flex-row-reverse" : "md:flex-row"
            } gap-6 md:gap-10 items-stretch w-full`}
          >
            <div className="w-full md:w-[45%] flex flex-col justify-center">
              <h2
                id={feature.id}
                className="text-3xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 leading-tight"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500 block">
                  {feature.title}
                </span>
              </h2>
              <hr className="w-24 h-1 bg-gray-600 my-4 rounded-full" />
              <ul className="custom-list-style space-y-2 text-gray-300 text-base md:text-lg">
                {feature.description.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-[55%] flex items-center justify-center">
              <div className="flex items-center justify-center w-full h-full bg-[#171717] rounded-xl p-8 md:p-12">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={100}
                  height={100}
                  priority={index === 0}
                  className="object-contain"
                  style={{
                    height: "90%",
                    width: "auto",
                  }}
                />
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default AnimatedFeatures;
