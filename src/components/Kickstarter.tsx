import { Check } from "lucide-react";

export default function Kickastarter() {
  return (
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px'}}>
      <div className="card" style={{padding: '32px'}}>
        <div style={{marginBottom: '24px'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px'}}>
            <div style={{
              width: '8px',
              height: '8px',
              backgroundColor: 'var(--success)',
              borderRadius: '50%'
            }}></div>
            <span className="text-small text-muted">Coming Soon</span>
          </div>
          <h3 className="heading-3" style={{marginBottom: '8px'}}>
            Kickstarter Launch
          </h3>
          <p className="text-muted">September 29, 2025</p>
        </div>
        
        <div style={{marginBottom: '24px'}}>
          <h4 className="text-medium" style={{marginBottom: '16px'}}>Early Bird Pricing</h4>
          
          <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
            <div style={{
              padding: '16px',
              border: '1px solid var(--border)',
              borderRadius: '8px'
            }}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <span className="text-small">Single Router</span>
                <div style={{textAlign: 'right'}}>
                  <span className="price">€85</span>
                  <span className="text-small text-muted" style={{textDecoration: 'line-through', marginLeft: '8px'}}>€120</span>
                </div>
              </div>
              <div className="text-small" style={{color: 'var(--success)', marginTop: '4px'}}>Save €35 (29% off)</div>
            </div>
            
            <div style={{
              padding: '16px',
              border: '1px solid var(--border)',
              borderRadius: '8px'
            }}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <span className="text-small">Pair of Routers</span>
                <div style={{textAlign: 'right'}}>
                  <span className="price">€150</span>
                  <span className="text-small text-muted" style={{textDecoration: 'line-through', marginLeft: '8px'}}>€195</span>
                </div>
              </div>
              <div className="text-small" style={{color: 'var(--success)', marginTop: '4px'}}>Save €45 (23% off)</div>
            </div>
          </div>
        </div>
        
        <ul className="feature-list">
          <li>Lifetime warranty & support included</li>
          <li>Priority shipping before retail release</li>
          <li>Exclusive backer community access</li>
          <li>24/7 enterprise-grade support</li>
        </ul>
      </div>
      
      <div className="card" style={{padding: '32px'}}>
        <div style={{marginBottom: '24px'}}>
          <h3 className="heading-3" style={{marginBottom: '16px'}}>
            Get Notified
          </h3>
          <p className="text-muted">
            Join our mailing list for updates on launch dates, pricing, and exclusive early access offers.
          </p>
        </div>
        
        <div style={{marginBottom: '24px'}}>
          <div style={{display: 'flex', gap: '8px'}}>
            <input
              type="email"
              placeholder="Enter your email"
              className="input"
              style={{flex: 1}}
            />
            <button className="btn btn-primary">
              Subscribe
            </button>
          </div>
          
          <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px'}}>
            <Check size={16} color="var(--success)" />
            <span className="text-small text-muted">Your data is secure and private</span>
          </div>
        </div>
      </div>
    </div>
  );
}
