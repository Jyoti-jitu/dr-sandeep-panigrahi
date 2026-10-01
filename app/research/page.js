"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Quote,
  Sparkles,
  ArrowRight,
  Filter,
  CheckCircle2,
  ExternalLink,
  Layers,
  Users2,
  Award,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import AcademicLinkCard from "@/components/AcademicLinkCard";
import {
  researchStatistics,
  researchThemes,
  publications,
  doctorProfile,
} from "@/lib/data";

const researchProjects = [
  {
    id: "proj-1",
    title:
      "Digital Health & Mobile Application Reminders for Type 2 Diabetes Adherence",
    theme: "Digital Health",
    themeSlug: "digital-health",
    status: "Completed & Published",
    duration: "2019 – 2022",
    summary:
      "A pragmatic randomized controlled evaluation measuring how mobile push notifications, medication timers, and digital dietary logging influence HbA1c control and compliance in newly diagnosed type 2 diabetic patients.",
    outcomes:
      "Demonstrated statistically significant reduction in postprandial glucose volatility and improved patient retention compared to standard paper-based dietary advice.",
    lead: "Principal Investigator: Prof. Dr. Sandeep Kumar Panigrahi",
    collaborators: "Department of Community Medicine, IMS & SUM Hospital",
  },
  {
    id: "proj-2",
    title:
      "Epidemiology of Sedentary Behavior and Physical Inactivity in Urban Cohorts",
    theme: "Lifestyle & Prevention",
    themeSlug: "lifestyle",
    status: "Completed & Published",
    duration: "2016 – 2018",
    summary:
      "Community-wide epidemiological survey assessing occupational, domestic, and leisure-time physical inactivity patterns across eastern Indian urban agglomerations utilizing validated IPAQ protocols.",
    outcomes:
      "Quantified independent predictors of metabolic syndrome associated with daily desk hours and documented the protective threshold of leisure-time physical activities.",
    lead: "Principal Investigator: Prof. Dr. Sandeep Kumar Panigrahi",
    collaborators: "Community Health Outreach Network",
  },
  {
    id: "proj-3",
    title:
      "Quality Assurance and Health Systems Strengthening for Maternal & Child Health",
    theme: "Public Health",
    themeSlug: "public-health",
    status: "Field Programme & Systems Analysis",
    duration: "2013 – 2015",
    summary:
      "Field-level programme monitoring of routine immunization coverage, maternal-infant tracking registers, and cold chain integrity in high-priority rural and tribal blocks.",
    outcomes:
      "Formulated standard operating feedback mechanisms to bridge frontline auxiliary nurse midwife reporting gaps, directly improving full immunization completion rates.",
    lead: "Public Health Specialist: Dr. Sandeep Kumar Panigrahi",
    collaborators: "UNICEF Partnership & State Health Department",
  },
  {
    id: "proj-4",
    title:
      "Evaluating Community Yoga Practice as an Adjunctive Non-Pharmacologic Therapy",
    theme: "Lifestyle & Prevention",
    themeSlug: "lifestyle",
    status: "Completed & Published",
    duration: "2015 – 2016",
    summary:
      "Investigated the prevalence, adherence determinants, and cardiovascular/metabolic correlates among adult regular practitioners of traditional yoga and pranayama.",
    outcomes:
      "Published in peer-reviewed indexed journals; showed favorable lipid profiles and lower resting systolic blood pressure among regular practitioners.",
    lead: "Lead Author: Prof. Dr. Sandeep Kumar Panigrahi",
    collaborators: "Primary Care Research Collaborative",
  },
  {
    id: "proj-5",
    title:
      "Primary Healthcare Center Infrastructure & Chronic Disease Management Capacity",
    theme: "Health Services",
    themeSlug: "health-services",
    status: "Ongoing Analysis",
    duration: "2021 – Present",
    summary:
      "Assessing urban health posts and primary health centers under the National Health Mission for essential diagnostics availability, point-of-care HbA1c testing, and physician consultation times.",
    outcomes:
      "Identifying critical resource bottlenecks to propose scalable public health staffing and digital dashboard models.",
    lead: "Faculty Lead: Prof. Dr. Sandeep Kumar Panigrahi",
    collaborators: "Academic Faculty & Postgraduate Scholars",
  },
];

const allThemes = [
  "All Themes",
  "Digital Health",
  "Lifestyle & Prevention",
  "Public Health",
  "Health Services",
];

