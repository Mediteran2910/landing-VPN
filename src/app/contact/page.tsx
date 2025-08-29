import Link from "next/link";
import { Mail, Phone, Users, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const contacts = [
    {
      title: "Technical Support",
      description: "For any technical issues, reach out to our support team.",
      email: "support@skyrouter.com",
      icon: Mail,
      color: "var(--accent)"
    },
    {
      title: "Sales Inquiries", 
      description: "Contact our sales team for bulk orders and business deals.",
      email: "sales@skyrouter.com",
      icon: Phone,
      color: "var(--success)"
    },
    {
      title: "Collaborations",
      description: "Reach out to discuss partnerships or strategic collaborations.",
      email: "partners@skyrouter.com",
      icon: Users,
      color: "var(--warning)"
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
        <div style={{textAlign: 'center', marginBottom: '80px'}}>
          <div style={{
            color: 'var(--accent)',
            fontSize: '14px',
            fontWeight: '600',
            letterSpacing: '0.1em',
            marginBottom: '24px',
            textTransform: 'uppercase'
          }} className="animate-fade-in">
            GET IN TOUCH
          </div>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: '700',
            lineHeight: '1.1',
            marginBottom: '24px',
            color: 'white'
          }} className="animate-slide-left">
            Contact SkyRouter
          </h1>
          <p style={{
            fontSize: '20px',
            color: 'var(--muted)',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }} className="animate-slide-right">
            We are a startup established in 2025, headquartered in Zagreb, Croatia. 
            Our team consists of software developers, network engineers, embedded engineers, 
            designers, and more. We are passionate about building private networking solutions 
            that are simple, secure, and reliable.
          </p>
        </div>

        {/* Contact Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '32px',
          marginBottom: '80px'
        }}>
          {contacts.map((contact, idx) => (
            <div
              key={idx}
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
                background: `linear-gradient(135deg, ${contact.color}, ${contact.color}80)`,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                boxShadow: `0 10px 30px ${contact.color}40`
              }} className="animate-float">
                <contact.icon size={32} color="white" />
              </div>

              <h3 style={{
                fontSize: '24px',
                fontWeight: '700',
                color: 'white',
                marginBottom: '16px'
              }}>
                {contact.title}
              </h3>

              <p style={{
                color: 'var(--muted)',
                marginBottom: '24px',
                lineHeight: '1.6',
                fontSize: '16px'
              }}>
                {contact.description}
              </p>

              <Link
                href={`mailto:${contact.email}`}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}
              >
                {contact.email}
              </Link>
            </div>
          ))}
        </div>

        {/* Company Info */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px'
        }}>
          {/* Location */}
          <div style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--card-border)',
            borderRadius: '20px',
            padding: '40px',
            backdropFilter: 'blur(15px)',
            textAlign: 'center'
          }} className="card animate-fade-in">
            <div style={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, var(--accent), var(--accent-light))',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px'
            }}>
              <MapPin size={24} color="white" />
            </div>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '600',
              color: 'white',
              marginBottom: '12px'
            }}>
              Our Location
            </h3>
            <p style={{
              color: 'var(--muted)',
              lineHeight: '1.6'
            }}>
              Zagreb, Croatia<br />
              Central Europe
            </p>
          </div>

          {/* Business Hours */}
          <div style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--card-border)',
            borderRadius: '20px',
            padding: '40px',
            backdropFilter: 'blur(15px)',
            textAlign: 'center'
          }} className="card animate-fade-in">
            <div style={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, var(--success), #00E5CC)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px'
            }}>
              <Clock size={24} color="white" />
            </div>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '600',
              color: 'white',
              marginBottom: '12px'
            }}>
              Support Hours
            </h3>
            <p style={{
              color: 'var(--muted)',
              lineHeight: '1.6'
            }}>
              24/7 Technical Support<br />
              Enterprise Priority Response
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div style={{
          textAlign: 'center',
          marginTop: '80px',
          padding: '60px 40px',
          background: 'var(--card-bg)',
          borderRadius: '24px',
          border: '1px solid var(--card-border)',
          backdropFilter: 'blur(15px)'
        }} className="card animate-scale-in">
          <h2 style={{
            fontSize: '32px',
            fontWeight: '700',
            color: 'white',
            marginBottom: '16px'
          }}>
            Ready to Get Started?
          </h2>
          <p style={{
            color: 'var(--muted)',
            marginBottom: '32px',
            fontSize: '18px',
            maxWidth: '500px',
            margin: '0 auto 32px'
          }}>
            Join thousands of users who trust SkyRouter for their network security needs.
          </p>
          <Link
            href="/shop"
            className="btn btn-primary"
            style={{
              padding: '16px 32px',
              fontSize: '18px',
              fontWeight: '700'
            }}
          >
            View Products
          </Link>
        </div>
      </div>
    </div>
  );
}
