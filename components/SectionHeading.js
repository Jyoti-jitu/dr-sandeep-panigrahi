import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  rightLinkHref,
  rightLinkLabel,
  className = "",
}) {
  return (
    <div className={`mb-10 sm:mb-12 ${className}`}>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          {eyebrow && (
            <span className="text-[11px] font-bold tracking-widest text-[#006D68] uppercase block mb-2">
              {eyebrow}
            </span>
          )}
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#102A43] tracking-tight leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-sm sm:text-base text-[#627D98] max-w-2xl font-sans">
              {subtitle}
            </p>
          )}
        </div>

        {rightLinkHref && rightLinkLabel && (
          <div className="shrink-0">
            <Link
              href={rightLinkHref}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#006D68] hover:text-[#0F8B83] transition-colors"
            >
              <span>{rightLinkLabel}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
