import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Award,
  Building2,
  BookOpen,
  Users,
  HeartHandshake,
  CheckCircle2,
  Calendar,
  MapPin,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Timeline from "@/components/Timeline";
import AcademicLinkCard from "@/components/AcademicLinkCard";
import AppointmentCTA from "@/components/AppointmentCTA";
import { doctorProfile, timeline, focusAreas } from "@/lib/data";

export const metadata = {
  title: "About Prof. Dr. Sandeep Kumar Panigrahi | Academic Profile & Career",
  description:
    "Learn about the education, academic medical career, clinical qualifications, and public health contributions of Prof. Dr. Sandeep Kumar Panigrahi.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-[#F8F7F2] py-12 sm:py-16 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[11px] font-bold tracking-widest text-[#006D68] uppercase block mb-2">
              CURRICULUM VITAE & BIOGRAPHY
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102A43] tracking-tight leading-tight">
              About Prof. Dr. Sandeep Kumar Panigrahi
            </h1>
            <p className="mt-3 text-base sm:text-lg text-[#627D98] leading-relaxed">
              Academic physician, professor of community medicine, and public health specialist committed to evidence-based healthcare and preventive lifestyle interventions.
            </p>
          </div>
        </div>
      </section>

      {/* Biography & Editorial Profile */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Photo & Fast Facts */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-lg overflow-hidden border border-[#E2E8F0] shadow-sm bg-[#F8F7F2]">
                <div className="relative aspect-3/4 w-full">
                  <Image
                    src={doctorProfile.images.portraitHD}
                    alt="Prof. Dr. Sandeep Kumar Panigrahi official academic portrait"
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-4 bg-white border-t border-[#E2E8F0]">
                  <h3 className="font-serif font-bold text-base text-[#102A43]">
                    {doctorProfile.name}
                  </h3>
                  <p className="text-xs text-[#006D68] font-medium mt-0.5">
                    {doctorProfile.credentialsText}
                  </p>
                  <p className="text-xs text-[#627D98] mt-2 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#006D68] shrink-0" />
                    Bhubaneswar, Odisha, India
                  </p>
                </div>
              </div>

              {/* Core Institutional Affiliation */}
              <div className="bg-[#F8F7F2] border border-[#E2E8F0] rounded-md p-5">
                <h4 className="font-serif font-bold text-sm text-[#102A43] uppercase tracking-wider mb-2">
                  Current Academic Appointment
                </h4>
                <p className="text-xs sm:text-sm text-[#243B53] font-medium leading-relaxed">
                  Professor, Department of Community Medicine
                </p>
                <p className="text-xs text-[#627D98] mt-1">
                  IMS & SUM Hospital, Siksha &apos;O&apos; Anusandhan (SOA) Deemed to be University, Bhubaneswar
                </p>
              </div>
            </div>

            {/* Right Detailed Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[11px] font-bold tracking-widest text-[#006D68] uppercase block mb-1">
                  ACADEMIC BACKGROUND
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#102A43] tracking-tight">
                  Bridging Clinical Medicine and Community Health
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-sm sm:text-base text-[#243B53] space-y-4 leading-relaxed font-sans">
                {doctorProfile.bioDetailed.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Academic Pillars */}
              <div className="pt-6 border-t border-[#E2E8F0]">
                <h3 className="font-serif text-lg font-bold text-[#102A43] mb-4">
                  Key Professional Commitments
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {focusAreas.map((area, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-md bg-[#F8F7F2] border border-[#E2E8F0]"
                    >
                      <h4 className="font-serif font-bold text-sm text-[#102A43]">
                        {area.title}
                      </h4>
                      <p className="text-xs text-[#627D98] mt-1 leading-snug">
                        {area.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Professional Journey */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F8F7F2] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="CAREER MILESTONES"
            title="Complete Professional Journey"
            subtitle="Educational trajectory, institutional appointments, and public health service from 1999 to the present."
          />
          <Timeline isPreview={false} />
        </div>
      </section>

      {/* Teaching, Mentorship & Public Engagement */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-md bg-[#F8F7F2] border border-[#E2E8F0]">
              <div className="w-10 h-10 rounded-full bg-[#E6F4F1] flex items-center justify-center text-[#006D68] mb-4">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#102A43] mb-2">
                Medical Teaching & Training
              </h3>
              <p className="text-xs sm:text-sm text-[#627D98] leading-relaxed">
                Active in instructing undergraduate (MBBS) and postgraduate (MD) medical scholars in clinical epidemiology, community diagnosis, preventive medicine, and research methodology.
              </p>
            </div>

            <div className="p-6 rounded-md bg-[#F8F7F2] border border-[#E2E8F0]">
              <div className="w-10 h-10 rounded-full bg-[#E6F4F1] flex items-center justify-center text-[#006D68] mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#102A43] mb-2">
                Postgraduate Dissertation Mentorship
              </h3>
              <p className="text-xs sm:text-sm text-[#627D98] leading-relaxed">
                Guiding clinical and community health residents through empirical field research, trial protocol formulation, statistical analysis, and peer-reviewed publishing.
              </p>
            </div>

            <div className="p-6 rounded-md bg-[#F8F7F2] border border-[#E2E8F0]">
              <div className="w-10 h-10 rounded-full bg-[#E6F4F1] flex items-center justify-center text-[#006D68] mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#102A43] mb-2">
                Community Health Initiatives
              </h3>
              <p className="text-xs sm:text-sm text-[#627D98] leading-relaxed">
                Directing outreach camps, screening programs for non-communicable diseases, health literacy workshops, and collaboration with local health administrators across Odisha.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Links */}
      <AcademicLinkCard />

      {/* Appointment CTA */}
      <AppointmentCTA />
    </div>
  );
}
