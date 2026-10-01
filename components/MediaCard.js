import Image from "next/image";
import Link from "next/link";
import { Play, ArrowRight, Calendar, MapPin } from "lucide-react";

export default function MediaCard({ item, isLarge = false }) {
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-md overflow-hidden card-hover shadow-2xs group flex flex-col justify-between">
      {/* Media Image with play button overlay */}
      <div className={`relative ${isLarge ? "aspect-16/10" : "aspect-16/10"} w-full overflow-hidden bg-[#F3F5F4] border-b border-[#E2E8F0]`}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 500px"
          className="object-cover group-hover:scale-103 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-2xs flex items-center justify-center text-[#102A43] group-hover:scale-110 group-hover:bg-[#006D68] group-hover:text-white transition-all shadow-md">
            <Play className="w-5 h-5 fill-current ml-0.5" />
          </div>
        </div>
        <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-2xs px-2.5 py-0.5 rounded-xs text-[10px] font-semibold text-[#006D68] uppercase tracking-wider border border-[#E2E8F0]">
          {item.type}
        </div>
      </div>

      {/* Info */}
      <div className="p-4 sm:p-5">
        <h3 className="font-serif text-base sm:text-lg font-bold text-[#102A43] group-hover:text-[#006D68] transition-colors leading-snug">
          {item.title}
        </h3>

        <div className="mt-2.5 flex items-center gap-2 text-xs text-[#627D98]">
          <span className="font-medium text-[#243B53]">{item.type}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3 text-[#006D68]" />
            {item.date}
          </span>
        </div>

        {item.location && (
          <p className="mt-2 text-xs text-[#627D98] flex items-center gap-1">
            <MapPin className="w-3 h-3 text-[#006D68]" />
            {item.location}
          </p>
        )}

        {item.description && (
          <p className="mt-2 text-xs text-[#627D98] line-clamp-2 leading-relaxed">
            {item.description}
          </p>
        )}
      </div>

      <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0">
        <div className="pt-3 border-t border-[#ECEFF1]">
          <Link
            href="/media"
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#006D68] group-hover:text-[#0F8B83] transition-colors"
          >
            <span>Watch Session</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
