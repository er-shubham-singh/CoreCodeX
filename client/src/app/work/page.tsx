'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { portfolioData } from '../../config/portfolio.config';
import { ProjectItem } from '../../types';
import { TiltCard3D } from '../../components/3d/TiltCard3D';
import { Modal } from '../../components/common/Modal';
import { ExternalLink, Eye, CheckCircle2, Layers, ArrowRight, TrendingUp } from 'lucide-react';

export default function WorkPage() {
  const [filter, setFilter] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'Fintech', label: 'FinTech & Cloud' },
    { id: 'E-Commerce', label: 'E-Commerce' },
    { id: 'Hospitality', label: 'Hospitality & Travel' },
    { id: 'Entertainment', label: 'Entertainment & Events' },
  ];

  const filteredProjects = portfolioData.filter((project) => {
    if (filter === 'all') return true;
    return project.category.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div className="page-content-wrapper">
      <div className="container">
        {/* Page Hero */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 2rem' }}>
          <div className="badge-pill" style={{ marginBottom: '0.75rem' }}>
            <Layers size={14} />
            <span>Proven Enterprise Track Record</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', lineHeight: 1.15, fontWeight: 900, marginBottom: '1rem' }}>
            Our Work &amp; <span className="gradient-text">Flagship Case Studies</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Every product we build is designed for peak performance, sub-second latency, and measurable business growth. Explore live systems deployed by CoreCodeX.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '2rem',
          }}
        >
          {categories.map((cat) => {
            const isActive = filter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                style={{
                  padding: '8px 18px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid',
                  borderColor: isActive ? 'var(--primary)' : 'var(--border-color)',
                  background: isActive ? 'var(--primary)' : 'var(--bg-surface-elevated)',
                  color: isActive ? '#FFFFFF' : 'var(--text-secondary)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '2rem',
            marginBottom: '4rem',
          }}
        >
          {filteredProjects.map((project) => (
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
                {/* Browser Frame Window Header */}
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

                {/* Screenshot Image Container */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '240px',
                    backgroundColor: '#07090E',
                    overflow: 'hidden',
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

                {/* Content */}
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', color: 'var(--text-main)' }}>
                      {project.title}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                      {project.shortDescription}
                    </p>

                    {/* Metrics Grid */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 75px), 1fr))',
                        gap: '8px',
                        padding: '1rem',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--bg-surface)',
                        border: '1px solid var(--border-color)',
                        marginBottom: '1.5rem',
                        textAlign: 'center',
                      }}
                    >
                      {project.metrics.map((metric, i) => (
                        <div key={i}>
                          <div style={{ fontSize: '1rem', fontWeight: 900, color: 'var(--primary)' }}>
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
                            fontSize: '0.74rem',
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

                  {/* Actions */}
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
                      style={{ flex: 1, padding: '0.65rem', fontSize: '0.85rem', justifyContent: 'center' }}
                    >
                      <Eye size={15} />
                      <span>Case Study</span>
                    </button>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-pill-primary"
                      style={{ flex: 1, padding: '0.65rem', fontSize: '0.85rem', justifyContent: 'center', textDecoration: 'none' }}
                    >
                      <span>Live Site</span>
                      <ExternalLink size={15} />
                    </a>
                  </div>
                </div>
              </div>
            </TiltCard3D>
          ))}
        </div>

        {/* Bottom Banner */}
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
            Want Your Product Featured Here Next?
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1rem' }}>
            Let us discuss how CoreCodeX can architect, build, and deploy your web or mobile app in rapid agile sprints.
          </p>
          <Link href="/contact" className="btn-pill-primary" style={{ padding: '0.85rem 2rem' }}>
            <span>Initiate Project Consultation</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Case Study Detailed Modal */}
      {activeProject && (
        <Modal
          isOpen={!!activeProject}
          onClose={() => setActiveProject(null)}
          title={activeProject.title}
          maxWidth="850px"
        >
          <div>
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '340px',
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

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 110px), 1fr))',
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

            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.65rem', color: 'var(--text-main)' }}>
              Client Overview &amp; Delivered Architecture
            </h4>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              {activeProject.fullDescription}
            </p>

            <h4 style={{ fontSize: '0.95rem', marginBottom: '0.75rem', color: 'var(--text-main)' }}>
              Core Technical Deliverables:
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))', gap: '0.75rem', marginBottom: '2rem' }}>
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
                Close Case Study
              </button>
              <a
                href={activeProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-primary"
                style={{ padding: '0.65rem 1.4rem', textDecoration: 'none' }}
              >
                <span>Visit Live Platform</span>
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
    </div>
  );
}
