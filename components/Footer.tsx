'use client'
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import ContactModal from "./ContactModal";
import ModalButton from "./ModalButton";
import { FaXTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";

function Footer() {
  const [state, setState] = useState(false)
  const [email, setEmail] = useState('')
  const contactModalRef = useRef<HTMLDivElement>(null)

  function handleContactOpen() {
    const el = contactModalRef.current
    if (el) el.classList.add('is-active')
    document.body.classList.add('is-unscrollable')
    setState(true)
  }

  function handleContactClose() {
    const el = contactModalRef.current
    if (el) el.classList.remove('is-active')
    document.body.classList.remove('is-unscrollable')
    setState(false)
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') handleContactClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const linkHoverStyle = {
    onMouseEnter: (e: React.MouseEvent<HTMLAnchorElement>) => { (e.currentTarget as HTMLAnchorElement).style.setProperty('--after-scale', '1') },
    onMouseLeave: (e: React.MouseEvent<HTMLAnchorElement>) => { (e.currentTarget as HTMLAnchorElement).style.setProperty('--after-scale', '0') },
  }

  return (
    <>
      <footer style={{ background: '#f6f6ef', padding: '10rem var(--content-padding) 4rem' }}>
        {/* CSS counters for numbered nav links */}
        <style>{`
          .footer-nav-links { counter-reset: fc; }
          .footer-nav-link {
            counter-increment: fc;
            display: flex; align-items: center;
            font-family: pp-neue-machina-plain, serif;
            text-transform: uppercase;
            font-size: 5.2rem; font-weight: 400; letter-spacing: 0;
            text-decoration: none; color: #0c0c0c;
            padding: 1.5rem 1.7rem 2.5rem 0;
            font-feature-settings: "ss12" on;
            position: relative;
          }
          .footer-nav-link:first-child { padding-top: 0; }
          .footer-nav-link:not(:first-child) { border-top: 0.1rem solid hsla(0,0%,5%,.2); }
          .footer-nav-link::before {
            content: counter(fc, decimal-leading-zero);
            font-size: 2.4rem; font-weight: 500; margin-right: 3rem;
            position: relative; top: 0.1rem;
          }
          .footer-nav-link-text { position: relative; display: inline-block; }
          .footer-nav-link-text::after {
            content: ""; position: absolute; left: 0; right: 0; bottom: 0.5rem;
            height: 0.3rem; background: #0c0c0c;
            transform: scaleX(0); transform-origin: left;
            transition: transform 0.5s cubic-bezier(.16,1,.3,1);
          }
          .footer-nav-link:hover .footer-nav-link-text::after { transform: scaleX(1); }
          @media screen and (max-width: 900px) {
            .footer-nav-link { font-size: 3.4rem; padding: 1.5rem 0 1.7rem; }
            .footer-nav-link::before { font-size: 1.8rem; margin-right: 2.4rem; }
          }
          .contact-modal.is-active { opacity: 1; visibility: visible; }
          .contact-modal.is-active .contact-modal__content { transform: translateX(0); }
        `}</style>

        <div className="grid gap-[6rem] mx-auto max-w-[256rem]" style={{ gridTemplateColumns: '1fr 1fr' }}>
          {/* ── Left column ── */}
          <div style={{ maxWidth: '46rem' }}>
            {/* Logo */}
            <img
              alt="AI UniPod"
              src="/assets/ai-unipod-logo.png"
              style={{ width: '100%', maxWidth: '42rem', height: 'auto', marginBottom: '5rem' }}
            />

            {/* Newsletter */}
            <h3 style={{ fontSize: '2.4rem', fontWeight: 500, margin: '0 0 0.4rem', letterSpacing: '-.01em', fontFamily: 'neue-haas-grot-text, sans-serif' }}>
              Stay in the loop
            </h3>
            <p style={{ fontSize: '1.6rem', margin: '0 0 2rem', color: '#0c0c0c', fontFamily: 'neue-haas-grot-text, sans-serif' }}>
              Innovation stories, cohorts and open calls from the hub.
            </p>
            <form
              onSubmit={e => e.preventDefault()}
              style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                background: '#fff', borderRadius: '4.6rem',
                padding: '0.5rem 0.5rem 0.5rem 2.4rem',
                boxShadow: '0 0.4rem 2rem rgba(0,0,0,.06)',
              }}
            >
              <input
                type="email"
                placeholder="Email Address*"
                aria-label="Email Address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{
                  flex: 1, minWidth: 0, border: 'none', outline: 'none',
                  background: 'transparent', fontFamily: 'inherit',
                  fontSize: '1.5rem', color: '#0c0c0c',
                }}
              />
              <button
                type="submit"
                style={{
                  background: '#797af2', color: '#0c0c0c', border: 'none',
                  borderRadius: '3rem', height: '4.6rem', padding: '0 2.6rem',
                  fontFamily: 'inherit', fontSize: '1.4rem', fontWeight: 500, cursor: 'pointer',
                  transition: 'background .4s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#c9c3de')}
                onMouseLeave={e => (e.currentTarget.style.background = '#797af2')}
              >
                Sign Up
              </button>
            </form>

            {/* Social icons */}
            <nav
              style={{ display: 'flex', gap: '2.2rem', marginTop: '2.6rem', alignItems: 'center' }}
              aria-label="Social media links"
            >
              {[
                { icon: <FaXTwitter />, href: 'https://twitter.com/figure_robot', label: 'X (Twitter)' },
                { icon: <FaInstagram />, href: 'https://www.instagram.com/figure_robot/', label: 'Instagram' },
                { icon: <FaLinkedin />, href: 'https://www.linkedin.com/company/figure-ai/', label: 'LinkedIn' },
                { icon: <FaYoutube />, href: 'https://www.youtube.com/@figureai', label: 'YouTube' },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#0c0c0c', opacity: 0.85, transition: 'opacity .3s ease', display: 'flex', fontSize: '1.8rem' }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.45')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '0.85')}
                >
                  {icon}
                </a>
              ))}
            </nav>

            {/* Contact Us button */}
            <button
              onClick={handleContactOpen}
              style={{
                marginTop: '7rem', display: 'inline-flex', alignItems: 'center', gap: '0.8rem',
                background: 'none', border: 'none', padding: 0,
                fontFamily: 'inherit', fontSize: '1.4rem', fontWeight: 500, color: '#0c0c0c', cursor: 'pointer',
              }}
            >
              Contact Us
              <svg viewBox="0 0 16 16" fill="none" style={{ width: '1.4rem', height: '1.4rem', color: '#ff7a45', transition: 'transform .3s ease' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'translate(.3rem,-.3rem)')}
                onMouseLeave={e => (e.currentTarget.style.transform = '')}>
                <path d="M4 12L12 4M12 4H5M12 4v7" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </button>
          </div>

          {/* ── Right column: numbered nav links ── */}
          <nav className="footer-nav-links" aria-label="Site links">
            <Link href="/about-us" className="footer-nav-link">
              <span className="footer-nav-link-text">About Us</span>
            </Link>
            <Link href="/master-plan" className="footer-nav-link">
              <span className="footer-nav-link-text">Master Plan</span>
            </Link>
            <Link href="/culture" className="footer-nav-link">
              <span className="footer-nav-link-text">Culture</span>
            </Link>
            <Link href="/careers" className="footer-nav-link">
              <span className="footer-nav-link-text">Careers</span>
            </Link>
          </nav>
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="flex items-center flex-wrap gap-[3.4rem] mx-auto max-w-[256rem]"
          style={{ marginTop: '8rem' }}
        >
          <p style={{ color: 'hsla(0,0%,5%,.6)', margin: '0 auto 0 0', fontSize: '1.4rem', fontFamily: 'neue-haas-grot-text, sans-serif' }}>
            © 2026 AI UNIPOD · University of Lagos. All rights reserved.
          </p>
          {[
            { label: 'Terms & Conditions', href: '/terms-and-conditions' },
            { label: 'Privacy Policy', href: '/privacy-policy' },
            { label: 'Accessibility Statement', href: '/accessibility-statement' },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              style={{ textDecoration: 'underline', color: '#0c0c0c', opacity: 0.6, fontSize: '1.4rem', transition: 'opacity .3s ease', fontFamily: 'neue-haas-grot-text, sans-serif' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.6')}
            >
              {label}
            </Link>
          ))}
        </div>
      </footer>

      {/* ── Contact modal ── */}
      <div
        className="contact-modal"
        ref={contactModalRef}
        aria-hidden={!state}
        style={{
          position: 'fixed', inset: 0, zIndex: 300,
          display: 'flex', justifyContent: 'flex-end',
          background: 'hsla(0,0%,5%,.5)',
          opacity: 0, visibility: 'hidden',
          transition: 'opacity .3s ease, visibility .3s ease',
        }}
        onClick={e => { if (e.target === e.currentTarget) handleContactClose() }}
      >
        <article
          className="contact-modal__content"
          style={{
            position: 'relative', width: '100%', maxWidth: '49.3rem',
            background: '#f6f6ef', transform: 'translateX(100%)',
            transition: 'transform .3s ease', overflowY: 'auto',
          }}
        >
          <ModalButton ariaLabel="Close contact form" onClick={handleContactClose} />
          <ContactModal />
        </article>
      </div>
    </>
  )
}
export default Footer
