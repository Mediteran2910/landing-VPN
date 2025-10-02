"use client";
import Link from "next/link";
import { motion } from "framer-motion";
export default function CallToAction() {
  return (
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
              {" "}
              Monthly Fees?
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join 50,000+ users who chose one-time payment over monthly
            subscriptions.
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
  );
}
