'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, PhoneCall, ShieldCheck, Zap, Activity } from 'lucide-react';
import { Interactive3DCanvas } from '../3d/Interactive3DCanvas';
import { siteConfig } from '../../config/site.config';

export const HeroSection: React.FC = () => {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: 'auto',
        paddingTop: '6.75rem',
        paddingBottom: '2.5rem',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
      className="cyber-grid-bg"
    >
      {/* Ambient Radial Glows */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '450px',
          background: 'radial-gradient(circle, var(--primary-light) 0%, transparent 70%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
        className="animate-pulse-glow"
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            alignItems: 'center',
            gap: '2rem',
          }}
        >
          {/* Left Column: Headlines & CTA */}
          <div>
            {/* Top Pill Badge matching reference image */}
            <div style={{ display: 'inline-flex', marginBottom: '1rem' }}>
              <div className="badge-pill">
                <Sparkles size={14} />
                <span>Next-Gen Full-Stack &amp; Enterprise AI Agency</span>
              </div>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.3rem, 4.8vw, 4rem)',
                lineHeight: 1.1,
                fontWeight: 900,
                letterSpacing: '-0.03em',
                marginBottom: '1.25rem',
              }}
            >
              Scaling Future-Proof Digital Products with{' '}
              <span className="gradient-text">CoreCodeX</span>
            </h1>

            <p
              style={{
                fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '1.5rem',
                maxWidth: '560px',
              }}
            >
              We engineer ultra-responsive Next.js web applications, mobile platforms, enterprise AI models, and high-ROI social media digital marketing (creative posts, reels &amp; campaigns). Packages starting from <strong>₹10,000 to ₹15,000</strong>.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.85rem',
                marginBottom: '1.75rem',
              }}
            >
              <Link href="/contact" className="btn-pill-primary" style={{ padding: '0.75rem 1.6rem', fontSize: '0.95rem' }}>
                <span>Start Your Project (₹10k–15k)</span>
                <ArrowRight size={17} />
              </Link>

              <Link href="/work" className="btn-pill-secondary" style={{ padding: '0.75rem 1.4rem', fontSize: '0.95rem' }}>
                <span>Explore Our Works</span>
              </Link>

              <a
                href="tel:6354729042"
                className="btn-pill-secondary"
                style={{
                  padding: '0.75rem 1.3rem',
                  fontSize: '0.92rem',
                  color: 'var(--primary)',
                  borderColor: 'var(--border-glow)',
                }}
              >
                <PhoneCall size={16} />
                <span>Call Sahil</span>
              </a>
            </div>

            {/* Trust Markers */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.5rem',
                alignItems: 'center',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-color)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <ShieldCheck size={16} color="var(--primary)" />
                <span>100% Milestone Escrow & NDA</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <Zap size={16} color="var(--secondary)" />
                <span>Sub-Second Page Performance</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Canvas with Floating HUD Elements */}
          <div style={{ position: 'relative', width: '100%', height: '420px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Interactive3DCanvas />

            {/* Floating Metric Card 1: API Latency */}
            <div
              className="glass-card animate-float"
              style={{
                position: 'absolute',
                top: '15px',
                right: '10px',
                padding: '0.85rem 1.35rem',
                minWidth: '180px',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                zIndex: 20,
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'var(--primary-light)',
                  color: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Activity size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>API Global Latency</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-main)' }}>0.12ms</div>
              </div>
            </div>

            {/* Floating Metric Card 2: Systems Deployed */}
            <div
              className="glass-card animate-float"
              style={{
                position: 'absolute',
                bottom: '25px',
                left: '10px',
                padding: '0.85rem 1.35rem',
                minWidth: '180px',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                zIndex: 20,
                animationDelay: '1.5s',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  color: 'var(--success)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Zap size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Live Production SLA</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-main)' }}>99.99% Uptime</div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Statistics Bar */}
        <div
          style={{
            marginTop: '4rem',
            padding: '1.25rem',
            borderRadius: 'var(--radius-lg)',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            backdropFilter: 'blur(10px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 130px), 1fr))',
            gap: '1rem',
            textAlign: 'center',
          }}
        >
          {siteConfig.stats.map((stat, idx) => (
            <div key={idx}>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                  fontWeight: 900,
                  color: 'var(--text-main)',
                  lineHeight: 1.1,
                }}
              >
                <span className="gradient-text">{stat.value}</span>
              </div>
              <div
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: 'var(--text-muted)',
                  marginTop: '0.35rem',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
