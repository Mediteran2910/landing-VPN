"use client";
import { motion } from "framer-motion";
import { Router } from "lucide-react";
import Link from "next/link";
export default function () {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900/50 to-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              {" "}
              VPN Router
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose single or double protection. Both options save you thousands
            vs monthly VPNs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Single Router */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8 text-center hover:border-orange-500/50 transition-all"
          >
            <div className="mb-6">
              <Router className="h-16 w-16 text-orange-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Single Router</h3>
              <p className="text-gray-400">Requires a second router to work</p>
            </div>

            <div className="mb-6">
              <div className="text-4xl font-bold text-orange-400 mb-2">$85</div>
              <div className="text-lg text-gray-500 line-through">$120</div>
              <div className="text-sm text-green-400">Save $35</div>
            </div>

            <ul className="text-left space-y-2 mb-8 text-gray-300">
              <li>• Plug-and-play setup</li>
              <li>• Access home IP globally</li>
              <li>• 3 Ethernet ports</li>
            </ul>

            <div className="space-y-6">
              <Link href="/router-details/single" className="block text-center">
                <span className="text-gray-400 hover:text-orange-400 transition-colors text-sm underline underline-offset-4">
                  View Technical Details
                </span>
              </Link>
              <Link href="/shop">
                <motion.button
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-3 rounded-xl font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Order Now
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Pair Routers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-900/40 border border-orange-500/50 rounded-2xl p-8 text-center relative"
          >
            {/* Recommended Badge */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold">
              RECOMMENDED
            </div>

            <div className="mb-6">
              <div className="flex justify-center gap-2 mb-4">
                <Router className="h-12 w-12 text-orange-400" />
                <Router className="h-12 w-12 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Pair Routers</h3>
              <p className="text-gray-400">Complete setup – ready to use</p>
            </div>

            <div className="mb-6">
              <div className="text-4xl font-bold text-orange-400 mb-2">
                $150
              </div>
              <div className="text-lg text-gray-500 line-through">$195</div>
              <div className="text-sm text-green-400">Save $45</div>
            </div>

            <ul className="text-left space-y-2 mb-8 text-gray-300">
              <li>• Plug-and-play setup</li>
              <li>• Access home IP globally</li>
              <li>• 6 total ethernet ports</li>
            </ul>

            <div className="space-y-6">
              <Link href="/router-details/pair" className="block text-center">
                <span className="text-gray-400 hover:text-orange-400 transition-colors text-sm underline underline-offset-4">
                  View Technical Details
                </span>
              </Link>
              <Link href="/shop">
                <motion.button
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-3 rounded-xl font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Order Now
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Simple guarantee */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
    </section>
  );
}
