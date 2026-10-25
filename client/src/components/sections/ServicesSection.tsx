'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { servicesData } from '../../config/services.config';
import { TiltCard3D } from '../3d/TiltCard3D';
import { Globe, Smartphone, Sparkles, Bot, Cpu, Megaphone, CheckCircle2, ArrowRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>(servicesData[0].id);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Globe':
        return <Globe size={22} />;
      case 'Smartphone':
        return <Smartphone size={22} />;
      case 'Sparkles':
        return <Sparkles size={22} />;
      case 'Bot':
        return <Bot size={22} />;
      case 'Cpu':
        return <Cpu size={22} />;
      case 'Megaphone':
        return <Megaphone size={22} />;
      default:
        return <Sparkles size={22} />;
    }
  };

  const currentService = servicesData.find((s) => s.id === selectedService) || servicesData[0];

  return (
    <section id="services" style={{ padding: '2.75rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2rem' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <span>Core Engineering Services</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem', lineHeight: 1.2 }}>
            Engineered For Precision, <span className="gradient-text">Built to Scale</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            From high-throughput Next.js platforms to autonomous generative AI bots, our engineering team builds software that outperforms the market.
          </p>
        </div>

        {/* Services Grid with 3D Tilt Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
            marginBottom: '1.75rem',
          }}
        >
          {servicesData.map((svc) => {
            const isSelected = svc.id === selectedService;
            return (
              <TiltCard3D key={svc.id}>
                <div
                  className="glass-card"
                  onClick={() => setSelectedService(svc.id)}
                  style={{
                    padding: '2rem',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    borderColor: isSelected ? 'var(--primary)' : 'var(--border-color)',
                    boxShadow: isSelected ? '0 0 25px -5px var(--primary)' : 'var(--glass-shadow)',
                    background: isSelected ? 'var(--bg-card-hover)' : 'var(--bg-card)',
                  }}
                >
                  <div>
                    {/* Icon and Badge */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                      <div
                        style={{
                          width: '46px',
                          height: '46px',
                          borderRadius: '12px',
                          background: isSelected ? 'var(--primary)' : 'var(--primary-light)',
                          color: isSelected ? '#FFFFFF' : 'var(--primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: isSelected ? '0 0 15px var(--primary)' : 'none',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {getIcon(svc.iconName)}
                      </div>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          padding: '4px 10px',
                          borderRadius: 'var(--radius-full)',
                          background: 'var(--bg-surface-elevated)',
                          color: 'var(--text-muted)',
                          border: '1px solid var(--border-color)',
                        }}
                      >
                        {svc.badge}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--text-main)' }}>
                      {svc.title}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                      {svc.shortDesc}
                    </p>

                    {/* Features checklist */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.5rem' }}>
                      {svc.features.slice(0, 3).map((feat, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                          <CheckCircle2 size={15} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    {/* Technologies pills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.25rem' }}>
                      {svc.technologies.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: 600,
                            padding: '3px 8px',
                            borderRadius: '6px',
                            background: 'var(--bg-surface-elevated)',
                            color: 'var(--text-secondary)',
                            fontFamily: 'var(--font-mono)',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingTop: '1rem',
                        borderTop: '1px solid var(--border-color)',
                      }}
                    >
                      <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--primary)' }}>
                        Select Architecture
                      </span>
                      <ArrowRight size={15} color="var(--primary)" />
                    </div>
                  </div>
                </div>
              </TiltCard3D>
            );
          })}
        </div>

        {/* Detailed Service Deep-Dive Showcase */}
        <div
          className="glass-card"
          style={{
            padding: '2.5rem',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-glow)',
            background: 'var(--bg-surface)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center',
            }}
          >
            <div>
              <div className="badge-pill" style={{ marginBottom: '1rem' }}>
                <span>Deep Architecture Spotlight</span>
              </div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{currentService.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                {currentService.longDesc}
              </p>

              <h4 style={{ fontSize: '0.9rem', color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.75rem' }}>
                Key Production Deliverables:
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '2rem' }}>
                {currentService.deliverables.map((deliv, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)' }} />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>

              <Link
                href={`/#contact?service=${encodeURIComponent(currentService.title)}`}
                className="btn-pill-primary"
                style={{ textDecoration: 'none' }}
              >
                <span>Request {currentService.title} Quote</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Interactive Code / Architecture Preview Box */}
            <div
              style={{
                background: 'var(--bg-main)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.5)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }} />
                </div>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>corecodex_stack.ts</span>
              </div>
              <div style={{ color: 'var(--text-muted)' }}>// CoreCodeX Production Standard</div>
              <div><span style={{ color: 'var(--accent)' }}>const</span> <span style={{ color: 'var(--primary)' }}>serviceBlueprint</span> = &#123;</div>
              <div style={{ paddingLeft: '1.25rem' }}>service: <span style={{ color: 'var(--success)' }}>&quot;{currentService.title}&quot;</span>,</div>
              <div style={{ paddingLeft: '1.25rem' }}>architecture: <span style={{ color: 'var(--success)' }}>&quot;Full-Stack MERN + Next.js App Router&quot;</span>,</div>
              <div style={{ paddingLeft: '1.25rem' }}>performance: <span style={{ color: 'var(--secondary)' }}>&quot;Sub-400ms TTFB & 99.99% Uptime&quot;</span>,</div>
              <div style={{ paddingLeft: '1.25rem' }}>security: <span style={{ color: 'var(--warning)' }}>&quot;Zero-Trust JWT + Rate-Limiting + Data Isolation&quot;</span>,</div>
              <div style={{ paddingLeft: '1.25rem' }}>scalability: <span style={{ color: 'var(--success)' }}>&quot;Horizontal Docker/K8s Auto-scaling&quot;</span></div>
              <div>&#125;;</div>
              <div style={{ marginTop: '0.75rem', color: 'var(--primary)' }}>await CoreCodeX.deploy(serviceBlueprint);</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
