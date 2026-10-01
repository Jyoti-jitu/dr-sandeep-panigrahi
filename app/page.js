import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import Hero from "@/components/Hero";
import CredentialStrip from "@/components/CredentialStrip";
import SectionHeading from "@/components/SectionHeading";
import Timeline from "@/components/Timeline";
import ExpertiseCard from "@/components/ExpertiseCard";
import ResearchPreview from "@/components/ResearchCard";
import PublicationCard from "@/components/PublicationCard";
import ArticleCard from "@/components/ArticleCard";
import PodcastCard from "@/components/PodcastCard";
import MediaCard from "@/components/MediaCard";
import AcademicLinkCard from "@/components/AcademicLinkCard";
import AppointmentCTA from "@/components/AppointmentCTA";
import {
  doctorProfile,
  focusAreas,
  areasOfExpertise,
  publications,
  articles,
  mediaItems,
} from "@/lib/data";

export default function HomePage() {
  const featuredPublications = publications.filter((p) => p.featured).slice(0, 4);
  const featuredArticles = articles.slice(0, 3);
  const featuredMedia = mediaItems[0];

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Credentials Strip */}
      <CredentialStrip />

      {/* 3. Short About Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, Bio & CTA */}
            <div className="lg:col-span-6">
              <span className="text-[11px] font-bold tracking-widest text-[#006D68] uppercase block mb-2">
                ABOUT
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#102A43] tracking-tight leading-tight">
                {doctorProfile.aboutHeading}
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#243B53] leading-relaxed">
                {doctorProfile.aboutParagraph}
              </p>

              <div className="mt-6">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-[#006D68] hover:bg-[#0F8B83] text-white text-xs sm:text-sm font-medium rounded-md shadow-xs transition-colors"
                >
                  <span>More About Dr. Panigrahi</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Doctor Standing Photo & Focus Areas */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              {/* Doctor Photo */}
              <div className="sm:col-span-5 relative">
                <div className="relative aspect-3/4 w-full rounded-md overflow-hidden border border-[#E2E8F0] shadow-2xs bg-[#F8F7F2]">
                  <Image
                    src={doctorProfile.images.aboutDoctor}
                    alt="Prof. Dr. Sandeep Kumar Panigrahi standing in clinic"
                    fill
                    sizes="(max-width: 640px) 100vw, 250px"
                    className="object-cover object-[center_15%]"
                  />
                </div>
              </div>

              {/* 5 Focus Areas */}
              <div className="sm:col-span-7 space-y-3.5">
                {focusAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-2.5 rounded-md hover:bg-[#F8F7F2] transition-colors border border-transparent hover:border-[#E2E8F0]"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#E6F4F1] flex items-center justify-center text-[#006D68] shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-xs sm:text-sm text-[#102A43] leading-tight">
                        {area.title}
                      </h4>
                      <p className="text-[11px] text-[#627D98] mt-0.5 leading-snug">
                        {area.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Professional Journey Preview */}
      <section className="py-12 sm:py-16 bg-[#F8F7F2] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="JOURNEY"
            title="Professional Journey"
            subtitle="A career dedicated to medicine, public health and community wellbeing."
            rightLinkHref="/about"
            rightLinkLabel="View Full Journey"
          />
          <Timeline isPreview={true} limit={6} />
        </div>
      </section>

      {/* 5. Areas of Expertise (6 Cards) */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="EXPERTISE"
            title="Areas of Expertise"
            subtitle="A holistic approach to health through clinical care, prevention, research and community engagement."
            rightLinkHref="/clinical-care"
            rightLinkLabel="Explore Clinical Services"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {areasOfExpertise.map((item) => (
              <ExpertiseCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Research Preview */}
      <ResearchPreview />

      {/* 7. Selected Publications */}
      <section className="py-12 sm:py-16 bg-[#F8F7F2] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FEATURED RESEARCH"
            title="Selected Publications"
            subtitle="Peer-reviewed research focusing on lifestyle interventions, mobile health applications, and population epidemiology."
            rightLinkHref="/publications"
            rightLinkLabel="View all publications"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPublications.map((pub) => (
              <PublicationCard key={pub.id} pub={pub} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. Podcast Preview */}
      <PodcastCard />

      {/* 9 & 10. Split Row: Health Insights & Media Preview */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Sub-Section: Health Insights (7 cols) */}
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="HEALTH INSIGHTS"
                title="Evidence-informed perspectives on everyday health."
                rightLinkHref="/health-insights"
                rightLinkLabel="Explore all articles"
                className="mb-8"
              />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {featuredArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </div>

            {/* Right Sub-Section: Media & Speaking (5 cols) */}
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="MEDIA & SPEAKING"
                title="Talks, interviews and public engagement."
                rightLinkHref="/media"
                rightLinkLabel="View all"
                className="mb-8"
              />
              {featuredMedia && <MediaCard item={featuredMedia} isLarge={true} />}
            </div>
          </div>
        </div>
      </section>

      {/* 11. Academic Presence */}
      <AcademicLinkCard />

      {/* 12. Appointment CTA */}
      <AppointmentCTA />
    </div>
  );
}
