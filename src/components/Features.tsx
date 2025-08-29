import Image from "next/image";

export default function Features() {
  const features = [
    {
      id: "one-time-payment",
      title: "One-Time Payment",
      description: [
        "No subscriptions, no monthly bills.",
        "A single purchase for a lifetime of access.",
        "Secure your internet without recurring costs.",
      ],
      image: "/card.png",
      alt: "paying with card icon",
      reverse: false,
    },
    {
      id: "router",
      title: "Router Protection",
      description: [
        "Protects your entire network, not just one device.",
        "No software to install on individual devices.",
        "A simple and reliable hardware solution.",
      ],
      image: "/router.png",
      alt: "router icon",
      reverse: true,
    },
    {
      id: "plug-and-play",
      title: "Plug & Play Simplicity",
      description: [
        "Instantly protected with zero configuration.",
        "Easy to set up in just a few minutes.",
        "Enjoy security without the technical hassle.",
      ],
      image: "/plug.png",
      alt: "plug icon",
      reverse: false,
    },
    {
      id: "works-everywhere",
      title: "Works Everywhere",
      description: [
        "Bypass censorship and geo-restrictions.",
        "Access content as if you were home.",
        "Ultimate tool for internet freedom abroad.",
      ],
      image: "/world.png",
      alt: "world icon",
      reverse: true,
    },
    {
      id: "residential-ip",
      title: "Residential IP",
      description: [
        "Access to your Home IP from everywhere.",
        "Avoid detection and online flagging.",
        "Enjoy unblocked access to online services.",
      ],
      image: "/home.png",
      alt: "home icon",
      reverse: false,
    },
  ];

  return (
    <section id="features" className="section">
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: '80px'}}>
          <h2 className="heading-2" style={{marginBottom: '16px'}}>
            Why choose our solution
          </h2>
          <p className="text-large text-muted">
            Professional features designed for security and simplicity.
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={feature.id} className="feature-card animate-fade-in">
              <div className="feature-icon">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={20}
                  height={20}
                  className="w-5 h-5 invert"
                />
              </div>
              
              <h3 className="feature-title">
                {feature.title}
              </h3>
              
              <div className="feature-description">
                <ul className="feature-list">
                  {feature.description.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
