"use client";
import MobileNav from "./MobileNav";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-content">
        <Link href="/" className="nav-logo" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
          <div style={{
            width: '32px',
            height: '32px',
            background: 'var(--accent)',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{color: 'white', fontWeight: 'bold', fontSize: '18px'}}>🛡</span>
          </div>
          SkyRouter
        </Link>

        <div className="nav-links">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/shop" className="nav-link">
            Products
          </Link>
          <Link href="/how-it-works" className="nav-link">
            How it works
          </Link>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
          <Link href="/shop" className="btn btn-primary">
            PRICING
          </Link>
        </div>

        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
