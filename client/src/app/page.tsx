'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HeroSection } from '../components/sections/HeroSection';
import { servicesData } from '../config/services.config';
import { portfolioData } from '../config/portfolio.config';
import { reviewsData } from '../config/reviews.config';
import { TiltCard3D } from '../components/3d/TiltCard3D';
import {
  ArrowRight,
  Globe,
  Smartphone,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Star,
  Phone,
  PhoneCall,
  MapPin,
  Layers,
  Calculator,
} from 'lucide-react';

export default function HomePage() {
  const topServices = servicesData.slice(0, 3);
  const featuredWorks = portfolioData.slice(0, 2);
  const topReview = reviewsData[0];

  return (
    <>
      {/* 1. Interactive 3D Hero */}
      <HeroSection />

      {/* 2. Core Capabilities Teaser */}
      <section style={{ padding: '2.75rem 0', position: 'relative' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '1.75rem' }}>
            <div>
              <div className="badge-pill" style={{ marginBottom: '0.5rem' }}>
                <Sparkles size={14} />
                <span>What We Engineer</span>
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', lineHeight: 1.2 }}>
                Specialized Solutions, <span className="gradient-text">Built to Scale</span>
              </h2>
            </div>
            <Link href="/services" className="btn-pill-secondary" style={{ textDecoration: 'none' }}>
              <span>View All 6 Services</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
              marginBottom: '2rem',
            }}
          >
            {topServices.map((svc) => (
              <TiltCard3D key={svc.id}>
                <div
                  className="glass-card"
                  style={{
                    padding: '2.25rem',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    background: 'var(--bg-card)',
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-full)',
                        background: 'var(--primary-light)',
                        color: 'var(--primary)',
                        display: 'inline-block',
                        marginBottom: '1.25rem',
                      }}
                    >
                      {svc.badge}
                    </span>
                    <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', color: 'var(--text-main)' }}>
                      {svc.title}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                      {svc.shortDesc}
                    </p>
                  </div>
                  <div>
                    <Link
                      href={`/services#${svc.id}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: 'var(--primary)',
                        textDecoration: 'none',
                      }}
                    >
                      <span>Explore Technical Specs</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </TiltCard3D>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Flagship Works Teaser */}
      <section style={{ padding: '2.75rem 0', background: 'var(--bg-surface-elevated)', position: 'relative' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '1.75rem' }}>
            <div>
              <div className="badge-pill" style={{ marginBottom: '0.5rem' }}>
                <Layers size={14} />
                <span>Production Portfolio</span>
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', lineHeight: 1.2 }}>
                Live Platforms <span className="gradient-text">Engineered by CoreCodeX</span>
              </h2>
            </div>
            <Link href="/work" className="btn-pill-secondary" style={{ textDecoration: 'none' }}>
              <span>View All 4 Projects &amp; Live Demos</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {featuredWorks.map((project) => (
              <TiltCard3D key={project.id} maxTilt={5}>
                <div
                  className="glass-card"
                  style={{
                    overflow: 'hidden',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'var(--bg-card)',
                  }}
                >
                  <div style={{ position: 'relative', width: '100%', height: '230px', backgroundColor: '#07090E' }}>
                    <Image src={project.previewImage} alt={project.title} fill style={{ objectFit: 'cover' }} />
                    <div
                      style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(0, 0, 0, 0.75)',
                        backdropFilter: 'blur(8px)',
                        color: 'var(--text-main)',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                      }}
                    >
                      {project.category}
                    </div>
                  </div>
                  <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                    <div>
                      <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                        {project.shortDescription}
                      </p>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                      <Link
                        href="/work"
                        className="btn-pill-secondary"
                        style={{ flex: 1, padding: '0.6rem', fontSize: '0.82rem', justifyContent: 'center', textDecoration: 'none' }}
                      >
                        Full Case Study
                      </Link>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-pill-primary"
                        style={{ flex: 1, padding: '0.6rem', fontSize: '0.82rem', justifyContent: 'center', textDecoration: 'none' }}
                      >
                        <span>Live Site</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </TiltCard3D>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Client Proof Banner Teaser */}
      <section style={{ padding: '2.75rem 0', position: 'relative' }}>
        <div className="container">
          <div
            className="glass-card"
            style={{
              padding: '2rem 1.75rem',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-glow)',
              background: 'var(--bg-surface)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              alignItems: 'center',
            }}
          >
            <div>
              <div className="badge-pill" style={{ marginBottom: '1rem' }}>
                <ShieldCheck size={14} />
                <span>Verified Client Feedback</span>
              </div>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>
                Trusted by Fast-Growing Tech Brands
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '0.98rem' }}>
                &ldquo;{topReview.review}&rdquo;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ position: 'relative', width: '44px', height: '44px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--primary)' }}>
                  <Image src={topReview.avatar} alt={topReview.author} fill style={{ objectFit: 'cover' }} />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.95rem' }}>{topReview.author}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{topReview.role}, {topReview.company}</div>
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'center', padding: '2rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', color: '#F59E0B', marginBottom: '0.75rem' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>
              <div style={{ fontSize: '2.4rem', fontWeight: 900, marginBottom: '0.35rem' }}>5.0 / 5.0</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                100% Verified Delivery Track Record
              </div>
              <Link href="/reviews" className="btn-pill-primary" style={{ padding: '0.75rem 1.75rem', textDecoration: 'none' }}>
                <span>Read All Client Reviews</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Direct Leadership Quick-Call Hub */}
      <section style={{ padding: '2.75rem 0', background: 'var(--bg-surface-elevated)', position: 'relative' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 1.75rem' }}>
            <div className="badge-pill" style={{ marginBottom: '0.5rem' }}>
              <PhoneCall size={14} />
              <span>Direct Founder Access</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', lineHeight: 1.2, marginBottom: '0.75rem' }}>
              Speak Directly with <span className="gradient-text">Our Engineering Leads</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
              No middle managers. Call Sahil Prasad or Shubham Singh directly for project discovery.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
              maxWidth: '900px',
              margin: '0 auto 2.5rem',
            }}
          >
            {/* Sahil Prasad Card */}
            <div className="glass-card" style={{ padding: '2rem', background: 'var(--bg-surface)' }}>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '4px' }}>Sahil Prasad</h3>
              <div style={{ fontSize: '0.82rem', color: 'var(--primary)', fontWeight: 700, marginBottom: '0.75rem' }}>
                Co-Founder &amp; Solutions Architect
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
                <MapPin size={15} color="var(--primary)" />
                <span>Vadodara, Gujarat</span>
              </div>
              <a href="tel:6354729042" className="btn-pill-primary" style={{ width: '100%', padding: '0.7rem', textDecoration: 'none', justifyContent: 'center' }}>
                <Phone size={15} />
                <span>Call +91 6354729042</span>
              </a>
            </div>

            {/* Shubham Singh Card */}
            <div className="glass-card" style={{ padding: '2rem', background: 'var(--bg-surface)' }}>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '4px' }}>Shubham Singh</h3>
              <div style={{ fontSize: '0.82rem', color: 'var(--primary)', fontWeight: 700, marginBottom: '0.75rem' }}>
                Operations &amp; Engineering Director
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
                <MapPin size={15} color="var(--primary)" />
                <span>Haridwar, Uttarakhand</span>
              </div>
              <a href="tel:9559506650" className="btn-pill-primary" style={{ width: '100%', padding: '0.7rem', textDecoration: 'none', justifyContent: 'center' }}>
                <Phone size={15} />
                <span>Call +91 9559506650</span>
              </a>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/contact" className="btn-pill-secondary" style={{ padding: '0.75rem 2rem', textDecoration: 'none' }}>
              <span>Or Submit an Interactive Project Brief</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
