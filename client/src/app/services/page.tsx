'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { servicesData } from '../../config/services.config';
import { TiltCard3D } from '../../components/3d/TiltCard3D';
import { Globe, Smartphone, Sparkles, Bot, Cpu, Megaphone, CheckCircle2, ArrowRight, Code, ShieldCheck, Terminal } from 'lucide-react';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<string>(servicesData[0].id);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Globe':
        return <Globe size={24} />;
      case 'Smartphone':
        return <Smartphone size={24} />;
      case 'Sparkles':
        return <Sparkles size={24} />;
      case 'Bot':
        return <Bot size={24} />;
      case 'Cpu':
        return <Cpu size={24} />;
      case 'Megaphone':
        return <Megaphone size={24} />;
      default:
        return <Sparkles size={24} />;
    }
  };

  return (
    <div className="page-content-wrapper">
      <div className="container">
        {/* Page Hero */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 2rem' }}>
          <div className="badge-pill" style={{ marginBottom: '0.75rem' }}>
            <Sparkles size={14} />
            <span>Comprehensive Tech Capabilities</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', lineHeight: 1.15, fontWeight: 900, marginBottom: '1rem' }}>
            Full-Spectrum Digital &amp; <span className="gradient-text">AI Engineering</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            We do not just build interfaces; we engineer resilient, enterprise-grade architectures capable of processing millions of requests and powering intelligent user interactions.
          </p>
        </div>

        {/* Services Quick-Jump Chip Cards (Non-circular, small chip card form) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))',
            gap: '10px',
            maxWidth: '960px',
            margin: '0 auto 2.5rem',
            width: '100%',
          }}
        >
          {servicesData.map((svc) => {
            const isActive = svc.id === activeTab;
            const metaMap: Record<string, { label: string; sub: string }> = {
              'web-development': { label: 'Web Apps', sub: 'Next.js & MERN' },
              'app-development': { label: 'Mobile Apps', sub: 'iOS & Android' },
              'ai-integration': { label: 'Enterprise AI', sub: 'LLMs & RAG' },
              'chatbots': { label: 'AI Chatbots', sub: 'Agents & Voice' },
              'ai-ml': { label: 'AI & ML', sub: 'Custom Models' },
              'digital-marketing': { label: 'Social Media', sub: 'Posts & Reels' },
            };
            const meta = metaMap[svc.id] || { label: svc.title.split('&')[0].trim(), sub: svc.badge };

            return (
              <button
                key={svc.id}
                onClick={() => {
                  setActiveTab(svc.id);
                  const el = document.getElementById(svc.id);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="service-chip-card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '9px',
                  padding: '9px 12px',
                  borderRadius: '10px',
                  border: '1px solid',
                  borderColor: isActive ? 'var(--primary)' : 'var(--border-color)',
                  background: isActive ? 'var(--primary-light)' : 'var(--bg-surface-elevated)',
                  color: isActive ? 'var(--primary)' : 'var(--text-main)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isActive ? '0 0 16px -4px var(--primary-light)' : 'var(--glass-shadow)',
                  boxSizing: 'border-box',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '7px',
                    background: isActive ? 'var(--primary)' : 'var(--bg-card)',
                    color: isActive ? '#FFFFFF' : 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 0.2s ease',
                  }}
                >
                  {getIcon(svc.iconName)}
                </div>
                <div style={{ minWidth: 0, overflow: 'hidden', flex: 1 }}>
                  <div
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      lineHeight: 1.2,
                    }}
                  >
                    {meta.label}
                  </div>
                  <div
                    style={{
                      fontSize: '0.68rem',
                      color: isActive ? 'var(--primary)' : 'var(--text-muted)',
                      fontWeight: 500,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      marginTop: '2px',
                    }}
                  >
                    {meta.sub}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* In-Depth Service Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '2.5rem' }}>
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="glass-card"
              style={{
                padding: '2.25rem 2rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-glow)',
                background: 'var(--bg-surface)',
                scrollMarginTop: '100px',
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                  gap: '2.5rem',
                  alignItems: 'center',
                }}
              >
                {/* Left Details */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '12px',
                        background: 'var(--primary-light)',
                        color: 'var(--primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {getIcon(service.iconName)}
                    </div>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        padding: '4px 12px',
                        borderRadius: 'var(--radius-full)',
                        background: 'var(--bg-surface-elevated)',
                        color: 'var(--primary)',
                        border: '1px solid var(--border-glow)',
                      }}
                    >
                      {service.badge}
                    </span>
                  </div>

                  <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
                    {service.title}
                  </h2>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                    {service.longDesc}
                  </p>

                  <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--text-main)', marginBottom: '0.85rem' }}>
                    Architectural Highlights:
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
                    {service.features.map((feat, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                        <CheckCircle2 size={16} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="btn-pill-primary"
                    style={{ textDecoration: 'none' }}
                  >
                    <span>Request {service.title} Architecture</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Right Technical Specification Panel */}
                <div
                  style={{
                    background: 'var(--bg-main)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-color)',
                    padding: '2rem',
                    boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.5)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem', color: 'var(--primary)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                    <Terminal size={16} />
                    <span>TECHNICAL_SPECIFICATION.json</span>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      Technology Stack
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {service.technologies.map((tech, i) => (
                        <span
                          key={i}
                          style={{
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            padding: '4px 10px',
                            borderRadius: '6px',
                            background: 'var(--bg-surface)',
                            color: 'var(--text-main)',
                            border: '1px solid var(--border-color)',
                            fontFamily: 'var(--font-mono)',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      Guaranteed Production Deliverables
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {service.deliverables.map((deliv, i) => (
                        <div
                          key={i}
                          style={{
                            fontSize: '0.84rem',
                            color: 'var(--text-secondary)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                          }}
                        >
                          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--success)' }} />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global CTA */}
        <div
          className="glass-card"
          style={{
            padding: '3rem 2rem',
            textAlign: 'center',
            borderRadius: 'var(--radius-lg)',
            background: 'var(--gradient-glow), var(--bg-surface)',
            border: '1px solid var(--border-glow)',
          }}
        >
          <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>
            Unsure Which Tech Stack Fits Your Product?
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1rem' }}>
            Book a 30-minute discovery consultation with Sahil Prasad and Shubham Singh to review your technical architecture.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-pill-primary" style={{ padding: '0.8rem 1.8rem' }}>
              <span>Contact Engineering Leads</span>
              <ArrowRight size={16} />
            </Link>
            <Link href="/estimator" className="btn-pill-secondary" style={{ padding: '0.8rem 1.8rem' }}>
              <span>Try Project Cost Calculator</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
