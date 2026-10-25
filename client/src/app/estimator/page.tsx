'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calculator, ArrowRight, Check, Zap, ShieldCheck, Clock, FileCode } from 'lucide-react';

export default function EstimatorPage() {
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

  return (
    <div style={{ paddingTop: '4.75rem', paddingBottom: '2.5rem' }}>
      <div className="container">
        {/* Page Hero */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 2rem' }}>
          <div className="badge-pill" style={{ marginBottom: '0.75rem' }}>
            <Calculator size={14} />
            <span>Interactive Project Estimation (INR)</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', lineHeight: 1.15, fontWeight: 900, marginBottom: '1rem' }}>
            Transparent Pricing, <span className="gradient-text">Zero Hidden Costs</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Packages available from <strong>₹10,000 to ₹15,000</strong> with complete code ownership, milestone escrow, and direct founder accountability.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div
          className="glass-card"
          style={{
            maxWidth: '1020px',
            margin: '0 auto 2.5rem',
            padding: '2.25rem 2rem',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-glow)',
            background: 'var(--bg-surface)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center',
            }}
          >
            {/* Left Controls */}
            <div>
              {/* Step 1 */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                  1. Target Software / Growth Service
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  {[
                    { id: 'web', label: 'Next.js Web App / SaaS' },
                    { id: 'mobile', label: 'Mobile App (iOS/Android)' },
                    { id: 'ai', label: 'Enterprise AI & RAG' },
                    { id: 'chatbot', label: 'AI Conversational Bot' },
                    { id: 'marketing', label: 'Social Media & Digital Marketing' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setProjectType(item.id as typeof projectType)}
                      style={{
                        padding: '9px 12px',
                        borderRadius: '8px',
                        border: '1px solid',
                        borderColor: projectType === item.id ? 'var(--primary)' : 'var(--border-color)',
                        background: projectType === item.id ? 'var(--primary-light)' : 'var(--bg-surface-elevated)',
                        color: projectType === item.id ? 'var(--primary)' : 'var(--text-secondary)',
                        fontSize: '0.8rem',
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

              {/* Step 2 */}
              <div style={{ marginBottom: '1.75rem' }}>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                  2. Project Maturity Level
                </label>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {[
                    { id: 'mvp', label: 'MVP Prototype' },
                    { id: 'growth', label: 'Production Growth' },
                    { id: 'enterprise', label: 'Enterprise Scaled' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setScale(item.id as typeof scale)}
                      style={{
                        flex: 1,
                        padding: '10px',
                        borderRadius: '8px',
                        border: '1px solid',
                        borderColor: scale === item.id ? 'var(--primary)' : 'var(--border-color)',
                        background: scale === item.id ? 'var(--primary-light)' : 'var(--bg-surface-elevated)',
                        color: scale === item.id ? 'var(--primary)' : 'var(--text-secondary)',
                        fontSize: '0.82rem',
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

              {/* Step 3 */}
              <div style={{ marginBottom: '1.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderRadius: '8px', background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-color)' }}>
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-main)' }}>AI &amp; LLM Capabilities</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Include Gemini / OpenAI / Vector RAG embeddings</div>
                </div>
                <input
                  type="checkbox"
                  checked={includeAI}
                  onChange={(e) => setIncludeAI(e.target.checked)}
                  style={{ width: '20px', height: '20px', accentColor: 'var(--primary)', cursor: 'pointer' }}
                />
              </div>

              {/* Step 4 */}
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                  3. Development Pace
                </label>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {[
                    { id: 'standard', label: 'Standard Agile Cadence' },
                    { id: 'express', label: '⚡ Rush Accelerated Sprint' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setTimeline(item.id as typeof timeline)}
                      style={{
                        flex: 1,
                        padding: '10px',
                        borderRadius: '8px',
                        border: '1px solid',
                        borderColor: timeline === item.id ? 'var(--primary)' : 'var(--border-color)',
                        background: timeline === item.id ? 'var(--primary-light)' : 'var(--bg-surface-elevated)',
                        color: timeline === item.id ? 'var(--primary)' : 'var(--text-secondary)',
                        fontSize: '0.84rem',
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

            {/* Right Results Panel */}
            <div
              style={{
                padding: '2.5rem',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-main)',
                border: '1px solid var(--border-glow)',
                boxShadow: '0 15px 35px rgba(0,0,0,0.5)',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
                Estimated Project Investment
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '3.2rem',
                  fontWeight: 900,
                  color: 'var(--text-main)',
                  lineHeight: 1.1,
                  marginBottom: '0.5rem',
                }}
              >
                <span className="gradient-text">₹{estimatedCost.toLocaleString('en-IN')}</span>
              </div>

              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                *Special ₹10k–₹15k introductory package rate with milestone escrow
              </div>

              <div
                style={{
                  padding: '1.25rem',
                  borderRadius: '8px',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-color)',
                  marginBottom: '1.5rem',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '12px',
                  textAlign: 'left',
                  fontSize: '0.85rem',
                }}
              >
                <div>
                  <span style={{ color: 'var(--text-muted)' }}>Estimated Delivery:</span>
                  <div style={{ fontWeight: 800, color: 'var(--text-main)', marginTop: '2px' }}>{estimatedWeeks}</div>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)' }}>Tech Architecture:</span>
                  <div style={{ fontWeight: 800, color: 'var(--primary)', marginTop: '2px' }}>Next.js / MERN</div>
                </div>
              </div>

              <Link
                href={`/contact?budget=₹${estimatedCost.toLocaleString('en-IN')}&service=${encodeURIComponent(projectType)}`}
                className="btn-pill-primary"
                style={{ width: '100%', padding: '0.9rem', fontSize: '1rem', textDecoration: 'none' }}
              >
                <span>Lock In This Package (₹{estimatedCost.toLocaleString('en-IN')})</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Included Guarantees */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}
        >
          <div className="glass-card" style={{ padding: '1.5rem', background: 'var(--bg-card)' }}>
            <FileCode size={20} color="var(--primary)" style={{ marginBottom: '0.75rem' }} />
            <h4 style={{ fontSize: '1rem', marginBottom: '0.35rem' }}>100% Code Ownership</h4>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Complete GitHub repository transfer with clean TypeScript documentation.</p>
          </div>
          <div className="glass-card" style={{ padding: '1.5rem', background: 'var(--bg-card)' }}>
            <Clock size={20} color="var(--secondary)" style={{ marginBottom: '0.75rem' }} />
            <h4 style={{ fontSize: '1rem', marginBottom: '0.35rem' }}>On-Time Delivery SLA</h4>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Milestone-bound weekly sprints with continuous staging demos.</p>
          </div>
          <div className="glass-card" style={{ padding: '1.5rem', background: 'var(--bg-card)' }}>
            <ShieldCheck size={20} color="var(--success)" style={{ marginBottom: '0.75rem' }} />
            <h4 style={{ fontSize: '1rem', marginBottom: '0.35rem' }}>90-Day Warranty</h4>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Complimentary post-launch bug fixing and performance monitoring.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
