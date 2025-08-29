import Link from "next/link";
import {
  HandCoins,
  MapPinHouse,
  GlobeLock,
  Shield,
  Wrench,
  Check,
  X,
} from "lucide-react";

export default function Comparison() {
  return (
    <section className="section">
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: '80px'}}>
          <h2 className="heading-2" style={{marginBottom: '16px'}}>
            Why choose hardware over software
          </h2>
          <p className="text-large text-muted">
            Compare our solution with traditional VPN software.
          </p>
        </div>

        <div style={{display: 'grid', gap: '24px'}}>
          {[
            {
              left: "One-time payment for lifetime access",
              icon: HandCoins,
              right: "Monthly subscription fees forever",
              label: "Pricing",
            },
            {
              left: "Dedicated residential IP address",
              icon: MapPinHouse,
              right: "Shared datacenter IP addresses",
              label: "IP Quality",
            },
            {
              left: "Hardware protection for entire network",
              icon: Shield,
              right: "Software required on each device",
              label: "Coverage",
            },
            {
              left: "Bypasses all geo-restrictions",
              icon: GlobeLock,
              right: "Often blocked by streaming services",
              label: "Reliability",
            },
            {
              left: "Plug and play setup in 5 minutes",
              icon: Wrench,
              right: "Complex configuration required",
              label: "Setup",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="card"
              style={{
                padding: '24px',
                display: 'grid',
                gridTemplateColumns: '1fr auto 1fr',
                gap: '24px',
                alignItems: 'center'
              }}
            >
              <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: 'var(--success)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Check size={12} color="black" strokeWidth={3} />
                </div>
                <p className="text-small">{item.left}</p>
              </div>

              <div style={{textAlign: 'center'}}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'var(--gray-900)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 8px'
                }}>
                  <item.icon size={20} color="white" strokeWidth={1.5} />
                </div>
                <span className="text-small text-muted">
                  {item.label}
                </span>
              </div>

              <div style={{display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'flex-end'}}>
                <p className="text-small text-muted">{item.right}</p>
                <div style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: 'var(--error)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  opacity: 0.7
                }}>
                  <X size={12} color="white" strokeWidth={3} />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{textAlign: 'center', marginTop: '64px'}}>
          <Link href="/shop" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
