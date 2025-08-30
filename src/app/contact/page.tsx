'use client'

import { motion } from 'framer-motion'
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {

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
                Get
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                  {" "}Help
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-8">
                We're here to support your <strong className="text-green-400">VPN journey</strong> every step of the way.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>


      {/* About Section */}
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
                {" "}Us
              </span>
            </h2>
            
            <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8">
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                We're a <strong className="text-orange-400">European cybersecurity company</strong> founded in 2025, specializing in enterprise-grade privacy solutions. 
                Our mission is simple: make VPN protection accessible with a one-time payment instead of endless monthly subscriptions.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">50K+</div>
                  <div className="text-gray-400">Protected Networks</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400 mb-2">$1.2M+</div>
                  <div className="text-gray-400">Saved on Subscriptions</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                  <div className="text-gray-400">Support Available</div>
                </div>
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
              Ready to Get
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                {" "}Protected?
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands who chose our one-time payment VPN over monthly subscriptions.
            </p>

            <div className="flex justify-center mb-8">
              <Link href="/shop">
                <motion.button
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-12 py-5 rounded-xl font-bold text-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get VPN Router - $85
                </motion.button>
              </Link>
            </div>

            <div className="flex justify-center gap-8 text-sm text-gray-500">
              <span>✓ 24/7 support</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
