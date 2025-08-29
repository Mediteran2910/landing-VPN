"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import {
  Wifi,
  Settings,
  Plug,
  Router,
  EthernetPort,
  ShoppingBasket,
  CircleChevronRight,
} from "lucide-react";
type Props = {
  price: "85" | "150";
  alt: string;
  sale?: string;
  name: string;
  stock: boolean;
  qty: 1 | 2 | 4;
  isShop?: boolean;
  ethPorts: number;
};

export default function Routers({
  price,
  alt,
  sale,
  name,
  stock,
  qty,
  isShop,
  ethPorts,
}: Props) {
  const images = ["/1-router.webp", "/2-router.webp", "/3-router.webp"];
  const [current, setCurrent] = useState(0);

  const nextImage = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  return (
    <div className="product-card">
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px'}}>
        <div>
          <h3 className="heading-3" style={{marginBottom: '8px'}}>{name}</h3>
          <div className="text-small" style={{color: 'var(--success)'}}>
            ✓ In Stock
          </div>
        </div>
        <div style={{textAlign: 'right'}}>
          <div className="price">
            <span className="price-currency">€</span>{price}
          </div>
          {sale && (
            <div className="text-small text-muted" style={{textDecoration: 'line-through'}}>
              €{sale}
            </div>
          )}
        </div>
      </div>
      <div style={{position: 'relative', marginBottom: '24px'}}>
        <div style={{position: 'relative', width: '100%', height: '240px', border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden'}}>
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              width={400}
              height={240}
              alt={`${alt}-${index}`}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: index === current ? 1 : 0,
                transition: 'opacity 0.3s ease'
              }}
            />
          ))}
          
          <button
            onClick={prevImage}
            style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '32px',
              height: '32px',
              backgroundColor: 'rgba(0,0,0,0.6)',
              border: '1px solid var(--border)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              cursor: 'pointer'
            }}
          >
            ‹
          </button>
          <button
            onClick={nextImage}
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '32px',
              height: '32px',
              backgroundColor: 'rgba(0,0,0,0.6)',
              border: '1px solid var(--border)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              cursor: 'pointer'
            }}
          >
            ›
          </button>
          
          <div style={{position: 'absolute', bottom: '12px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '4px'}}>
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: index === current ? 'white' : 'rgba(255,255,255,0.4)',
                  border: 'none',
                  cursor: 'pointer'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <ul className="feature-list" style={{marginBottom: '24px'}}>
        <li><strong>Model:</strong> GL.Inet Opal</li>
        <li><strong>Quantity:</strong> {qty} {qty > 1 ? "routers" : "router"}</li>
        <li><strong>WiFi:</strong> Dual-band 2.4GHz & 5GHz</li>
        <li><strong>Ports:</strong> {ethPorts} Gigabit Ethernet</li>
        <li><strong>Setup:</strong> Pre-configured & Plug & Play</li>
        <li><strong>Support:</strong> Lifetime warranty included</li>
      </ul>
      <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
        <a
          href="https://www.kickstarter.com/projects/your-project-id"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{width: '100%'}}
        >
          Order Now
        </a>
        
        <Link
          href={`/router-details/opal-${qty === 1 ? "single" : "pair"}`}
          className="btn btn-secondary"
          style={{width: '100%'}}
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
