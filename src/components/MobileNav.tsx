"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Products" },
    { href: "/how-it-works", label: "How it works" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <button
        onClick={toggleMenu}
        style={{
          padding: '8px',
          background: 'none',
          border: 'none',
          color: 'var(--foreground)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {isMenuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'var(--background)',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          padding: '80px 24px 24px'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={toggleMenu}
                style={{
                  fontSize: '18px',
                  fontWeight: '500',
                  color: 'var(--foreground)',
                  textDecoration: 'none',
                  padding: '12px 0',
                  borderBottom: '1px solid var(--border)'
                }}
              >
                {link.label}
              </Link>
            ))}
            
            <div style={{marginTop: '24px'}}>
              <Link
                href="/dashboard"
                onClick={toggleMenu}
                className="btn btn-primary"
                style={{width: '100%', textAlign: 'center'}}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
