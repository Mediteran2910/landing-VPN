import { Smartphone, Store } from "lucide-react";

export default function MilestoneSection() {
  const roadmapItems = [
    {
      id: 1,
      title: "Mobile App",
      subtitle: "Remote Control & Monitoring",
      description: [
        "Software on your device",
        "No need for 2 routers",
        "Real-time connection monitoring and statistics",
      ],
      icon: Smartphone,
      status: "In Development",
    },
    {
      id: 2,
      title: "Routers Market",
      subtitle: "Airbnb for VPN Routers",
      description: [
        "Rent your router to other users",
        "Earn passive income from your router",
        "Access routers worldwide",
      ],
      icon: Store,
      status: "Planned",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: '80px'}}>
          <h2 className="heading-2" style={{marginBottom: '16px'}}>
            Product Roadmap
          </h2>
          <p className="text-large text-muted">
            Our journey doesn't end with the router. Discover what's coming next in our mission to revolutionize online privacy.
          </p>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', gap: '48px'}}>
          {roadmapItems.map((item, index) => (
            <div key={item.id} className="card" style={{padding: '32px'}}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '32px',
                alignItems: 'center'
              }}>
                <div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px'}}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      backgroundColor: 'var(--gray-900)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <item.icon size={24} color="white" />
                    </div>
                    <div style={{
                      padding: '4px 12px',
                      backgroundColor: 'var(--gray-100)',
                      color: 'var(--gray-900)',
                      borderRadius: '16px',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}>
                      {item.status}
                    </div>
                  </div>

                  <h3 className="heading-3" style={{marginBottom: '8px'}}>
                    {item.title}
                  </h3>
                  <p className="text-muted" style={{marginBottom: '16px'}}>
                    {item.subtitle}
                  </p>

                  <ul className="feature-list">
                    {item.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                </div>

                <div style={{
                  aspectRatio: '1',
                  backgroundColor: 'var(--gray-50)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--border)'
                }}>
                  <item.icon size={64} color="var(--muted)" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
