"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/clinical-care", label: "Clinical Care" },
  { href: "/research", label: "Research" },
  { href: "/publications", label: "Publications" },
  { href: "/podcast", label: "Podcast" },
  { href: "/health-insights", label: "Health Insights" },
  { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/publications?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-200 border-b border-[#E2E8F0] ${
          isScrolled ? "shadow-xs" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left: Branding */}
            <Link href="/" className="group flex flex-col justify-center">
              <span className="font-serif text-lg sm:text-xl font-semibold text-[#102A43] tracking-tight group-hover:text-[#006D68] transition-colors">
                Prof. Dr. Sandeep Kumar Panigrahi
              </span>
              <span className="text-[11px] sm:text-xs text-[#627D98] tracking-normal font-sans font-medium">
                Physician • Professor • Public Health Professional • Researcher
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-1 lg:space-x-5 text-[13px] font-medium text-[#243B53]">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-1.5 py-1 transition-colors relative hover:text-[#006D68] ${
                      isActive ? "text-[#006D68] font-semibold" : "text-[#243B53]"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1.5 right-1.5 h-[2px] bg-[#006D68] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Search & Appointment CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                type="button"
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search research and publications"
                className="p-2 text-[#627D98] hover:text-[#102A43] hover:bg-[#F3F5F4] rounded-md transition-colors"
              >
                <Search className="w-4 h-4" />
              </button>

              <Link
                href="/appointment"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#006D68] hover:bg-[#0F8B83] text-white text-xs sm:text-sm font-medium rounded-md shadow-xs transition-colors"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Menu Hamburger */}
            <div className="flex md:hidden items-center space-x-2">
              <button
                type="button"
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Toggle search"
                className="p-2 text-[#627D98] hover:text-[#102A43]"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Open main menu"
                className="p-2 text-[#102A43] hover:bg-[#F3F5F4] rounded-md"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar Flyout */}
        {searchOpen && (
          <div className="border-t border-[#E2E8F0] bg-[#F8F7F2] px-4 py-3 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                <Search className="w-4 h-4 absolute left-3.5 text-[#627D98]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search publications, topics (e.g., diabetes, mHealth, prevention)..."
                  className="w-full pl-10 pr-24 py-2 text-sm bg-white border border-[#CBD5E1] rounded-md focus:outline-hidden focus:ring-1 focus:ring-[#006D68] focus:border-[#006D68]"
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

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs md:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl z-50 p-6 flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0]">
                <div>
                  <span className="font-serif text-base font-bold text-[#102A43] block">
                    Dr. S. K. Panigrahi
                  </span>
                  <span className="text-[11px] text-[#627D98]">Physician & Academic</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-[#627D98] hover:text-[#102A43]"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
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
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#006D68] text-white text-sm font-medium rounded-md shadow-xs"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="mt-3 text-center">
                <span className="text-xs text-[#627D98]">Bhubaneswar, Odisha</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
