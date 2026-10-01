"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  Calendar,
  MessageSquare,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { contactDetails, doctorProfile } from "@/lib/data";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "Academic / Research Collaboration",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-[#F8F7F2] py-12 sm:py-16 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[11px] font-bold tracking-widest text-[#006D68] uppercase block mb-2">
              ACADEMIC & CLINICAL CONTACT
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102A43] tracking-tight leading-tight">
              Contact & Inquiries
            </h1>
            <p className="mt-3 text-base sm:text-lg text-[#627D98] leading-relaxed">
              Reach out for academic collaborations, conference lectures, postgraduate research inquiries, or clinical consultations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#F8F7F2] border border-[#E2E8F0] rounded-xl p-6 sm:p-8 shadow-2xs">
                <span className="text-[11px] font-bold tracking-widest text-[#006D68] uppercase block mb-1">
                  OFFICIAL INQUIRY FORM
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#102A43] mb-4">
                  Send a Direct Message
                </h2>
                <p className="text-xs sm:text-sm text-[#627D98] mb-6">
                  Please specify the nature of your inquiry so that it can be routed appropriately.
                </p>

                {submitted ? (
                  <div className="bg-white border border-[#BCE3DE] rounded-md p-6 sm:p-8 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-[#E6F4F1] text-[#006D68] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#102A43]">
                      Message Received
                    </h3>
                    <p className="text-xs sm:text-sm text-[#627D98] max-w-md mx-auto">
                      Thank you for contacting the office of Prof. Dr. Sandeep Kumar Panigrahi. Your message has been logged, and the academic/clinical desk will review your correspondence shortly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          inquiryType: "Academic / Research Collaboration",
                          subject: "",
                          message: "",
                        });
                      }}
                      className="mt-4 px-4 py-2 bg-[#006D68] text-white text-xs font-medium rounded-md hover:bg-[#0F8B83] transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#102A43] mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="e.g. Dr. Rajesh Mohanty"
                          className="w-full px-3.5 py-2.5 bg-white border border-[#CBD5E1] rounded-md text-xs sm:text-sm focus:outline-hidden focus:border-[#006D68]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#102A43] mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="name@institution.edu"
                          className="w-full px-3.5 py-2.5 bg-white border border-[#CBD5E1] rounded-md text-xs sm:text-sm focus:outline-hidden focus:border-[#006D68]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#102A43] mb-1.5">
                          Phone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2.5 bg-white border border-[#CBD5E1] rounded-md text-xs sm:text-sm focus:outline-hidden focus:border-[#006D68]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#102A43] mb-1.5">
                          Nature of Inquiry *
                        </label>
                        <select
                          value={formData.inquiryType}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              inquiryType: e.target.value,
                            })
                          }
                          className="w-full px-3.5 py-2.5 bg-white border border-[#CBD5E1] rounded-md text-xs sm:text-sm focus:outline-hidden focus:border-[#006D68]"
                        >
                          <option value="Academic / Research Collaboration">
                            Academic & Research Collaboration
                          </option>
                          <option value="Speaking / Guest Lecture">
                            Speaking, Keynote & Guest Lecture
                          </option>
                          <option value="Clinical Consultation Guidance">
                            Clinical Consultation Guidance
                          </option>
                          <option value="Media & Press Inquiry">
                            Media & Press Inquiry
                          </option>
                          <option value="General Professional Query">
                            General Professional Query
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#102A43] mb-1.5">
                        Subject *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        placeholder="Brief summary of inquiry"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#CBD5E1] rounded-md text-xs sm:text-sm focus:outline-hidden focus:border-[#006D68]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#102A43] mb-1.5">
                        Message Details *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Provide details about your collaboration, event, or inquiry..."
                        className="w-full px-3.5 py-2.5 bg-white border border-[#CBD5E1] rounded-md text-xs sm:text-sm focus:outline-hidden focus:border-[#006D68]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#006D68] hover:bg-[#0F8B83] text-white text-xs sm:text-sm font-medium rounded-md shadow-xs transition-colors"
                    >
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column: Address & Department Information */}
            <div className="lg:col-span-5 space-y-6">
              {/* Doctor Official Academic & Faculty Card */}
              <div className="p-6 rounded-xl bg-white border border-[#CBD5E1] shadow-sm space-y-4">
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-26 sm:w-24 sm:h-30 rounded-lg overflow-hidden border border-[#CBD5E1] shadow-2xs shrink-0 bg-[#F8F7F2]">
                    <Image
                      src={doctorProfile.images.redFormal}
                      alt={doctorProfile.name}
                      fill
                      sizes="100px"
                      className="object-cover object-top"
                    />
                  </div>

                  <div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#006D68] bg-[#E6F4F1] px-2 py-0.5 rounded-full border border-[#BCE3DE]">
                      <ShieldCheck className="w-3 h-3" />
                      Verified Academic Physician
                    </span>
                    <h3 className="font-serif font-bold text-base sm:text-lg text-[#102A43] leading-snug mt-1.5">
                      {doctorProfile.name}
                    </h3>
                    <p className="text-xs text-[#006D68] font-semibold mt-0.5">
                      {doctorProfile.credentialsText}
                    </p>
                    <p className="text-[11px] text-[#627D98] mt-1 leading-snug">
                      Professor, Department of Community Medicine
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#ECEFF1] flex items-center justify-between text-xs text-[#627D98]">
                  <span className="flex items-center gap-1 text-[#006D68] font-medium">
                    <Stethoscope className="w-3.5 h-3.5" />
                    IMS & SUM Hospital Desk
                  </span>
                  <span className="font-mono text-[11px] text-[#243B53]">Bhubaneswar, Odisha</span>
                </div>
              </div>

              {/* Institution Details */}
              <div className="p-6 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs space-y-4">
                <h3 className="font-serif text-lg font-bold text-[#102A43] flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#006D68]" />
                  <span>Institutional Affiliation</span>
                </h3>

                <div className="text-xs sm:text-sm text-[#243B53] space-y-1">
                  <p className="font-semibold text-[#102A43]">
                    {contactDetails.hospital}
                  </p>
                  <p className="text-[#006D68] font-medium">
                    {contactDetails.department}
                  </p>
                  <p className="text-[#627D98] pt-1">
                    {contactDetails.address}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#ECEFF1] space-y-2.5 text-xs text-[#627D98]">
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-[#006D68] shrink-0 mt-0.5" />
                    <span>Academic Hours: Mon - Sat: 9:00 AM – 4:00 PM</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-[#006D68] shrink-0 mt-0.5" />
                    <span>Desk: {contactDetails.appointmentDesk}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Mail className="w-4 h-4 text-[#006D68] shrink-0 mt-0.5" />
                    <span>Official: {contactDetails.email}</span>
                  </div>
                </div>
              </div>

              {/* Consultation Booking Direct Card */}
              <div className="p-6 rounded-xl bg-[#E6F4F1] border border-[#BCE3DE] space-y-3">
                <h4 className="font-serif text-base font-bold text-[#102A43] flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#006D68]" />
                  <span>Looking for a Medical Consultation?</span>
                </h4>
                <p className="text-xs text-[#243B53] leading-relaxed">
                  For patient appointments and telemedicine consultations, use the dedicated multi-step clinical booking system.
                </p>
                <div className="pt-2">
                  <Link
                    href="/appointment"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#006D68] hover:bg-[#0F8B83] text-white text-xs font-medium rounded-md shadow-2xs transition-colors"
                  >
                    <span>Proceed to Book Appointment</span>
                    <Send className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Location Map Placeholder */}
              <div className="rounded-xl overflow-hidden border border-[#E2E8F0] bg-[#F8F7F2] p-5">
                <h4 className="font-serif text-sm font-bold text-[#102A43] flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-[#006D68]" />
                  <span>Location: Bhubaneswar, Odisha</span>
                </h4>
                <div className="relative aspect-16/9 w-full rounded-md overflow-hidden bg-slate-200 border border-[#CBD5E1] flex flex-col items-center justify-center p-4 text-center">
                  <MapPin className="w-8 h-8 text-[#006D68] mb-1" />
                  <span className="font-serif font-bold text-sm text-[#102A43]">
                    IMS & SUM Hospital Campus
                  </span>
                  <span className="text-[11px] text-[#627D98] mt-0.5">
                    Kalinga Nagar, Ghatikia, Bhubaneswar, Odisha 751003
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
