"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  HeartPulse,
  Activity,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ShieldAlert,
  MapPin,
  AlertCircle,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { doctorProfile, consultationOptions } from "@/lib/data";

const timeSlots = [
  "09:30 AM – 10:00 AM",
  "10:30 AM – 11:00 AM",
  "11:30 AM – 12:00 PM",
  "12:30 PM – 01:00 PM",
  "04:30 PM – 05:00 PM (Online Only)",
  "05:30 PM – 06:00 PM (Online Only)",
];

export default function AppointmentPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    consultationType: "in-person",
    patientName: "",
    age: "",
    gender: "Male",
    phone: "",
    email: "",
    preferredDate: "",
    preferredTime: "10:30 AM – 11:00 AM",
    reason: "Diabetes Care & Blood Sugar Optimization",
    medicalNotes: "",
  });

  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  const nextStep = () => {
    if (step < 6) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    setBookingSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-[#F8F7F2] py-12 sm:py-16 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[11px] font-bold tracking-widest text-[#006D68] uppercase block mb-2">
              CLINICAL SCHEDULING PORTAL
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102A43] tracking-tight leading-tight">
              Book a Consultation
            </h1>
            <p className="mt-3 text-base sm:text-lg text-[#627D98] leading-relaxed">
              Schedule your in-person visit in Bhubaneswar or secure telemedicine appointment with Prof. Dr. Sandeep Kumar Panigrahi.
            </p>
          </div>
        </div>
      </section>

      {/* Mandatory Medical Disclaimer Banner */}
      <div className="bg-[#FFFBEB] border-b border-[#FDE68A] py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2 text-xs text-amber-900">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
            <span>
              <strong>Note:</strong> In case of acute medical emergencies, please visit the nearest hospital emergency room immediately.
            </span>
          </div>
          <span className="text-[11px] bg-amber-100 px-2 py-0.5 rounded-sm font-semibold border border-amber-300">
            Frontend Demo Interface
          </span>
        </div>
      </div>

      {/* Step Progress Bar */}
      <div className="bg-white border-b border-[#E2E8F0] py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between text-xs font-semibold text-[#627D98]">
            <span className={step >= 1 ? "text-[#006D68]" : ""}>
              1. Type
            </span>
            <span>→</span>
            <span className={step >= 2 ? "text-[#006D68]" : ""}>
              2. Details
            </span>
            <span>→</span>
            <span className={step >= 3 ? "text-[#006D68]" : ""}>
              3. Date & Time
            </span>
            <span>→</span>
            <span className={step >= 4 ? "text-[#006D68]" : ""}>
              4. Clinical Reason
            </span>
            <span>→</span>
            <span className={step >= 5 ? "text-[#006D68]" : ""}>
              5. Review & Confirm
            </span>
          </div>
        </div>
      </div>

      {/* Booking Form Wizard */}
      <section className="py-12 sm:py-16 bg-[#F8F7F2]/60 min-h-[600px]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {bookingSubmitted ? (
            <div className="bg-white border border-[#BCE3DE] rounded-xl p-8 sm:p-10 text-center shadow-md space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#E6F4F1] text-[#006D68] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#102A43]">
                Consultation Request Logged
              </h2>
              <div className="p-4 bg-[#F8F7F2] rounded-md text-xs sm:text-sm text-[#243B53] max-w-lg mx-auto text-left space-y-2 border border-[#E2E8F0]">
                <div>
                  <strong>Patient:</strong> {formData.patientName} (Age: {formData.age}, {formData.gender})
                </div>
                <div>
                  <strong>Type:</strong>{" "}
                  {formData.consultationType === "in-person"
                    ? "In-person at IMS & SUM Hospital, Bhubaneswar"
                    : formData.consultationType === "online"
                    ? "Online Video Consultation"
                    : "Follow-up Review"}
                </div>
                <div>
                  <strong>Scheduled For:</strong> {formData.preferredDate || "Selected Date"} at {formData.preferredTime}
                </div>
                <div>
                  <strong>Clinical Reason:</strong> {formData.reason}
                </div>
              </div>

              <div className="p-3 bg-amber-50 rounded-md border border-amber-200 text-xs text-amber-900 max-w-lg mx-auto flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>
                  <strong>Frontend Demonstration:</strong> This interface is prepared for backend hospital API integration. For live official hospital appointments, please contact the IMS & SUM consultation desk at <strong>+91 (0674) 238-6292</strong>.
                </span>
              </div>

              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={() => {
                    setBookingSubmitted(false);
                    setStep(1);
                  }}
                  className="px-5 py-2.5 bg-[#006D68] hover:bg-[#0F8B83] text-white text-xs sm:text-sm font-medium rounded-md shadow-xs transition-colors"
                >
                  Start New Request
                </button>
                <Link
                  href="/"
                  className="px-5 py-2.5 bg-white border border-[#CBD5E1] text-[#102A43] text-xs sm:text-sm font-medium rounded-md hover:bg-[#F3F5F4]"
                >
                  Return to Homepage
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 sm:p-8 shadow-xs">
              {/* Step 1: Consultation Type */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-[11px] font-bold text-[#006D68] uppercase tracking-wider block">
                      Step 1 of 5
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#102A43] mt-1">
                      Select Consultation Format
                    </h3>
                    <p className="text-xs sm:text-sm text-[#627D98] mt-1">
                      Choose whether you prefer to visit IMS & SUM Hospital in Bhubaneswar or connect via secure telehealth.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {[
                      {
                        id: "in-person",
                        title: "In-Person Consultation",
                        desc: "Comprehensive physical evaluation at IMS & SUM Hospital, Bhubaneswar.",
                        icon: HeartPulse,
                      },
                      {
                        id: "online",
                        title: "Online Video Teleconsultation",
                        desc: "Virtual consultation via secure video link for lifestyle coaching & report review.",
                        icon: Activity,
                      },
                      {
                        id: "follow-up",
                        title: "Follow-up Consultation",
                        desc: "Follow-up evaluation for existing patients within 3 months of initial consult.",
                        icon: FileCheck,
                      },
                    ].map((type) => {
                      const Icon = type.icon;
                      const isSelected = formData.consultationType === type.id;
                      return (
                        <div
                          key={type.id}
                          onClick={() =>
                            setFormData({
                              ...formData,
                              consultationType: type.id,
                            })
                          }
                          className={`p-4 rounded-lg border cursor-pointer flex items-center gap-4 transition-all ${
                            isSelected
                              ? "border-[#006D68] bg-[#E6F4F1]/40 ring-1 ring-[#006D68]"
                              : "border-[#CBD5E1] hover:border-[#94A3B8] bg-white"
                          }`}
                        >
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                              isSelected
                                ? "bg-[#006D68] text-white"
                                : "bg-[#F3F5F4] text-[#627D98]"
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-serif font-bold text-sm sm:text-base text-[#102A43]">
                              {type.title}
                            </h4>
                            <p className="text-xs text-[#627D98] mt-0.5">
                              {type.desc}
                            </p>
                          </div>
                          <div
                            className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                              isSelected
                                ? "border-[#006D68] bg-[#006D68]"
                                : "border-[#CBD5E1]"
                            }`}
                          >
                            {isSelected && (
                              <div className="w-2 h-2 rounded-full bg-white" />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={nextStep}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#006D68] hover:bg-[#0F8B83] text-white text-xs sm:text-sm font-medium rounded-md shadow-xs transition-colors"
                    >
                      <span>Continue to Patient Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Patient Details */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-[11px] font-bold text-[#006D68] uppercase tracking-wider block">
                      Step 2 of 5
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#102A43] mt-1">
                      Patient Information
                    </h3>
                    <p className="text-xs sm:text-sm text-[#627D98] mt-1">
                      Enter the details of the individual attending the consultation.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#102A43] mb-1.5">
                        Full Patient Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.patientName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            patientName: e.target.value,
                          })
                        }
                        placeholder="e.g. Ramesh Chandra Das"
                        className="w-full px-3.5 py-2.5 bg-[#F8F7F2] border border-[#CBD5E1] rounded-md text-xs sm:text-sm focus:bg-white focus:outline-hidden focus:border-[#006D68]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#102A43] mb-1.5">
                          Age (Years) *
                        </label>
                        <input
                          type="number"
                          required
                          value={formData.age}
                          onChange={(e) =>
                            setFormData({ ...formData, age: e.target.value })
                          }
                          placeholder="e.g. 48"
                          className="w-full px-3.5 py-2.5 bg-[#F8F7F2] border border-[#CBD5E1] rounded-md text-xs sm:text-sm focus:bg-white focus:outline-hidden focus:border-[#006D68]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#102A43] mb-1.5">
                          Gender *
                        </label>
                        <select
                          value={formData.gender}
                          onChange={(e) =>
                            setFormData({ ...formData, gender: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 bg-[#F8F7F2] border border-[#CBD5E1] rounded-md text-xs sm:text-sm focus:bg-white focus:outline-hidden focus:border-[#006D68]"
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#102A43] mb-1.5">
                          Contact Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2.5 bg-[#F8F7F2] border border-[#CBD5E1] rounded-md text-xs sm:text-sm focus:bg-white focus:outline-hidden focus:border-[#006D68]"
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
                          placeholder="patient@example.com"
                          className="w-full px-3.5 py-2.5 bg-[#F8F7F2] border border-[#CBD5E1] rounded-md text-xs sm:text-sm focus:bg-white focus:outline-hidden focus:border-[#006D68]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#CBD5E1] text-[#243B53] text-xs sm:text-sm rounded-md hover:bg-[#F3F5F4]"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      type="button"
                      disabled={!formData.patientName || !formData.phone}
                      onClick={nextStep}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#006D68] hover:bg-[#0F8B83] disabled:opacity-50 text-white text-xs sm:text-sm font-medium rounded-md shadow-xs transition-colors"
                    >
                      <span>Continue to Date & Time</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Date & Time */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-[11px] font-bold text-[#006D68] uppercase tracking-wider block">
                      Step 3 of 5
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#102A43] mt-1">
                      Choose Preferred Date & Time
                    </h3>
                    <p className="text-xs sm:text-sm text-[#627D98] mt-1">
                      Select your preferred day and time slot.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#102A43] mb-1.5">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.preferredDate}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            preferredDate: e.target.value,
                          })
                        }
                        className="w-full px-3.5 py-2.5 bg-[#F8F7F2] border border-[#CBD5E1] rounded-md text-xs sm:text-sm focus:bg-white focus:outline-hidden focus:border-[#006D68]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#102A43] mb-2">
                        Preferred Time Slot *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {timeSlots.map((slot) => {
                          const isSelected = formData.preferredTime === slot;
                          return (
                            <div
                              key={slot}
                              onClick={() =>
                                setFormData({
                                  ...formData,
                                  preferredTime: slot,
                                })
                              }
                              className={`p-3 rounded-md border text-xs cursor-pointer flex items-center justify-between transition-colors ${
                                isSelected
                                  ? "border-[#006D68] bg-[#E6F4F1] font-semibold text-[#006D68]"
                                  : "border-[#CBD5E1] bg-white text-[#243B53] hover:border-[#94A3B8]"
                              }`}
                            >
                              <span>{slot}</span>
                              {isSelected && (
                                <CheckCircle2 className="w-4 h-4 text-[#006D68]" />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#CBD5E1] text-[#243B53] text-xs sm:text-sm rounded-md hover:bg-[#F3F5F4]"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#006D68] hover:bg-[#0F8B83] text-white text-xs sm:text-sm font-medium rounded-md shadow-xs transition-colors"
                    >
                      <span>Continue to Reason</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Clinical Reason */}
              {step === 4 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-[11px] font-bold text-[#006D68] uppercase tracking-wider block">
                      Step 4 of 5
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#102A43] mt-1">
                      Reason for Consultation
                    </h3>
                    <p className="text-xs sm:text-sm text-[#627D98] mt-1">
                      Briefly describe the primary medical or lifestyle focus for the visit.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#102A43] mb-1.5">
                        Primary Clinical Category *
                      </label>
                      <select
                        value={formData.reason}
                        onChange={(e) =>
                          setFormData({ ...formData, reason: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 bg-[#F8F7F2] border border-[#CBD5E1] rounded-md text-xs sm:text-sm focus:bg-white focus:outline-hidden focus:border-[#006D68]"
                      >
                        <option value="Diabetes Care & Blood Sugar Optimization">
                          Diabetes Care & Blood Sugar Optimization
                        </option>
                        <option value="Preventive Health & Metabolic Screening">
                          Preventive Health & Metabolic Screening
                        </option>
                        <option value="Lifestyle Medicine & Activity Prescription">
                          Lifestyle Medicine & Activity Prescription
                        </option>
                        <option value="Cardiovascular Risk Evaluation">
                          Cardiovascular Risk Evaluation
                        </option>
                        <option value="Routine Follow-up & Lab Review">
                          Routine Follow-up & Lab Review
                        </option>
                        <option value="Other Medical Consultation">
                          Other Medical Consultation
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#102A43] mb-1.5">
                        Brief Symptoms or Relevant Medical History (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.medicalNotes}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            medicalNotes: e.target.value,
                          })
                        }
                        placeholder="Mention any existing conditions (e.g. hypertension, HbA1c score, current medications)..."
                        className="w-full px-3.5 py-2.5 bg-[#F8F7F2] border border-[#CBD5E1] rounded-md text-xs sm:text-sm focus:bg-white focus:outline-hidden focus:border-[#006D68]"
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#CBD5E1] text-[#243B53] text-xs sm:text-sm rounded-md hover:bg-[#F3F5F4]"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#006D68] hover:bg-[#0F8B83] text-white text-xs sm:text-sm font-medium rounded-md shadow-xs transition-colors"
                    >
                      <span>Review & Confirm</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 5: Review & Confirmation */}
              {step === 5 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-[11px] font-bold text-[#006D68] uppercase tracking-wider block">
                      Step 5 of 5
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#102A43] mt-1">
                      Review Appointment Summary
                    </h3>
                    <p className="text-xs sm:text-sm text-[#627D98] mt-1">
                      Please verify all submitted details prior to confirmation.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 bg-[#F8F7F2] rounded-lg border border-[#E2E8F0] space-y-3 text-xs sm:text-sm">
                    <div className="flex justify-between pb-2 border-b border-[#E2E8F0]">
                      <span className="text-[#627D98]">Consultation Format:</span>
                      <span className="font-semibold text-[#102A43] capitalize">
                        {formData.consultationType}
                      </span>
                    </div>

                    <div className="flex justify-between pb-2 border-b border-[#E2E8F0]">
                      <span className="text-[#627D98]">Patient Name:</span>
                      <span className="font-semibold text-[#102A43]">
                        {formData.patientName} (Age: {formData.age || "N/A"}, {formData.gender})
                      </span>
                    </div>

                    <div className="flex justify-between pb-2 border-b border-[#E2E8F0]">
                      <span className="text-[#627D98]">Contact Phone:</span>
                      <span className="font-semibold text-[#102A43]">
                        {formData.phone}
                      </span>
                    </div>

                    <div className="flex justify-between pb-2 border-b border-[#E2E8F0]">
                      <span className="text-[#627D98]">Email:</span>
                      <span className="font-semibold text-[#102A43]">
                        {formData.email}
                      </span>
                    </div>

                    <div className="flex justify-between pb-2 border-b border-[#E2E8F0]">
                      <span className="text-[#627D98]">Date & Slot:</span>
                      <span className="font-semibold text-[#102A43]">
                        {formData.preferredDate || "To be confirmed"} • {formData.preferredTime}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-[#627D98]">Clinical Reason:</span>
                      <span className="font-semibold text-[#006D68]">
                        {formData.reason}
                      </span>
                    </div>
                  </div>

                  <div className="p-3 bg-blue-50 rounded-md border border-blue-200 text-xs text-blue-900">
                    <strong>Confirmation Notice:</strong> This appointment request will be forwarded to the clinical desk at IMS & SUM Hospital for schedule verification.
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#CBD5E1] text-[#243B53] text-xs sm:text-sm rounded-md hover:bg-[#F3F5F4]"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleSubmitBooking}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#006D68] hover:bg-[#0F8B83] text-white text-xs sm:text-sm font-medium rounded-md shadow-xs transition-colors"
                    >
                      <span>Confirm & Submit Appointment</span>
                      <CheckCircle2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
