import Link from "next/link";
import {
  Shield,
  Zap,
  Globe,
  Check,
  X,
  Wifi,
  Router as RouterIcon,
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section - SkyFort Style */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          background: "var(--background-gradient)",
          overflow: "hidden",
        }}
      >
        <div
          className="container hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
            minHeight: "80vh",
          }}
        >
          {/* Left Content */}
          <div>
            <div
              style={{
                color: "var(--accent)",
                fontSize: "14px",
                fontWeight: "600",
                letterSpacing: "0.1em",
                marginBottom: "24px",
                textTransform: "uppercase",
              }}
            >
              JOIN THE REVOLUTION
            </div>

            <h1
              style={{
                fontSize: "clamp(3rem, 6vw, 4.5rem)",
                fontWeight: "700",
                lineHeight: "1.1",
                marginBottom: "24px",
                color: "white",
              }}
            >
              SkyRouter
            </h1>

            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: "400",
                lineHeight: "1.3",
                marginBottom: "32px",
                color: "white",
              }}
            >
              The first cloud-firewall, built for WFH.
            </h2>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.6",
                marginBottom: "40px",
                color: "var(--muted)",
                maxWidth: "500px",
              }}
            >
              SkyRouter is simple and easy to use, no IT department required.
              Your team is automatically secured by Fortress.ai, our intelligent
              security system.
            </p>

            <div
              style={{
                display: "flex",
                gap: "16px",
                alignItems: "center",
              }}
            >
              <Link href="/shop" className="btn btn-primary">
                SIGN UP NOW
              </Link>
              <button
                style={{
                  background: "transparent",
                  border: "2px solid var(--muted)",
                  borderRadius: "8px",
                  padding: "12px 24px",
                  color: "white",
                  fontSize: "16px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                READ MORE
              </button>
            </div>
          </div>

          {/* Right 3D Visualization */}
          <div
            className="hero-3d"
            style={{
              position: "relative",
              height: "600px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "400px",
                height: "400px",
                transform: "perspective(1000px) rotateX(20deg) rotateY(-20deg)",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Main Platform */}
              <div
                style={{
                  position: "absolute",
                  width: "300px",
                  height: "200px",
                  background: "linear-gradient(145deg, #2C4B7C, #1A2B47)",
                  borderRadius: "12px",
                  border: "1px solid var(--accent)",
                  left: "50px",
                  top: "150px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                }}
              >
                {/* Router Device */}
                <div
                  style={{
                    position: "absolute",
                    width: "80px",
                    height: "60px",
                    background: "linear-gradient(145deg, #1E3A8A, #1E40AF)",
                    borderRadius: "8px",
                    left: "20px",
                    top: "-30px",
                    border: "1px solid var(--accent-light)",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                  }}
                >
                  {/* LED Indicators */}
                  <div style={{ display: "flex", gap: "4px", padding: "8px" }}>
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        background: "var(--success)",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        background: "var(--accent)",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        background: "var(--warning)",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Cloud Element */}
              <div
                style={{
                  position: "absolute",
                  width: "120px",
                  height: "80px",
                  background:
                    "linear-gradient(145deg, var(--accent), var(--accent-light))",
                  borderRadius: "40px",
                  left: "140px",
                  top: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 15px 30px rgba(79, 124, 255, 0.3)",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "12px",
                }}
              >
                SkyRouter
              </div>

              {/* Globe */}
              <div
                style={{
                  position: "absolute",
                  width: "60px",
                  height: "60px",
                  background:
                    "linear-gradient(145deg, var(--blue-500), var(--blue-600))",
                  borderRadius: "50%",
                  right: "50px",
                  bottom: "80px",
                  boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "24px",
                }}
              >
                🌍
              </div>

              {/* Connection Lines */}
              <svg
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  left: 0,
                  top: 0,
                  pointerEvents: "none",
                }}
              >
                <defs>
                  <linearGradient
                    id="connectionGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      stopColor="var(--accent)"
                      stopOpacity="0.8"
                    />
                    <stop
                      offset="100%"
                      stopColor="var(--accent-light)"
                      stopOpacity="0.3"
                    />
                  </linearGradient>
                </defs>
                <path
                  d="M 100 200 Q 200 100 250 150"
                  stroke="url(#connectionGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="0;10"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section
        style={{
          padding: "80px 0",
          background: "rgba(11, 20, 38, 0.5)",
          borderTop: "1px solid var(--card-border)",
        }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "600",
                color: "white",
                marginBottom: "16px",
              }}
            >
              Trusted by 350+ happy customers
            </h2>
          </div>

          <div
            className="trusted-logos"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
              gap: "40px",
              alignItems: "center",
              opacity: "0.6",
            }}
          >
            {[
              "CGV",
              "Hmall",
              "LOTTE",
              "NAVER",
              "Coupang",
              "SK Telecom",
              "MBC",
              "KBS",
            ].map((company, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "60px",
                  color: "var(--muted)",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SkyRouter Section */}
      <section
        style={{
          padding: "120px 0",
          background: "var(--background-gradient)",
        }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <div
              style={{
                color: "var(--accent)",
                fontSize: "14px",
                fontWeight: "600",
                letterSpacing: "0.1em",
                marginBottom: "16px",
                textTransform: "uppercase",
              }}
            >
              UNIVERSAL SOLUTION
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: "600",
                color: "white",
                marginBottom: "24px",
              }}
            >
              Why SkyRouter?
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "var(--muted)",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              SkyRouter is the first and only easy to use cloud firewall for
              remote teams.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "40px",
            }}
          >
            {[
              {
                icon: "🛡️",
                title: "Reliable protection",
                description:
                  "We manage your network traffic keeping your experience smoothly.",
              },
              {
                icon: "⚡",
                title: "Easy to set up",
                description:
                  "Your team's data is secured and encrypted in transit.",
              },
              {
                icon: "🦠",
                title: "Virus protection",
                description:
                  "All web traffic is intelligently screened for malware and spyware.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                  borderRadius: "16px",
                  padding: "40px 32px",
                  textAlign: "center",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    background:
                      "linear-gradient(145deg, var(--accent), var(--accent-light))",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 24px",
                    fontSize: "24px",
                  }}
                >
                  {feature.icon}
                </div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "white",
                    marginBottom: "16px",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    color: "var(--muted)",
                    lineHeight: "1.6",
                  }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section
        style={{
          padding: "120px 0",
          background: "rgba(10, 13, 31, 0.8)",
          borderTop: "1px solid var(--card-border)",
        }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: "600",
                color: "white",
                marginBottom: "24px",
              }}
            >
              Why choose hardware over software
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "var(--muted)",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Compare our solution with traditional VPN software.
            </p>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            {[
              {
                left: "One-time payment for lifetime access",
                icon: Shield,
                right: "Monthly subscription fees forever",
                label: "Pricing",
              },
              {
                left: "Dedicated residential IP address",
                icon: Globe,
                right: "Shared datacenter IP addresses",
                label: "IP Quality",
              },
              {
                left: "Hardware protection for entire network",
                icon: RouterIcon,
                right: "Software required on each device",
                label: "Coverage",
              },
              {
                left: "Bypasses all geo-restrictions",
                icon: Zap,
                right: "Often blocked by streaming services",
                label: "Reliability",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="comparison-card"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                  borderRadius: "16px",
                  padding: "32px",
                  backdropFilter: "blur(10px)",
                  display: "grid",
                  gridTemplateColumns: "1fr auto 1fr",
                  gap: "32px",
                  alignItems: "center",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "16px" }}
                >
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      backgroundColor: "var(--success)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Check size={14} color="black" strokeWidth={3} />
                  </div>
                  <p style={{ color: "white", fontSize: "16px" }}>
                    {item.left}
                  </p>
                </div>

                <div
                  className="comparison-center"
                  style={{ textAlign: "center" }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      background:
                        "linear-gradient(145deg, var(--accent), var(--accent-light))",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 12px",
                    }}
                  >
                    <item.icon size={24} color="white" strokeWidth={1.5} />
                  </div>
                  <span style={{ fontSize: "14px", color: "var(--muted)" }}>
                    {item.label}
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    justifyContent: "flex-end",
                  }}
                >
                  <p style={{ color: "var(--muted)", fontSize: "16px" }}>
                    {item.right}
                  </p>
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      backgroundColor: "var(--error)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      opacity: 0.8,
                    }}
                  >
                    <X size={14} color="white" strokeWidth={3} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Router Products Section */}
      <section
        style={{
          padding: "120px 0",
          background: "var(--background-gradient)",
        }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: "600",
                color: "white",
                marginBottom: "24px",
              }}
            >
              Choose your plan
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "var(--muted)",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Professional hardware with lifetime access. No monthly fees.
            </p>
          </div>

          <div
            className="router-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "32px",
            }}
          >
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
                ],
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
                ],
                popular: true,
              },
            ].map((router, index) => (
              <div
                key={index}
                style={{
                  background: "var(--card-bg)",
                  border: router.popular
                    ? "2px solid var(--accent)"
                    : "1px solid var(--card-border)",
                  borderRadius: "20px",
                  padding: "40px",
                  backdropFilter: "blur(10px)",
                  position: "relative",
                  boxShadow: router.popular
                    ? "0 20px 40px rgba(79, 124, 255, 0.2)"
                    : "none",
                }}
              >
                {router.popular && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-12px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "var(--accent)",
                      color: "white",
                      padding: "8px 24px",
                      borderRadius: "20px",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    MOST POPULAR
                  </div>
                )}

                <div style={{ textAlign: "center", marginBottom: "32px" }}>
                  <h3
                    style={{
                      fontSize: "24px",
                      fontWeight: "700",
                      color: "white",
                      marginBottom: "8px",
                    }}
                  >
                    {router.name}
                  </h3>
                  <p style={{ color: "var(--muted)", marginBottom: "24px" }}>
                    {router.description}
                  </p>

                  <div style={{ marginBottom: "16px" }}>
                    <span
                      style={{
                        fontSize: "48px",
                        fontWeight: "700",
                        color: "white",
                      }}
                    >
                      €{router.price}
                    </span>
                    <span
                      style={{
                        fontSize: "18px",
                        color: "var(--muted)",
                        textDecoration: "line-through",
                        marginLeft: "12px",
                      }}
                    >
                      €{router.originalPrice}
                    </span>
                  </div>

                  <div
                    style={{
                      color: "var(--success)",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    Save €
                    {parseInt(router.originalPrice) - parseInt(router.price)} (
                    {Math.round(
                      ((parseInt(router.originalPrice) -
                        parseInt(router.price)) /
                        parseInt(router.originalPrice)) *
                        100
                    )}
                    % off)
                  </div>
                </div>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    marginBottom: "32px",
                  }}
                >
                  {router.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        padding: "8px 0",
                        color: "var(--muted)",
                      }}
                    >
                      <Check size={16} color="var(--success)" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/shop"
                  className="btn btn-primary"
                  style={{
                    width: "100%",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  Order Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kickstarter Section */}
      <section
        style={{
          padding: "120px 0",
          background: "rgba(10, 13, 31, 0.8)",
          borderTop: "1px solid var(--card-border)",
        }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <div
              style={{
                color: "var(--accent)",
                fontSize: "14px",
                fontWeight: "600",
                letterSpacing: "0.1em",
                marginBottom: "16px",
                textTransform: "uppercase",
              }}
            >
              COMING SOON
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: "600",
                color: "white",
                marginBottom: "24px",
              }}
            >
              Kickstarter Launch
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "var(--muted)",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Be the first to get early bird pricing and exclusive access.
            </p>
          </div>

          <div
            className="kickstarter-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "40px",
            }}
          >
            <div
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--card-border)",
                borderRadius: "20px",
                padding: "40px",
                backdropFilter: "blur(10px)",
              }}
            >
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "white",
                  marginBottom: "24px",
                }}
              >
                Early Bird Benefits
              </h3>
              <ul
                style={{ listStyle: "none", padding: 0, marginBottom: "32px" }}
              >
                {[
                  "Up to 35% off retail pricing",
                  "Priority shipping before retail",
                  "Exclusive backer community access",
                  "Lifetime warranty included",
                  "24/7 enterprise support",
                ].map((benefit, index) => (
                  <li
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "8px 0",
                      color: "var(--muted)",
                    }}
                  >
                    <Check size={16} color="var(--success)" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--card-border)",
                borderRadius: "20px",
                padding: "40px",
                backdropFilter: "blur(10px)",
              }}
            >
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "white",
                  marginBottom: "24px",
                }}
              >
                Get Notified
              </h3>
              <p
                style={{
                  color: "var(--muted)",
                  marginBottom: "24px",
                  lineHeight: "1.6",
                }}
              >
                Join our mailing list for updates on launch dates, pricing, and
                exclusive early access offers.
              </p>

              <div style={{ marginBottom: "16px" }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    borderRadius: "8px",
                    border: "1px solid var(--card-border)",
                    background: "var(--glass-bg)",
                    color: "white",
                    fontSize: "16px",
                    marginBottom: "16px",
                  }}
                />
                <button
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Subscribe for Updates
                </button>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "14px",
                  color: "var(--muted)",
                }}
              >
                <Check size={16} color="var(--success)" />
                Your data is secure and private
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

//f7f7f7 --- white-grey - anime
//c7c7c7 --- little darker white - anime
//b7b7b7 --- grey - anime
//2c2c2c --- black - anime
