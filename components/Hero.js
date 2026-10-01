import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, CheckCircle2 } from "lucide-react";
import { doctorProfile } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative bg-white pt-6 pb-12 sm:pt-10 sm:pb-16 lg:py-16 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (Approx 45%) */}
          <div className="lg:col-span-5 flex flex-col justify-center order-1">
            {/* Eyebrow */}
            <div className="mb-3">
              <span className="inline-block text-[11px] sm:text-xs font-bold tracking-wider text-[#006D68] uppercase">
                {doctorProfile.eyebrow}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102A43] tracking-tight leading-[1.12]">
              Prof. Dr. <br />
              <span className="text-[#102A43]">Sandeep Kumar</span> <br />
              Panigrahi
            </h1>

            {/* Credentials */}
            <div className="mt-4 pt-2 border-t border-[#E2E8F0]/60">
              <p className="text-xs sm:text-sm font-semibold text-[#006D68] tracking-normal">
                {doctorProfile.credentialsText}
              </p>
            </div>

            {/* Description */}
            <p className="mt-4 text-sm sm:text-base text-[#243B53] leading-relaxed">
              {doctorProfile.summary}
            </p>

            {/* Action Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/appointment"
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-[#006D68] hover:bg-[#0F8B83] text-white text-xs sm:text-sm font-medium rounded-md shadow-xs transition-colors"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/research"
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-white hover:bg-[#F3F5F4] text-[#102A43] border border-[#CBD5E1] text-xs sm:text-sm font-medium rounded-md transition-colors"
              >
                <span>Explore Research</span>
              </Link>
            </div>

            {/* Location & Availability Badges */}
            <div className="mt-6 pt-5 border-t border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-xs text-[#627D98]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#006D68] shrink-0" />
                <span className="font-medium text-[#243B53]">Location:</span>
                <span>{doctorProfile.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#006D68] shrink-0" />
                <span>{doctorProfile.availability}</span>
              </div>
            </div>
          </div>

          {/* Right Column (Approx 55%) - Photo with Quote Card */}
          <div className="lg:col-span-7 relative order-2">
            <div className="relative rounded-lg overflow-hidden border border-[#E2E8F0] bg-[#F8F7F2] shadow-sm max-w-lg lg:max-w-none mx-auto">
              <div className="relative aspect-4/3 sm:aspect-16/10 lg:aspect-16/11 w-full overflow-hidden">
                <Image
                  src={doctorProfile.images.heroDoctor}
                  alt="Prof. Dr. Sandeep Kumar Panigrahi - Physician and Medical Professor"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 650px"
                  className="object-cover object-center"
                />
              </div>

              {/* Overlapping Quote Card */}
              <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 max-w-[210px] sm:max-w-[260px] bg-white/95 backdrop-blur-xs p-3.5 sm:p-4 rounded-md shadow-md border border-[#E2E8F0]">
                <div className="text-[#006D68] text-xl font-serif font-bold leading-none mb-1">
                  “
                </div>
                <p className="font-serif italic text-xs sm:text-sm text-[#102A43] leading-snug">
                  {doctorProfile.quote}
                </p>
                <div className="mt-2.5 pt-2 border-t border-[#ECEFF1] flex items-center justify-between">
                  <span className="font-serif text-xs font-semibold text-[#006D68] italic tracking-wide">
                    {doctorProfile.signature}
                  </span>
                  <div className="h-0.5 w-6 bg-[#006D68] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
