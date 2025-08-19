import Image from "next/image";
import MobileNav from "./MobileNav";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full relative z-20 border-b border-gray-600 bg-gradient-to-r from-[#0D0D0D] via-[#171717] to-[#0D0D0D]">
      <nav className="w-[95%] lg:w-[70%] mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/your-logo.svg"
            alt="Company Logo"
            width={100}
            height={40}
          />
        </div>

        <div className="hidden lg:flex items-center space-x-8">
          <Link
            href="/"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Shop
          </Link>
          <Link
            href="/docs"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Docs
          </Link>
          <Link
            href="/howitworks"
            className="text-white hover:text-gray-300 transition-colors"
          >
            How it works
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Contact
          </Link>

          {/* Dashboard button with cool hover */}
          <Link
            href="/dashboard"
            className="relative text-white border border-white/40 rounded-lg px-5 py-2 transition-all duration-300
            hover:border-gray-400 hover:text-gray-100 hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]
            before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-gray-500/20 before:to-gray-700/20 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
          >
            Dashboard
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
