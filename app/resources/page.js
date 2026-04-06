import { universityData } from '@/lib/data';
import { Download, FileText, FolderArchive } from 'lucide-react';

export default function ResourcesPage() {
  return (
    <div className="container animate-fade-in">
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Academic <span className="gradient-text">Resources</span></h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px' }}>
          Access curated notes, previous year papers, and syllabi uploaded by seniors and faculty.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {universityData.resources.map((res, i) => (
          <div key={i} className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '8px' }}>
                {res.type === 'PDF' ? <FileText color="#ff4081" /> : <FolderArchive color="#ffb300" />}
              </div>
              <span style={{ fontSize: '0.8rem', background: 'rgba(255,255,255,0.1)', padding: '0.25rem 0.75rem', borderRadius: '12px', color: 'var(--text-secondary)' }}>
                {res.subject}
              </span>
            </div>
            
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{res.title}</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>
              Uploaded by: {res.uploader}
            </p>

            <a href={res.link} className="btn-secondary" style={{ justifyContent: 'center', width: '100%' }}>
              <Download size={16} /> Download {res.type}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
