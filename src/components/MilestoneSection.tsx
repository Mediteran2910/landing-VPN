import LottieAnimation from "@/components/LottieAnimation";
import { Smartphone, Store, Zap, Globe } from "lucide-react";

export default function MilestoneSection() {
  const roadmapItems = [
    {
      id: 1,
      title: "Mobile App",
      subtitle: "Remote Control & Monitoring",
      description: [
        "Software on your device",
        "No need for 2 routers",
        "Real-time connection monitoring and statistics",
      ],
      icon: Smartphone,
      status: "In Development",
      timeline: "Q4 2025",
      color:
        "bg-[linear-gradient(120deg,#121212_35%,#262626_80%,#242424_100%)]",
    },
    {
      id: 2,
      title: "Router Marketplace",
      subtitle: "Airbnb for VPN Routers",
      description: [
        "Rent your router to other users",
        "Earn passive income from your router",
        "Access routers worldwide",
      ],
      icon: Store,
      status: "Planned",
      timeline: "Q2 2026",
      color:
        "bg-[linear-gradient(120deg,#121212_35%,#262626_80%,#242424_100%)]",
    },
  ];

  const getColorClasses = (color: string, variant = "default") => {
    const colors = {
      blue: {
        bg: "from-blue-900/30 to-blue-800/20",
        icon: "from-blue-500 to-blue-600",
        badge: "bg-blue-600 text-white",
        accent: "text-blue-400",
      },
      purple: {
        bg: "from-purple-900/30 to-purple-800/20",
        icon: "from-purple-500 to-purple-600",
        badge: "bg-purple-600 text-white",
        accent: "text-purple-400",
      },
      orange: {
        bg: "from-orange-900/30 to-orange-800/20",
        icon: "from-orange-500 to-orange-600",
        badge: "bg-orange-600 text-white",
        accent: "text-orange-400",
      },
      green: {
        bg: "from-green-900/30 to-green-800/20",
        icon: "from-green-500 to-green-600",
        badge: "bg-green-600 text-white",
        accent: "text-green-400",
      },
    };
    return colors[color]?.[variant] || colors.blue[variant];
  };

  return (
    <section className="relative z-20 text-white bg-black">
      <article className="w-full py-20 bg-gradient-to-r from-[#0D0D0D] via-[#171717] to-[#0D0D0D]">
        <div className="max-w-[95vw] lg:max-w-[65vw] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500 px-1">
              Product Roadmap
            </h2>
            <hr className="w-24 h-1 bg-gray-600 mx-auto mb-6 rounded-full" />
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Our journey doesn't end with the router. Discover what's coming
              next in our mission to revolutionize online privacy.
            </p>
          </div>
          <div className="space-y-8">
            {roadmapItems.map((item, index) => (
              <div key={item.id}>
                <article
                  className={`w-full flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } md:items-stretch gap-10`}
                >
                  <div className="max-w-[95vw] lg:max-w-[65vw] mx-auto flex flex-col md:flex-row gap-10 items-stretch w-full">
                    <div className="w-full md:w-2/5 text-left flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`flex items-center justify-center w-16 h-16 rounded-full bg-[linear-gradient(120deg,#121212_35%,#262626_80%,#242424_100%)]
                        
                          )}`}
                        >
                          <item.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-[linear-gradient(120deg,#121212_35%,#262626_80%,#242424_100%)]
                            )}`}
                          >
                            {item.status}
                          </span>
                          <p
                            className={`text-sm mt-1 font-semibold
                            )}`}
                          >
                            {item.timeline}
                          </p>
                        </div>
                      </div>

                      <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500 px-1">
                        {item.title}
                      </h2>
                      <h3 className="text-xl md:text-2xl text-gray-400 mb-4">
                        {item.subtitle}
                      </h3>
                      <hr className="w-24 h-1 bg-gray-600 my-4 rounded-full" />

                      <ul className="custom-list-style space-y-2 text-gray-300 text-base md:text-lg">
                        {item.description.map((desc, idx) => (
                          <li key={idx}>{desc}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="w-full md:w-3/5 flex items-center justify-center h-full">
                      <div
                        className={`w-full max-w-[500px] aspect-square flex items-center justify-center bg-gradient-to-br ${getColorClasses(
                          item.color,
                          "bg"
                        )} rounded-2xl border border-gray-700`}
                      >
                        <LottieAnimation
                          animation="email.lottie"
                          speed={item.color === "orange" ? 1.5 : 1}
                        />
                      </div>
                    </div>
                  </div>
                </article>
                {index < roadmapItems.length - 1 && (
                  <div className="flex justify-center my-8">
                    <div className="w-px h-16 bg-gradient-to-b from-gray-600 to-gray-800"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}
