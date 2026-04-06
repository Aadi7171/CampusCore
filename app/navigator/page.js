"use client";

import { useState } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { universityData } from '@/lib/data';

export default function NavigatorPage() {
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi! I am the CampusCore AI. Ask me about departments, professors, or where to find resources. (e.g. "Where is the CS dept?" or "Where does Dr. Sharma sit?")' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setInput('');

    // Mock AI Logic based on data layer
    setTimeout(() => {
      let botResponse = "I'm not sure about that. Try asking about the CS, EE, or ME departments, or a specific professor.";
      
      const lowerInput = userText.toLowerCase();
      
      // Match department
      const matchedDept = universityData.departments.find(d => lowerInput.includes(d.id) || lowerInput.includes(d.name.toLowerCase()));
      if (matchedDept) {
        botResponse = `The ${matchedDept.name} is located in the ${matchedDept.building}, ${matchedDept.floor}. The current HOD is ${matchedDept.hod}.`;
      }

      // Match professor
      const matchedProf = universityData.professors.find(p => lowerInput.includes(p.name.toLowerCase().split(' ')[1]));
      if (matchedProf) {
        botResponse = `${matchedProf.name} sits in cabin ${matchedProf.cabin}. They teach ${matchedProf.subjects.join(', ')}.`;
      }

      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    }, 600);
  };

  return (
    <div className="container animate-fade-in" style={{ height: 'calc(100vh - 150px)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem' }}>AI <span className="gradient-text">Assistant</span></h1>
        <p style={{ color: 'var(--text-secondary)' }}>Your personal guide to the MMMUT campus.</p>
      </div>

      <div className="glass-card" style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '0', overflow: 'hidden' }}>
        {/* Chat window */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {messages.map((msg, i) => (
            <div key={i} style={{ display: 'flex', gap: '1rem', alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start', maxWidth: '80%' }}>
              {msg.role === 'bot' && (
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(0, 240, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Bot color="#00f0ff" size={20} />
                </div>
              )}
              
              <div style={{ background: msg.role === 'user' ? 'var(--accent-gradient)' : 'rgba(255,255,255,0.05)', padding: '1rem 1.5rem', borderRadius: '16px', borderTopLeftRadius: msg.role === 'bot' ? '4px' : '16px', borderTopRightRadius: msg.role === 'user' ? '4px' : '16px', color: 'white', lineHeight: '1.5' }}>
                {msg.text}
              </div>

              {msg.role === 'user' && (
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(112, 0, 255, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <User color="#7000ff" size={20} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div style={{ padding: '1.5rem', borderTop: '1px solid var(--surface-border)', background: 'rgba(0,0,0,0.2)' }}>
          <form onSubmit={handleSend} style={{ display: 'flex', gap: '1rem' }}>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..." 
              style={{ flex: 1, padding: '1rem 1.5rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--surface-border)', borderRadius: '12px', color: 'white', fontSize: '1rem', outline: 'none' }}
            />
            <button type="submit" className="btn-primary" style={{ padding: '0 1.5rem', borderRadius: '12px' }}>
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
