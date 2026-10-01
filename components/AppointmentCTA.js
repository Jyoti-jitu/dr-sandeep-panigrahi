import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  UserCheck,
  Video,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";
import { doctorProfile } from "@/lib/data";

export default function AppointmentCTA() {
  return (
    <section className="py-12 sm:py-16 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Booking information */}
          <div className="lg:col-span-7">
            <span className="text-[11px] font-bold tracking-widest text-[#006D68] uppercase block mb-2">
              CLINICAL CONSULTATIONS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#102A43] tracking-tight leading-tight">
              Book an Appointment
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#243B53] leading-relaxed max-w-xl">
              Consult for personalized care, preventive health guidance and lifestyle management with evidence-based medical protocols.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/appointment"
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-[#006D68] hover:bg-[#0F8B83] text-white text-xs sm:text-sm font-medium rounded-md shadow-xs transition-colors"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/clinical-care"
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-white hover:bg-[#F3F5F4] text-[#102A43] border border-[#CBD5E1] text-xs sm:text-sm font-medium rounded-md transition-colors"
              >
                <span>View Consultation Options</span>
              </Link>
            </div>

            {/* Service option pills */}
            <div className="mt-8 pt-6 border-t border-[#E2E8F0] grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2 text-xs font-medium text-[#243B53]">
                <div className="w-7 h-7 rounded-full bg-[#E6F4F1] flex items-center justify-center text-[#006D68] shrink-0">
                  <UserCheck className="w-3.5 h-3.5" />
                </div>
                <span>In-person Consultation</span>
              </div>

              <div className="flex items-center gap-2 text-xs font-medium text-[#243B53]">
                <div className="w-7 h-7 rounded-full bg-[#E6F4F1] flex items-center justify-center text-[#006D68] shrink-0">
                  <Video className="w-3.5 h-3.5" />
                </div>
                <span>Online Consultation</span>
              </div>

              <div className="flex items-center gap-2 text-xs font-medium text-[#243B53]">
                <div className="w-7 h-7 rounded-full bg-[#E6F4F1] flex items-center justify-center text-[#006D68] shrink-0">
                  <RotateCcw className="w-3.5 h-3.5" />
                </div>
                <span>Follow-up Consultation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Doctor at laptop image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-lg overflow-hidden border border-[#E2E8F0] bg-[#F8F7F2] shadow-xs">
              <div className="relative aspect-4/3 sm:aspect-16/11 w-full overflow-hidden">
                <Image
                  src={doctorProfile.images.appointmentDoctor}
                  alt="Dr. Sandeep Kumar Panigrahi consulting and reviewing clinical cases"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover object-center"
                />
              </div>
              <div className="p-3 bg-white/95 border-t border-[#E2E8F0] flex items-center justify-between text-xs text-[#627D98]">
                <span className="flex items-center gap-1.5 font-medium text-[#243B53]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#006D68]" />
                  Verified Academic Physician
                </span>
                <span>Bhubaneswar, Odisha</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
