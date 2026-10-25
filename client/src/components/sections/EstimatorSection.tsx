'use client';

import React, { useState } from 'react';
import { Calculator, ArrowRight, Check, Zap } from 'lucide-react';

export const EstimatorSection: React.FC = () => {
  const [projectType, setProjectType] = useState<'web' | 'mobile' | 'ai' | 'chatbot' | 'marketing'>('web');
  const [scale, setScale] = useState<'mvp' | 'growth' | 'enterprise'>('growth');
  const [includeAI, setIncludeAI] = useState<boolean>(false);
  const [timeline, setTimeline] = useState<'express' | 'standard'>('standard');

  const basePrices = {
    web: { mvp: 9999, growth: 12499, enterprise: 14999 },
    mobile: { mvp: 10499, growth: 12999, enterprise: 15499 },
    ai: { mvp: 10999, growth: 13499, enterprise: 15999 },
    chatbot: { mvp: 9499, growth: 11999, enterprise: 14499 },
    marketing: { mvp: 9999, growth: 12499, enterprise: 14999 },
  };

  let estimatedCost = basePrices[projectType][scale];
  if (includeAI && projectType !== 'ai' && projectType !== 'chatbot') {
    estimatedCost += 1500;
  }
  if (timeline === 'express') {
    estimatedCost += 1500;
  }

  const estimatedWeeks =
    scale === 'mvp'
      ? timeline === 'express'
        ? '1 - 2 Weeks'
        : '2 - 3 Weeks'
      : scale === 'growth'
      ? timeline === 'express'
        ? '2 - 3 Weeks'
        : '3 - 4 Weeks'
      : timeline === 'express'
      ? '3 - 4 Weeks'
      : '4 - 6 Weeks';

  const handleApplyToForm = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="estimator" style={{ padding: '2.75rem 0', background: 'var(--bg-surface)', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 1.75rem' }}>
          <div className="badge-pill" style={{ marginBottom: '0.75rem' }}>
            <Calculator size={14} />
            <span>Transparent INR Project Calculator</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '0.75rem', lineHeight: 1.2 }}>
            Estimate Your <span className="gradient-text">Project Scope &amp; Investment</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
            Packages available from <strong>₹10,000 to ₹15,000</strong> with complete deliverables, source code transfer, and direct founder delivery.
          </p>
        </div>

        <div
          className="glass-card"
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            padding: '2rem',
            borderRadius: 'var(--radius-lg)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '2rem',
            alignItems: 'center',
          }}
        >
          {/* Controls */}
          <div>
            {/* Step 1: Project Type */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                1. Select Primary Service
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))', gap: '8px' }}>
                {[
                  { id: 'web', label: 'Next.js Web App' },
                  { id: 'mobile', label: 'Mobile App (iOS/Android)' },
                  { id: 'ai', label: 'Enterprise AI / RAG' },
                  { id: 'chatbot', label: 'AI Chatbot Agent' },
                  { id: 'marketing', label: 'Social Media & Digital Marketing' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setProjectType(item.id as typeof projectType)}
                    style={{
                      padding: '8px 12px',
                      borderRadius: '8px',
                      border: '1px solid',
                      borderColor: projectType === item.id ? 'var(--primary)' : 'var(--border-color)',
                      background: projectType === item.id ? 'var(--primary-light)' : 'var(--bg-surface-elevated)',
                      color: projectType === item.id ? 'var(--primary)' : 'var(--text-secondary)',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.2s',
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Complexity / Scale */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.65rem' }}>
                2. Project Maturity Level
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {[
                  { id: 'mvp', label: 'MVP Prototype' },
                  { id: 'growth', label: 'Production Growth' },
                  { id: 'enterprise', label: 'Enterprise Scale' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setScale(item.id as typeof scale)}
                    style={{
                      flex: '1 1 min(100%, 100px)',
                      padding: '8px 10px',
                      borderRadius: '8px',
                      border: '1px solid',
                      borderColor: scale === item.id ? 'var(--primary)' : 'var(--border-color)',
                      background: scale === item.id ? 'var(--primary-light)' : 'var(--bg-surface-elevated)',
                      color: scale === item.id ? 'var(--primary)' : 'var(--text-secondary)',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: AI Toggle */}
            <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderRadius: '8px', background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-color)' }}>
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)' }}>AI / LLM Integration</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Include Gemini / OpenAI / Vector Search</div>
              </div>
              <input
                type="checkbox"
                checked={includeAI}
                onChange={(e) => setIncludeAI(e.target.checked)}
                style={{ width: '18px', height: '18px', accentColor: 'var(--primary)', cursor: 'pointer' }}
              />
            </div>

            {/* Step 4: Timeline */}
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.65rem' }}>
                3. Delivery Speed
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {[
                  { id: 'standard', label: 'Standard Timeline' },
                  { id: 'express', label: '⚡ Express Rush Sprint' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTimeline(item.id as typeof timeline)}
                    style={{
                      flex: '1 1 min(100%, 130px)',
                      padding: '8px 10px',
                      borderRadius: '8px',
                      border: '1px solid',
                      borderColor: timeline === item.id ? 'var(--primary)' : 'var(--border-color)',
                      background: timeline === item.id ? 'var(--primary-light)' : 'var(--bg-surface-elevated)',
                      color: timeline === item.id ? 'var(--primary)' : 'var(--text-secondary)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div
            style={{
              padding: '2rem',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-main)',
              border: '1px solid var(--border-glow)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
              Estimated Investment
            </div>
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.8rem',
                fontWeight: 900,
                color: 'var(--text-main)',
                lineHeight: 1.1,
                marginBottom: '0.5rem',
              }}
            >
              <span className="gradient-text">₹{estimatedCost.toLocaleString('en-IN')}</span>
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
              *Special 10k–15k introductory package rate with milestone escrow
            </div>

            <div
              style={{
                padding: '1rem',
                borderRadius: '8px',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-color)',
                marginBottom: '1.5rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 120px), 1fr))',
                gap: '8px',
                textAlign: 'left',
                fontSize: '0.8rem',
              }}
            >
              <div>
                <span style={{ color: 'var(--text-muted)' }}>Estimated Delivery:</span>
                <div style={{ fontWeight: 700, color: 'var(--text-main)', marginTop: '2px' }}>{estimatedWeeks}</div>
              </div>
              <div>
                <span style={{ color: 'var(--text-muted)' }}>Architecture:</span>
                <div style={{ fontWeight: 700, color: 'var(--primary)', marginTop: '2px' }}>Next.js / MERN</div>
              </div>
            </div>

            <button
              onClick={handleApplyToForm}
              className="btn-pill-primary"
              style={{ width: '100%', padding: '0.85rem', fontSize: '0.95rem' }}
            >
              <span>Lock In This Estimate</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
