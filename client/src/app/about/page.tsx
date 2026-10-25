'use client';

import React from 'react';
import Link from 'next/link';
import { Layers, ShieldCheck, Cpu, Code2, Users, MapPin, Phone, Mail, ArrowRight, Award, Zap, CheckCircle2 } from 'lucide-react';
import { TiltCard3D } from '../../components/3d/TiltCard3D';

export default function AboutPage() {
  const leadership = [
    {
      name: 'Sahil Prasad',
      role: 'Co-Founder & Chief Solutions Architect',
      location: 'Vadodara, Gujarat, India',
      phone: '6354729042',
      bio: 'Visionary systems architect specializing in high-throughput Next.js full-stack architectures, WebGL 3D interactive interfaces, low-latency microservices, and financial transaction engines.',
      focus: ['Next.js App Router & Server Components', 'Three.js & WebGL 3D Graphics', 'Enterprise MERN Scalability', 'High-Frequency FinTech Pipelines'],
      callUrl: 'tel:6354729042',
      whatsappUrl: 'https://wa.me/916354729042?text=Hello%20Sahil,%20I%20am%20interested%20in%20partnering%20with%20CoreCodeX',
    },
    {
      name: 'Shubham Singh',
      role: 'Operations & Engineering Director',
      location: 'Haridwar, Uttarakhand, India',
      phone: '9559506650',
      email: 'shubham.singh7985@gmail.com',
      bio: 'Senior engineering lead driving multi-agent AI ecosystems, mobile engineering pipelines, autonomous conversational chatbots, and end-to-end client delivery SLA.',
      focus: ['Gemini & Claude LLM RAG Pipelines', 'Native & Cross-Platform Mobile Apps', 'AI Chatbots & Voice Agents', 'Agile Sprint Management & Quality Assurance'],
      callUrl: 'tel:9559506650',
      emailUrl: 'mailto:shubham.singh7985@gmail.com?subject=CoreCodeX%20Partnership%20Inquiry',
      whatsappUrl: 'https://wa.me/919559506650?text=Hello%20Shubham,%20I%20would%20like%20to%20discuss%20an%20AI%20project',
    },
  ];

  const coreValues = [
    {
      title: 'Uncompromising Engineering Rigor',
      desc: 'We refuse generic templates and boilerplate shortcuts. Every line of code is written in TypeScript, strictly tested, and optimized for sub-second performance.',
      icon: <Code2 size={24} />,
    },
    {
      title: 'Direct Founder Accountability',
      desc: 'You work directly with Sahil and Shubham from day one. No bureaucracy, no junior handoffs, and no miscommunication.',
      icon: <Users size={24} />,
    },
    {
      title: 'Frontier AI & Modern 3D',
      desc: 'We incorporate modern generative AI pipelines, vector retrieval, and 3D WebGL interactions to ensure your business stands out.',
      icon: <Cpu size={24} />,
    },
    {
      title: 'Mutual NDA & Milestone Escrow',
      desc: '100% intellectual property ownership transfer upon completion, with milestone-based progress billing to ensure zero risk.',
      icon: <ShieldCheck size={24} />,
    },
  ];

  return (
    <div className="page-content-wrapper">
      <div className="container">
        {/* Page Hero */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 2rem' }}>
          <div className="badge-pill" style={{ marginBottom: '0.75rem' }}>
            <Layers size={14} />
            <span>About CoreCodeX Technologies</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', lineHeight: 1.15, fontWeight: 900, marginBottom: '1rem' }}>
            Architecting The Future of <span className="gradient-text">Software &amp; AI</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            CoreCodeX is a premier digital engineering and artificial intelligence consultancy. We partner with fast-growing enterprises, venture-backed startups, and industry leaders to design, build, and deploy mission-critical digital systems.
          </p>
        </div>

        {/* Founders Leadership Grid */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '0.35rem' }}>Core Leadership</h2>
            <p style={{ color: 'var(--text-muted)' }}>Meet the technical architects behind every CoreCodeX delivery.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '2rem',
            }}
          >
            {leadership.map((leader, idx) => (
              <TiltCard3D key={idx} maxTilt={6}>
                <div
                  className="glass-card"
                  style={{
                    padding: '2.5rem',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    border: '1px solid var(--border-glow)',
                    background: 'var(--bg-surface)',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                      <div>
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '4px' }}>
                          {leader.name}
                        </h3>
                        <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--primary)' }}>
                          {leader.role}
                        </div>
                      </div>
                      <div
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '12px',
                          background: 'var(--primary-light)',
                          color: 'var(--primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Award size={20} />
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                      <MapPin size={16} color="var(--primary)" />
                      <span>{leader.location}</span>
                    </div>

                    <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                      {leader.bio}
                    </p>

                    <h4 style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                      Core Technical Focus:
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
                      {leader.focus.map((item, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                          <CheckCircle2 size={14} color="var(--primary)" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Direct Contact Buttons */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
                    <a
                      href={leader.callUrl}
                      className="btn-pill-primary"
                      style={{ flex: 1, padding: '0.65rem 1rem', fontSize: '0.85rem', textDecoration: 'none', justifyContent: 'center' }}
                    >
                      <Phone size={14} />
                      <span>Call {leader.phone}</span>
                    </a>
                    {leader.emailUrl && (
                      <a
                        href={leader.emailUrl}
                        className="btn-pill-secondary"
                        style={{ flex: 1, padding: '0.65rem 1rem', fontSize: '0.85rem', textDecoration: 'none', justifyContent: 'center' }}
                      >
                        <Mail size={14} />
                        <span>Email</span>
                      </a>
                    )}
                  </div>
                </div>
              </TiltCard3D>
            ))}
          </div>
        </div>

        {/* Company Core Values */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '0.35rem' }}>Our Engineering DNA</h2>
            <p style={{ color: 'var(--text-muted)' }}>The guiding principles embedded in every product we deliver.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2rem',
            }}
          >
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '2rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                }}
              >
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
                    marginBottom: '1.25rem',
                  }}
                >
                  {val.icon}
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--text-main)' }}>
                  {val.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
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
            Ready to Build Your Next Flagship Product?
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1rem' }}>
            Connect with Sahil and Shubham today for a direct architectural consultation and technical blueprint.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-pill-primary" style={{ padding: '0.8rem 1.8rem' }}>
              <span>Book Discovery Call</span>
              <ArrowRight size={16} />
            </Link>
            <Link href="/work" className="btn-pill-secondary" style={{ padding: '0.8rem 1.8rem' }}>
              <span>Review Our Portfolio</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
