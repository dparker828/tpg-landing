import Image from "next/image";

interface PhotoFrameProps {
  src?: string;
  alt: string;
  aspect: "3:4" | "4:5" | "16:9";
  label?: string;
  sublabel?: string;
  shadowDirection?: "right" | "left";
  className?: string;
  priority?: boolean;
}

const aspectMap = {
  "3:4": "aspect-[3/4]",
  "4:5": "aspect-[4/5]",
  "16:9": "aspect-[16/9]",
};

export default function PhotoFrame({
  src,
  alt,
  aspect,
  label,
  sublabel,
  shadowDirection = "right",
  className = "",
  priority = false,
}: PhotoFrameProps) {
  const shadow =
    shadowDirection === "right"
      ? "20px 20px 0 rgba(184,112,75,0.08)"
      : "-16px 16px 0 rgba(28,25,23,0.04)";

  return (
    <div className={className}>
      <div
        className={`relative w-full overflow-hidden ${aspectMap[aspect]}`}
        style={{ boxShadow: shadow }}
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 800px) 100vw, 50vw"
            priority={priority}
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background:
                "linear-gradient(145deg, #e8e0d4, #d4cbc0, #c8bfb4)",
            }}
          >
            <span
              className="label-text"
              style={{ color: "rgba(28,25,23,0.15)" }}
            >
              {alt}
            </span>
          </div>
        )}
      </div>
      {(label || sublabel) && (
        <div className="mt-4">
          {label && (
            <p
              className="font-[family-name:var(--font-poppins)] text-[11px] font-normal"
              style={{ color: "var(--color-text)" }}
            >
              {label}
            </p>
          )}
          {sublabel && (
            <p
              className="font-[family-name:var(--font-poppins)] text-[10px] font-light"
              style={{ color: "var(--color-text-faint)" }}
            >
              {sublabel}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
