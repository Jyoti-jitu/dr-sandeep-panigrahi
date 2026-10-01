import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ExpertiseCard({ item }) {
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-md overflow-hidden flex flex-col justify-between card-hover shadow-2xs group">
      {/* Top Image */}
      <div className="relative aspect-16/10 w-full overflow-hidden bg-[#F3F5F4] border-b border-[#E2E8F0]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-103 transition-transform duration-300"
        />
        <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-2xs px-2 py-0.5 rounded-xs text-[10px] font-semibold text-[#006D68] uppercase tracking-wide border border-[#E2E8F0]">
          {item.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-lg font-bold text-[#102A43] group-hover:text-[#006D68] transition-colors leading-snug">
            {item.title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#627D98] leading-relaxed line-clamp-3">
            {item.description}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-[#ECEFF1]">
          <Link
            href={`/clinical-care#${item.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#006D68] group-hover:text-[#0F8B83] transition-colors"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
