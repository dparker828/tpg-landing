import type { Metadata } from 'next';
import {
  Cormorant_Garamond,
  Poppins,
  Dancing_Script,
} from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-script',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'The Parker Group | Delaware Real Estate',
  description:
    'We help homeowners prepare, navigate, and sell their homes with less chaos, more clarity, and a better result. The only pre-sale preparation service of its kind in Delaware.',
  viewport: 'width=device-width, initial-scale=1',
  authors: [{ name: 'The Parker Group' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${poppins.variable} ${dancingScript.variable}`}
    >
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
