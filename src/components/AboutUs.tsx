"use client";
import { motion } from "framer-motion";
export default function AboutUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900/50 to-transparent">
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
                European cybersecurity company
              </strong>{" "}
              founded in 2025, specializing in enterprise-grade privacy
              solutions. Our mission is simple: make VPN protection accessible
              with a one-time payment instead of endless monthly subscriptions.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">
                  50K+
                </div>
                <div className="text-gray-400">Protected Networks</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">
                  $1.2M+
                </div>
                <div className="text-gray-400">Saved on Subscriptions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  24/7
                </div>
                <div className="text-gray-400">Support Available</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
