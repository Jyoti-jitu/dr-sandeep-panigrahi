import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { timeline } from "@/lib/data";

export default function Timeline({ isPreview = false, limit = 6 }) {
  const displayItems = isPreview ? timeline.slice(0, limit) : timeline;

  return (
    <div className="relative">
      {/* Desktop Horizontal Process Line (visible on lg screens) */}
      <div className="hidden lg:block absolute top-[14px] left-6 right-6 h-[2px] bg-[#E2E8F0] z-0" />

      {/* Grid container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
        {displayItems.map((item, idx) => (
          <div key={idx} className="flex flex-col h-full group">
            {/* Timeline Dot & Year */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-full bg-white border-2 border-[#006D68] flex items-center justify-center shrink-0 z-10 shadow-xs group-hover:bg-[#006D68] transition-colors">
                <div className="w-2 h-2 rounded-full bg-[#006D68] group-hover:bg-white transition-colors" />
              </div>
              <span className="text-xs font-bold text-[#102A43] tracking-tight">
                {item.period}
              </span>
            </div>

            {/* Institution Card */}
            <div className="bg-white border border-[#E2E8F0] rounded-md p-3.5 flex flex-col justify-between flex-1 card-hover shadow-2xs">
              <div>
                <h4 className="font-serif font-bold text-sm text-[#102A43] group-hover:text-[#006D68] transition-colors leading-snug line-clamp-2">
                  {item.institution}
                </h4>
                <p className="text-[11px] font-medium text-[#006D68] mt-1">
                  {item.field}
                </p>
                {!isPreview && item.details && (
                  <p className="text-xs text-[#627D98] mt-2.5 leading-relaxed">
                    {item.details}
                  </p>
                )}
              </div>

              {/* Institution Image */}
              {item.image && (
                <div className="mt-3 relative h-16 w-full rounded-sm overflow-hidden bg-[#F3F5F4] border border-[#ECEFF1]">
                  <Image
                    src={item.image}
                    alt={item.institution}
                    fill
                    sizes="(max-width: 768px) 100vw, 200px"
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {isPreview && (
        <div className="mt-8 text-center sm:text-right">
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#006D68] hover:text-[#0F8B83] transition-colors"
          >
            <span>View Full Journey</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}
    </div>
  );
}
