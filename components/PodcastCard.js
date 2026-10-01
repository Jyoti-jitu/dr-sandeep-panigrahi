"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Play,
  Pause,
  ArrowRight,
  ExternalLink,
  X,
  Radio,
  Eye,
  CheckCircle2,
} from "lucide-react";
import YouTubeIcon from "@/components/YouTubeIcon";
import { podcastData } from "@/lib/data";

export default function PodcastCard() {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState(null);

  const openVideo = (youtubeId) => {
    setActiveVideoId(youtubeId);
    setIsPlayingVideo(true);
  };

  const closeVideo = () => {
    setIsPlayingVideo(false);
    setActiveVideoId(null);
  };

  return (
    <section className="py-12 sm:py-16 bg-[#F8F7F2] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading & Description & Auto-Sync Badge */}
          <div className="lg:col-span-4">
            <span className="text-[11px] font-bold tracking-widest text-[#006D68] uppercase block mb-1">
              PODCAST
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#102A43] tracking-tight leading-tight">
              {podcastData.title}
            </h2>

            {/* YouTube Auto-Sync Reference Indicator */}
            <div className="inline-flex items-center gap-1.5 text-[11px] text-[#006D68] bg-[#E6F4F1] px-2.5 py-1 rounded-full border border-[#BCE3DE] my-3 font-semibold">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span>Auto-synced with YouTube Channel</span>
            </div>

            <p className="text-xs sm:text-sm text-[#243B53] leading-relaxed">
              {podcastData.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/podcast"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#006D68] hover:bg-[#0F8B83] text-white text-xs sm:text-sm font-medium rounded-md shadow-xs transition-colors"
              >
                <span>Explore All Episodes</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Center Column: Latest Episode Card with YouTube Player preview */}
          <div className="lg:col-span-6 bg-white border border-[#CBD5E1] rounded-xl p-4 sm:p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row items-center gap-5">
              {/* Cover Art with YouTube Play Button Overlay */}
              <div
                onClick={() => openVideo(podcastData.latestEpisode.youtubeId)}
                className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-lg overflow-hidden shrink-0 border border-[#CBD5E1] shadow-2xs cursor-pointer group"
              >
                <Image
                  src={podcastData.coverImage}
                  alt={podcastData.title}
                  fill
                  sizes="130px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-red-600 group-hover:bg-red-700 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 fill-white ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Episode Details */}
              <div className="flex-1 w-full">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-bold tracking-wider text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded-sm uppercase flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping" />
                    LATEST YOUTUBE UPLOAD
                  </span>
                  <span className="text-[11px] font-mono font-medium text-[#627D98]">
                    {podcastData.latestEpisode.duration}
                  </span>
                </div>

                <div className="text-xs font-semibold text-[#006D68] mt-1.5">
                  {podcastData.latestEpisode.number} • {podcastData.latestEpisode.date}
                </div>

                <h4 className="font-serif font-bold text-sm sm:text-base text-[#102A43] leading-snug mt-1">
                  {podcastData.latestEpisode.title}
                </h4>

                <p className="text-xs text-[#627D98] mt-1.5 line-clamp-2 leading-relaxed">
                  {podcastData.latestEpisode.description}
                </p>

                {/* Video & Audio Triggers */}
                <div className="mt-4 pt-3 border-t border-[#ECEFF1] flex flex-wrap items-center justify-between gap-2 text-xs font-semibold">
                  <button
                    onClick={() => openVideo(podcastData.latestEpisode.youtubeId)}
                    className="inline-flex items-center gap-1 text-[#006D68] hover:text-[#0F8B83] transition-colors"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Watch Video Episode</span>
                  </button>

                  <a
                    href={podcastData.latestEpisode.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-red-600 hover:text-red-700 transition-colors"
                  >
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Platform links with YouTube Emphasis */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-[#102A43] uppercase tracking-wider mb-3">
              Also On
            </h4>
            <div className="flex flex-col space-y-2">
              <a
                href={podcastData.youtubeConfig.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-3 py-2 bg-white rounded-md border border-red-200 hover:border-red-400 transition-colors text-xs text-[#102A43] font-semibold group shadow-2xs"
              >
                <div className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs shrink-0 group-hover:scale-105 transition-transform">
                  ▶
                </div>
                <span>YouTube Channel</span>
              </a>

              <a
                href="https://spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-3 py-2 bg-white rounded-md border border-[#E2E8F0] hover:border-green-400 transition-colors text-xs text-[#243B53] font-medium group"
              >
                <div className="w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-xs shrink-0">
                  ●
                </div>
                <span>Spotify</span>
              </a>

              <a
                href="https://podcasts.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-3 py-2 bg-white rounded-md border border-[#E2E8F0] hover:border-purple-400 transition-colors text-xs text-[#243B53] font-medium group"
              >
                <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs shrink-0">
                  
                </div>
                <span>Apple Podcasts</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded YouTube Modal for viewing videos directly */}
      {isPlayingVideo && activeVideoId && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={closeVideo}
        >
          <div
            className="bg-black rounded-xl overflow-hidden max-w-4xl w-full border border-slate-700 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-3 bg-slate-900 border-b border-slate-800 text-white text-xs">
              <span className="font-semibold flex items-center gap-1.5">
                <YouTubeIcon className="w-4 h-4 text-red-500" />
                <span>The Health Conversation with Prof. Dr. Sandeep Kumar Panigrahi</span>
              </span>
              <button
                onClick={closeVideo}
                className="p-1 text-slate-400 hover:text-white rounded-md"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-16/9 w-full">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0`}
                title="YouTube podcast video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
