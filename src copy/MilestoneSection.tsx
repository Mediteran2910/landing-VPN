import LottieAnimation from "@/components/LottieAnimation";
import { Smartphone, Store } from "lucide-react";

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
      color: "bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500",
    },
    {
      id: 2,
      title: "Routers Market",
      subtitle: "Airbnb for VPN Routers",
      description: [
        "Rent your router to other users",
        "Earn passive income from your router",
        "Access routers worldwide",
      ],
      icon: Store,
      status: "Planned",
      color: "bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500",
    },
  ];

  return (
    <section className="relative z-20 text-black">
      <article className="w-full py-20 bg-gradient-to-r from-[#F5F5F5] 44% via-[#BEBEBE] 50% to-[#F5F5F5] 56%">
        <div className="max-w-[95vw] lg:max-w-[65vw] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 px-1">
              Product Roadmap
            </h2>
            <hr className="w-24 h-1 bg-gray-400 mx-auto mb-6 rounded-full" />
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
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
                          className={`flex items-center justify-center w-16 h-16 rounded-full ${item.color}`}
                        >
                          <item.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <span className="inline-block px-3 py-2 rounded-full text-sm font-medium text-gray-700 bg-gray-400/40">
                            {item.status}
                          </span>
                        </div>
                      </div>

                      <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 px-1">
                        {item.title}
                      </h2>
                      <h3 className="text-xl md:text-2xl text-gray-600 mb-4">
                        {item.subtitle}
                      </h3>
                      <hr className="w-24 h-1 bg-gray-400 my-4 rounded-full" />

                      <ul className="custom-list-style-dark space-y-2 text-gray-700 text-base md:text-lg">
                        {item.description.map((desc, idx) => (
                          <li key={idx}>{desc}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="w-full md:w-3/5 flex items-center justify-center h-full">
                      <div
                        className={`w-full max-w-[500px] aspect-square flex items-center justify-center ${item.color} rounded-2xl border border-gray-300`}
                      >
                        <LottieAnimation animation="email.lottie" speed={1} />
                      </div>
                    </div>
                  </div>
                </article>

                {index < roadmapItems.length - 1 && (
                  <div className="flex justify-center my-8">
                    <div className="w-px h-16 bg-gradient-to-b from-gray-400 to-gray-500"></div>
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
