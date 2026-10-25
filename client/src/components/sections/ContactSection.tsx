'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, PhoneCall, CheckCircle2, Clock, ShieldAlert } from 'lucide-react';
import { submitClientQuery } from '../../lib/api';
import { QueryFormData } from '../../types';
import { Button } from '../common/Button';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
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
        // Trigger celebratory confetti
        try {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
          });
        } catch {
          // ignore if canvas-confetti is not loaded
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
    <section id="contact" style={{ padding: '2.75rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 1.75rem' }}>
          <div className="badge-pill" style={{ marginBottom: '0.75rem' }}>
            <PhoneCall size={14} />
            <span>Direct Access &amp; Consultation</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: '0.75rem', lineHeight: 1.2 }}>
            Choose How You Want to <span className="gradient-text">Connect With Us</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
            Speak directly with our technical leadership right now or submit a detailed project query. We guarantee a response within 2 hours.
          </p>
        </div>

        {/* Dual Layout: Option 1 (Direct Call Cards) & Option 2 (Query Form) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Option 1: Direct Call Hub */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'var(--primary)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                }}
              >
                1
              </div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)' }}>Option 1: Direct Phone Call</h3>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Skip the queue and speak immediately with the engineers who will architect and oversee your build.
            </p>

            {/* Founder Card 1: Sahil Prasad */}
            <div
              className="glass-card"
              style={{
                padding: '1.75rem',
                borderRadius: 'var(--radius-lg)',
                marginBottom: '1.5rem',
                border: '1px solid var(--border-glow)',
                background: 'var(--bg-card)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <div>
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '2px' }}>
                    Sahil Prasad
                  </h4>
                  <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600 }}>
                    Co-Founder &amp; Chief Solutions Architect
                  </div>
                </div>
                <span
                  style={{
                    fontSize: '0.72rem',
                    padding: '3px 8px',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(16, 185, 129, 0.15)',
                    color: 'var(--success)',
                    fontWeight: 700,
                  }}
                >
                  ● Available Now
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                <MapPin size={16} color="var(--primary)" />
                <span>Vadodara, Gujarat, India</span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <a
                  href="tel:6354729042"
                  className="btn-pill-primary"
                  style={{
                    flex: '1 1 180px',
                    padding: '0.65rem 1rem',
                    textDecoration: 'none',
                    fontSize: '0.88rem',
                  }}
                >
                  <Phone size={15} />
                  <span>Call 6354729042</span>
                </a>

                <a
                  href="https://wa.me/916354729042?text=Hello%20Sahil,%20I%20would%20like%20to%20discuss%20a%20project%20with%20CoreCodeX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-secondary"
                  style={{
                    flex: '1 1 120px',
                    padding: '0.65rem 1rem',
                    textDecoration: 'none',
                    fontSize: '0.88rem',
                  }}
                >
                  <MessageSquare size={15} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Founder Card 2: Shubham Singh */}
            <div
              className="glass-card"
              style={{
                padding: '1.75rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-glow)',
                background: 'var(--bg-card)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <div>
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '2px' }}>
                    Shubham Singh
                  </h4>
                  <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600 }}>
                    Operations &amp; Engineering Director
                  </div>
                </div>
                <span
                  style={{
                    fontSize: '0.72rem',
                    padding: '3px 8px',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(16, 185, 129, 0.15)',
                    color: 'var(--success)',
                    fontWeight: 700,
                  }}
                >
                  ● Available Now
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                <MapPin size={16} color="var(--primary)" />
                <span>Haridwar, Uttarakhand, India</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                <Mail size={16} color="var(--primary)" />
                <span>shubham.singh7985@gmail.com</span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <a
                  href="tel:9559506650"
                  className="btn-pill-primary"
                  style={{
                    flex: '1 1 180px',
                    padding: '0.65rem 1rem',
                    textDecoration: 'none',
                    fontSize: '0.88rem',
                  }}
                >
                  <Phone size={15} />
                  <span>Call 9559506650</span>
                </a>

                <a
                  href="mailto:shubham.singh7985@gmail.com?subject=CoreCodeX%20Project%20Inquiry"
                  className="btn-pill-secondary"
                  style={{
                    flex: '1 1 120px',
                    padding: '0.65rem 1rem',
                    textDecoration: 'none',
                    fontSize: '0.88rem',
                  }}
                >
                  <Mail size={15} />
                  <span>Email</span>
                </a>
              </div>
            </div>

            {/* Response SLA Box */}
            <div
              style={{
                marginTop: '1.5rem',
                padding: '1rem 1.25rem',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <Clock size={20} color="var(--primary)" style={{ flexShrink: 0 }} />
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <strong style={{ color: 'var(--text-main)' }}>Rapid Consultation SLA:</strong> Every inquiry received via call or form is addressed by Sahil or Shubham within 120 minutes.
              </div>
            </div>
          </div>

          {/* Option 2: Send Query Form with Backend MVC Connection */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'var(--secondary)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                }}
              >
                2
              </div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)' }}>Option 2: Send Us a Project Query</h3>
            </div>

            <div
              className="glass-card"
              style={{
                padding: '2.25rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-glow)',
                background: 'var(--bg-surface)',
              }}
            >
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      background: 'rgba(16, 185, 129, 0.2)',
                      color: 'var(--success)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem',
                    }}
                  >
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ fontSize: '1.6rem', marginBottom: '0.75rem', color: 'var(--text-main)' }}>
                    Inquiry Received Successfully!
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem', fontSize: '0.95rem' }}>
                    Thank you, <strong>{formData.name}</strong>. Sahil Prasad &amp; Shubham Singh have been notified of your project brief. You will receive an architecture proposal and call within 2 hours.
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
                    Send Another Query
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
                      placeholder="e.g. Alex Henderson"
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
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

                  {/* Email & Phone grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
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
                        placeholder="alex@company.com"
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
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
                          padding: '0.75rem 1rem',
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

                  {/* Service & Budget grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                        Target Service *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
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
                        <option value="App Development">App Development (iOS/Android)</option>
                        <option value="AI Integration">Enterprise AI &amp; RAG Systems</option>
                        <option value="Chatbot Development">AI Chatbots &amp; Voice Agents</option>
                        <option value="AI / Machine Learning">AI / ML Custom Models</option>
                        <option value="Social Media & Digital Marketing">Social Media &amp; Digital Marketing (Posts, Reels &amp; Ads)</option>
                        <option value="Full MERN Enterprise Solution">Full MERN Enterprise Solution</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                        Estimated Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
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
                        <option value="₹50,000+">₹50,000+ (Enterprise Multi-Stack)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                      Project Details &amp; Objectives *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe your goals, required features, or current bottlenecks..."
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
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
                    loadingText="Submitting Query to Founders..."
                    fullWidth
                    style={{ padding: '0.85rem' }}
                    icon={<Send size={16} />}
                  >
                    Submit Project Query
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
