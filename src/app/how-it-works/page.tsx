import {
  LayoutDashboard,
  Router,
  HousePlug,
  Cable,
  CircuitBoard,
  Wifi,
  Waypoints,
  MonitorSmartphone,
  Shield,
  Zap,
  Globe
} from "lucide-react";
import Link from "next/link";

export default function HowItWorksPage() {
  const features = [
    {
      title: "WireGuard Protocol",
      description:
        "Secure, fast, and reliable VPN protocol powering your private network.",
      icon: CircuitBoard,
      color: "var(--accent)"
    },
    {
      title: "Dual Router System",
      description:
        "One exit router at home, one travel router with you — fully plug-and-play.",
      icon: Router,
      color: "var(--success)"
    },
    {
      title: "Smart Dashboard",
      description:
        "Easily manage your private network and choose which router is your exit or travel device.",
      icon: LayoutDashboard,
      color: "var(--warning)"
    },
  ];

  const steps = [
    {
      title: "Place Your Routers",
      description: "Put the routers in the desired locations in your home or office.",
      icon: Router,
      color: "var(--accent)"
    },
    {
      title: "Plug & Connect",
      description: "Plug the routers in and connect them to the internet.",
      icon: HousePlug,
      color: "var(--success)"
    },
    {
      title: "Add Devices to Network",
      description: "Go to the dashboard and add your routers to your private network.",
      icon: MonitorSmartphone,
      color: "var(--warning)"
    },
    {
      title: "Configure Routing",
      description: "Select which router will be your exit point and which one will be your travel router.",
      icon: Waypoints,
      color: "var(--accent)"
    },
    {
      title: "Connect & Go",
      description: "Connect your device to the travel router's Wi-Fi. That's it — done in a few clicks!",
      icon: Wifi,
      color: "var(--success)"
    },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--background-gradient)',
      paddingTop: '80px'
    }}>
      <div className="container" style={{paddingTop: '80px', paddingBottom: '80px'}}>
        {/* Hero Section */}
        <div style={{textAlign: 'center', marginBottom: '120px'}}>
          <div style={{
            color: 'var(--accent)',
            fontSize: '14px',
            fontWeight: '600',
            letterSpacing: '0.1em',
            marginBottom: '24px',
            textTransform: 'uppercase'
          }} className="animate-fade-in">
            SIMPLE & SECURE
          </div>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: '700',
            lineHeight: '1.1',
            marginBottom: '32px',
            color: 'white'
          }} className="animate-slide-left">
            How SkyRouter Works
          </h1>
          <p style={{
            fontSize: '20px',
            color: 'var(--muted)',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }} className="animate-slide-right">
            Our system uses <span style={{color: 'var(--accent)', fontWeight: '600'}}>WireGuard</span>, 
            <span style={{color: 'var(--success)', fontWeight: '600'}}> two routers</span>, and an 
            intuitive <span style={{color: 'var(--warning)', fontWeight: '600'}}>dashboard</span> to 
            make private networking incredibly simple. No tech skills required.
          </p>
        </div>

        {/* Core Components */}
        <div style={{marginBottom: '120px'}}>
          <div style={{textAlign: 'center', marginBottom: '80px'}}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '600',
              color: 'white',
              marginBottom: '24px'
            }}>
              Core Components
            </h2>
            <p style={{
              fontSize: '18px',
              color: 'var(--muted)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Three essential components working together seamlessly
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px'
          }}>
            {features.map((feature, index) => (
              <div
                key={index}
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  borderRadius: '20px',
                  padding: '40px',
                  backdropFilter: 'blur(15px)',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}
                className="card animate-scale-in"
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: `linear-gradient(135deg, ${feature.color}, ${feature.color}80)`,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  boxShadow: `0 10px 30px ${feature.color}40`
                }} className="animate-float">
                  <feature.icon size={32} color="white" />
                </div>

                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  color: 'white',
                  marginBottom: '16px'
                }}>
                  {feature.title}
                </h3>

                <p style={{
                  color: 'var(--muted)',
                  lineHeight: '1.6',
                  fontSize: '16px'
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Setup Process */}
        <div style={{marginBottom: '120px'}}>
          <div style={{textAlign: 'center', marginBottom: '80px'}}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '600',
              color: 'white',
              marginBottom: '24px'
            }}>
              5-Step Setup Process
            </h2>
            <p style={{
              fontSize: '18px',
              color: 'var(--muted)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Follow these simple steps to get your private network running
            </p>
          </div>

          <div style={{display: 'flex', flexDirection: 'column', gap: '32px'}}>
            {steps.map((step, index) => (
              <div
                key={index}
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  borderRadius: '20px',
                  padding: '40px',
                  backdropFilter: 'blur(15px)',
                  position: 'relative'
                }}
                className="card animate-fade-in"
              >
                <div className="step-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto auto 1fr',
                  gap: '32px',
                  alignItems: 'center'
                }}>
                  {/* Step Number */}
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, var(--accent), var(--accent-light))',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    fontWeight: '700',
                    color: 'white',
                    boxShadow: '0 10px 30px rgba(79, 124, 255, 0.4)'
                  }}>
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: `linear-gradient(135deg, ${step.color}, ${step.color}80)`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 10px 30px ${step.color}40`
                  }} className="animate-float">
                    <step.icon size={24} color="white" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      color: 'white',
                      marginBottom: '12px'
                    }}>
                      {step.title}
                    </h3>
                    <p style={{
                      color: 'var(--muted)',
                      lineHeight: '1.6',
                      fontSize: '16px'
                    }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          textAlign: 'center',
          padding: '60px 40px',
          background: 'var(--card-bg)',
          borderRadius: '24px',
          border: '1px solid var(--card-border)',
          backdropFilter: 'blur(15px)'
        }} className="card animate-scale-in">
          <div style={{
            width: '80px',
            height: '80px',
            background: 'linear-gradient(135deg, var(--success), #00E5CC)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 32px',
            boxShadow: '0 15px 40px rgba(0, 212, 170, 0.4)'
          }} className="animate-float">
            <Shield size={32} color="white" />
          </div>
          
          <h2 style={{
            fontSize: '32px',
            fontWeight: '700',
            color: 'white',
            marginBottom: '16px'
          }}>
            Ready to Secure Your Network?
          </h2>
          <p style={{
            color: 'var(--muted)',
            marginBottom: '32px',
            fontSize: '18px',
            maxWidth: '500px',
            margin: '0 auto 32px'
          }}>
            Set up your private network in minutes with our plug-and-play solution. 
            No technical expertise required.
          </p>
          
          <div style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <Link
              href="/shop"
              className="btn btn-primary"
              style={{
                padding: '16px 32px',
                fontSize: '18px',
                fontWeight: '700'
              }}
            >
              Order Now
            </Link>
            <Link
              href="/contact"
              className="btn btn-secondary"
              style={{
                padding: '16px 32px',
                fontSize: '18px',
                fontWeight: '600'
              }}
            >
              Ask Questions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
