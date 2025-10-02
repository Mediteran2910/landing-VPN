"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Router,
  CheckCircle,
  Timer,
  Eye,
  Server,
  DollarSign,
} from "lucide-react";
import Link from "next/link";

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-red-950/10 via-[#0a0a0a] to-blue-950/10">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Secure Your Network
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                  {" "}
                  Today
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-8">
                Choose your VPN router.{" "}
                <strong className="text-green-400">$85 once</strong> vs $150+
                per year forever.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Single Router */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8 text-center hover:border-orange-500/50 transition-all"
            >
              <div className="mb-6">
                <Router className="h-20 w-20 text-orange-400 mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2">Single Router</h3>
                <p className="text-gray-400">
                  Requires a second router to work
                </p>
              </div>

              <div className="mb-8">
                <div className="text-5xl font-bold text-orange-400 mb-2">
                  $85
                </div>
                <div className="text-xl text-gray-500 line-through">$120</div>
                <div className="text-lg text-green-400 font-semibold">
                  Save $35
                </div>
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-3 mt-4">
                  <Timer className="h-4 w-4 text-orange-400 inline mr-2" />
                  <span className="text-sm text-orange-300">
                    Limited Time Pricing
                  </span>
                </div>
              </div>

              <div className="text-left mb-8">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Access your home IP from anywhere</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>
                      VPN Router with Military-grade AES-256 encryption
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>3 Ethernet ports for wired connections</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Ethernet cable included</span>
                  </li>
                </ul>
              </div>

              <motion.button
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-4 rounded-xl font-bold text-lg mb-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Order Single Router - $85
              </motion.button>
            </motion.div>

            {/* Pair Routers */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-900/40 border-2 border-orange-500/50 rounded-2xl p-8 text-center relative"
            >
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>

              <div className="mb-6">
                <div className="flex justify-center gap-3 mb-4">
                  <Router className="h-16 w-16 text-orange-400" />
                  <Router className="h-16 w-16 text-orange-400" />
                </div>
                <h3 className="text-3xl font-bold mb-2">Pair Routers</h3>
                <p className="text-gray-400">Complete setup – ready to use</p>
              </div>

              <div className="mb-8">
                <div className="text-5xl font-bold text-orange-400 mb-2">
                  $150
                </div>
                <div className="text-xl text-gray-500 line-through">$195</div>
                <div className="text-lg text-green-400 font-semibold">
                  Save $45
                </div>
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-3 mt-4">
                  <DollarSign className="h-4 w-4 text-green-400 inline mr-2" />
                  <span className="text-sm text-green-300">
                    Best Value - $75/router
                  </span>
                </div>
              </div>

              <div className="text-left mb-8">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Access your home IP from anywhere</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>
                      2x VPN Router with Military-grade AES-256 encryption
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>6 total ethernet ports</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>2x ethernet cable</span>
                  </li>
                </ul>
              </div>

              <motion.button
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-4 rounded-xl font-bold text-lg mb-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Order Pair Routers - $150
              </motion.button>
            </motion.div>
          </div>

          {/* Guarantee Section */}
          <motion.div
            className="text-center mt-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
              <Shield className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                100% Risk-Free Guarantee
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                Try your VPN router for 30 days. If you're not completely
                satisfied, we'll refund every penny. No questions asked.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-400">
                <div className="flex flex-col items-center gap-2">
                  <Eye className="h-5 w-5 text-blue-400" />
                  <span>Zero-Log Policy</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Shield className="h-5 w-5 text-green-400" />
                  <span>Military Encryption</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Server className="h-5 w-5 text-purple-400" />
                  <span>99.9% Uptime</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
