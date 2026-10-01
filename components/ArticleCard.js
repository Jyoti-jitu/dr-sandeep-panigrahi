import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";

export default function ArticleCard({ article }) {
  const getBadgeStyle = (category) => {
    switch (category?.toLowerCase()) {
      case "diabetes":
        return "bg-blue-50 text-blue-800 border-blue-200";
      case "lifestyle":
        return "bg-amber-50 text-amber-900 border-amber-200";
      case "public health":
      default:
        return "bg-teal-50 text-[#006D68] border-teal-200";
    }
  };

  return (
    <div className="bg-white border border-[#E2E8F0] rounded-md overflow-hidden flex flex-col justify-between card-hover shadow-2xs group">
      <div>
        {/* Article Image */}
        <div className="relative aspect-16/10 w-full overflow-hidden bg-[#F3F5F4] border-b border-[#E2E8F0]">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-103 transition-transform duration-300"
          />
        </div>

        {/* Article Metadata & Content */}
        <div className="p-4 sm:p-5">
          <div className="mb-2.5">
            <span
              className={`inline-block px-2.5 py-0.5 rounded-xs text-[10px] font-semibold uppercase tracking-wider border ${getBadgeStyle(
                article.category
              )}`}
            >
              {article.category}
            </span>
          </div>

          <h3 className="font-serif text-base sm:text-lg font-bold text-[#102A43] group-hover:text-[#006D68] transition-colors leading-snug line-clamp-2">
            {article.title}
          </h3>

          <div className="mt-3 flex items-center gap-3 text-[11px] text-[#627D98]">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#006D68]" />
              {article.readTime}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-[#006D68]" />
              {article.date}
            </span>
          </div>

          {article.excerpt && (
            <p className="mt-2.5 text-xs text-[#627D98] line-clamp-2 leading-relaxed">
              {article.excerpt}
            </p>
          )}
        </div>
      </div>

      {/* Read Article CTA */}
      <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0">
        <div className="pt-3 border-t border-[#ECEFF1]">
          <Link
            href={`/health-insights#${article.id}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#006D68] group-hover:text-[#0F8B83] transition-colors"
          >
            <span>Read Article</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
