'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Shield, Lock, MapPin, DollarSign, 
  Router, CheckCircle, ArrowRight, AlertTriangle,
  Eye, Server, Wifi, Globe2, Star, Timer, Globe, Users
} from 'lucide-react'
import Routers from "@/components/Router";
import MilestoneSection from "@/components/MilestoneSection";
import Features from "../components/Features";
import Comparison from "@/components/Comparison";
import Kickastarter from "@/components/Kickstarter";
import Link from "next/link";

export default function Home() {
  const [hoveredThreat, setHoveredThreat] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section - VPN Focused */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-red-950/10 via-[#0a0a0a] to-blue-950/10">
        {/* Subtle Security Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 12c-9.941 0-18 8.059-18 18s8.059 18 18 18 18-8.059 18-18-8.059-18-18-18zm0 2c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            

            <div className="text-center max-w-4xl mx-auto">
              
              {/* Main Headlines */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  Stop Paying Monthly for
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">
                    {" "}Privacy
                  </span>
                </h1>

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-gray-300">
                  Protect Your <strong className="text-white">Entire Network</strong> with One Router
                </h2>

                <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed">
                  <strong className="text-green-400">$85 once.</strong> No monthly fees. No subscriptions. 
                  Military-grade security for every device in your home.
                </p>

              </motion.div>

              {/* Key Benefits - VPN Focused */}
              <motion.div 
                className="grid md:grid-cols-3 gap-6 mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {[
                  { 
                    icon: DollarSign, 
                    title: "Zero Monthly Fees", 
                    desc: "Pay once, protected forever. Save $1,200+ vs traditional VPNs",
                    color: "text-green-400"
                  },
                  { 
                    icon: Router, 
                    title: "Plug & Protect", 
                    desc: "No software installs. Secures ALL devices instantly",
                    color: "text-blue-400"
                  },
                  { 
                    icon: Eye, 
                    title: "True Privacy", 
                    desc: "Your ISP can't see what you do. Zero activity logs kept",
                    color: "text-purple-400"
                  }
                ].map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <div key={index} className="bg-gray-900/40 backdrop-blur border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all">
                      <Icon className={`h-8 w-8 ${benefit.color} mx-auto mb-4`} />
                      <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-gray-400 text-sm">{benefit.desc}</p>
                    </div>
                  )
                })}
              </motion.div>


            </div>
          </div>
        </div>
      </section>

      {/* Kickstarter Section */}
      <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Kickastarter />
          </motion.div>
        </div>
      </section>

      {/* Problem-Solution Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-red-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Problem Statement */}
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                Why Traditional VPNs Are 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">
                  {" "}Broken
                </span>
              </h2>
            </motion.div>

            {/* Threat Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                {
                  threat: "Monthly Fees",
                  cost: "$10-15/month",
                  desc: "Pay $150+ per year forever",
                  icon: DollarSign,
                  color: "text-red-400"
                },
                {
                  threat: "Complex Setup", 
                  cost: "Hours of config",
                  desc: "Each device needs manual setup",
                  icon: AlertTriangle,
                  color: "text-yellow-400"
                },
                {
                  threat: "Speed Loss",
                  cost: "50-80% slower",
                  desc: "Encryption slows your connection",
                  icon: Timer,
                  color: "text-orange-400"
                },
                {
                  threat: "Limited Devices",
                  cost: "5-10 device limit",
                  desc: "Extra fees for more protection",
                  icon: Wifi,
                  color: "text-red-400"
                }
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-gray-900/60 border border-red-500/20 rounded-xl p-6 hover:border-red-500/40 transition-all"
                    onMouseEnter={() => setHoveredThreat(item.threat)}
                    onMouseLeave={() => setHoveredThreat(null)}
                  >
                    <Icon className={`h-8 w-8 ${item.color} mb-4`} />
                    <h3 className="text-lg font-bold mb-2 text-red-200">{item.threat}</h3>
                    <div className="text-2xl font-bold text-red-400 mb-2">{item.cost}</div>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </motion.div>
                )
              })}
            </div>

            {/* Solution */}
            <motion.div 
              className="text-center bg-gradient-to-r from-green-950/30 to-blue-950/30 border border-green-500/20 rounded-2xl p-8"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Shield className="h-16 w-16 text-green-400 mx-auto mb-6" />
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Our Solution: <span className="text-green-400">Hardware-Level Protection</span>
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                One router protects everything. Zero monthly fees. Perfect security with full speed.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="text-left">
                  <h4 className="text-lg font-semibold mb-4 text-green-400">✓ What You Get:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Unlimited devices protected</li>
                    <li>• Full internet speed maintained</li>
                    <li>• Access your home IP globally</li>
                    <li>• Zero configuration needed</li>
                  </ul>
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold mb-4 text-red-400">✗ What You Don't Pay:</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li>• Monthly subscription fees</li>
                    <li>• Software licensing costs</li>
                    <li>• Per-device charges</li>
                    <li>• Speed throttling penalties</li>
                    <li>• Technical support fees</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      
      {/* Simple Product Section */}
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
                {" "}VPN Router
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose single or double protection. Both options save you thousands vs monthly VPNs.
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
                <p className="text-gray-400">Perfect for most homes</p>
              </div>
              
              <div className="mb-6">
                <div className="text-4xl font-bold text-orange-400 mb-2">$85</div>
                <div className="text-lg text-gray-500 line-through">$120</div>
                <div className="text-sm text-green-400">Save $35</div>
              </div>

              <ul className="text-left space-y-2 mb-8 text-gray-300">
                <li>• Unlimited device protection</li>
                <li>• 3 Ethernet ports</li>
                <li>• Access home IP globally</li>
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
                <p className="text-gray-400">Maximum coverage & backup</p>
              </div>
              
              <div className="mb-6">
                <div className="text-4xl font-bold text-orange-400 mb-2">$150</div>
                <div className="text-lg text-gray-500 line-through">$195</div>
                <div className="text-sm text-green-400">Save $45</div>
              </div>

              <ul className="text-left space-y-2 mb-8 text-gray-300">
                <li>• 2x Router protection</li>
                <li>• 6 Total ethernet ports</li>
                <li>• Complete home coverage</li>
                <li>• Backup protection</li>
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
          >
          </motion.div>
        </div>
      </section>

      {/* Milestone Section */}
      <MilestoneSection />

      {/* Urgency + Final CTA Section */}
      <section className="py-20 bg-gradient-to-b from-red-950/20 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >


          </motion.div>
        </div>
      </section>

    </div>
  );
}

//f7f7f7 --- white-grey - anime
//c7c7c7 --- little darker white - anime
//b7b7b7 --- grey - anime
//2c2c2c --- black - anime
