'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/sell', label: 'Sell' },
    { href: '/buy', label: 'Buy' },
    { href: '/our-story', label: 'Our Story' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled
          ? 'bg-cream/90 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
      style={{ height: '72px' }}
    >
      <div className="h-full px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-6 h-6">
            <Image
              src="/tpg-logo.png"
              alt="The Parker Group"
              width={24}
              height={24}
              priority
            />
          </div>
          <span className="font-poppins font-semibold text-sm text-charcoal hidden sm:inline-block">
            the parker group
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`eyebrow transition-colors duration-300 ${
                isActive(link.href)
                  ? 'text-terracotta'
                  : 'text-text-muted hover:text-terracotta'
              }`}
              style={{ fontSize: '11px' }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:block cta-nav"
        >
          Let's Talk
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 w-8 h-6 justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-full bg-charcoal transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`h-0.5 w-full bg-charcoal transition-opacity duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`h-0.5 w-full bg-charcoal transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-charcoal/95 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-8 pt-24"
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="heading-sub text-cream hover:text-terracotta transition-colors duration-300"
                style={{
                  animation: `fadeInUp ${0.3 + index * 0.1}s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                  opacity: 0,
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="cta-nav mt-4"
              style={{
                animation: `fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                opacity: 0,
              }}
            >
              Let's Talk
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
