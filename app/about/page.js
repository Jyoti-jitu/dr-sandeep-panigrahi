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
                    className="object-cover object-[center_20%]"
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
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="ACADEMIC LEADERSHIP"
            title="Teaching, Mentorship & Public Health Engagement"
            subtitle="Instructing future physicians, directing postgraduate epidemiological research, and leading community health outreach."
            className="mb-8 sm:mb-10"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Authentic Institutional Faculty Photo Card */}
            <div className="lg:col-span-4 bg-[#F8F7F2] border border-[#CBD5E1] rounded-xl overflow-hidden p-5 shadow-2xs space-y-4">
              <div className="relative aspect-square w-full rounded-lg overflow-hidden border border-[#CBD5E1] shadow-2xs bg-white">
                <Image
                  src={doctorProfile.images.academicLanyard}
                  alt="Prof. Dr. Sandeep Kumar Panigrahi at institutional medical faculty event"
                  fill
                  sizes="(max-width: 1024px) 100vw, 380px"
                  className="object-cover object-top hover:scale-103 transition-transform duration-300"
                />
              </div>

              <div>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#006D68] bg-[#E6F4F1] px-2.5 py-0.5 rounded-full border border-[#BCE3DE] uppercase">
                  Institutional Medical Faculty
                </span>
                <h3 className="font-serif font-bold text-base text-[#102A43] mt-1.5">
                  Prof. Dr. Sandeep Kumar Panigrahi
                </h3>
                <p className="text-xs text-[#006D68] font-semibold mt-0.5">
                  Professor of Community Medicine
                </p>
                <p className="text-xs text-[#627D98] mt-1 leading-relaxed">
                  IMS & SUM Hospital, Siksha &apos;O&apos; Anusandhan (SOA) Deemed to be University, Bhubaneswar
                </p>
              </div>

              <div className="pt-3 border-t border-[#E2E8F0] text-[11px] text-[#486581] leading-relaxed italic">
                &ldquo;Medical education must synthesize bedside diagnostic rigor with proactive population health and compassionate care.&rdquo;
              </div>
            </div>

            {/* Right: 3 Mentorship & Instruction Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="p-5 sm:p-6 rounded-xl bg-[#F8F7F2] border border-[#E2E8F0] flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#E6F4F1] flex items-center justify-center text-[#006D68] mb-3.5">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif font-bold text-base text-[#102A43] mb-2 leading-snug">
                    Medical Teaching & Training
                  </h4>
                  <p className="text-xs text-[#627D98] leading-relaxed">
                    Instructing undergraduate (MBBS) and postgraduate (MD) scholars in clinical epidemiology, community diagnosis, preventive medicine, and research methodology.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E2E8F0] text-[11px] font-semibold text-[#006D68]">
                  MBBS & MD Scholars
                </div>
              </div>

              <div className="p-5 sm:p-6 rounded-xl bg-[#F8F7F2] border border-[#E2E8F0] flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#E6F4F1] flex items-center justify-center text-[#006D68] mb-3.5">
                    <Users className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif font-bold text-base text-[#102A43] mb-2 leading-snug">
                    Dissertation Mentorship
                  </h4>
                  <p className="text-xs text-[#627D98] leading-relaxed">
                    Guiding medical residents through empirical field studies, trial protocol design, biostatistical analysis, and publication in peer-reviewed indexed journals.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E2E8F0] text-[11px] font-semibold text-[#006D68]">
                  Postgraduate Theses
                </div>
              </div>

              <div className="p-5 sm:p-6 rounded-xl bg-[#F8F7F2] border border-[#E2E8F0] flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#E6F4F1] flex items-center justify-center text-[#006D68] mb-3.5">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif font-bold text-base text-[#102A43] mb-2 leading-snug">
                    Community Initiatives
                  </h4>
                  <p className="text-xs text-[#627D98] leading-relaxed">
                    Conducting outreach clinics, non-communicable disease screenings, health literacy workshops, and rural health collaborations across Odisha.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E2E8F0] text-[11px] font-semibold text-[#006D68]">
                  Community Outreach
                </div>
              </div>
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
