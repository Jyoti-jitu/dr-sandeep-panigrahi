import { academicLinks } from "@/lib/data";

export default function SocialLinks({ className = "" }) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {academicLinks.map((item, idx) => (
        <a
          key={idx}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full bg-white border border-[#CBD5E1] flex items-center justify-center text-[#102A43] hover:bg-[#006D68] hover:text-white hover:border-[#006D68] transition-colors shadow-2xs"
          aria-label={item.name}
          title={item.name}
        >
          <span className="text-xs font-bold font-serif">{item.badge}</span>
        </a>
      ))}
    </div>
  );
}
