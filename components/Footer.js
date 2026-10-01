import Link from "next/link";
import {
  MapPin,
  Calendar,
  Mail,
  Phone,
  ExternalLink,
  GraduationCap,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#E2E8F0] pt-12 pb-8 text-[#243B53]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-[#E2E8F0]">
          {/* Brand & Designation */}
          <div className="lg:col-span-5 space-y-3">
            <Link href="/" className="inline-block">
              <span className="font-serif text-xl font-bold text-[#102A43] tracking-tight">
                Prof. Dr. Sandeep Kumar Panigrahi
              </span>
            </Link>
            <p className="text-xs text-[#627D98] max-w-sm leading-relaxed">
              Physician • Professor • Public Health Professional • Researcher
            </p>
            <p className="text-xs text-[#627D98] max-w-md leading-relaxed pt-1">
              Department of Community Medicine, IMS & SUM Hospital, Siksha &apos;O&apos; Anusandhan (SOA) Deemed to be University, Bhubaneswar, Odisha.
            </p>

            {/* Academic & Professional Social Links */}
            <div className="flex items-center space-x-3 pt-3">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#F3F5F4] flex items-center justify-center text-[#102A43] hover:bg-[#006D68] hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <span className="text-xs font-bold">in</span>
              </a>
              <a
                href="https://scholar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#F3F5F4] flex items-center justify-center text-[#102A43] hover:bg-[#006D68] hover:text-white transition-colors"
                aria-label="Google Scholar"
              >
                <span className="text-xs font-bold">G</span>
              </a>
              <a
                href="https://www.researchgate.net"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#F3F5F4] flex items-center justify-center text-[#102A43] hover:bg-[#006D68] hover:text-white transition-colors"
                aria-label="ResearchGate"
              >
                <span className="text-xs font-bold">RG</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#F3F5F4] flex items-center justify-center text-[#102A43] hover:bg-[#006D68] hover:text-white transition-colors"
                aria-label="YouTube Channel"
              >
                <span className="text-xs font-bold">▶</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold text-[#102A43] uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-y-2 text-xs text-[#243B53]">
              <Link href="/" className="hover:text-[#006D68] transition-colors">
                Home
              </Link>
              <Link href="/research" className="hover:text-[#006D68] transition-colors">
                Research
              </Link>
              <Link href="/about" className="hover:text-[#006D68] transition-colors">
                About
              </Link>
              <Link href="/publications" className="hover:text-[#006D68] transition-colors">
                Publications
              </Link>
              <Link href="/clinical-care" className="hover:text-[#006D68] transition-colors">
                Clinical Care
              </Link>
              <Link href="/podcast" className="hover:text-[#006D68] transition-colors">
                Podcast
              </Link>
              <Link href="/health-insights" className="hover:text-[#006D68] transition-colors">
                Health Insights
              </Link>
              <Link href="/media" className="hover:text-[#006D68] transition-colors">
                Media
              </Link>
              <Link href="/contact" className="hover:text-[#006D68] transition-colors">
                Contact
              </Link>
              <Link href="/appointment" className="hover:text-[#006D68] transition-colors font-medium text-[#006D68]">
                Book Appointment →
              </Link>
            </div>
          </div>

          {/* Contact column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-[#102A43] uppercase tracking-wider mb-4">
              Contact & Consultations
            </h4>
            <ul className="space-y-2.5 text-xs text-[#627D98]">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#006D68] mt-0.5 shrink-0" />
                <span>Bhubaneswar, Odisha, India</span>
              </li>
              <li className="flex items-start gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#006D68] mt-0.5 shrink-0" />
                <Link href="/appointment" className="hover:text-[#006D68] text-[#243B53]">
                  Book Clinical Consultation
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-[#006D68] mt-0.5 shrink-0" />
                <span>contact@drsandeepkp.in</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-[#006D68] mt-0.5 shrink-0" />
                <span>Desk: +91 (0674) 238-6292</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#627D98]">
          <p>© 2026 Prof. Dr. Sandeep Kumar Panigrahi. All rights reserved.</p>

          <p className="text-center md:text-right max-w-xl text-[11px] leading-relaxed text-[#829ab1]">
            This website is for general educational purposes and does not replace individual medical consultation, diagnosis or treatment.
          </p>

          <div className="flex items-center space-x-4">
            <Link href="/contact" className="hover:text-[#102A43] transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-[#102A43] transition-colors">
              Terms
            </Link>
            <span>•</span>
            <Link href="/clinical-care" className="hover:text-[#102A43] transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
