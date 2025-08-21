import {
  LayoutDashboard,
  Router,
  HousePlug,
  Cable,
  CircuitBoard,
  Wifi,
  Waypoints,
  MonitorSmartphone,
} from "lucide-react";
import Link from "next/link";

export default function HowItWorksPage() {
  const features = [
    {
      title: "WireGuard",
      description:
        "Secure, fast, and reliable VPN protocol powering your private network.",
      icon: <CircuitBoard size={48} />,
    },
    {
      title: "2 Routers",
      description:
        "One exit router at home, one travel router with you — fully plug-and-play.",
      icon: <Router size={48} />,
    },
    {
      title: "Dashboard",
      description:
        "Easily manage your private network and choose which router is your exit or travel device.",
      icon: <LayoutDashboard size={48} />,
    },
  ];

  const steps = [
    {
      title: "Place Your Routers",
      description:
        "Put the routers in the desired locations in your home or office.",
      icon: <Router size={48} />,
    },
    {
      title: "Plug & Connect",
      description: "Plug the routers in and connect them to the internet.",
      icon: <HousePlug size={48} />,
    },
    {
      title: "Add Devices to Your Network",
      description:
        "Go to the dashboard and add your routers to your private network.",
      icon: <MonitorSmartphone size={48} />,
    },
    {
      title: "Choose Exit & Travel Routers",
      description:
        "Select which router will be your exit point and which one will be your travel router.",
      icon: <Waypoints size={48} />,
    },
    {
      title: "Connect & Go",
      description:
        "Connect your device to the travel router's Wi-Fi. That's it — done in a few clicks, no technical knowledge required.",
      icon: <Wifi size={48} />,
    },
  ];

  return (
    <main className="w-[95vw] md:w-[70vw] mx-auto py-12 md:py-20 flex flex-col gap-16 md:gap-24 text-white px-4 md:px-8 bg-transparent">
      <section className="text-center flex flex-col gap-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-200 to-gray-500 bg-clip-text text-transparent leading-tight">
            How It Works
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-700 mx-auto rounded-full"></div>
        </div>

        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Our system uses{" "}
          <span className="font-semibold text-white">WireGuard</span>,{" "}
          <span className="font-semibold text-white">two routers</span>, and an
          intuitive <span className="font-semibold text-white">dashboard</span>{" "}
          to make private networking incredibly simple. No tech skills required.
        </p>
      </section>
      <section className="flex flex-col gap-12">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-200">
            Core Components
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Three essential components working together seamlessly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-r from-[#0D0D0D] via-[#171717] to-[#0D0D0D] backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gray-700/50 hover:border-gray-400/50 transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/20 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700/5 via-gray-600/5 to-gray-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col items-center text-center">
                {feature.icon && (
                  <div className="mb-6 p-4 bg-gray-800/30 rounded-xl group-hover:bg-gray-700/50 transition-colors duration-300 group-hover:scale-110 transform">
                    {feature.icon}
                  </div>
                )}
                <h3 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-gray-200 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-12">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-200">
            Setup Process
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Follow these simple steps to get your private network running
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-1/2 top-full w-0.5 h-8 bg-gradient-to-b from-gray-400/50 to-transparent transform -translate-x-1/2 z-0"></div>
              )}

              <div className="relative bg-gradient-to-b from-black-900/20 to-gray-600/20 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gray-700/50 hover:border-gray-400/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-2xl hover:shadow-gray-500/20 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-700/5 via-gray-600/5 to-gray-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-gray-300/40 to-gray-700/20 rounded-full flex items-center justify-center font-bold text-xl text-gray-900 group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>

                  {step.icon && (
                    <div className="flex-shrink-0 p-4 bg-gray-800/50 rounded-xl group-hover:bg-gray-700/50 transition-colors duration-300 group-hover:scale-110 transform">
                      {step.icon}
                    </div>
                  )}

                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-gray-200 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed text-base md:text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="text-center backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-gray-700/50">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-gray-200 to-gray-500 bg-clip-text text-transparent">
          Ready to Get Started?
        </h2>
        <p className="text-gray-400 text-lg mb-6 max-w-2xl mx-auto">
          Set up your private network in minutes with our plug-and-play solution
        </p>
        <Link
          href="/router-details/opal-pair"
          className="px-8 py-4 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-400/20"
        >
          Order Now
        </Link>
      </section>
    </main>
  );
}
