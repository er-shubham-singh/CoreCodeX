'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChevronDown,
  Menu,
  X,
  Layers,
  Code,
  Smartphone,
  Sparkles,
  Bot,
  Cpu,
  PhoneCall,
  Briefcase,
  Star,
  Calculator,
  Building2,
  ArrowRight,
  Phone,
  Megaphone,
} from 'lucide-react';
import { ThemeSwitcher } from './ThemeSwitcher';

export const PillNavbar: React.FC = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu whenever route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const serviceLinks = [
    { name: 'Web & Web App Development', href: '/services#web-development', desc: 'High-performance Next.js & enterprise web apps', icon: <Code size={16} /> },
    { name: 'Mobile App Engineering', href: '/services#app-development', desc: 'Native iOS, Android & Cross-Platform Flutter/RN', icon: <Smartphone size={16} /> },
    { name: 'Enterprise AI Integration', href: '/services#ai-integration', desc: 'Gemini, GPT-4o, Claude RAG & Vector engines', icon: <Sparkles size={16} /> },
    { name: 'AI Chatbots & Voice Agents', href: '/services#chatbots', desc: 'Omnichannel WhatsApp, Web & voice agents', icon: <Bot size={16} /> },
    { name: 'AI / Machine Learning Systems', href: '/services#ai-ml', desc: 'Custom fine-tuned domain models & computer vision', icon: <Cpu size={16} /> },
    { name: 'Social Media & Digital Marketing', href: '/services#digital-marketing', desc: 'Complete account handling, creative posts, reels & ads', icon: <Megaphone size={16} /> },
  ];

  const mainNavLinks = [
    { name: 'Company', href: '/about', icon: <Building2 size={18} /> },
    { name: 'Services', href: '/services', hasDropdown: true, icon: <Sparkles size={18} /> },
    { name: 'Our Work', href: '/work', icon: <Briefcase size={18} /> },
    { name: 'Reviews', href: '/reviews', icon: <Star size={18} /> },
    { name: 'Cost Estimator', href: '/estimator', icon: <Calculator size={18} /> },
    { name: 'Contact', href: '/contact', icon: <PhoneCall size={18} /> },
  ];

  return (
    <>
      <header
        className="floating-pill-header"
        style={{
          boxShadow: scrolled
            ? '0 12px 35px -8px rgba(0, 0, 0, 0.5), 0 0 25px -4px var(--primary-light)'
            : '0 8px 25px -8px rgba(0, 0, 0, 0.3)',
        }}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            color: 'var(--text-main)',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '9px',
              background: 'var(--gradient-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              boxShadow: '0 0 12px -2px var(--primary)',
              flexShrink: 0,
            }}
          >
            <Layers size={18} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.15rem',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
              }}
            >
              Core<span className="gradient-text">CodeX</span>
            </span>
            <span
              style={{
                fontSize: '0.58rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                display: 'block',
              }}
              className="logo-subtext"
            >
              AI &amp; Engineering
            </span>
          </div>
        </Link>

        {/* Center Nav Links (Desktop >= 900px) */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.4rem',
          }}
          className="nav-desktop"
        >
          <Link
            href="/about"
            style={{
              textDecoration: 'none',
              color: pathname === '/about' ? 'var(--primary)' : 'var(--text-secondary)',
              fontSize: '0.88rem',
              fontWeight: 600,
              transition: 'color 0.2s ease',
            }}
            className="nav-link-hover"
          >
            Company
          </Link>

          {/* Services Dropdown */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <Link
              href="/services"
              style={{
                background: 'none',
                border: 'none',
                color: pathname === '/services' ? 'var(--primary)' : 'var(--text-secondary)',
                fontSize: '0.88rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                cursor: 'pointer',
                padding: '6px 0',
                fontFamily: 'inherit',
                textDecoration: 'none',
              }}
              className="nav-link-hover"
            >
              Services
              <ChevronDown
                size={14}
                style={{
                  transform: servicesDropdown ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease',
                }}
              />
            </Link>

            {servicesDropdown && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '-120px',
                  width: '360px',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-glow)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '0.75rem',
                  boxShadow: '0 20px 40px -10px rgba(0,0,0,0.6)',
                  zIndex: 110,
                  backdropFilter: 'blur(20px)',
                }}
              >
                {serviceLinks.map((service, idx) => (
                  <Link
                    key={idx}
                    href={service.href}
                    onClick={() => setServicesDropdown(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      padding: '8px 12px',
                      borderRadius: 'var(--radius-md)',
                      textDecoration: 'none',
                      color: 'var(--text-main)',
                      transition: 'background 0.2s ease',
                    }}
                    className="dropdown-item-hover"
                  >
                    <div
                      style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '8px',
                        background: 'var(--primary-light)',
                        color: 'var(--primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px',
                      }}
                    >
                      {service.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.84rem', fontWeight: 700 }}>{service.name}</div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                        {service.desc}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/work"
            style={{
              textDecoration: 'none',
              color: pathname === '/work' ? 'var(--primary)' : 'var(--text-secondary)',
              fontSize: '0.88rem',
              fontWeight: 600,
              transition: 'color 0.2s ease',
            }}
            className="nav-link-hover"
          >
            Our Work
          </Link>

          <Link
            href="/reviews"
            style={{
              textDecoration: 'none',
              color: pathname === '/reviews' ? 'var(--primary)' : 'var(--text-secondary)',
              fontSize: '0.88rem',
              fontWeight: 600,
              transition: 'color 0.2s ease',
            }}
            className="nav-link-hover"
          >
            Reviews
          </Link>

          <Link
            href="/estimator"
            style={{
              textDecoration: 'none',
              color: pathname === '/estimator' ? 'var(--primary)' : 'var(--text-secondary)',
              fontSize: '0.88rem',
              fontWeight: 600,
              transition: 'color 0.2s ease',
            }}
            className="nav-link-hover"
          >
            Cost Estimator
          </Link>

          <Link
            href="/contact"
            style={{
              textDecoration: 'none',
              color: pathname === '/contact' ? 'var(--primary)' : 'var(--text-secondary)',
              fontSize: '0.88rem',
              fontWeight: 600,
              transition: 'color 0.2s ease',
            }}
            className="nav-link-hover"
          >
            Contact
          </Link>
        </nav>

        {/* Right Controls: Theme Switcher & Mobile Menu Icon */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ThemeSwitcher />

          {/* Mobile Hamburger Menu Icon Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              border: '1px solid var(--border-color)',
              background: mobileMenuOpen ? 'var(--primary)' : 'var(--bg-surface-elevated)',
              color: mobileMenuOpen ? '#FFFFFF' : 'var(--text-main)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              flexShrink: 0,
            }}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Left-to-Right Animated Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop overlay to close on click outside */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-drawer-backdrop"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0, 0, 0, 0.65)',
              backdropFilter: 'blur(6px)',
              zIndex: 9998,
            }}
          />

          {/* Left-to-Right Sliding Side Drawer */}
          <aside
            className="mobile-slide-left-drawer"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              bottom: 0,
              height: '100dvh',
              maxHeight: '100dvh',
              width: 'min(340px, 92vw)',
              background: 'var(--bg-surface)',
              borderRight: '1px solid var(--border-glow)',
              boxShadow: '15px 0 50px -10px rgba(0, 0, 0, 0.8), 0 0 30px -5px var(--primary-light)',
              zIndex: 9999,
              backdropFilter: 'blur(20px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              overflowY: 'auto',
              WebkitOverflowScrolling: 'touch',
              overscrollBehavior: 'contain',
            }}
          >
            <div style={{ flex: '1 0 auto' }}>
              {/* Drawer Top Header with Logo and Close Button */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1rem 1.15rem 0.85rem',
                  borderBottom: '1px solid var(--border-color)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'var(--gradient-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                    }}
                  >
                    <Layers size={17} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 800, lineHeight: 1.1 }}>
                      Core<span className="gradient-text">CodeX</span>
                    </div>
                    <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      AI &amp; Engineering
                    </div>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    background: 'var(--bg-surface-elevated)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-main)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                  aria-label="Close navigation menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Navigation Links list */}
              <div style={{ padding: '0.75rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <div style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', padding: '0 0.5rem 0.15rem' }}>
                  Menu Navigation
                </div>

                {mainNavLinks.map((item, idx) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.6rem 0.85rem',
                        borderRadius: 'var(--radius-md)',
                        textDecoration: 'none',
                        background: isActive ? 'var(--primary-light)' : 'var(--bg-card)',
                        border: '1px solid',
                        borderColor: isActive ? 'var(--primary)' : 'var(--border-color)',
                        color: isActive ? 'var(--primary)' : 'var(--text-main)',
                        fontWeight: 700,
                        fontSize: '0.88rem',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ color: isActive ? 'var(--primary)' : 'var(--text-muted)', display: 'flex', alignItems: 'center' }}>
                          {item.icon}
                        </div>
                        <span>{item.name}</span>
                      </div>
                      <ArrowRight size={14} color={isActive ? 'var(--primary)' : 'var(--text-muted)'} />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Direct Quick Dial Bottom Area - Generous bottom padding to ensure Shubham Singh is 100% visible on all screen heights */}
            <div
              style={{
                padding: '0.85rem 1rem calc(2.5rem + env(safe-area-inset-bottom, 24px))',
                borderTop: '1px solid var(--border-color)',
                background: 'var(--bg-surface-elevated)',
                flexShrink: 0,
              }}
            >
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.04em' }}>
                Direct Founders Line
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {/* Sahil Prasad Card */}
                <a
                  href="tel:6354729042"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '6px',
                    padding: '9px 12px',
                    borderRadius: '8px',
                    background: 'var(--primary-light)',
                    color: 'var(--primary)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    border: '1px solid var(--border-glow)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Phone size={14} />
                    <span>Sahil Prasad (Vadodara)</span>
                  </span>
                  <span style={{ fontSize: '0.75rem', opacity: 0.9, fontFamily: 'var(--font-mono)' }}>+91 6354729042</span>
                </a>

                {/* Shubham Singh Card - Guaranteed full visibility */}
                <a
                  href="tel:9559506650"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '6px',
                    padding: '9px 12px',
                    borderRadius: '8px',
                    background: 'var(--primary-light)',
                    color: 'var(--primary)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    border: '1px solid var(--border-glow)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Phone size={14} />
                    <span>Shubham Singh (Haridwar)</span>
                  </span>
                  <span style={{ fontSize: '0.75rem', opacity: 0.9, fontFamily: 'var(--font-mono)' }}>+91 9559506650</span>
                </a>
              </div>
              {/* Extra safety spacer for mobile home gesture bar */}
              <div style={{ height: '12px' }} />
            </div>
          </aside>
        </>
      )}

      <style jsx>{`
        @media (min-width: 900px) {
          .nav-desktop {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        @media (max-width: 899px) {
          .nav-desktop {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
        @media (max-width: 400px) {
          .logo-subtext {
            display: none !important;
          }
        }
        .nav-link-hover:hover {
          color: var(--primary) !important;
        }
        .dropdown-item-hover:hover {
          background: var(--primary-light) !important;
        }
        .mobile-drawer-backdrop {
          animation: fadeInBackdrop 0.25s ease-out forwards;
        }
        .mobile-slide-left-drawer {
          animation: slideInFromLeft 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadeInBackdrop {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes slideInFromLeft {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};
