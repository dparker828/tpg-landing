import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--color-charcoal)",
        borderTop: "1px solid rgba(255,248,242,0.04)",
      }}
    >
      <div className="content-container py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Image
            src="/images/tpg-logo.png"
            alt="The Parker Group"
            width={120}
            height={34}
            className="h-7 w-auto opacity-30"
          />
          <div
            className="flex flex-wrap items-center justify-center gap-2 font-[family-name:var(--font-poppins)] font-light text-[10px]"
            style={{ color: "rgba(255,248,242,0.15)" }}
          >
            <span>Georgetown, DE</span>
            <span>·</span>
            <a href="tel:3022176692" className="hover:opacity-40 transition-opacity">
              302.217.6692
            </a>
            <span>·</span>
            <a
              href="mailto:cheers@theparkergroup.com"
              className="hover:opacity-40 transition-opacity"
            >
              cheers@theparkergroup.com
            </a>
          </div>
        </div>
        <p
          className="text-center mt-6 font-[family-name:var(--font-poppins)] font-light text-[10px]"
          style={{ color: "rgba(255,248,242,0.1)" }}
        >
          © 2026 The Parker Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
