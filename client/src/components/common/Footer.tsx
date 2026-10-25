'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Layers, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-color)',
        paddingTop: '2.5rem',
        paddingBottom: '2rem',
        marginTop: '2rem',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem',
          }}
        >
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'var(--gradient-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                }}
              >
                <Layers size={18} />
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: 800 }}>
                Core<span className="gradient-text">CodeX</span>
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Next-generation digital & AI engineering agency. We architect high-performance web applications, mobile platforms, enterprise AI integrations, and intelligent chatbots.
            </p>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 12px',
                borderRadius: 'var(--radius-full)',
                background: 'var(--primary-light)',
                color: 'var(--primary)',
                fontSize: '0.8rem',
                fontWeight: 600,
              }}
            >
              <ShieldCheck size={14} />
              Enterprise SLA & NDA Guaranteed
            </div>
          </div>

          {/* Quick Services */}
          <div>
            <h4 style={{ fontSize: '1rem', marginBottom: '1.25rem', color: 'var(--text-main)' }}>Engineering Capabilities</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li>
                <Link href="/services#web-development" style={{ color: 'var(--text-muted)', textDecoration: 'none' }} className="footer-link">
                  Web & Web App Development
                </Link>
              </li>
              <li>
                <Link href="/services#app-development" style={{ color: 'var(--text-muted)', textDecoration: 'none' }} className="footer-link">
                  Mobile App Development (iOS/Android)
                </Link>
              </li>
              <li>
                <Link href="/services#ai-integration" style={{ color: 'var(--text-muted)', textDecoration: 'none' }} className="footer-link">
                  Enterprise AI Integration (Gemini/OpenAI)
                </Link>
              </li>
              <li>
                <Link href="/services#chatbots" style={{ color: 'var(--text-muted)', textDecoration: 'none' }} className="footer-link">
                  AI Chatbots & Voice Agents
                </Link>
              </li>
              <li>
                <Link href="/services#ai-ml" style={{ color: 'var(--text-muted)', textDecoration: 'none' }} className="footer-link">
                  AI / Machine Learning Engineering
                </Link>
              </li>
              <li>
                <Link href="/services#digital-marketing" style={{ color: 'var(--text-muted)', textDecoration: 'none' }} className="footer-link">
                  Social Media &amp; Digital Marketing (Posts, Reels &amp; Ads)
                </Link>
              </li>
            </ul>
          </div>

          {/* Live Works */}
          <div>
            <h4 style={{ fontSize: '1rem', marginBottom: '1.25rem', color: 'var(--text-main)' }}>Flagship Works</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li>
                <a href="https://paxtechs.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }} className="footer-link">
                  PaxTechs (Fintech Platform) <ArrowUpRight size={13} />
                </a>
              </li>
              <li>
                <a href="https://fluteon.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }} className="footer-link">
                  Fluteon (Fashion E-Commerce) <ArrowUpRight size={13} />
                </a>
              </li>
              <li>
                <a href="https://nhotels.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }} className="footer-link">
                  NHotels (Luxury Resort Booking) <ArrowUpRight size={13} />
                </a>
              </li>
              <li>
                <a href="https://greatpopularband.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }} className="footer-link">
                  Great Popular Band (Royal Events) <ArrowUpRight size={13} />
                </a>
              </li>
            </ul>
          </div>

          {/* Leadership & Direct Contact */}
          <div>
            <h4 style={{ fontSize: '1rem', marginBottom: '1.25rem', color: 'var(--text-main)' }}>Engineering Leadership</h4>
            
            <div style={{ marginBottom: '1.25rem', padding: '0.85rem', background: 'var(--bg-surface-elevated)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-main)' }}>Sahil Prasad</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '6px' }}>Co-Founder & Solutions Architect</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                <MapPin size={13} color="var(--primary)" /> Vadodara, Gujarat
              </div>
              <div style={{ marginTop: '6px' }}>
                <a href="tel:6354729042" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.82rem', fontWeight: 700, color: 'var(--primary)', textDecoration: 'none' }}>
                  <Phone size={12} /> +91 6354729042
                </a>
              </div>
            </div>

            <div style={{ padding: '0.85rem', background: 'var(--bg-surface-elevated)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-main)' }}>Shubham Singh</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '6px' }}>Operations & Engineering Director</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                <MapPin size={13} color="var(--primary)" /> Haridwar, Uttarakhand
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '6px' }}>
                <a href="tel:9559506650" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.82rem', fontWeight: 700, color: 'var(--primary)', textDecoration: 'none' }}>
                  <Phone size={12} /> +91 9559506650
                </a>
                <a href="mailto:shubham.singh7985@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.78rem', color: 'var(--text-muted)', textDecoration: 'none' }}>
                  <Mail size={12} /> shubham.singh7985@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid var(--border-color)',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            © {new Date().getFullYear()} CoreCodeX. Built with MERN Architecture & Next.js. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/about" style={{ color: 'var(--text-muted)', textDecoration: 'none' }} className="footer-link">
              Privacy &amp; NDA
            </Link>
            <Link href="/services" style={{ color: 'var(--text-muted)', textDecoration: 'none' }} className="footer-link">
              Terms of Service
            </Link>
            <Link href="/contact" style={{ color: 'var(--text-muted)', textDecoration: 'none' }} className="footer-link">
              Client Support
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-link:hover {
          color: var(--primary) !important;
        }
      `}</style>
    </footer>
  );
};
