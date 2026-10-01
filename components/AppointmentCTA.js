import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  UserCheck,
  Video,
  RotateCcw,
  ShieldCheck,
  Hospital,
  MapPin,
  CalendarCheck,
} from "lucide-react";
import { doctorProfile, contactDetails } from "@/lib/data";

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

          {/* Right Column: Executive Clinical Physician Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-[#F8F7F2] border border-[#CBD5E1] rounded-2xl overflow-hidden shadow-lg p-5 sm:p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border-2 border-[#006D68] shrink-0 shadow-xs bg-white">
                  <Image
                    src={doctorProfile.images.heroDoctor}
                    alt={doctorProfile.name}
                    fill
                    sizes="100px"
                    className="object-cover object-[center_top]"
                  />
                </div>

                <div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#006D68] bg-[#E6F4F1] px-2 py-0.5 rounded-full border border-[#BCE3DE]">
                    <ShieldCheck className="w-3 h-3" />
                    Verified Academic Physician
                  </span>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-[#102A43] leading-snug mt-1">
                    Prof. Dr. Sandeep Kumar Panigrahi
                  </h3>
                  <p className="text-[11px] text-[#627D98] font-medium mt-0.5">
                    MBBS • MD • Fellowship in Diabetes (UK)
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#E2E8F0] space-y-2 text-xs text-[#243B53]">
                <div className="flex items-start gap-2">
                  <Hospital className="w-3.5 h-3.5 text-[#006D68] shrink-0 mt-0.5" />
                  <span>{contactDetails.hospital}</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#006D68] shrink-0 mt-0.5" />
                  <span className="text-[#627D98]">{contactDetails.cityState}</span>
                </div>
                <div className="flex items-start gap-2">
                  <CalendarCheck className="w-3.5 h-3.5 text-[#006D68] shrink-0 mt-0.5" />
                  <span>Mon – Sat: In-Person & Teleconsultations</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/appointment"
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#006D68] hover:bg-[#0F8B83] text-white text-xs font-semibold rounded-md shadow-xs transition-colors"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
