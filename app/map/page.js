"use client";

import { useState } from 'react';
import { universityData } from '@/lib/data';
import { Search, MapPin } from 'lucide-react';

export default function MapPage() {
  const [selectedDept, setSelectedDept] = useState(null);

  return (
    <div className="container animate-fade-in" style={{ display: 'flex', gap: '2rem', height: 'calc(100vh - 150px)' }}>
      {/* Sidebar */}
      <div className="glass-card" style={{ width: '350px', display: 'flex', flexDirection: 'column', padding: '1.5rem', overflowY: 'auto' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Locations</h2>
        <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
          <Search size={18} style={{ position: 'absolute', top: '12px', left: '12px', color: 'var(--text-secondary)' }} />
          <input 
            type="text" 
            placeholder="Search departments..." 
            style={{ width: '100%', padding: '10px 10px 10px 40px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--surface-border)', borderRadius: '8px', color: 'white' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {universityData.departments.map(dept => (
            <div 
              key={dept.id}
              onClick={() => setSelectedDept(dept)}
              style={{ padding: '1rem', background: selectedDept?.id === dept.id ? 'rgba(0, 240, 255, 0.1)' : 'rgba(255,255,255,0.02)', border: '1px solid', borderColor: selectedDept?.id === dept.id ? 'var(--accent-primary)' : 'var(--surface-border)', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.2s' }}
            >
              <h4 style={{ color: selectedDept?.id === dept.id ? 'var(--accent-primary)' : 'white' }}>{dept.name}</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <MapPin size={14} /> {dept.building}, {dept.floor}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Map Mockup Area */}
      <div className="glass-card" style={{ flex: 1, position: 'relative', overflow: 'hidden', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(circle at center, #0a0a2a 0%, #030014 100%)' }}>
        {!selectedDept ? (
          <div style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
            <MapPin size={48} style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
            <p>Select a department to view on map.</p>
            <p style={{ fontSize: '0.8rem', marginTop: '1rem', opacity: 0.5 }}>(MVP: Interactive Map integration pending)</p>
          </div>
        ) : (
          <div className="animate-fade-in" style={{ textAlign: 'center' }}>
            <div style={{ width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(0, 240, 255, 0.1)', border: '2px dashed var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', position: 'relative' }}>
              <div style={{ width: '20px', height: '20px', background: 'var(--accent-primary)', borderRadius: '50%', boxShadow: '0 0 20px var(--accent-primary)' }}></div>
              {/* Ripple Effect */}
              <div style={{ position: 'absolute', inset: -20, border: '1px solid var(--accent-primary)', borderRadius: '50%', animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite' }}></div>
            </div>
            <h2 className="gradient-text">{selectedDept.name}</h2>
            <p style={{ fontSize: '1.25rem', marginTop: '0.5rem' }}>{selectedDept.building}</p>
            <p style={{ color: 'var(--text-secondary)', marginTop: '0.25rem' }}>{selectedDept.floor}</p>
          </div>
        )}

        {/* CSS for ping animation */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes ping {
            75%, 100% { transform: scale(2); opacity: 0; }
          }
        `}} />
      </div>
    </div>
  );
}
