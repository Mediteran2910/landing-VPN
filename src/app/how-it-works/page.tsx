'use client'

import { motion } from 'framer-motion'
import {
  Router, Shield, Wifi, Plug, AlertTriangle, MapPin, Settings, Smartphone, CheckCircle
} from "lucide-react";
import Link from "next/link";

export default function HowItWorksPage() {
  const steps = [
    {
      title: "Unbox & Connect",
      description: "Connect your VPN router to your existing internet connection. Takes 30 seconds.",
      icon: Plug,
      color: "text-orange-400"
    },
    {
      title: "Instant Protection",
      description: "Every device in your home is automatically secured with military-grade encryption.",
      icon: Shield,
      color: "text-green-400"
    },
    {
      title: "Access Home IP Anywhere",
      description: "Travel anywhere and connect to your home IP address. Bypass geo-restrictions effortlessly.",
      icon: Wifi,
      color: "text-blue-400"
    }
  ];

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
                How It 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                  {" "}Works
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-8">
                Our system uses <strong className="text-orange-400">WireGuard</strong>, two routers, and an intuitive dashboard to make private networking incredibly simple. <strong className="text-green-400">No tech skills required.</strong>
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Core Components Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Core
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                {" "}Components
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Three essential components working together seamlessly
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8 text-center hover:border-orange-500/50 transition-all"
            >
              <Shield className="h-16 w-16 text-orange-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">WireGuard</h3>
              <p className="text-gray-300">Secure, fast, and reliable VPN protocol powering your private network.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8 text-center hover:border-orange-500/50 transition-all"
            >
              <div className="flex justify-center gap-2 mb-6">
                <Router className="h-8 w-8 text-green-400" />
                <Router className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">2 Routers</h3>
              <p className="text-gray-300">One exit router at home, one travel router with you — fully plug-and-play.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8 text-center hover:border-orange-500/50 transition-all"
            >
              <div className="h-16 w-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <div className="text-blue-400 text-2xl font-bold">⚡</div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Dashboard</h3>
              <p className="text-gray-300">Easily manage your private network and choose which router is your exit or travel device.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Setup Process Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Setup
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                {" "}Process
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Follow these simple steps to get your private network running
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                step: "1",
                title: "Place Your Routers",
                description: "Put the routers in the desired locations in your home or office.",
                icon: MapPin
              },
              {
                step: "2", 
                title: "Plug & Connect",
                description: "Plug the routers in and connect them to the internet.",
                icon: Plug
              },
              {
                step: "3",
                title: "Add Devices to Your Network",
                description: "Go to the dashboard and add your routers to your private network.",
                icon: Smartphone
              },
              {
                step: "4",
                title: "Choose Exit & Travel Routers",
                description: "Select which router will be your exit point and which one will be your travel router.",
                icon: Settings
              },
              {
                step: "5",
                title: "Connect & Go",
                description: "Connect your device to the travel router's Wi-Fi. That's it — done in a few clicks, no technical knowledge required.",
                icon: CheckCircle
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mb-2">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-center">
                    <span className="bg-gray-800 text-orange-400 px-3 py-1 rounded-full text-sm font-bold">
                      Step {item.step}
                    </span>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Traditional VPNs */}
              <div className="bg-red-950/20 border border-red-500/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-red-200">Traditional VPNs</h3>
                <ul className="space-y-3 text-red-300">
                  <li>❌ $10-15 per month forever</li>
                  <li>❌ Install software on every device</li>
                  <li>❌ 50-80% speed loss</li>
                  <li>❌ 5-10 device limits</li>
                  <li>❌ Complex configuration</li>
                  <li>❌ Constant connection drops</li>
                </ul>
              </div>

              {/* Our Solution */}
              <div className="bg-green-950/20 border border-green-500/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-green-200">Our VPN Router</h3>
                <ul className="space-y-3 text-green-300">
                  <li>✅ $85 once, protected forever</li>
                  <li>✅ Zero software installations</li>
                  <li>✅ Full speed maintained</li>
                  <li>✅ Unlimited devices protected</li>
                  <li>✅ Plug and play setup</li>
                  <li>✅ Rock-solid connection</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-red-950/20 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Stop
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                {" "}Monthly Fees?
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join 50,000+ users who chose one-time payment over monthly subscriptions.
            </p>

            <div className="flex justify-center mb-8">
              <Link href="/shop">
                <motion.button
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-12 py-5 rounded-xl font-bold text-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Your VPN Router - $85
                </motion.button>
              </Link>
            </div>

            <div className="flex justify-center gap-8 text-sm text-gray-500">
              <span>✓ No monthly fees</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
