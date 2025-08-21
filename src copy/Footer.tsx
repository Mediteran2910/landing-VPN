import Link from "next/link";
import {
  Phone,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#0D0D0D] via-[#171717] to-[#0D0D0D] text-gray-300 py-16 px-8 md:px-16 border-t border-gray-600">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-12 md:max-w-[65vw]">
        <div className="flex-1 min-w-[220px] text-left">
          <h3 className="text-xl font-bold mb-4 text-gray-100">Our Startup</h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            Established in 2025, headquartered in Zagreb, Croatia. We build
            secure, private networking solutions for individuals and businesses.
          </p>
        </div>

        <div className="flex-1 min-w-[160px] text-left">
          <h4 className="font-semibold mb-4 text-gray-200">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className="hover:text-white transition-colors duration-300"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/how-it-works"
                className="hover:text-white transition-colors duration-300"
              >
                How It Works
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/router-details/opal-pair"
                className="hover:text-white transition-colors duration-300"
              >
                Order Now
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex-1 min-w-[160px] text-left">
          <h4 className="font-semibold mb-4 text-gray-200">Support</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Link
                href="mailto:support@yourdomain.com"
                className="hover:text-white transition-colors duration-300"
              >
                support@examplerdomain.com
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Link
                href="tel:+38512345678"
                className="hover:text-white transition-colors duration-300"
              >
                +385 42 52352 4124
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex-1 min-w-[160px] text-left">
          <h4 className="font-semibold mb-4 text-gray-200">Follow Us</h4>
          <div className="flex gap-4">
            <Link
              href="https://linkedin.com"
              className="hover:text-white transition-colors duration-300"
            >
              <Linkedin size={24} />
            </Link>
            <Link
              href="https://github.com"
              className="hover:text-white transition-colors duration-300"
            >
              <Facebook size={24} />
            </Link>
            <Link
              href="https://twitter.com"
              className="hover:text-white transition-colors duration-300"
            >
              <Twitter size={24} />
            </Link>
            <Link
              href="https://twitter.com"
              className="hover:text-white transition-colors duration-300"
            >
              <Instagram size={24} />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700/50 mt-12 pt-6 text-center text-gray-500 text-sm">
        © 2025 Our Startup. All rights reserved.
      </div>
    </footer>
  );
}
