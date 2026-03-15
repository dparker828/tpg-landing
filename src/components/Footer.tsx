import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream">
      {/* Top Section */}
      <div className="border-b border-cream/10">
        <div className="container py-20">
          <div className="flex flex-col items-start gap-6 max-w-2xl">
            {/* Logo */}
            <div className="relative w-8 h-8 opacity-30">
              <Image
                src="/tpg-logo.png"
                alt="The Parker Group"
                width={32}
                height={32}
              />
            </div>

            {/* Tagline */}
            <p className="body-large text-cream/80">
              We help homeowners prepare, navigate, and sell their homes with
              less chaos, more clarity, and a better result.
            </p>
          </div>
        </div>
      </div>

      {/* Middle Section - 4 Columns */}
      <div className="border-b border-cream/10">
        <div className="container py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Services Column */}
            <div>
              <h4 className="eyebrow mb-6">Services</h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/sell"
                    className="caption-text text-cream/70 hover:text-cream link-underline transition-colors duration-300"
                  >
                    Sell With Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/buy"
                    className="caption-text text-cream/70 hover:text-cream link-underline transition-colors duration-300"
                  >
                    Buy With Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sell"
                    className="caption-text text-cream/70 hover:text-cream link-underline transition-colors duration-300"
                  >
                    Pre-Sale Preparation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="eyebrow mb-6">Company</h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/our-story"
                    className="caption-text text-cream/70 hover:text-cream link-underline transition-colors duration-300"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="caption-text text-cream/70 hover:text-cream link-underline transition-colors duration-300"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/insights"
                    className="caption-text text-cream/70 hover:text-cream link-underline transition-colors duration-300"
                  >
                    Insights
                  </Link>
                </li>
              </ul>
            </div>

            {/* Areas Column */}
            <div>
              <h4 className="eyebrow mb-6">Areas</h4>
              <ul className="space-y-4">
                <li>
                  <p className="caption-text text-cream/70">Sussex County</p>
                </li>
                <li>
                  <p className="caption-text text-cream/70">Kent County</p>
                </li>
                <li>
                  <p className="caption-text text-cream/70">Delmarva Region</p>
                </li>
              </ul>
            </div>

            {/* Connect Column */}
            <div>
              <h4 className="eyebrow mb-6">Connect</h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="tel:+13022176692"
                    className="caption-text text-cream/70 hover:text-cream link-underline transition-colors duration-300"
                  >
                    (302) 217-6692
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:cheers@theparkergroup.com"
                    className="caption-text text-cream/70 hover:text-cream link-underline transition-colors duration-300"
                  >
                    cheers@theparkergroup.com
                  </Link>
                </li>
                <li className="space-y-3 pt-2">
                  <Link
                    href="https://facebook.com/theparkergroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="caption-text text-cream/70 hover:text-cream link-underline transition-colors duration-300 block"
                  >
                    Facebook
                  </Link>
                  <Link
                    href="https://instagram.com/theparkergroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="caption-text text-cream/70 hover:text-cream link-underline transition-colors duration-300 block"
                  >
                    Instagram
                  </Link>
                  <Link
                    href="https://linkedin.com/company/theparkergroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="caption-text text-cream/70 hover:text-cream link-underline transition-colors duration-300 block"
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="caption-text text-cream/60">
            © {currentYear} The Parker Group. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <p className="caption-text text-cream/60">Licensed in DE & MD</p>
            <p className="caption-text text-cream/60">Equal Housing Opportunity</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
