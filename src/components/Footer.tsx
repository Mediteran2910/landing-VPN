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
    <footer className="bg-gradient-to-t from-[#0D0D0D] via-[#171717] to-[#0D0D0D] text-gray-300 py-12 px-8 md:px-16 border-t border-gray-600">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-white">VPN-LOGO</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional cybersecurity solutions company, established 2025.
              European-based operations ensuring GDPR compliance and data sovereignty.
            </p>
          </div>

          {/* Know Us */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-gray-300">Know Us</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-400 hover:text-orange-400 transition-colors text-sm">
                About Us
              </Link>
              <Link href="/vpn-name" className="block text-gray-400 hover:text-orange-400 transition-colors text-sm">
                VPN-Name
              </Link>
              <Link href="/shop" className="block text-gray-400 hover:text-orange-400 transition-colors text-sm">
                Shop
              </Link>
              <Link href="/affiliate" className="block text-gray-400 hover:text-orange-400 transition-colors text-sm">
                Affiliate
              </Link>
            </div>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-gray-300">Policies</h4>
            <div className="space-y-2">
              <Link href="/shipping-policy" className="block text-gray-400 hover:text-orange-400 transition-colors text-sm">
                Shipping Policy
              </Link>
              <Link href="/payment-methods" className="block text-gray-400 hover:text-orange-400 transition-colors text-sm">
                Payment Methods
              </Link>
              <Link href="/return-refund" className="block text-gray-400 hover:text-orange-400 transition-colors text-sm">
                Return and Refund
              </Link>
              <Link href="/privacy-policy" className="block text-gray-400 hover:text-orange-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="block text-gray-400 hover:text-orange-400 transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-gray-300">Follow Us</h4>
            <div className="flex gap-3">
              <Link href="https://linkedin.com" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Linkedin size={18} />
              </Link>
              <Link href="https://x.com" className="text-gray-400 hover:text-orange-400 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
              <Link href="https://github.com" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Facebook size={18} />
              </Link>
              <Link href="https://instagram.com" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Instagram size={18} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-8 pt-6 text-center text-gray-500 text-sm">
          © 2025 Our Startup. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
