"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Search,
  Filter,
  ExternalLink,
  BookOpen,
  ArrowUpDown,
  Download,
  CheckCircle2,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import AcademicLinkCard from "@/components/AcademicLinkCard";
import { publications, researchStatistics } from "@/lib/data";

function PublicationsList() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");

  const categories = ["All", "Digital Health", "Diabetes", "Lifestyle", "Public Health", "Preventive Medicine"];
  const years = ["All", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016"];

  const filteredPublications = useMemo(() => {
    return publications.filter((pub) => {
      const matchesSearch =
        searchQuery === "" ||
        pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.journal.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.authors.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || pub.category === selectedCategory;

      const matchesYear =
        selectedYear === "All" || pub.year.toString() === selectedYear;

      return matchesSearch && matchesCategory && matchesYear;
    });
  }, [searchQuery, selectedCategory, selectedYear]);

  const getBadgeStyle = (categoryType) => {
    switch (categoryType) {
      case "digital-health":
        return "bg-[#E6F4F1] text-[#006D68] border-[#BCE3DE]";
      case "diabetes":
        return "bg-blue-50 text-blue-800 border-blue-200";
      case "lifestyle":
        return "bg-amber-50 text-amber-900 border-amber-200";
      case "public-health":
      default:
        return "bg-teal-50 text-[#006D68] border-teal-200";
    }
  };

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-[#F8F7F2] py-12 sm:py-16 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[11px] font-bold tracking-widest text-[#006D68] uppercase block mb-2">
              ACADEMIC DATABASE & BIBLIOGRAPHY
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102A43] tracking-tight leading-tight">
              Selected Research Publications
            </h1>
            <p className="mt-3 text-base sm:text-lg text-[#627D98] leading-relaxed">
              Explore peer-reviewed journal papers, clinical trials, epidemiological investigations, and public health reports by Prof. Dr. Sandeep Kumar Panigrahi.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="py-6 bg-white border-b border-[#E2E8F0] sticky top-20 z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#627D98]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, author, keyword, or journal..."
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-[#F8F7F2] border border-[#CBD5E1] rounded-md focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#006D68] focus:border-[#006D68]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#627D98] hover:text-[#102A43]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Dropdowns / Filters */}
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              {/* Category Filter */}
              <div className="flex items-center gap-1.5 text-xs text-[#627D98]">
                <span>Category:</span>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-[#F8F7F2] border border-[#CBD5E1] rounded-md px-2.5 py-1.5 text-xs text-[#243B53] focus:outline-hidden focus:border-[#006D68]"
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Year Filter */}
              <div className="flex items-center gap-1.5 text-xs text-[#627D98]">
                <span>Year:</span>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="bg-[#F8F7F2] border border-[#CBD5E1] rounded-md px-2.5 py-1.5 text-xs text-[#243B53] focus:outline-hidden focus:border-[#006D68]"
                >
                  {years.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Results */}
      <section className="py-12 sm:py-16 bg-[#F8F7F2]/50 min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6 text-xs text-[#627D98]">
            <span>
              Showing{" "}
              <strong className="text-[#102A43]">
                {filteredPublications.length}
              </strong>{" "}
              publications
            </span>
            <span>Database updated periodically</span>
          </div>

          {filteredPublications.length === 0 ? (
            <div className="bg-white border border-[#E2E8F0] rounded-md p-12 text-center">
              <BookOpen className="w-10 h-10 text-[#627D98] mx-auto mb-3" />
              <h3 className="font-serif text-lg font-bold text-[#102A43]">
                No publications found
              </h3>
              <p className="text-xs text-[#627D98] mt-1">
                Try adjusting your search query or reset the filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                  setSelectedYear("All");
                }}
                className="mt-4 px-4 py-2 bg-[#006D68] text-white text-xs rounded-md"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPublications.map((pub) => (
                <div
                  key={pub.id}
                  id={pub.id}
                  className="bg-white border border-[#E2E8F0] rounded-md p-6 flex flex-col justify-between card-hover shadow-2xs group"
                >
                  <div>
                    {/* Header: Category Badge & Year */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-xs text-[10px] font-semibold uppercase tracking-wider border ${getBadgeStyle(
                          pub.categoryType
                        )}`}
                      >
                        {pub.category}
                      </span>
                      <span className="text-xs font-bold text-[#102A43]">
                        {pub.year}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#102A43] group-hover:text-[#006D68] transition-colors leading-snug">
                      {pub.title}
                    </h3>

                    {/* Authors & Journal */}
                    <div className="mt-2 text-xs text-[#627D98] space-y-0.5">
                      <div>
                        <strong>Authors:</strong> {pub.authors}
                      </div>
                      <div>
                        <strong className="text-[#006D68]">{pub.journal}</strong>
                      </div>
                    </div>

                    {/* Abstract summary */}
                    <p className="mt-3 text-xs text-[#243B53] leading-relaxed line-clamp-3">
                      {pub.abstract}
                    </p>
                  </div>

                  {/* Actions & DOI */}
                  <div className="mt-5 pt-3 border-t border-[#ECEFF1] flex items-center justify-between text-xs">
                    <span className="text-[11px] text-[#627D98] font-mono">
                      DOI: {pub.doi}
                    </span>

                    <a
                      href={pub.link || `https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-[#006D68] hover:text-[#0F8B83] transition-colors"
                    >
                      <span>View Publication</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Academic Profile Links */}
      <AcademicLinkCard />
    </div>
  );
}

export default function PublicationsPage() {
  return (
    <Suspense
      fallback={
        <div className="p-12 text-center text-sm text-[#627D98]">
          Loading Publications Archive...
        </div>
      }
    >
      <PublicationsList />
    </Suspense>
  );
}
