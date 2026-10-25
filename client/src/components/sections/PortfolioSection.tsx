'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { portfolioData } from '../../config/portfolio.config';
import { ProjectItem } from '../../types';
import { TiltCard3D } from '../3d/TiltCard3D';
import { Modal } from '../common/Modal';
import { ExternalLink, Eye, CheckCircle2, TrendingUp, Sparkles, Layers } from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  return (
    <section id="portfolio" style={{ padding: '2.75rem 0', background: 'var(--bg-surface-elevated)', position: 'relative' }}>
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 1.75rem' }}>
          <div className="badge-pill" style={{ marginBottom: '0.75rem' }}>
            <Layers size={14} />
            <span>Proven Enterprise Track Record</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '0.75rem', lineHeight: 1.2 }}>
            Featured Works &amp; <span className="gradient-text">Live Client Platforms</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
            Explore real production platforms engineered and scaled by CoreCodeX. Inspect live metrics, architecture blueprints, and verified client deliverables.
          </p>
        </div>

        {/* 4 Flagship Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
            marginBottom: '2rem',
          }}
        >
          {portfolioData.map((project) => (
            <TiltCard3D key={project.id} maxTilt={6}>
              <div
                className="glass-card"
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  background: 'var(--bg-card)',
                }}
              >
                {/* Browser Window Frame Header */}
                <div
                  style={{
                    padding: '0.65rem 1rem',
                    background: 'var(--bg-main)',
                    borderBottom: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#EF4444' }} />
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#F59E0B' }} />
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981' }} />
                  </div>
                  <div
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-muted)',
                      background: 'var(--bg-surface)',
                      padding: '2px 10px',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid var(--border-color)',
                    }}
                  >
                    {project.url.replace('https://', '')}
                  </div>
                  <div style={{ width: '24px' }} />
                </div>

                {/* Screenshot Image Preview Container */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '220px',
                    overflow: 'hidden',
                    backgroundColor: '#0a0d14',
                  }}
                >
                  <Image
                    src={project.previewImage}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    className="project-screenshot"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Category Pill Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(0, 0, 0, 0.75)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid var(--border-glow)',
                      color: 'var(--text-main)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                    }}
                  >
                    {project.category}
                  </div>
                </div>

                {/* Content Body */}
                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem', color: 'var(--text-main)' }}>
                      {project.title}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                      {project.shortDescription}
                    </p>

                    {/* Performance Metrics */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '8px',
                        padding: '0.85rem',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--bg-surface)',
                        border: '1px solid var(--border-color)',
                        marginBottom: '1.25rem',
                        textAlign: 'center',
                      }}
                    >
                      {project.metrics.slice(0, 3).map((metric, i) => (
                        <div key={i}>
                          <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--primary)' }}>
                            {metric.value}
                          </div>
                          <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.5rem' }}>
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: 600,
                            padding: '3px 8px',
                            borderRadius: '6px',
                            background: 'var(--bg-surface)',
                            color: 'var(--text-secondary)',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div
                    style={{
                      display: 'flex',
                      gap: '0.75rem',
                      borderTop: '1px solid var(--border-color)',
                      paddingTop: '1.25rem',
                    }}
                  >
                    <button
                      onClick={() => setActiveProject(project)}
                      className="btn-pill-secondary"
                      style={{
                        flex: 1,
                        padding: '0.6rem 0.9rem',
                        fontSize: '0.82rem',
                        justifyContent: 'center',
                      }}
                    >
                      <Eye size={14} />
                      <span>Case Study</span>
                    </button>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-pill-primary"
                      style={{
                        flex: 1,
                        padding: '0.6rem 0.9rem',
                        fontSize: '0.82rem',
                        justifyContent: 'center',
                        textDecoration: 'none',
                      }}
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

      {/* Case Study Detailed Modal */}
      {activeProject && (
        <Modal
          isOpen={!!activeProject}
          onClose={() => setActiveProject(null)}
          title={activeProject.title}
          maxWidth="820px"
        >
          <div>
            {/* Modal Image */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '320px',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                marginBottom: '1.5rem',
              }}
            >
              <Image
                src={activeProject.previewImage}
                alt={activeProject.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* Metrics */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '1rem',
                marginBottom: '1.5rem',
              }}
            >
              {activeProject.metrics.map((m, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '1rem',
                    background: 'var(--bg-surface-elevated)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-color)',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--primary)' }}>{m.value}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>
              Engineering Execution &amp; Results
            </h4>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              {activeProject.fullDescription}
            </p>

            <h4 style={{ fontSize: '0.95rem', marginBottom: '0.75rem', color: 'var(--text-main)' }}>
              Core Technical Deliverables:
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '2rem' }}>
              {activeProject.tags.map((t, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={15} color="var(--primary)" />
                  <span>{t}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
              <button
                onClick={() => setActiveProject(null)}
                className="btn-pill-secondary"
                style={{ padding: '0.65rem 1.4rem' }}
              >
                Close
              </button>
              <a
                href={activeProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-primary"
                style={{ padding: '0.65rem 1.4rem', textDecoration: 'none' }}
              >
                <span>Visit {activeProject.url.replace('https://', '')}</span>
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </Modal>
      )}

      <style jsx>{`
        .project-screenshot:hover {
          transform: scale(1.04);
        }
      `}</style>
    </section>
  );
};
