"use client";
import { motion } from "framer-motion";
import { div, h3 } from "framer-motion/client";
import {
  Icon,
  BriefcaseBusiness,
  Network,
  SquareFunction,
  SquareDashedBottomCode,
  Shield,
  Palette,
} from "lucide-react";

const team = [
  {
    role: "Business Managers",
    icon: <BriefcaseBusiness color="#22c55e" size={45} />,
  },
  {
    role: "Linux Embedded Network Engineers",
    icon: <Network color="#a855f7" size={45} />,
  },
  {
    role: "Software Developers",
    icon: <SquareDashedBottomCode color="#3b82f6" size={45} />,
  },
];

export default function AboutUs() {
  return (
    <section
      className="py-20 bg-gradient-to-b from-gray-900/50 to-transparent"
      id="about-us"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8">
            About
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              {" "}
              Us
            </span>
          </h2>

          <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8">
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              We're a{" "}
              <strong className="text-orange-400">
                European open-source startup
              </strong>{" "}
              Founded in 2025, BuraVPN is an open-source project dedicated to
              giving people secure and easy access to their home IP from
              anywhere in the world. Our mission is simple: empower users to
              protect all their devices while maintaining full control over
              their network. With BuraVPN, you can safely connect through our
              secure BuraVPN router and enjoy privacy and convenience without
              endless subscription fees.
            </p>
            <h2 className="text-4xl font-bold m-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              BuraVPN Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {team.map((t) => (
                <div
                  key={t.role}
                  className="flex flex-col items-center justify-center border rounded-xl border-gray-800 p-4 bg-gray-900/30 hover:border-gray-500 hover:bg-gray-800/40 transition-colors duration-300 ease-in-out"
                >
                  {t.icon}
                  <h3 className="text-gray-400 mt-3">{t.role}</h3>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
