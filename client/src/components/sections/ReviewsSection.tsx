'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { reviewsData } from '../../config/reviews.config';
import { TiltCard3D } from '../3d/TiltCard3D';
import { Star, ShieldCheck, CheckCircle2, Quote, ArrowUpRight } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'verified'>('all');

  return (
    <section id="reviews" style={{ padding: '2.75rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 1.75rem' }}>
          <div className="badge-pill" style={{ marginBottom: '0.75rem' }}>
            <ShieldCheck size={14} />
            <span>Client Trust &amp; Verified Reviews</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '0.75rem', lineHeight: 1.2 }}>
            What Founders &amp; CTOs <span className="gradient-text">Say About CoreCodeX</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
            Real testimonials from executive stakeholders across FinTech, E-Commerce, Hospitality, and Entertainment enterprises.
          </p>

          {/* Trust Score Badges */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1.5rem',
              marginTop: '1.5rem',
              padding: '0.65rem 1.25rem',
              borderRadius: 'var(--radius-full)',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-glow)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#F59E0B' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="#F59E0B" />
              ))}
              <span style={{ marginLeft: '6px', fontWeight: 800, fontSize: '0.9rem', color: 'var(--text-main)' }}>
                5.0 / 5.0
              </span>
            </div>
            <div style={{ width: '1px', height: '18px', background: 'var(--border-color)' }} />
            <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
              100% Verified Project Delivery
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '1.5rem',
          }}
        >
          {reviewsData.map((rev) => (
            <TiltCard3D key={rev.id} maxTilt={6}>
              <div
                className="glass-card"
                style={{
                  padding: '2rem',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: 'var(--bg-card)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Subtle Watermark Quote Icon */}
                <Quote
                  size={60}
                  color="var(--border-glow)"
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '16px',
                    opacity: 0.15,
                    pointerEvents: 'none',
                  }}
                />

                <div>
                  {/* Rating Stars and Verified Badge */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div style={{ display: 'flex', gap: '3px' }}>
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} size={15} fill="#F59E0B" color="#F59E0B" />
                      ))}
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: 'var(--success)',
                        background: 'rgba(16, 185, 129, 0.1)',
                        padding: '3px 8px',
                        borderRadius: 'var(--radius-full)',
                        border: '1px solid rgba(16, 185, 129, 0.25)',
                      }}
                    >
                      <CheckCircle2 size={12} />
                      <span>Verified Client</span>
                    </div>
                  </div>

                  {/* Project Delivered Tag */}
                  <div
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--primary)',
                      marginBottom: '1rem',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    ↳ Delivered: {rev.projectDelivered}
                  </div>

                  {/* Review Text */}
                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.92rem',
                      lineHeight: 1.7,
                      fontStyle: 'italic',
                      marginBottom: '1.75rem',
                    }}
                  >
                    &ldquo;{rev.review}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    borderTop: '1px solid var(--border-color)',
                    paddingTop: '1.25rem',
                  }}
                >
                  <div
                    style={{
                      position: 'relative',
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: '2px solid var(--primary)',
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src={rev.avatar}
                      alt={rev.author}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>

                  <div style={{ flexGrow: 1 }}>
                    <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-main)' }}>
                      {rev.author}
                    </div>
                    <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>
                      {rev.role} •{' '}
                      {rev.website ? (
                        <a
                          href={rev.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}
                        >
                          {rev.company} <ArrowUpRight size={11} style={{ display: 'inline' }} />
                        </a>
                      ) : (
                        <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>{rev.company}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard3D>
          ))}
        </div>
      </div>
    </section>
  );
};
