import Link from "next/link";
import {
  Phone,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Mail,
  Shield,
  Eye,
  CheckCircle,
  Server,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#0D0D0D] via-[#171717] to-[#0D0D0D] text-gray-300 py-16 px-8 md:px-16 border-t border-gray-600">
      <div className="max-w-6xl mx-auto">
        
        {/* Brand Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
            VPN-LOGO
          </h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Secure your entire network with one-time purchase. No monthly fees, unlimited protection.
          </p>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Know Us */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-6 text-white">Know Us</h4>
            <div className="space-y-3">
              <Link href="/about" className="block text-gray-400 hover:text-orange-400 transition-colors text-base">
                About Us
              </Link>
              <Link href="/vpn-name" className="block text-gray-400 hover:text-orange-400 transition-colors text-base">
                VPN-Name
              </Link>
              <Link href="/shop" className="block text-gray-400 hover:text-orange-400 transition-colors text-base">
                Shop
              </Link>
              <Link href="/affiliate" className="block text-gray-400 hover:text-orange-400 transition-colors text-base">
                Affiliate
              </Link>
            </div>
          </div>

          {/* Policies */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-6 text-white">Policies</h4>
            <div className="space-y-3">
              <Link href="/shipping-policy" className="block text-gray-400 hover:text-orange-400 transition-colors text-base">
                Shipping Policy
              </Link>
              <Link href="/payment-methods" className="block text-gray-400 hover:text-orange-400 transition-colors text-base">
                Payment Methods
              </Link>
              <Link href="/return-refund" className="block text-gray-400 hover:text-orange-400 transition-colors text-base">
                Return and Refund
              </Link>
              <Link href="/privacy-policy" className="block text-gray-400 hover:text-orange-400 transition-colors text-base">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="block text-gray-400 hover:text-orange-400 transition-colors text-base">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-6 text-white">Follow Us</h4>
            <div className="flex gap-4 justify-center">
              <Link href="https://linkedin.com" className="text-gray-400 hover:text-orange-400 transition-colors p-2 rounded-lg hover:bg-gray-800/50">
                <Linkedin size={24} />
              </Link>
              <Link href="https://x.com" className="text-gray-400 hover:text-orange-400 transition-colors p-2 rounded-lg hover:bg-gray-800/50">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
              <Link href="https://github.com" className="text-gray-400 hover:text-orange-400 transition-colors p-2 rounded-lg hover:bg-gray-800/50">
                <Facebook size={24} />
              </Link>
              <Link href="https://instagram.com" className="text-gray-400 hover:text-orange-400 transition-colors p-2 rounded-lg hover:bg-gray-800/50">
                <Instagram size={24} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700/50 pt-8 text-center text-gray-500 text-base">
          © 2025 Our Startup. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
