import Link from "next/link";
import { Check, Shield, Zap, Globe } from "lucide-react";

export default function ShopPage() {
  return (
    <>
      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        background: 'var(--background-gradient)',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px'
      }}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '80px'}}>
            <div style={{
              color: 'var(--accent)',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '0.1em',
              marginBottom: '24px',
              textTransform: 'uppercase'
            }} className="animate-fade-in">
              PROFESSIONAL HARDWARE
            </div>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: '700',
              lineHeight: '1.1',
              marginBottom: '24px',
              color: 'white'
            }} className="animate-slide-left">
              SkyRouter Store
            </h1>
            <p style={{
              fontSize: '20px',
              color: 'var(--muted)',
              maxWidth: '600px',
              margin: '0 auto'
            }} className="animate-slide-right">
              Choose your perfect VPN router solution. Lifetime access with no monthly fees.
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '40px',
            marginBottom: '80px'
          }}>
            {[
              {
                name: "Single Router",
                price: "85",
                originalPrice: "120",
                description: "Perfect for small homes and apartments",
                features: [
                  "GL.Inet Opal Router",
                  "Dual-band WiFi (2.4GHz & 5GHz)",
                  "3 Gigabit Ethernet ports",
                  "Pre-configured & Plug & Play",
                  "Lifetime warranty included",
                  "24/7 Technical support"
                ],
                highlight: false
              },
              {
                name: "Pair Routers",
                price: "150", 
                originalPrice: "195",
                description: "Best for larger homes and offices",
                features: [
                  "2x GL.Inet Opal Routers",
                  "Extended coverage area",
                  "Mesh network capability",
                  "6 Total Gigabit Ethernet ports", 
                  "Advanced configuration options",
                  "Priority customer support"
                ],
                highlight: true
              }
            ].map((router, index) => (
              <div key={index} style={{
                background: 'var(--card-bg)',
                border: router.highlight ? '2px solid var(--accent)' : '1px solid var(--card-border)',
                borderRadius: '24px',
                padding: '48px',
                backdropFilter: 'blur(15px)',
                position: 'relative',
                boxShadow: router.highlight ? '0 25px 50px rgba(79, 124, 255, 0.25)' : '0 10px 30px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s ease'
              }} className={`card animate-scale-in ${router.highlight ? 'animate-glow' : ''}`}>
                {router.highlight && (
                  <div style={{
                    position: 'absolute',
                    top: '-16px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, var(--accent), var(--accent-light))',
                    color: 'white',
                    padding: '12px 32px',
                    borderRadius: '24px',
                    fontSize: '14px',
                    fontWeight: '700',
                    boxShadow: '0 8px 20px rgba(79, 124, 255, 0.4)'
                  }} className="animate-pulse">
                    MOST POPULAR
                  </div>
                )}
                
                <div style={{textAlign: 'center', marginBottom: '40px'}}>
                  <h2 style={{
                    fontSize: '28px',
                    fontWeight: '700',
                    color: 'white',
                    marginBottom: '12px'
                  }}>
                    {router.name}
                  </h2>
                  <p style={{color: 'var(--muted)', marginBottom: '32px', fontSize: '16px'}}>
                    {router.description}
                  </p>
                  
                  <div style={{marginBottom: '20px'}}>
                    <span style={{
                      fontSize: '56px',
                      fontWeight: '800',
                      color: 'white',
                      background: 'linear-gradient(135deg, white, var(--accent-light))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      €{router.price}
                    </span>
                    <span style={{
                      fontSize: '20px',
                      color: 'var(--muted)',
                      textDecoration: 'line-through',
                      marginLeft: '16px'
                    }}>
                      €{router.originalPrice}
                    </span>
                  </div>
                  
                  <div style={{
                    color: 'var(--success)',
                    fontSize: '16px',
                    fontWeight: '600',
                    background: 'rgba(0, 212, 170, 0.1)',
                    padding: '8px 16px',
                    borderRadius: '12px',
                    display: 'inline-block'
                  }}>
                    Save €{parseInt(router.originalPrice) - parseInt(router.price)} ({Math.round(((parseInt(router.originalPrice) - parseInt(router.price)) / parseInt(router.originalPrice)) * 100)}% off)
                  </div>
                </div>
                
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  marginBottom: '40px'
                }}>
                  {router.features.map((feature, fIndex) => (
                    <li key={fIndex} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      padding: '12px 0',
                      color: 'var(--muted)',
                      fontSize: '16px'
                    }}>
                      <div style={{
                        width: '24px',
                        height: '24px',
                        backgroundColor: 'var(--success)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <Check size={14} color="black" strokeWidth={3} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
                  <a
                    href="https://www.kickstarter.com/projects/your-project-id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{width: '100%', textAlign: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: '700'}}
                  >
                    Order Now - €{router.price}
                  </a>
                  
                  <Link
                    href={`/router-details/opal-${router.name.toLowerCase().includes('pair') ? 'pair' : 'single'}`}
                    className="btn btn-secondary"
                    style={{width: '100%', textAlign: 'center', justifyContent: 'center'}}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Trust Indicators */}
          <div style={{
            textAlign: 'center',
            padding: '40px',
            background: 'var(--card-bg)',
            borderRadius: '20px',
            border: '1px solid var(--card-border)',
            backdropFilter: 'blur(10px)'
          }} className="card animate-fade-in">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '32px',
              alignItems: 'center'
            }}>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px'}}>
                <Shield size={24} color="var(--success)" />
                <span style={{color: 'white', fontWeight: '600'}}>Lifetime Warranty</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px'}}>
                <Zap size={24} color="var(--accent)" />
                <span style={{color: 'white', fontWeight: '600'}}>Fast Shipping</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px'}}>
                <Globe size={24} color="var(--warning)" />
                <span style={{color: 'white', fontWeight: '600'}}>Global Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
