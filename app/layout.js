import './globals.css';
import Link from 'next/link';
import { Map, BookOpen, Bot, Compass } from 'lucide-react';

export const metadata = {
  title: 'CampusCore',
  description: 'AI-assisted campus navigator for MMMUT.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div className="main-layout">
          <nav className="navbar">
            <Link href="/" className="navbar-brand">
               <Compass className="text-accent" color="#00f0ff" />
               <span>Campus<span className="gradient-text">Core</span></span>
            </Link>
            <div className="navbar-links">
              <Link href="/map" className="nav-link">
                 <Map size={18} /> Campus Map
              </Link>
              <Link href="/resources" className="nav-link">
                 <BookOpen size={18} /> Resources
              </Link>
              <Link href="/navigator" className="nav-link">
                 <Bot size={18} /> AI Assistant
              </Link>
            </div>
          </nav>
          <main className="page-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
