import Image from "next/image";
import MobileNav from "./mobileNav";

export default function Header() {
  return (
    <header className="w-full relative z-20 border-b border-white">
      <nav className="w-[95%] lg:w-[70%] mx-auto flex justify-between items-center py-4">
        <Image
          src="/your-logo.svg"
          alt="Company Logo"
          width={100}
          height={40}
        />
        <MobileNav />
        <div className="hidden lg:flex lg:space-x-8">
          <a href="#shop" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="#shop" className="text-white hover:text-gray-300">
            Shop
          </a>
          <a href="#docs" className="text-white hover:text-gray-300">
            Docs
          </a>
          <a href="#howitworks" className="text-white hover:text-gray-300">
            How it works
          </a>
          <a href="#pricing" className="text-white hover:text-gray-300">
            Pricing
          </a>
          <a href="#contact" className="text-white hover:text-gray-300">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
