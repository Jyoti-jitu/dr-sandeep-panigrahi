import Image from "next/image";
import Link from "next/link";
import {
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Clock,
  HeartPulse,
  Activity,
  FileCheck,
  HelpCircle,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { consultationOptions, areasOfExpertise, doctorProfile } from "@/lib/data";

export const metadata = {
  title: "Clinical Care & Consultations | Prof. Dr. Sandeep Kumar Panigrahi",
  description:
    "Evidence-based clinical care, diabetes management, preventive health screening, and personalized lifestyle medicine by Prof. Dr. Sandeep Kumar Panigrahi in Bhubaneswar.",
};

const clinicalServices = [
  {
    id: "preventive-healthcare",
    title: "Preventive Healthcare & Health Screening",
    badge: "Primordial & Primary Prevention",
    description:
      "A systematic clinical approach targeting the root causes of metabolic and cardiovascular chronic conditions before irreversible symptoms manifest.",
    highlights: [
      "Comprehensive cardiovascular and metabolic risk stratification",
      "Early screening for impaired fasting glucose and occult insulin resistance",
      "Guidance on individualized periodic laboratory investigations",
      "Family history risk assessment and preventive action plans",
    ],
    image: "/images/expertise_preventive.png",
  },
  {
    id: "diabetes-lifestyle",
    title: "Comprehensive Diabetes Care & Glycemic Optimization",
    badge: "Evidence-Based Endocrinology Support",
    description:
      "Patient-centered clinical management for pre-diabetes, newly diagnosed type 2 diabetes, and long-standing chronic glycemic volatility.",
    highlights: [
      "Personalized glycemic targets aligned with age and comorbidities",
      "Guidance on medical nutrition therapy (glycemic load & meal balancing)",
      "Aerobic and resistance physical activity prescription",
      "Microvascular and macrovascular complication screening (eyes, kidneys, feet)",
    ],
    image: "/images/expertise_diabetes.png",
  },
  {
    id: "lifestyle-management",
    title: "Lifestyle Modification & Behavior Change Counseling",
    badge: "Sustainable Daily Habits",
    description:
      "Translating clinical guidelines into actionable, realistic, culturally-tailored dietary and activity routines that patients can maintain permanently.",
    highlights: [
      "Structured behavioral strategies to break prolonged sedentary hours",
      "Evidence-guided sleep hygiene and stress-reduction techniques",
      "Strategies to boost medication and monitoring compliance",
      "Use of wearable and mobile health reminders to sustain adherence",
    ],
    image: "/images/article_physical_activity.png",
  },
];

const faqs = [
  {
    q: "How can I schedule an in-person consultation at IMS & SUM Hospital?",
    a: "In-person clinical consultations are held at the Department of Community Medicine / Clinical Outpatient Services, IMS & SUM Hospital, Bhubaneswar. You may request an appointment through our online booking form or contact the hospital consultation desk directly.",
  },
  {
    q: "Who is eligible for online video consultations?",
    a: "Online consultations are suitable for lifestyle guidance, review of prior laboratory investigations (such as HbA1c, lipid profiles, renal panels), follow-up discussions for established patients, and second opinions on preventive regimens. Patients requiring emergency acute evaluation or detailed physical examination are advised to visit the hospital in person.",
  },
  {
    q: "What medical records should I prepare prior to the consultation?",
    a: "Please keep all recent laboratory results (within the last 6 months), current medication prescriptions with exact dosages, any self-monitored blood glucose (SMBG) logs, and relevant prior discharge summaries or cardiology/radiology reports readily available.",
  },
  {
    q: "Are the lifestyle recommendations scientifically validated?",
    a: "Yes. All lifestyle modifications, nutritional advice, and exercise prescriptions are strictly anchored in international clinical guidelines (ADA, EASD, ICMR, and WHO) and Dr. Panigrahi's peer-reviewed epidemiological research.",
  },
];

export default function ClinicalCarePage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-[#F8F7F2] py-12 sm:py-16 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[11px] font-bold tracking-widest text-[#006D68] uppercase block mb-2">
              PATIENT CARE & CLINICAL SERVICES
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102A43] tracking-tight leading-tight">
              Clinical Care & Consultations
            </h1>
            <p className="mt-3 text-base sm:text-lg text-[#627D98] leading-relaxed">
              Personalized medical care emphasizing proactive prevention, structured diabetes management, and evidence-informed lifestyle medicine.
            </p>
          </div>
        </div>
      </section>

      {/* Mandatory Medical Disclaimer Banner */}
      <div className="bg-[#FFFBEB] border-b border-[#FDE68A] py-3.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-amber-900 leading-snug">
            <strong>Medical Disclaimer:</strong> This website provides general educational information and does not replace individualized medical evaluation, diagnosis or treatment. Always seek the advice of your qualified healthcare provider with any questions you may have regarding a medical condition.
          </p>
        </div>
      </div>

      {/* Core Clinical Focus Sections */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="SERVICES"
            title="Clinical Practice Areas"
            subtitle="Grounding clinical interventions in prevention, thorough evaluation, and collaborative goal setting."
          />

          <div className="space-y-12">
            {clinicalServices.map((service, idx) => (
              <div
                key={service.id}
                id={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 rounded-lg border border-[#E2E8F0] bg-[#F8F7F2]/50 hover:bg-[#F8F7F2] transition-colors"
              >
                <div
                  className={`lg:col-span-7 space-y-4 ${
                    idx % 2 === 1 ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <span className="inline-block px-2.5 py-0.5 rounded-xs text-[10px] sm:text-xs font-semibold uppercase tracking-wider bg-[#E6F4F1] text-[#006D68] border border-[#BCE3DE]">
                    {service.badge}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#102A43]">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#243B53] leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-bold text-[#102A43] uppercase tracking-wider mb-2">
                      Clinical Focus:
                    </h4>
                    <ul className="space-y-2">
                      {service.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#243B53]">
                          <CheckCircle2 className="w-4 h-4 text-[#006D68] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3">
                    <Link
                      href="/appointment"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#006D68] hover:text-[#0F8B83]"
                    >
                      <span>Consult for this service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                <div
                  className={`lg:col-span-5 ${
                    idx % 2 === 1 ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative aspect-16/10 w-full rounded-md overflow-hidden border border-[#E2E8F0] shadow-2xs bg-[#F3F5F4]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 450px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Options Grid */}
      <section className="py-12 sm:py-16 bg-[#F8F7F2] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="OPTIONS"
            title="Consultation Formats"
            subtitle="Flexible consultation models tailored to your clinical requirements and location."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {consultationOptions.map((opt, i) => (
              <div
                key={i}
                className="bg-white border border-[#E2E8F0] rounded-md p-6 flex flex-col justify-between card-hover shadow-2xs"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#E6F4F1] text-[#006D68] flex items-center justify-center mb-4">
                    {opt.type === "in-person" && <HeartPulse className="w-5 h-5" />}
                    {opt.type === "online" && <Activity className="w-5 h-5" />}
                    {opt.type === "follow-up" && <FileCheck className="w-5 h-5" />}
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#102A43]">
                    {opt.title}
                  </h3>
                  <p className="text-xs text-[#006D68] font-medium mt-0.5">
                    {opt.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#627D98] mt-3 leading-relaxed">
                    {opt.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#ECEFF1] text-xs space-y-1.5 text-[#243B53]">
                    <div>
                      <strong className="text-[#102A43]">Availability:</strong> {opt.timing}
                    </div>
                    <div>
                      <strong className="text-[#102A43]">Recommended for:</strong>{" "}
                      <span className="text-[#627D98]">{opt.suitableFor}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#ECEFF1]">
                  <Link
                    href={`/appointment?type=${opt.type}`}
                    className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#006D68] hover:bg-[#0F8B83] text-white text-xs sm:text-sm font-medium rounded-md transition-colors"
                  >
                    <span>Select Option</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="PATIENT FAQ"
            title="Frequently Asked Questions"
            subtitle="Answers regarding appointments, consultations, preparation, and clinical practice."
          />

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-[#F8F7F2] border border-[#E2E8F0] rounded-md p-5 sm:p-6"
              >
                <h4 className="font-serif font-bold text-base sm:text-lg text-[#102A43] flex items-start gap-2.5">
                  <HelpCircle className="w-4 h-4 text-[#006D68] shrink-0 mt-1" />
                  <span>{faq.q}</span>
                </h4>
                <p className="mt-2.5 text-xs sm:text-sm text-[#243B53] pl-6.5 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA Banner */}
      <section className="py-12 bg-[#E6F4F1] border-b border-[#BCE3DE]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#102A43]">
            Ready to Schedule Your Clinical Consultation?
          </h2>
          <p className="mt-2 text-sm text-[#243B53] max-w-xl mx-auto">
            Book an in-person appointment in Bhubaneswar or an online telemedicine consultation with Prof. Dr. Sandeep Kumar Panigrahi.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/appointment"
              className="px-6 py-3 bg-[#006D68] hover:bg-[#0F8B83] text-white text-sm font-medium rounded-md shadow-xs transition-colors"
            >
              Book an Appointment Now →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
