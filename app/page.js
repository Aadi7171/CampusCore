import Link from 'next/link';
import { MapPin, Library, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="container animate-fade-in">
      <div style={{ textAlign: 'center', marginTop: '10vh', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>
          Lost on Campus? <br/>
          <span className="gradient-text">Find your way instantly.</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
          The ultimate AI-assisted CampusCore for MMMUT. Find departments, locate professors, and access study materials—all in one visually stunning place. Created for freshers, by people who were once lost too.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/navigator" className="btn-primary">
            Ask AI Assistant <ArrowRight size={18} />
          </Link>
          <Link href="/map" className="btn-secondary">
            Explore 2D Map
          </Link>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <div className="glass-card">
          <div style={{ background: 'rgba(0, 240, 255, 0.1)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
             <MapPin color="#00f0ff" />
          </div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Interactive Campus Map</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Don't know where the IT block is? Our mapped UI helps you physically navigate the vast MMMUT campus without asking seniors.</p>
        </div>

        <div className="glass-card">
           <div style={{ background: 'rgba(112, 0, 255, 0.1)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
             <Library color="#7000ff" />
          </div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Academic Resource Dump</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Skip the endless WhatsApp forwards. Find PYQs, syllabi, and curated notes for your semester easily right here.</p>
        </div>
      </div>
    </div>
  );
}
