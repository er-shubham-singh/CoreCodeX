'use client';

import React from 'react';
import { ShieldCheck, Lock, FileText, Code2, Headphones, Sparkles, CheckCircle } from 'lucide-react';
import { TiltCard3D } from '../3d/TiltCard3D';

export const TrustSection: React.FC = () => {
  const trustPillars = [
    {
      icon: <Lock size={24} />,
      title: 'Mutual NDA & IP Security',
      desc: 'All project discussions are protected under a legally binding Non-Disclosure Agreement. You retain 100% intellectual property rights and full source code ownership.',
    },
    {
      icon: <FileText size={24} />,
      title: 'Milestone Escrow Billing',
      desc: 'Zero risk for your capital. Payments are released strictly upon milestone reviews, live staging verification, and your direct sign-off.',
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'Enterprise Code Standards',
      desc: 'Every PR undergoes automated linting, unit testing, security scanning, and strict TypeScript types. No technical debt, no shortcuts.',
    },
    {
      icon: <Headphones size={24} />,
      title: 'Direct Engineering Access',
      desc: 'No middle managers or outsourced subcontractors. You communicate directly with Sahil Prasad and Shubham Singh on private Slack/WhatsApp channels.',
    },
  ];

  const methodologySteps = [
    { num: '01', title: 'Technical Discovery', desc: 'Define core user stories, database schemas, and performance targets.' },
    { num: '02', title: 'System Architecture', desc: 'Map microservices, REST/GraphQL endpoints, and responsive 3D UI wireframes.' },
    { num: '03', title: 'Weekly Agile Sprints', desc: 'Live staging URL updates every 5 days with continuous client feedback.' },
    { num: '04', title: 'Hardened Deployment', desc: 'Load testing, SEO validation, CDN caching, and 90-day post-launch warranty.' },
  ];

  return (
    <section id="about" style={{ padding: '6rem 0', background: 'var(--bg-surface-elevated)', position: 'relative' }}>
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <Sparkles size={14} />
            <span>Why Leading Brands Choose CoreCodeX</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem', lineHeight: 1.2 }}>
            Engineering Trust Through <span className="gradient-text">Absolute Transparency</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            We treat your budget and vision as if it were our own. Here is why clients rely on CoreCodeX for mission-critical software.
          </p>
        </div>

        {/* 4 Trust Pillars */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.75rem',
            marginBottom: '4.5rem',
          }}
        >
          {trustPillars.map((pillar, idx) => (
            <TiltCard3D key={idx} maxTilt={6}>
              <div
                className="glass-card"
                style={{
                  padding: '2rem',
                  height: '100%',
                  background: 'var(--bg-card)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'var(--primary-light)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                  }}
                >
                  {pillar.icon}
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--text-main)' }}>
                  {pillar.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                  {pillar.desc}
                </p>
              </div>
            </TiltCard3D>
          ))}
        </div>

        {/* Agile Methodology Process */}
        <div
          className="glass-card"
          style={{
            padding: '2.5rem',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-glow)',
            background: 'var(--bg-surface)',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>
              Our 4-Stage Production Pipeline
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              From initial whiteboarding to production edge deployments in under 6 weeks.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem',
              position: 'relative',
            }}
          >
            {methodologySteps.map((step, idx) => (
              <div
                key={idx}
                style={{
                  padding: '1.5rem',
                  background: 'var(--bg-card)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    fontSize: '1.8rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 900,
                    color: 'var(--primary)',
                    lineHeight: 1,
                    marginBottom: '0.75rem',
                  }}
                >
                  {step.num}
                </div>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                  {step.title}
                </h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
