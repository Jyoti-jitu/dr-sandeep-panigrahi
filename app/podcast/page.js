"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Play,
  Pause,
  Clock,
  Calendar,
  ExternalLink,
  Radio,
  Eye,
  Share2,
  CheckCircle2,
  RefreshCw,
} from "lucide-react";
import YouTubeIcon from "@/components/YouTubeIcon";
import SectionHeading from "@/components/SectionHeading";
import { podcastData } from "@/lib/data";

export default function PodcastPage() {
  const allEpisodes = [podcastData.latestEpisode, ...podcastData.archiveEpisodes];
  const [currentEpisode, setCurrentEpisode] = useState(allEpisodes[0]);
  const [isPlayingInline, setIsPlayingInline] = useState(false);

  const handleSelectEpisode = (ep) => {
    setCurrentEpisode(ep);
    setIsPlayingInline(true);
    // Smooth scroll to player on mobile
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      document.getElementById("main-player")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-[#F8F7F2] py-12 sm:py-16 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[11px] font-bold tracking-widest text-[#006D68] uppercase block mb-2">
              ACADEMIC MEDICAL & PUBLIC HEALTH PODCAST
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102A43] tracking-tight leading-tight">
              {podcastData.title}
            </h1>
            <p className="mt-3 text-base sm:text-lg text-[#627D98] leading-relaxed">
              {podcastData.description} Hosted by Prof. Dr. Sandeep Kumar Panigrahi.
            </p>

            {/* YouTube Channel Auto-Sync Live Indicator */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-3 py-1.5 rounded-full text-xs font-semibold">
                <YouTubeIcon className="w-4 h-4 text-red-600 shrink-0" />
                <span>Auto-synced with YouTube Channel: {podcastData.youtubeConfig.channelHandle}</span>
              </div>
              <span className="text-xs text-[#627D98] flex items-center gap-1">
                <RefreshCw className="w-3 h-3 text-[#006D68]" />
                All new video uploads appear here automatically
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Video Player Studio */}
      <section id="main-player" className="py-10 sm:py-14 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
            {/* Top Player Screen (Embedded YouTube Player) */}
            <div className="relative aspect-16/9 w-full bg-slate-950">
              <iframe
                src={`https://www.youtube.com/embed/${currentEpisode.youtubeId}?rel=0&autoplay=${isPlayingInline ? 1 : 0}`}
                title={currentEpisode.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>

            {/* Player Info Bar */}
            <div className="p-6 sm:p-8 bg-[#102A43] text-white">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-700">
                <div>
                  <div className="flex items-center gap-3 text-xs text-[#A0D8D0] font-semibold mb-1">
                    <span className="uppercase tracking-wider">
                      {currentEpisode.number}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-slate-300">
                      <Calendar className="w-3.5 h-3.5" />
                      {currentEpisode.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-slate-300">
                      <Clock className="w-3.5 h-3.5" />
                      {currentEpisode.duration}
                    </span>
                  </div>

                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-white leading-snug">
                    {currentEpisode.title}
                  </h2>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <a
                    href={currentEpisode.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold rounded-md shadow-xs transition-colors"
                  >
                    <YouTubeIcon className="w-4 h-4 text-white" />
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
                {currentEpisode.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Episode Archive Grid: Real-time Video Stream Reference */}
      <section className="py-12 sm:py-16 bg-[#F8F7F2] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <SectionHeading
              eyebrow="EPISODE ARCHIVE"
              title="All Video Podcast Episodes"
              subtitle="Conversations spanning diabetes prevention, digital health adherence, and community medicine policy."
              className="mb-0"
            />

            <a
              href={podcastData.youtubeConfig.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 transition-colors"
            >
              <span>Subscribe on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allEpisodes.map((ep) => {
              const isSelected = currentEpisode.id === ep.id;
              const thumbUrl = `https://img.youtube.com/vi/${ep.youtubeId}/hqdefault.jpg`;

              return (
                <div
                  key={ep.id}
                  onClick={() => handleSelectEpisode(ep)}
                  className={`bg-white rounded-xl overflow-hidden border cursor-pointer card-hover shadow-2xs group flex flex-col justify-between transition-all ${
                    isSelected
                      ? "border-[#006D68] ring-2 ring-[#006D68]"
                      : "border-[#E2E8F0] hover:border-[#CBD5E1]"
                  }`}
                >
                  <div>
                    {/* YouTube Video Thumbnail */}
                    <div className="relative aspect-16/9 w-full bg-slate-900 overflow-hidden">
                      <Image
                        src={thumbUrl}
                        alt={ep.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 300px"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors flex items-center justify-center">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-transform ${
                            isSelected
                              ? "bg-[#006D68] text-white scale-110"
                              : "bg-red-600 text-white group-hover:scale-110"
                          }`}
                        >
                          <Play className="w-4 h-4 fill-white ml-0.5" />
                        </div>
                      </div>

                      {/* Video Duration Badge */}
                      <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-mono font-semibold px-2 py-0.5 rounded-xs">
                        {ep.duration}
                      </span>
                    </div>

                    <div className="p-4">
                      <div className="flex items-center justify-between text-[11px] text-[#006D68] font-semibold mb-1">
                        <span>{ep.number}</span>
                        <span className="text-[#627D98]">{ep.date}</span>
                      </div>

                      <h3 className="font-serif font-bold text-sm text-[#102A43] group-hover:text-[#006D68] transition-colors leading-snug line-clamp-2">
                        {ep.title}
                      </h3>

                      <p className="mt-2 text-xs text-[#627D98] line-clamp-2 leading-relaxed">
                        {ep.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 pt-0">
                    <div className="pt-3 border-t border-[#ECEFF1] flex items-center justify-between text-xs">
                      <span className="text-[#006D68] font-semibold flex items-center gap-1">
                        {isSelected ? "Currently Playing" : "Play Episode"}
                        <Play className="w-3 h-3 fill-current" />
                      </span>
                      <span className="text-[11px] text-[#627D98]">{ep.views || "HD"}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Podcast Platforms & Distribution */}
      <section className="py-12 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#102A43]">
            Listen on Your Favorite Streaming App
          </h3>
          <p className="text-xs sm:text-sm text-[#627D98] mt-2 max-w-lg mx-auto">
            Episodes are published in high-definition video on YouTube and syndicated as audio feeds across Spotify and Apple Podcasts.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            {podcastData.platforms.map((platform, idx) => (
              <a
                key={idx}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-5 py-2.5 bg-[#F8F7F2] border border-[#CBD5E1] rounded-lg text-xs font-semibold text-[#102A43] hover:border-[#006D68] hover:text-[#006D68] transition-colors shadow-2xs"
              >
                <span>{platform.name}</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#627D98]" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
