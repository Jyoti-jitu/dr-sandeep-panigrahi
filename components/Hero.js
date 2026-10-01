import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, CheckCircle2 } from "lucide-react";
import { doctorProfile } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative bg-white pt-8 pb-12 sm:pt-12 sm:pb-16 lg:py-16 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (Approx 45%) */}
          <div className="lg:col-span-5 flex flex-col justify-center order-1">
            {/* Eyebrow */}
            <div className="mb-3">
              <span className="inline-block text-[11px] sm:text-xs font-bold tracking-widest text-[#006D68] uppercase">
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
            <div className="mt-4 pt-2 border-t border-[#E2E8F0]">
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

          {/* Right Column (Approx 55%) - New Executive Doctor Photo with Quote Card */}
          <div className="lg:col-span-7 relative order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl aspect-3/2 sm:aspect-16/10 rounded-2xl overflow-hidden border border-[#CBD5E1] bg-[#F8F7F2] shadow-xl">
              <Image
                src={doctorProfile.images.heroDoctor}
                alt="Prof. Dr. Sandeep Kumar Panigrahi in medical consultation clinic with stethoscope, laptop and clinical literature"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 700px"
                className="object-cover object-center"
              />

              {/* Overlapping Quote Card */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 max-w-[190px] sm:max-w-[230px] bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-xl shadow-lg border border-[#E2E8F0]">
                <div className="text-[#006D68] text-lg font-serif font-bold leading-none mb-0.5">
                  “
                </div>
                <p className="font-serif italic text-xs sm:text-[12px] text-[#102A43] leading-snug font-medium">
                  {doctorProfile.quote}
                </p>
                <div className="mt-2 pt-1.5 border-t border-[#ECEFF1] flex items-center justify-between">
                  <span className="font-serif text-[11px] font-bold text-[#006D68] italic tracking-wide">
                    {doctorProfile.signature}
                  </span>
                  <div className="h-0.5 w-5 bg-[#006D68] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
