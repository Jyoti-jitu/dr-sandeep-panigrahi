"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Play,
  ArrowRight,
  ExternalLink,
  X,
  Clock,
  Calendar,
  Sparkles,
  Radio,
} from "lucide-react";
import YouTubeIcon from "@/components/YouTubeIcon";
import { podcastData } from "@/lib/data";

export default function PodcastCard() {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState(null);
  const [imgSrc, setImgSrc] = useState(
    podcastData.latestEpisode.thumbnailUrl ||
      `https://img.youtube.com/vi/${podcastData.latestEpisode.youtubeId}/maxresdefault.jpg`
  );

  const openVideo = (youtubeId) => {
    setActiveVideoId(youtubeId);
    setIsPlayingVideo(true);
  };

  const closeVideo = () => {
    setIsPlayingVideo(false);
    setActiveVideoId(null);
  };

  const latest = podcastData.latestEpisode;

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#F8F7F2] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with All Podcasts CTA */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-[#006D68] uppercase block mb-1">
              PODCAST & VIDEO SERIES
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#102A43] tracking-tight leading-tight">
              {podcastData.title}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#486581] max-w-2xl leading-relaxed">
              {podcastData.description} Hosted by Prof. Dr. Sandeep Kumar Panigrahi.
            </p>
          </div>

          {/* Button for All Podcasts in header */}
          <Link
            href="/podcast"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#006D68] hover:bg-[#0F8B83] text-white text-xs sm:text-sm font-semibold rounded-md shadow-xs transition-colors shrink-0 group self-start sm:self-auto"
          >
            <span>All Podcasts</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Featured Latest Episode Showcase Card */}
        <div className="bg-white border border-[#CBD5E1] rounded-2xl p-5 sm:p-7 lg:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* 16:9 Video Thumbnail Preview (lg:col-span-7) */}
            <div className="lg:col-span-7">
              <div
                onClick={() => openVideo(latest.youtubeId)}
                className="relative aspect-16/9 w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-200 shadow-md cursor-pointer group"
                title="Click to play video"
              >
                {/* Authentic YouTube Video Thumbnail */}
                <Image
                  src={imgSrc}
                  alt={latest.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 680px"
                  priority
                  onError={() => {
                    // Fallback to standard high-quality YouTube thumbnail if maxres is unavailable
                    setImgSrc(`https://img.youtube.com/vi/${latest.youtubeId}/hqdefault.jpg`);
                  }}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Gradient & Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30 group-hover:via-black/10 transition-colors flex items-center justify-center">
                  {/* YouTube Center Play Button */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600/95 group-hover:bg-red-600 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300 ring-4 ring-white/30">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white ml-1 text-white" />
                  </div>
                </div>

                {/* Top Badge: Latest Video Episode */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider text-white bg-red-600 px-3 py-1 rounded-full shadow-md uppercase">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    Latest Video Episode
                  </span>
                </div>

                {/* Bottom Bar: YouTube Tag and Duration */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between text-white">
                  <div className="flex items-center gap-1.5 bg-black/80 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-medium">
                    <YouTubeIcon className="w-3.5 h-3.5 text-red-500" />
                    <span>Watch Video</span>
                  </div>
                  <div className="flex items-center gap-1 bg-black/85 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-mono font-medium">
                    <Clock className="w-3 h-3 text-slate-300" />
                    <span>{latest.duration}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Episode Details & Direct Action Links (lg:col-span-5) */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                {/* Meta Header */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#006D68] mb-2.5">
                  <span className="uppercase tracking-wider">{latest.number}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-[#627D98] font-normal">
                    <Calendar className="w-3.5 h-3.5" />
                    {latest.date}
                  </span>
                  <span>•</span>
                  <span className="text-[#627D98] font-normal">{latest.views}</span>
                </div>

                {/* Episode Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#102A43] leading-snug">
                  {latest.title}
                </h3>

                {/* Episode Description */}
                <p className="mt-3 text-xs sm:text-sm text-[#486581] leading-relaxed">
                  {latest.description}
                </p>

                {/* Auto-Sync Reference Box */}
                <div className="mt-4 flex items-center gap-2.5 text-xs text-[#006D68] bg-[#E6F4F1] border border-[#BCE3DE] px-3 py-2 rounded-lg">
                  <YouTubeIcon className="w-4 h-4 text-red-600 shrink-0" />
                  <span className="font-medium">
                    Auto-synced with YouTube Channel:{" "}
                    <span className="font-semibold text-[#102A43]">
                      {podcastData.youtubeConfig.channelHandle}
                    </span>
                  </span>
                </div>
              </div>

              {/* Action Buttons: YouTube Link + Play Preview + All Podcasts */}
              <div className="mt-6 pt-5 border-t border-[#E2E8F0]">
                <div className="flex flex-wrap items-center gap-3">
                  {/* Direct Link to YouTube */}
                  <a
                    href={latest.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-semibold rounded-md shadow-xs transition-colors group"
                  >
                    <YouTubeIcon className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-3.5 h-3.5 text-white/80" />
                  </a>

                  {/* Play Video on Site Modal */}
                  <button
                    onClick={() => openVideo(latest.youtubeId)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-[#CBD5E1] hover:border-[#006D68] text-[#102A43] hover:text-[#006D68] text-xs sm:text-sm font-medium rounded-md transition-colors shadow-2xs"
                  >
                    <Play className="w-3.5 h-3.5 fill-current text-[#006D68]" />
                    <span>Play Preview</span>
                  </button>

                  {/* All Podcasts Button */}
                  <Link
                    href="/podcast"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#006D68] hover:bg-[#0F8B83] text-white text-xs sm:text-sm font-medium rounded-md shadow-xs transition-colors"
                  >
                    <span>All Podcasts</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Platforms Strip */}
                <div className="mt-5 pt-3 border-t border-dashed border-[#E2E8F0] flex flex-wrap items-center justify-between gap-2 text-xs text-[#627D98]">
                  <span className="font-medium text-[#243B53]">Also available on:</span>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://spotify.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-600 transition-colors font-medium flex items-center gap-1"
                    >
                      <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                      <span>Spotify</span>
                    </a>
                    <span>•</span>
                    <a
                      href="https://podcasts.apple.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-purple-600 transition-colors font-medium flex items-center gap-1"
                    >
                      <span className="w-2 h-2 rounded-full bg-purple-500 inline-block" />
                      <span>Apple Podcasts</span>
                    </a>
                    <span>•</span>
                    <a
                      href={podcastData.youtubeConfig.channelUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-red-600 transition-colors font-semibold flex items-center gap-1"
                    >
                      <YouTubeIcon className="w-3 h-3 text-red-600" />
                      <span>YouTube Channel</span>
                    </a>
                  </div>
                </div>
              </div>
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
                <span>{latest.title} — Prof. Dr. Sandeep Kumar Panigrahi</span>
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

            <div className="p-3 bg-slate-950 flex items-center justify-between text-xs text-slate-400">
              <span>{latest.number} • {latest.duration}</span>
              <a
                href={latest.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-red-400 hover:text-red-300 font-semibold"
              >
                <span>Open directly in YouTube</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
