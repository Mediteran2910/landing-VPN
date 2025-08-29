import Link from "next/link";
import { Github, Twitter, Shield, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900/95 border-t border-slate-800 backdrop-blur-xl mt-16">
      <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-8 lg:px-12 xl:px-20 2xl:px-28 py-16 flex flex-col justify-between">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-14">
          {/* Brand Section */}
          <div className="flex-1 lg:flex-[2]">
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300 mb-6"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Shield size={20} className="text-white" />
              </div>
              SkyRouter
            </Link>
            <p className="text-slate-400 max-w-md text-base leading-relaxed mb-6">
              Professional VPN router solutions with one-time payment, instant
              setup, and access to your home IP from anywhere. Built for
              privacy, designed for simplicity.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
              <Shield size={16} />
              <span>Enterprise Grade Security</span>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-col sm:flex-row gap-12 lg:gap-16 flex-1">
            {/* Products */}
            <div className="flex-1 min-w-[160px]">
              <h4 className="text-white text-lg font-semibold mb-5">
                Products
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/shop"
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    Single Router
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop"
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    Pair Routers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/how-it-works"
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    How it Works
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="flex-1 min-w-[160px]">
              <h4 className="text-white text-lg font-semibold mb-5">Support</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    <Mail size={16} /> Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:+385123456789"
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    <Phone size={16} /> 24/7 Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs"
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="flex-1 min-w-[160px]">
              <h4 className="text-white text-lg font-semibold mb-5">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/privacy"
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://kickstarter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    Kickstarter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm text-center sm:text-left">
            © 2025 SkyRouter Technologies. All rights reserved.
          </p>

          {/* Links & Social */}
          <div className="flex sm:flex-nowrap flex-wrap justify-center sm:justify-end items-center gap-x-5 lg:gap-x-7 gap-y-2 text-sm max-w-full overflow-x-auto">
            <Link
              href="/contact"
              className="text-slate-400 hover:text-white transition-colors duration-300 whitespace-nowrap"
            >
              Contact
            </Link>
            <Link
              href="/docs"
              className="text-slate-400 hover:text-white transition-colors duration-300 whitespace-nowrap"
            >
              Docs
            </Link>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="text-slate-400 whitespace-nowrap">Follow us:</span>
            <div className="flex gap-3">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-700 text-slate-400 hover:text-white hover:border-slate-600 hover:bg-slate-800/50 transition-all duration-300"
              >
                <Github size={18} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-700 text-slate-400 hover:text-white hover:border-slate-600 hover:bg-slate-800/50 transition-all duration-300"
              >
                <Twitter size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