export default function ResearchPage() {
  const [selectedTheme, setSelectedTheme] = useState("All Themes");

  const filteredProjects =
    selectedTheme === "All Themes"
      ? researchProjects
      : researchProjects.filter((p) => p.theme === selectedTheme);

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-[#F8F7F2] py-12 sm:py-16 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[11px] font-bold tracking-widest text-[#006D68] uppercase block mb-2">
              ACADEMIC RESEARCH & SCHOLARSHIP
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102A43] tracking-tight leading-tight">
              Research & Scientific Inquiry
            </h1>
            <p className="mt-3 text-base sm:text-lg text-[#627D98] leading-relaxed">
              Advancing population health and clinical outcomes through empirical epidemiological investigation, digital health interventions, and chronic disease prevention.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics & Impact Strip */}
      <section className="py-8 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-4 rounded-md bg-[#F8F7F2] border border-[#E2E8F0]">
              <div className="font-serif text-3xl font-bold text-[#102A43]">
                {researchStatistics.publicationsCount}
              </div>
              <div className="text-xs font-semibold text-[#006D68] uppercase tracking-wider mt-1">
                Peer-Reviewed Articles
              </div>
              <div className="text-[11px] text-[#627D98] mt-0.5">
                Indexed in PubMed, Scopus & Web of Science
              </div>
            </div>

            <div className="p-4 rounded-md bg-[#F8F7F2] border border-[#E2E8F0]">
              <div className="font-serif text-3xl font-bold text-[#102A43]">
                {researchStatistics.citationsCount}
              </div>
              <div className="text-xs font-semibold text-[#006D68] uppercase tracking-wider mt-1">
                Academic Citations
              </div>
              <div className="text-[11px] text-[#627D98] mt-0.5">
                Global scholarly references to his work
              </div>
            </div>

            <div className="p-4 rounded-md bg-[#F8F7F2] border border-[#E2E8F0]">
              <div className="font-serif text-3xl font-bold text-[#102A43]">
                {researchStatistics.yearsExperience}
              </div>
              <div className="text-xs font-semibold text-[#006D68] uppercase tracking-wider mt-1">
                Years in Medical Research
              </div>
              <div className="text-[11px] text-[#627D98] mt-0.5">
                Translating field data to clinical care
              </div>
            </div>

            <div className="p-4 rounded-md bg-[#F8F7F2] border border-[#E2E8F0]">
              <div className="font-serif text-3xl font-bold text-[#102A43]">
                6+
              </div>
              <div className="text-xs font-semibold text-[#006D68] uppercase tracking-wider mt-1">
                Core Research Themes
              </div>
              <div className="text-[11px] text-[#627D98] mt-0.5">
                From mHealth to chronic disease epidemiology
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Domains & Themes Grid */}
      <section className="py-12 sm:py-16 bg-[#F8F7F2] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="DOMAINS OF INQUIRY"
            title="Core Research Themes"
            subtitle="Bridging clinical observations in the hospital with epidemiological data from community populations."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchThemes.map((theme, i) => (
              <div
                key={i}
                className="bg-white border border-[#E2E8F0] rounded-md p-5 flex items-start gap-3.5 shadow-2xs card-hover"
              >
                <div className="w-8 h-8 rounded-full bg-[#E6F4F1] flex items-center justify-center text-[#006D68] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-[#102A43] leading-snug">
                    {theme}
                  </h3>
                  <p className="text-xs text-[#627D98] mt-1.5 leading-relaxed">
                    Investigating clinical efficacy, lifestyle compliance, and public health scalability across target demographics.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filterable Research Projects */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-[11px] font-bold tracking-widest text-[#006D68] uppercase block mb-1">
                INVESTIGATIONS & TRIALS
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#102A43]">
                Selected Research Projects
              </h2>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
              {allThemes.map((theme) => (
                <button
                  key={theme}
                  onClick={() => setSelectedTheme(theme)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                    selectedTheme === theme
                      ? "bg-[#006D68] text-white"
                      : "bg-[#F3F5F4] text-[#243B53] hover:bg-[#E2E8F0]"
                  }`}
                >
                  {theme}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                className="bg-[#F8F7F2] border border-[#E2E8F0] rounded-md p-6 sm:p-7 shadow-2xs card-hover"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#E2E8F0]">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-xs text-[10px] font-semibold uppercase tracking-wider bg-[#E6F4F1] text-[#006D68] border border-[#BCE3DE]">
                      {proj.theme}
                    </span>
                    <span className="text-xs text-[#627D98] font-medium">
                      {proj.duration}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-[#102A43]">
                    {proj.status}
                  </span>
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#102A43] mt-4 leading-snug">
                  {proj.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-[#243B53] leading-relaxed">
                  {proj.summary}
                </p>

                <div className="mt-4 p-3.5 bg-white rounded-md border border-[#E2E8F0] text-xs space-y-1.5">
                  <div>
                    <strong className="text-[#006D68]">Key Findings & Real-World Impact:</strong>{" "}
                    <span className="text-[#243B53]">{proj.outcomes}</span>
                  </div>
                  <div className="text-[#627D98]">
                    <strong>Investigators & Team:</strong> {proj.lead} • {proj.collaborators}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/publications"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#006D68] hover:bg-[#0F8B83] text-white text-xs sm:text-sm font-medium rounded-md shadow-xs transition-colors"
            >
              <span>Explore Complete Publication Archive</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Academic Presence */}
      <AcademicLinkCard />
    </div>
  );
}
