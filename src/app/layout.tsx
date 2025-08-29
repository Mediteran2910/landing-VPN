import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'),
  title: 'VPN Router Solution | Secure Your Network with One-Time Payment',
  description: 'Revolutionary VPN router with plug & play setup, residential IP access, and lifetime protection. No monthly fees - secure your entire network with our hardware solution.',
  keywords: ['VPN router', 'network security', 'plug and play VPN', 'residential IP', 'one-time payment VPN', 'home network protection'],
  authors: [{ name: 'VPN Router Solution' }],
  creator: 'VPN Router Solution',
  publisher: 'VPN Router Solution',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'VPN Router Solution | Secure Your Network',
    description: 'Revolutionary VPN router with plug & play setup and lifetime protection. No monthly fees.',
    siteName: 'VPN Router Solution',
    images: [
      {
        url: '/router.png',
        width: 1200,
        height: 630,
        alt: 'VPN Router Solution - Secure Network Hardware',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VPN Router Solution | Secure Your Network',
    description: 'Revolutionary VPN router with plug & play setup and lifetime protection.',
    images: ['/router.png'],
  },
};

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="relative min-h-screen">
        <StructuredData />
        <Header />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
