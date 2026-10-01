"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Play,
  Pause,
  Clock,
  Calendar,
  Radio,
  ExternalLink,
  Volume2,
  Share2,
  CheckCircle2,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { podcastData } from "@/lib/data";

export default function PodcastPage() {
  const [currentEpisode, setCurrentEpisode] = useState(podcastData.latestEpisode);
  const [isPlaying, setIsPlaying] = useState(false);

  const allEpisodes = [podcastData.latestEpisode, ...podcastData.archiveEpisodes];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSelectEpisode = (ep) => {
    setCurrentEpisode(ep);
    setIsPlaying(true);
  };

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-[#F8F7F2] py-12 sm:py-16 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[11px] font-bold tracking-widest text-[#006D68] uppercase block mb-2">
              ACADEMIC MEDICAL PODCAST
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102A43] tracking-tight leading-tight">
              {podcastData.title}
            </h1>
            <p className="mt-3 text-base sm:text-lg text-[#627D98] leading-relaxed">
              {podcastData.description}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Episode & Interactive Audio Player Studio */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-10 rounded-xl bg-[#F8F7F2] border border-[#E2E8F0] shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Cover Art */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-lg overflow-hidden border border-[#E2E8F0] shadow-md">
                  <Image
                    src={podcastData.coverImage}
                    alt={podcastData.title}
                    fill
                    sizes="260px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Player & Track Info */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-0.5 rounded-xs text-[10px] font-semibold uppercase tracking-wider bg-[#006D68] text-white">
                    NOW PLAYING
                  </span>
                  <span className="text-xs font-semibold text-[#006D68]">
                    {currentEpisode.number}
                  </span>
                  <span className="text-xs text-[#627D98]">•</span>
                  <span className="text-xs text-[#627D98] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#006D68]" />
                    {currentEpisode.duration}
                  </span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#102A43] leading-snug">
                  {currentEpisode.title}
                </h2>

                <p className="text-xs sm:text-sm text-[#243B53] leading-relaxed">
                  {currentEpisode.description}
                </p>

                {/* Simulated Interactive Waveform Player Bar */}
                <div className="pt-4 pb-2">
                  <div className="flex items-center gap-4 bg-white p-3.5 rounded-md border border-[#E2E8F0]">
                    <button
                      onClick={togglePlay}
                      aria-label={isPlaying ? "Pause podcast" : "Play podcast episode"}
                      className="w-12 h-12 rounded-full bg-[#006D68] hover:bg-[#0F8B83] text-white flex items-center justify-center shrink-0 shadow-xs transition-colors"
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5 fill-white" />
                      ) : (
                        <Play className="w-5 h-5 fill-white ml-0.5" />
                      )}
                    </button>

                    <div className="flex-1 flex items-center justify-between gap-1 h-9 px-2">
                      {[
                        30, 45, 75, 90, 60, 40, 70, 85, 95, 55, 65, 80, 40, 50,
                        95, 100, 75, 45, 65, 85, 90, 70, 55, 65, 45, 80, 95,
                        60, 40, 75, 85, 50,
                      ].map((h, i) => (
                        <div
                          key={i}
                          className={`w-1 rounded-full transition-all duration-300 ${
                            isPlaying
                              ? "bg-[#006D68] animate-pulse"
                              : "bg-[#CBD5E1]"
                          }`}
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-xs font-mono font-medium text-[#102A43] block">
                        {isPlaying ? "04:12" : "00:00"}
                      </span>
                      <span className="text-[10px] text-[#627D98] block">
                        / {currentEpisode.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Listen platforms */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <span className="text-xs font-semibold text-[#102A43]">
                    Available On:
                  </span>
                  {podcastData.platforms.map((p, idx) => (
                    <a
                      key={idx}
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#CBD5E1] rounded-md text-xs font-medium text-[#243B53] hover:text-[#006D68] hover:border-[#006D68] transition-colors"
                    >
                      <span>{p.name}</span>
                      <ExternalLink className="w-3 h-3 text-[#627D98]" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Episode Archive */}
      <section className="py-12 sm:py-16 bg-[#F8F7F2] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="EPISODE ARCHIVE"
            title="All Podcast Conversations"
            subtitle="Deep-dive academic and clinical discussions on lifestyle medicine, preventive cardiology, diabetes, and community epidemiology."
          />

          <div className="space-y-4">
            {allEpisodes.map((ep, idx) => {
              const isSelected = currentEpisode.number === ep.number;
              return (
                <div
                  key={idx}
                  onClick={() => handleSelectEpisode(ep)}
                  className={`p-5 sm:p-6 rounded-md border cursor-pointer transition-all ${
                    isSelected
                      ? "bg-white border-[#006D68] shadow-sm ring-1 ring-[#006D68]"
                      : "bg-white border-[#E2E8F0] hover:border-[#CBD5E1]"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (isSelected) {
                            togglePlay();
                          } else {
                            handleSelectEpisode(ep);
                          }
                        }}
                        className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                          isSelected && isPlaying
                            ? "bg-[#006D68] text-white"
                            : "bg-[#E6F4F1] text-[#006D68] hover:bg-[#006D68] hover:text-white"
                        }`}
                      >
                        {isSelected && isPlaying ? (
                          <Pause className="w-4 h-4 fill-current" />
                        ) : (
                          <Play className="w-4 h-4 fill-current ml-0.5" />
                        )}
                      </button>

                      <div>
                        <div className="text-[11px] font-bold text-[#006D68] uppercase tracking-wider">
                          {ep.number} • {ep.date}
                        </div>
                        <h3 className="font-serif text-base sm:text-lg font-bold text-[#102A43] mt-0.5">
                          {ep.title}
                        </h3>
                        <p className="text-xs text-[#627D98] mt-1 max-w-2xl leading-relaxed">
                          {ep.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
                      <span className="text-xs font-mono font-medium text-[#627D98] px-2.5 py-1 bg-[#F8F7F2] rounded-md border border-[#E2E8F0]">
                        {ep.duration}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
