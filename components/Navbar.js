"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  BookOpen,
  Radio,
  Video,
  FileText,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/publications?q=${encodeURIComponent(
        searchQuery.trim()
      )}`;
    }
  };

  const isMediaActive =
    pathname === "/health-insights" ||
    pathname === "/podcast" ||
    pathname === "/media";

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-200 border-b border-[#E2E8F0] ${
          isScrolled ? "shadow-xs" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            {/* Left: Refined Brand */}
            <Link href="/" className="group flex flex-col justify-center shrink-0">
              <span className="font-serif text-base sm:text-lg lg:text-xl font-bold text-[#102A43] tracking-tight group-hover:text-[#006D68] transition-colors leading-tight">
                Prof. Dr. Sandeep Kumar Panigrahi
              </span>
              <span className="text-[11px] text-[#627D98] tracking-normal font-sans font-medium mt-0.5">
                Physician • Medical Professor • Researcher
              </span>
            </Link>

            {/* Desktop Navigation: Streamlined & Uncluttered */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-[13px] font-medium text-[#243B53]">
              <Link
                href="/"
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  pathname === "/"
                    ? "text-[#006D68] font-semibold bg-[#E6F4F1]/60"
                    : "hover:text-[#006D68] hover:bg-[#F8F7F2]"
                }`}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  pathname === "/about"
                    ? "text-[#006D68] font-semibold bg-[#E6F4F1]/60"
                    : "hover:text-[#006D68] hover:bg-[#F8F7F2]"
                }`}
              >
                About
              </Link>

              <Link
                href="/clinical-care"
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  pathname === "/clinical-care"
                    ? "text-[#006D68] font-semibold bg-[#E6F4F1]/60"
                    : "hover:text-[#006D68] hover:bg-[#F8F7F2]"
                }`}
              >
                Clinical Care
              </Link>

              <Link
                href="/research"
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  pathname === "/research"
                    ? "text-[#006D68] font-semibold bg-[#E6F4F1]/60"
                    : "hover:text-[#006D68] hover:bg-[#F8F7F2]"
                }`}
              >
                Research
              </Link>

              <Link
                href="/publications"
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  pathname === "/publications"
                    ? "text-[#006D68] font-semibold bg-[#E6F4F1]/60"
                    : "hover:text-[#006D68] hover:bg-[#F8F7F2]"
                }`}
              >
                Publications
              </Link>

              {/* Insights & Media Dropdown to prevent clutter */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`px-3 py-1.5 rounded-md transition-colors inline-flex items-center gap-1 ${
                    isMediaActive
                      ? "text-[#006D68] font-semibold bg-[#E6F4F1]/60"
                      : "hover:text-[#006D68] hover:bg-[#F8F7F2]"
                  }`}
                >
                  <span>Insights & Media</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180 text-[#006D68]" : "text-[#627D98]"
                    }`}
                  />
                </button>

                {dropdownOpen && (
                  <div className="absolute top-full right-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-[#E2E8F0] py-2 z-50 animate-in fade-in-50 zoom-in-95">
                    <Link
                      href="/health-insights"
                      className="flex items-center gap-2.5 px-4 py-2 text-xs text-[#243B53] hover:bg-[#F8F7F2] hover:text-[#006D68] transition-colors"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-[#006D68]" />
                      <div>
                        <span className="font-semibold block">Health Insights</span>
                        <span className="text-[10px] text-[#627D98]">Articles & clinical essays</span>
                      </div>
                    </Link>

                    <Link
                      href="/podcast"
                      className="flex items-center gap-2.5 px-4 py-2 text-xs text-[#243B53] hover:bg-[#F8F7F2] hover:text-[#006D68] transition-colors"
                    >
                      <Radio className="w-3.5 h-3.5 text-[#006D68]" />
                      <div>
                        <span className="font-semibold block">Podcast</span>
                        <span className="text-[10px] text-[#627D98]">The Health Conversation</span>
                      </div>
                    </Link>

                    <Link
                      href="/media"
                      className="flex items-center gap-2.5 px-4 py-2 text-xs text-[#243B53] hover:bg-[#F8F7F2] hover:text-[#006D68] transition-colors"
                    >
                      <Video className="w-3.5 h-3.5 text-[#006D68]" />
                      <div>
                        <span className="font-semibold block">Media & Talks</span>
                        <span className="text-[10px] text-[#627D98]">Lectures and interviews</span>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  pathname === "/contact"
                    ? "text-[#006D68] font-semibold bg-[#E6F4F1]/60"
                    : "hover:text-[#006D68] hover:bg-[#F8F7F2]"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right: Search trigger & Book Appointment Button */}
            <div className="hidden sm:flex items-center space-x-3">
              <button
                type="button"
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search site"
                className="p-2 text-[#627D98] hover:text-[#102A43] hover:bg-[#F3F5F4] rounded-full transition-colors"
              >
                <Search className="w-4 h-4" />
              </button>

              <Link
                href="/appointment"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#006D68] hover:bg-[#0F8B83] text-white text-xs font-semibold rounded-md shadow-xs transition-colors shrink-0"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <div className="flex lg:hidden items-center space-x-1.5">
              <button
                type="button"
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search"
                className="p-2 text-[#627D98] hover:text-[#102A43]"
              >
                <Search className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="p-2 text-[#102A43] hover:bg-[#F3F5F4] rounded-md"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Search Flyout */}
        {searchOpen && (
          <div className="border-t border-[#E2E8F0] bg-[#F8F7F2] px-4 py-3 sm:px-6">
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                <Search className="w-4 h-4 absolute left-3.5 text-[#627D98]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search research topics, diabetes care, publications..."
                  className="w-full pl-10 pr-24 py-2 text-xs sm:text-sm bg-white border border-[#CBD5E1] rounded-md focus:outline-hidden focus:ring-1 focus:ring-[#006D68] focus:border-[#006D68]"
                  autoFocus
                />
                <button
                  type="submit"
                  className="absolute right-1.5 px-3 py-1 bg-[#102A43] text-white text-xs font-medium rounded-sm hover:bg-[#006D68] transition-colors"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Drawer Navigation (Contains all links cleanly) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl z-50 p-6 flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0]">
                <div>
                  <span className="font-serif text-base font-bold text-[#102A43] block">
                    Dr. Sandeep Kumar Panigrahi
                  </span>
                  <span className="text-[11px] text-[#627D98]">Physician & Academic</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-[#627D98] hover:text-[#102A43]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-5 flex flex-col space-y-1">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About" },
                  { href: "/clinical-care", label: "Clinical Care" },
                  { href: "/research", label: "Research" },
                  { href: "/publications", label: "Publications" },
                  { href: "/health-insights", label: "Health Insights" },
                  { href: "/podcast", label: "Podcast" },
                  { href: "/media", label: "Media & Talks" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`px-3 py-2 rounded-md text-xs font-medium transition-colors ${
                        isActive
                          ? "bg-[#E6F4F1] text-[#006D68] font-semibold"
                          : "text-[#243B53] hover:bg-[#F3F5F4] hover:text-[#006D68]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#E2E8F0]">
              <Link
                href="/appointment"
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#006D68] text-white text-xs font-semibold rounded-md shadow-xs"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <div className="mt-2.5 text-center">
                <span className="text-[11px] text-[#627D98]">Bhubaneswar, Odisha</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
