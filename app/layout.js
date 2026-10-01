import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://drsandeepkumarpanigrahi.com"),
  title: {
    default:
      "Prof. Dr. Sandeep Kumar Panigrahi | Physician, Professor & Public Health Professional",
    template: "%s | Prof. Dr. Sandeep Kumar Panigrahi",
  },
  description:
    "Official academic and professional profile of Prof. Dr. Sandeep Kumar Panigrahi, physician, professor, public health professional and researcher based in Bhubaneswar, Odisha.",
  keywords: [
    "Prof. Dr. Sandeep Kumar Panigrahi",
    "Physician Bhubaneswar",
    "Community Medicine Professor",
    "Diabetes Care Specialist Odisha",
    "Public Health Researcher",
    "IMS and SUM Hospital",
    "Preventive Healthcare",
    "Medical Research",
  ],
  authors: [{ name: "Prof. Dr. Sandeep Kumar Panigrahi" }],
  creator: "Prof. Dr. Sandeep Kumar Panigrahi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://drsandeepkumarpanigrahi.com",
    title:
      "Prof. Dr. Sandeep Kumar Panigrahi | Physician, Professor & Public Health Professional",
    description:
      "Official academic and professional profile of Prof. Dr. Sandeep Kumar Panigrahi, physician, professor, public health professional and researcher based in Bhubaneswar, Odisha.",
    siteName: "Prof. Dr. Sandeep Kumar Panigrahi",
    images: [
      {
        url: "/images/doctor_portrait_hd.jpg",
        width: 800,
        height: 1040,
        alt: "Prof. Dr. Sandeep Kumar Panigrahi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Prof. Dr. Sandeep Kumar Panigrahi | Physician, Professor & Public Health Professional",
    description:
      "Official academic profile of Prof. Dr. Sandeep Kumar Panigrahi, physician, professor, and public health researcher.",
    images: ["/images/doctor_portrait_hd.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Prof. Dr. Sandeep Kumar Panigrahi",
    jobTitle: "Professor of Community Medicine & Physician",
    worksFor: {
      "@type": "MedicalOrganization",
      name: "IMS & SUM Hospital, Siksha 'O' Anusandhan University",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bhubaneswar",
        addressRegion: "Odisha",
        addressCountry: "India",
      },
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Veer Surendra Sai Medical College & Hospital",
      },
      {
        "@type": "EducationalOrganization",
        name: "SCB Medical College & Hospital",
      },
    ],
    knowsAbout: [
      "Clinical Medicine",
      "Community Medicine",
      "Public Health",
      "Diabetes Care",
      "Epidemiology",
      "Preventive Healthcare",
    ],
  };

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased text-[#243B53] bg-white selection:bg-[#E6F4F1] selection:text-[#006D68]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
