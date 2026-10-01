import {
  Stethoscope,
  GraduationCap,
  Award,
  Landmark,
  FileText,
} from "lucide-react";
import { credentialItems } from "@/lib/data";

const iconMap = {
  Stethoscope: Stethoscope,
  GraduationCap: GraduationCap,
  Award: Award,
  Building2: Landmark,
  FileText: FileText,
};

export default function CredentialStrip() {
  return (
    <section className="bg-[#F8F7F2] border-b border-[#E2E8F0] py-6 sm:py-7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 divide-y md:divide-y-0 lg:divide-x divide-[#E2E8F0]">
          {credentialItems.map((item, index) => {
            const Icon = iconMap[item.iconName] || Stethoscope;
            return (
              <div
                key={index}
                className={`flex items-center gap-3.5 ${
                  index !== 0 ? "lg:pl-6" : ""
                } ${index > 1 ? "pt-3 md:pt-0" : ""}`}
              >
                <div className="w-10 h-10 rounded-full bg-white border border-[#CBD5E1] flex items-center justify-center shrink-0 text-[#006D68] shadow-2xs">
                  <Icon className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div>
                  <div className="font-serif font-bold text-base sm:text-lg text-[#102A43] tracking-tight leading-tight">
                    {item.title}
                  </div>
                  <div className="text-xs text-[#627D98] font-sans mt-0.5 font-medium">
                    {item.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
