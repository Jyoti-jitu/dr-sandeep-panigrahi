"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Play,
  Calendar,
  MapPin,
  Mic,
  Video,
  Presentation,
  Users,
  ExternalLink,
  X,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { mediaItems } from "@/lib/data";

const mediaCategories = [
  "All",
  "Guest Lecture",
  "Conference Presentation",
  "Panel Discussion",
  "Webinar",
];

export default function MediaPage() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [activeMediaModal, setActiveMediaModal] = useState(null);

  const filteredMedia =
    selectedFilter === "All"
      ? mediaItems
      : mediaItems.filter((item) => item.type === selectedFilter);

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-[#F8F7F2] py-12 sm:py-16 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[11px] font-bold tracking-widest text-[#006D68] uppercase block mb-2">
              PUBLIC ENGAGEMENT & SCHOLARLY DISCOURSE
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102A43] tracking-tight leading-tight">
              Media, Talks & Lectures
            </h1>
            <p className="mt-3 text-base sm:text-lg text-[#627D98] leading-relaxed">
              Academic keynotes, guest lectures, healthcare symposiums, and public health commentary by Prof. Dr. Sandeep Kumar Panigrahi.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Video / Keynote Banner */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 rounded-xl bg-[#F8F7F2] border border-[#E2E8F0]">
            {/* Left Featured Media Info */}
            <div className="lg:col-span-6 space-y-4">
              <span className="px-2.5 py-0.5 rounded-xs text-[10px] font-semibold uppercase tracking-wider bg-[#006D68] text-white">
                FEATURED GUEST LECTURE
              </span>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#102A43] leading-snug">
                Public Health in the 21st Century
              </h2>

              <div className="flex flex-wrap items-center gap-4 text-xs text-[#627D98]">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#006D68]" />
                  15 Mar 2024
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#006D68]" />
                  National Health Conclave, New Delhi
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#243B53] leading-relaxed">
                An authoritative overview on re-architecting healthcare systems to prioritize primordial and primary chronic disease prevention, leveraging digital mobile technologies, and addressing urban metabolic syndromes.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => setActiveMediaModal(mediaItems[0])}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#006D68] hover:bg-[#0F8B83] text-white text-xs sm:text-sm font-medium rounded-md shadow-xs transition-colors"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Watch Session Overview</span>
                </button>
              </div>
            </div>

            {/* Right Video Mockup */}
            <div className="lg:col-span-6">
              <div
                onClick={() => setActiveMediaModal(mediaItems[0])}
                className="relative aspect-16/10 w-full rounded-lg overflow-hidden border border-[#CBD5E1] shadow-md cursor-pointer group"
              >
                <Image
                  src={mediaItems[0].image}
                  alt="Public Health in the 21st Century keynote address"
                  fill
                  sizes="(max-width: 768px) 100vw, 550px"
                  className="object-cover group-hover:scale-103 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/95 backdrop-blur-2xs flex items-center justify-center text-[#102A43] group-hover:bg-[#006D68] group-hover:text-white group-hover:scale-110 transition-all shadow-lg">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Media Sessions */}
      <section className="py-12 sm:py-16 bg-[#F8F7F2] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <SectionHeading
              eyebrow="EVENTS & ARCHIVES"
              title="Lectures, Conferences & Dialogues"
              subtitle="Documented talks, panel discussions, and scientific seminars."
              className="mb-0"
            />

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
              {mediaCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                    selectedFilter === cat
                      ? "bg-[#006D68] text-white"
                      : "bg-white text-[#243B53] border border-[#CBD5E1] hover:bg-[#F3F5F4]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMedia.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#E2E8F0] rounded-md overflow-hidden card-hover shadow-2xs group flex flex-col justify-between"
              >
                <div>
                  <div
                    onClick={() => setActiveMediaModal(item)}
                    className="relative aspect-16/10 w-full overflow-hidden bg-[#F3F5F4] border-b border-[#E2E8F0] cursor-pointer"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover group-hover:scale-103 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-2xs flex items-center justify-center text-[#102A43] group-hover:bg-[#006D68] group-hover:text-white transition-all shadow-md">
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-2xs px-2.5 py-0.5 rounded-xs text-[10px] font-semibold text-[#006D68] uppercase tracking-wider border border-[#E2E8F0]">
                      {item.type}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#102A43] group-hover:text-[#006D68] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <div className="mt-2.5 flex items-center gap-3 text-xs text-[#627D98]">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#006D68]" />
                        {item.date}
                      </span>
                    </div>

                    {item.location && (
                      <p className="mt-1.5 text-xs text-[#627D98] flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#006D68]" />
                        {item.location}
                      </p>
                    )}

                    <p className="mt-3 text-xs text-[#243B53] leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0">
                  <div className="pt-3 border-t border-[#ECEFF1] flex items-center justify-between">
                    <button
                      onClick={() => setActiveMediaModal(item)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#006D68] hover:text-[#0F8B83] transition-colors"
                    >
                      <span>Session Details</span>
                      <Play className="w-3 h-3" />
                    </button>
                    <span className="text-[11px] text-[#829ab1]">Academic</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Detail Modal */}
      {activeMediaModal && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveMediaModal(null)}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full p-6 sm:p-8 border border-[#CBD5E1] shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveMediaModal(null)}
              className="absolute top-4 right-4 p-2 text-[#627D98] hover:text-[#102A43] hover:bg-[#F3F5F4] rounded-full"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-2.5 py-0.5 rounded-xs text-[10px] font-semibold uppercase tracking-wider bg-[#E6F4F1] text-[#006D68] border border-[#BCE3DE]">
              {activeMediaModal.type}
            </span>

            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#102A43] mt-2 leading-snug">
              {activeMediaModal.title}
            </h3>

            <div className="mt-3 flex items-center gap-4 text-xs text-[#627D98] pb-3 border-b border-[#E2E8F0]">
              <span>Date: {activeMediaModal.date}</span>
              {activeMediaModal.location && <span>• Location: {activeMediaModal.location}</span>}
            </div>

            <div className="relative aspect-16/9 w-full my-4 rounded-md overflow-hidden bg-slate-900 border border-[#CBD5E1]">
              <Image
                src={activeMediaModal.image}
                alt={activeMediaModal.title}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center bg-black/40">
                <Play className="w-12 h-12 fill-white mb-2" />
                <span className="text-xs font-semibold">Video Session Recording</span>
                <span className="text-[11px] text-slate-300">
                  Recorded live at {activeMediaModal.location || "Academic Center"}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#243B53] leading-relaxed">
              {activeMediaModal.description}
            </p>

            <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex justify-between items-center">
              <span className="text-xs text-[#627D98]">Speaker: Prof. Dr. Sandeep Kumar Panigrahi</span>
              <button
                onClick={() => setActiveMediaModal(null)}
                className="px-4 py-2 bg-[#102A43] text-white text-xs font-medium rounded-md hover:bg-[#006D68] transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
