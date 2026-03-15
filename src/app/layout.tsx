import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins, Dancing_Script } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Parker Group | Pre-Sale Home Preparation",
  description:
    "Managed repairs, staging, and preparation — paid from your closing proceeds, not your pocket. The only service of its kind in Delaware.",
  openGraph: {
    title: "The Parker Group | Pre-Sale Home Preparation",
    description:
      "Your home needs work before it sells. We do the work. You keep the money.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${poppins.variable} ${dancing.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
