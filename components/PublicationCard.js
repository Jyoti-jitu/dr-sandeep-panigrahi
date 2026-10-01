import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function PublicationCard({ pub }) {
  const getBadgeStyle = (categoryType) => {
    switch (categoryType) {
      case "digital-health":
        return "bg-[#E6F4F1] text-[#006D68] border-[#BCE3DE]";
      case "diabetes":
        return "bg-blue-50 text-blue-800 border-blue-200";
      case "lifestyle":
        return "bg-amber-50 text-amber-900 border-amber-200";
      case "public-health":
      default:
        return "bg-teal-50 text-[#006D68] border-teal-200";
    }
  };

  return (
    <div className="bg-white border border-[#E2E8F0] rounded-md p-5 sm:p-6 flex flex-col justify-between card-hover shadow-2xs group">
      <div>
        {/* Category Badge */}
        <div className="mb-3">
          <span
            className={`inline-block px-2.5 py-0.5 rounded-xs text-[10px] sm:text-xs font-semibold uppercase tracking-wider border ${getBadgeStyle(
              pub.categoryType
            )}`}
          >
            {pub.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-base sm:text-lg font-bold text-[#102A43] group-hover:text-[#006D68] transition-colors leading-snug">
          {pub.title}
        </h3>

        {/* Journal and Year */}
        <div className="mt-3 text-xs sm:text-[13px] text-[#627D98] font-medium">
          <span>{pub.journal}</span>
          <span className="mx-1.5">•</span>
          <span className="text-[#102A43] font-semibold">{pub.year}</span>
        </div>

        {/* Abstract excerpt if available */}
        {pub.abstract && (
          <p className="mt-2.5 text-xs text-[#627D98] line-clamp-2 leading-relaxed">
            {pub.abstract}
          </p>
        )}
      </div>

      {/* Action links */}
      <div className="mt-5 pt-3.5 border-t border-[#ECEFF1] flex items-center justify-between text-xs font-semibold">
        <Link
          href={`/publications#${pub.id}`}
          className="inline-flex items-center gap-1 text-[#006D68] hover:text-[#0F8B83] transition-colors"
        >
          <span>Read Research</span>
          <ArrowRight className="w-3 h-3" />
        </Link>

        {pub.doi && (
          <a
            href={pub.link || `https://doi.org/${pub.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#627D98] hover:text-[#102A43] transition-colors"
          >
            <span>View Publication</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  );
}
