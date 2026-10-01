"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Calendar,
  Search,
  ArrowRight,
  BookOpen,
  Share2,
  X,
  User,
  ShieldAlert,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { articles, doctorProfile } from "@/lib/data";

const allCategories = [
  "All",
  "Diabetes",
  "Lifestyle",
  "Public Health",
  "Digital Health",
];

export default function HealthInsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeArticle, setActiveArticle] = useState(null);

  const heroArticle = articles[0];

  const filteredArticles = articles.filter((art) => {
    const matchesCategory =
      selectedCategory === "All" || art.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-[#F8F7F2] py-12 sm:py-16 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[11px] font-bold tracking-widest text-[#006D68] uppercase block mb-2">
              MEDICAL ESSAYS & PUBLIC HEALTH PERSPECTIVES
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102A43] tracking-tight leading-tight">
              Health Insights
            </h1>
            <p className="mt-3 text-base sm:text-lg text-[#627D98] leading-relaxed">
              Evidence-informed clinical perspectives, preventive health strategies, and commentary on community medicine and chronic disease management.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Editorial Article (Hero Article) */}
      <section className="py-10 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-lg bg-[#F8F7F2] border border-[#E2E8F0] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded-xs text-[10px] font-semibold uppercase tracking-wider bg-[#E6F4F1] text-[#006D68] border border-[#BCE3DE]">
                  FEATURED EDITORIAL
                </span>
                <span className="text-xs text-[#627D98] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#006D68]" />
                  {heroArticle.readTime}
                </span>
                <span>•</span>
                <span className="text-xs text-[#627D98]">
                  {heroArticle.date}
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#102A43] leading-snug">
                {heroArticle.title}
              </h2>

              <p className="text-sm sm:text-base text-[#243B53] leading-relaxed">
                {heroArticle.excerpt}
              </p>

              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={() => setActiveArticle(heroArticle)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#006D68] hover:bg-[#0F8B83] text-white text-xs sm:text-sm font-medium rounded-md shadow-xs transition-colors"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-xs text-[#627D98] font-medium">
                  By Prof. Dr. Sandeep Kumar Panigrahi
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-16/10 w-full rounded-md overflow-hidden border border-[#E2E8F0] shadow-xs">
                <Image
                  src={heroArticle.image}
                  alt={heroArticle.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Article Grid */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            {/* Category pills */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                    selectedCategory === cat
                      ? "bg-[#006D68] text-white"
                      : "bg-[#F3F5F4] text-[#243B53] hover:bg-[#E2E8F0]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#627D98]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-[#F8F7F2] border border-[#CBD5E1] rounded-md focus:bg-white focus:outline-hidden focus:border-[#006D68]"
              />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                id={article.id}
                className="bg-white border border-[#E2E8F0] rounded-md overflow-hidden flex flex-col justify-between card-hover shadow-2xs group"
              >
                <div>
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-[#F3F5F4] border-b border-[#E2E8F0]">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover group-hover:scale-103 transition-transform duration-300"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-2xs px-2.5 py-0.5 rounded-xs text-[10px] font-semibold text-[#006D68] uppercase tracking-wider border border-[#E2E8F0]">
                      {article.category}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-3 text-[11px] text-[#627D98] mb-2">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#006D68]" />
                        {article.readTime}
                      </span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>

                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#102A43] group-hover:text-[#006D68] transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="mt-2.5 text-xs text-[#627D98] leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0">
                  <div className="pt-3 border-t border-[#ECEFF1] flex items-center justify-between">
                    <button
                      onClick={() => setActiveArticle(article)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#006D68] hover:text-[#0F8B83] transition-colors"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[11px] text-[#829ab1]">
                      Evidence-Based
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reader Modal for full article reading */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 border border-[#CBD5E1] shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-4 right-4 p-2 text-[#627D98] hover:text-[#102A43] hover:bg-[#F3F5F4] rounded-full"
              aria-label="Close article reader"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded-xs text-[10px] font-semibold uppercase tracking-wider bg-[#E6F4F1] text-[#006D68] border border-[#BCE3DE]">
                {activeArticle.category}
              </span>
              <span className="text-xs text-[#627D98]">
                {activeArticle.date} • {activeArticle.readTime}
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#102A43] leading-tight">
              {activeArticle.title}
            </h2>

            <div className="mt-3 pb-4 border-b border-[#E2E8F0] flex items-center gap-3 text-xs text-[#627D98]">
              <div className="w-7 h-7 rounded-full bg-[#102A43] text-white flex items-center justify-center font-serif font-bold text-xs">
                SP
              </div>
              <div>
                <span className="font-semibold text-[#102A43] block">
                  Prof. Dr. Sandeep Kumar Panigrahi
                </span>
                <span className="text-[11px]">
                  Professor of Community Medicine & Physician
                </span>
              </div>
            </div>

            <div className="relative aspect-16/9 w-full my-6 rounded-md overflow-hidden bg-[#F3F5F4] border border-[#E2E8F0]">
              <Image
                src={activeArticle.image}
                alt={activeArticle.title}
                fill
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover"
              />
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#243B53] leading-relaxed font-sans">
              {activeArticle.content ? (
                activeArticle.content.map((p, idx) => <p key={idx}>{p}</p>)
              ) : (
                <p>{activeArticle.excerpt}</p>
              )}
            </div>

            <div className="mt-8 p-4 bg-[#FFFBEB] rounded-md border border-[#FDE68A] flex items-start gap-2.5 text-xs text-amber-900">
              <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>
                <strong>Educational note:</strong> This insight is published for public health awareness and health literacy. Consult your primary physician for diagnostic assessment or specific pharmacologic therapy.
              </span>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex justify-end">
              <button
                onClick={() => setActiveArticle(null)}
                className="px-4 py-2 bg-[#102A43] text-white text-xs font-medium rounded-md hover:bg-[#006D68] transition-colors"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
