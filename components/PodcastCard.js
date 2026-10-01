"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Pause, ArrowRight, Radio, ExternalLink } from "lucide-react";
import { podcastData } from "@/lib/data";

export default function PodcastCard() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-12 sm:py-16 bg-[#F8F7F2] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-4">
            <span className="text-[11px] font-bold tracking-widest text-[#006D68] uppercase block mb-2">
              PODCAST
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#102A43] tracking-tight leading-tight">
              {podcastData.title}
            </h2>
            <p className="mt-3 text-sm text-[#243B53] leading-relaxed">
              {podcastData.description}
            </p>

            <div className="mt-6">
              <Link
                href="/podcast"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#006D68] hover:bg-[#0F8B83] text-white text-xs sm:text-sm font-medium rounded-md shadow-xs transition-colors"
              >
                <span>Explore Podcast</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Center Column: Podcast Artwork & Player Box */}
          <div className="lg:col-span-6 bg-white border border-[#E2E8F0] rounded-md p-4 sm:p-6 shadow-2xs">
            <div className="flex flex-col sm:flex-row items-center gap-5">
              {/* Cover Art */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-md overflow-hidden shrink-0 border border-[#E2E8F0] shadow-2xs">
                <Image
                  src={podcastData.coverImage}
                  alt={podcastData.title}
                  fill
                  sizes="130px"
                  className="object-cover"
                />
              </div>

              {/* Episode Details & Player */}
              <div className="flex-1 w-full">
                <div className="text-[10px] font-bold tracking-wider text-[#006D68] uppercase">
                  LATEST EPISODE
                </div>
                <div className="text-xs font-semibold text-[#627D98] mt-0.5">
                  {podcastData.latestEpisode.number}
                </div>
                <h4 className="font-serif font-bold text-sm sm:text-base text-[#102A43] leading-snug mt-1">
                  {podcastData.latestEpisode.title}
                </h4>

                {/* Simulated Waveform & Play Trigger */}
                <div className="mt-3 flex items-center gap-3 bg-[#F8F7F2] p-2.5 rounded-md border border-[#E2E8F0]">
                  <button
                    onClick={togglePlay}
                    aria-label={isPlaying ? "Pause podcast" : "Play podcast preview"}
                    className="w-9 h-9 rounded-full bg-[#006D68] hover:bg-[#0F8B83] text-white flex items-center justify-center shrink-0 transition-colors shadow-2xs"
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 fill-white" />
                    ) : (
                      <Play className="w-4 h-4 fill-white ml-0.5" />
                    )}
                  </button>

                  {/* Waveform graphic */}
                  <div className="flex-1 flex items-center justify-between gap-1 h-6 px-1">
                    {[
                      40, 65, 80, 50, 90, 75, 45, 60, 85, 95, 70, 55, 65, 40,
                      80, 100, 60, 45, 70, 90, 65, 50, 75, 85, 40, 60, 90, 55,
                    ].map((height, i) => (
                      <div
                        key={i}
                        className={`w-1 rounded-full transition-all duration-300 ${
                          isPlaying
                            ? "bg-[#006D68] animate-pulse"
                            : "bg-[#CBD5E1]"
                        }`}
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>

                  <span className="text-[11px] font-medium text-[#627D98] shrink-0 font-mono">
                    {podcastData.latestEpisode.duration}
                  </span>
                </div>

                {/* Episode Links */}
                <div className="mt-3 flex items-center gap-4 text-xs font-semibold">
                  <button
                    onClick={togglePlay}
                    className="text-[#006D68] hover:text-[#0F8B83] flex items-center gap-1"
                  >
                    <span>{isPlaying ? "Pause Audio" : "Listen Now"}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#627D98] hover:text-[#102A43] flex items-center gap-1"
                  >
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Platform links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-[#102A43] uppercase tracking-wider mb-3">
              Also On
            </h4>
            <div className="flex flex-col space-y-2">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-white rounded-md border border-[#E2E8F0] hover:border-[#CBD5E1] transition-colors text-xs text-[#243B53] font-medium"
              >
                <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-[10px]">
                  ▶
                </div>
                <span>YouTube</span>
              </a>
              <a
                href="https://spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-white rounded-md border border-[#E2E8F0] hover:border-[#CBD5E1] transition-colors text-xs text-[#243B53] font-medium"
              >
                <div className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-[10px]">
                  ●
                </div>
                <span>Spotify</span>
              </a>
              <a
                href="https://podcasts.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-white rounded-md border border-[#E2E8F0] hover:border-[#CBD5E1] transition-colors text-xs text-[#243B53] font-medium"
              >
                <div className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-[10px]">
                  
                </div>
                <span>Apple Podcasts</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
