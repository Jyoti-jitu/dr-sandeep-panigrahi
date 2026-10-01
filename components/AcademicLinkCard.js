import { ExternalLink, ArrowRight } from "lucide-react";
import { academicLinks } from "@/lib/data";

export default function AcademicLinkCard() {
  return (
    <section className="py-10 bg-[#F8F7F2] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <span className="text-[11px] font-bold tracking-widest text-[#006D68] uppercase block">
            ACADEMIC PRESENCE
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {academicLinks.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-[#E2E8F0] rounded-md p-4 flex items-center justify-between card-hover shadow-2xs group"
            >
              <div className="flex items-center gap-3.5">
                <div
                  className={`w-10 h-10 rounded-md border flex items-center justify-center font-bold text-sm font-serif ${item.color}`}
                >
                  {item.badge}
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#102A43] group-hover:text-[#006D68] transition-colors leading-tight">
                    {item.name}
                  </h4>
                  <span className="text-xs text-[#627D98] font-sans font-medium flex items-center gap-1 mt-0.5">
                    {item.label}
                  </span>
                </div>
              </div>

              <ArrowRight className="w-4 h-4 text-[#627D98] group-hover:text-[#006D68] group-hover:translate-x-0.5 transition-all shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
