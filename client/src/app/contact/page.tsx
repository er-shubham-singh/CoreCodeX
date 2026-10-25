'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, PhoneCall, CheckCircle2, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { submitClientQuery } from '../../lib/api';
import { QueryFormData } from '../../types';
import { Button } from '../../components/common/Button';
import confetti from 'canvas-confetti';

export default function ContactPage() {
  const [formData, setFormData] = useState<QueryFormData>({
    name: '',
    email: '',
    phone: '',
    service: 'Web Development',
    budget: '₹10,000 - ₹15,000',
    timeline: '1 - 3 Months',
    message: '',
    preferredContact: 'Query',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const res = await submitClientQuery(formData);
      if (res.success) {
        setSubmitted(true);
        try {
          confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.6 },
          });
        } catch {
          // ignore
        }
      } else {
        setErrorMessage(res.message || 'Something went wrong. Please call us directly.');
      }
    } catch {
      setErrorMessage('Could not connect to server. Please call our founders directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-content-wrapper">
      <div className="container">
        {/* Page Hero */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 2rem' }}>
          <div className="badge-pill" style={{ marginBottom: '0.75rem' }}>
            <PhoneCall size={14} />
            <span>Direct Access &amp; Consultation</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', lineHeight: 1.15, fontWeight: 900, marginBottom: '1rem' }}>
            Connect Directly with <span className="gradient-text">CoreCodeX Leadership</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Speak immediately with our founding architects or send a detailed project brief. We provide guaranteed technical feedback within 120 minutes.
          </p>
        </div>

        {/* Dual Layout: Option 1 (Direct Call) vs Option 2 (Query Form) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '2rem',
            alignItems: 'start',
            marginBottom: '2.5rem',
          }}
        >
          {/* Option 1: Direct Phone Call Hub */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'var(--primary)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1rem',
                }}
              >
                1
              </div>
              <h2 style={{ fontSize: '1.6rem', color: 'var(--text-main)' }}>Option 1: Direct Phone Call</h2>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              Have an urgent requirement or want to discuss project feasibility right now? Call our founders directly on their mobile numbers.
            </p>

            {/* Founder Card 1: Sahil Prasad */}
            <div
              className="glass-card"
              style={{
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                marginBottom: '1.75rem',
                border: '1px solid var(--border-glow)',
                background: 'var(--bg-surface)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '4px' }}>
                    Sahil Prasad
                  </h3>
                  <div style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 700 }}>
                    Co-Founder &amp; Chief Solutions Architect
                  </div>
                </div>
                <span
                  style={{
                    fontSize: '0.74rem',
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(16, 185, 129, 0.15)',
                    color: 'var(--success)',
                    fontWeight: 700,
                  }}
                >
                  ● Line Active
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                <MapPin size={16} color="var(--primary)" />
                <span>Vadodara, Gujarat, India</span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <a
                  href="tel:6354729042"
                  className="btn-pill-primary"
                  style={{ flex: '1 1 180px', padding: '0.7rem 1.2rem', textDecoration: 'none', fontSize: '0.9rem', justifyContent: 'center' }}
                >
                  <Phone size={16} />
                  <span>Call +91 6354729042</span>
                </a>
                <a
                  href="https://wa.me/916354729042?text=Hello%20Sahil,%20I%20want%20to%20discuss%20a%20project%20with%20CoreCodeX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-secondary"
                  style={{ flex: '1 1 120px', padding: '0.7rem 1rem', textDecoration: 'none', fontSize: '0.9rem', justifyContent: 'center' }}
                >
                  <MessageSquare size={16} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Founder Card 2: Shubham Singh */}
            <div
              className="glass-card"
              style={{
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-glow)',
                background: 'var(--bg-surface)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '4px' }}>
                    Shubham Singh
                  </h3>
                  <div style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 700 }}>
                    Operations &amp; Engineering Director
                  </div>
                </div>
                <span
                  style={{
                    fontSize: '0.74rem',
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(16, 185, 129, 0.15)',
                    color: 'var(--success)',
                    fontWeight: 700,
                  }}
                >
                  ● Line Active
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                <MapPin size={16} color="var(--primary)" />
                <span>Haridwar, Uttarakhand, India</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.5rem', wordBreak: 'break-all' }}>
                <Mail size={16} color="var(--primary)" style={{ flexShrink: 0 }} />
                <span style={{ wordBreak: 'break-all' }}>shubham.singh7985@gmail.com</span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <a
                  href="tel:9559506650"
                  className="btn-pill-primary"
                  style={{ flex: '1 1 180px', padding: '0.7rem 1.2rem', textDecoration: 'none', fontSize: '0.9rem', justifyContent: 'center' }}
                >
                  <Phone size={16} />
                  <span>Call +91 9559506650</span>
                </a>
                <a
                  href="mailto:shubham.singh7985@gmail.com?subject=CoreCodeX%20Project%20Inquiry"
                  className="btn-pill-secondary"
                  style={{ flex: '1 1 120px', padding: '0.7rem 1rem', textDecoration: 'none', fontSize: '0.9rem', justifyContent: 'center' }}
                >
                  <Mail size={16} />
                  <span>Email</span>
                </a>
              </div>
            </div>

            <div
              style={{
                marginTop: '1.5rem',
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-surface-elevated)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <Clock size={22} color="var(--primary)" style={{ flexShrink: 0 }} />
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <strong style={{ color: 'var(--text-main)' }}>Response SLA:</strong> Inquiries submitted via call or form are answered directly by Sahil or Shubham within 2 hours.
              </div>
            </div>
          </div>

          {/* Option 2: Send Query Form with Loader */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'var(--secondary)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1rem',
                }}
              >
                2
              </div>
              <h2 style={{ fontSize: '1.6rem', color: 'var(--text-main)' }}>Option 2: Submit a Project Query</h2>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              Fill in your specifications and timeline. We will prepare an architectural proposal and schedule a technical walkthrough.
            </p>

            <div
              className="glass-card"
              style={{
                padding: '2.5rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-glow)',
                background: 'var(--bg-surface)',
              }}
            >
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <div
                    style={{
                      width: '68px',
                      height: '68px',
                      borderRadius: '50%',
                      background: 'rgba(16, 185, 129, 0.2)',
                      color: 'var(--success)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem',
                    }}
                  >
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 style={{ fontSize: '1.6rem', marginBottom: '0.75rem', color: 'var(--text-main)' }}>
                    Inquiry Received Successfully!
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem', fontSize: '0.95rem' }}>
                    Thank you, <strong>{formData.name}</strong>. Sahil Prasad &amp; Shubham Singh have been notified of your project brief. You will receive an architecture proposal within 2 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: 'Web Development',
                        budget: '₹10,000 - ₹15,000',
                        timeline: '1 - 3 Months',
                        message: '',
                        preferredContact: 'Query',
                      });
                    }}
                    className="btn-pill-secondary"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {errorMessage && (
                    <div
                      style={{
                        padding: '0.75rem 1rem',
                        borderRadius: '8px',
                        background: 'rgba(239, 68, 68, 0.15)',
                        border: '1px solid #EF4444',
                        color: '#EF4444',
                        fontSize: '0.85rem',
                        marginBottom: '1.25rem',
                      }}
                    >
                      {errorMessage}
                    </div>
                  )}

                  {/* Name */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rachel Adams"
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '8px',
                        border: '1px solid var(--border-color)',
                        background: 'var(--bg-main)',
                        color: 'var(--text-main)',
                        fontFamily: 'inherit',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  {/* Email & Phone */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1rem', marginBottom: '1.25rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="rachel@acme.com"
                        style={{
                          width: '100%',
                          padding: '0.8rem 1rem',
                          borderRadius: '8px',
                          border: '1px solid var(--border-color)',
                          background: 'var(--bg-main)',
                          color: 'var(--text-main)',
                          fontFamily: 'inherit',
                          fontSize: '0.9rem',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 9876543210"
                        style={{
                          width: '100%',
                          padding: '0.8rem 1rem',
                          borderRadius: '8px',
                          border: '1px solid var(--border-color)',
                          background: 'var(--bg-main)',
                          color: 'var(--text-main)',
                          fontFamily: 'inherit',
                          fontSize: '0.9rem',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>

                  {/* Service & Budget */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1rem', marginBottom: '1.25rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                        Required Service *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '0.8rem 1rem',
                          borderRadius: '8px',
                          border: '1px solid var(--border-color)',
                          background: 'var(--bg-main)',
                          color: 'var(--text-main)',
                          fontFamily: 'inherit',
                          fontSize: '0.88rem',
                          outline: 'none',
                        }}
                      >
                        <option value="Web Development">Web Development (Next.js/MERN)</option>
                        <option value="App Development">Mobile App (iOS/Android)</option>
                        <option value="AI Integration">Enterprise AI &amp; RAG Systems</option>
                        <option value="Chatbot Development">AI Chatbots &amp; Voice Agents</option>
                        <option value="AI / Machine Learning">AI / ML Custom Models</option>
                        <option value="Social Media & Digital Marketing">Social Media &amp; Digital Marketing (Posts, Reels &amp; Ads)</option>
                        <option value="Full MERN Enterprise Solution">Full MERN Enterprise Solution</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '0.8rem 1rem',
                          borderRadius: '8px',
                          border: '1px solid var(--border-color)',
                          background: 'var(--bg-main)',
                          color: 'var(--text-main)',
                          fontFamily: 'inherit',
                          fontSize: '0.88rem',
                          outline: 'none',
                        }}
                      >
                        <option value="₹10,000 - ₹15,000">₹10,000 - ₹15,000 (Starter / Growth Package)</option>
                        <option value="₹15,000 - ₹25,000">₹15,000 - ₹25,000 (Professional Suite)</option>
                        <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000 (Scale Architecture)</option>
                        <option value="₹50,000+">₹50,000+ (Enterprise Multi-Platform)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                      Project Specifications &amp; Goals *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your product goals, required integrations, or deadline..."
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '8px',
                        border: '1px solid var(--border-color)',
                        background: 'var(--bg-main)',
                        color: 'var(--text-main)',
                        fontFamily: 'inherit',
                        fontSize: '0.9rem',
                        outline: 'none',
                        resize: 'vertical',
                      }}
                    />
                  </div>

                  {/* Submit Button with Loader */}
                  <Button
                    type="submit"
                    variant="primary"
                    loading={loading}
                    loadingText="Submitting to Founders..."
                    fullWidth
                    style={{ padding: '0.9rem' }}
                    icon={<Send size={16} />}
                  >
                    Submit Project Query
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '1.5rem',
          }}
        >
          <div className="glass-card" style={{ padding: '2rem', background: 'var(--bg-surface)' }}>
            <MapPin size={24} color="var(--primary)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Vadodara Hub</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
              Full-Stack MERN Architecture, Next.js Edge Engineering &amp; 3D Visual Systems.
            </p>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)' }}>
              Led by Sahil Prasad • <a href="tel:6354729042" style={{ color: 'var(--primary)', textDecoration: 'none' }}>+91 6354729042</a>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '2rem', background: 'var(--bg-surface)' }}>
            <MapPin size={24} color="var(--primary)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Haridwar Hub</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
              Enterprise AI / ML Model Serving, Autonomous Chatbots &amp; Mobile Systems.
            </p>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)' }}>
              Led by Shubham Singh • <a href="tel:9559506650" style={{ color: 'var(--primary)', textDecoration: 'none' }}>+91 9559506650</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
