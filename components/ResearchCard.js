import Link from "next/link";
import { ArrowRight, CheckCircle2, BookOpen, Quote } from "lucide-react";
import { researchStatistics, researchThemes } from "@/lib/data";

export default function ResearchPreview() {
  return (
    <section className="py-12 sm:py-16 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading & Description & Stats */}
          <div className="lg:col-span-7">
            <span className="text-[11px] font-bold tracking-widest text-[#006D68] uppercase block mb-2">
              RESEARCH
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#102A43] tracking-tight leading-tight">
              Research with real-world impact.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#243B53] leading-relaxed max-w-2xl">
              His research explores practical approaches to improving health outcomes through prevention, lifestyle intervention, technology, community health and evidence-based healthcare.
            </p>

            {/* Statistics */}
            <div className="mt-8 flex items-center gap-8 sm:gap-12">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#E6F4F1] border border-[#BCE3DE] flex items-center justify-center text-[#006D68]">
                  <BookOpen className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div>
                  <div className="font-serif font-bold text-2xl sm:text-3xl text-[#102A43] leading-none">
                    {researchStatistics.publicationsCount}
                  </div>
                  <div className="text-xs text-[#627D98] mt-1 font-medium">
                    Publications
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#E6F4F1] border border-[#BCE3DE] flex items-center justify-center text-[#006D68]">
                  <Quote className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div>
                  <div className="font-serif font-bold text-2xl sm:text-3xl text-[#102A43] leading-none">
                    {researchStatistics.citationsCount}
                  </div>
                  <div className="text-xs text-[#627D98] mt-1 font-medium">
                    Citations*
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-3 text-[11px] text-[#829ab1] italic">
              *Metrics updated periodically from academic profiles.
            </p>

            <div className="mt-8">
              <Link
                href="/research"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#006D68] hover:bg-[#0F8B83] text-white text-xs sm:text-sm font-medium rounded-md shadow-xs transition-colors"
              >
                <span>Explore All Research</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Research Areas Box */}
          <div className="lg:col-span-5">
            <div className="bg-[#F8F7F2] border border-[#E2E8F0] rounded-md p-6 sm:p-7">
              <h4 className="font-serif text-lg font-bold text-[#102A43] mb-4 pb-2 border-b border-[#E2E8F0]">
                Research Areas
              </h4>
              <ul className="space-y-3.5">
                {researchThemes.map((theme, index) => (
                  <li key={index} className="flex items-start gap-3 text-xs sm:text-sm text-[#243B53]">
                    <CheckCircle2 className="w-4 h-4 text-[#006D68] mt-0.5 shrink-0" />
                    <span>{theme}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
