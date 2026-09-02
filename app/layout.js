import { Bricolage_Grotesque, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import CallBar from "@/components/site/CallBar";
import { business, addressOneLine } from "@/data/business";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://nimmagaddavari.in";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Nimmagadda Vari Charitable Trust | Rooms and yatra packages in Kasi",
    template: "%s | Nimmagadda Vari Charitable Trust",
  },
  description:
    "Air-conditioned deluxe rooms close to Kashi Vishwanath, Andhra meals, and yatra packages across Prayagraj, Ayodhya, Gaya, Mathura and Agra. Run by a charitable trust in Varanasi.",
  keywords: [
    "Kasi rooms",
    "Varanasi accommodation Telugu",
    "Kashi Vishwanath stay",
    "Andhra food Varanasi",
    "Kasi yatra package",
    "Nimmagadda Vari Charitable Trust",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: business.name,
    title: "Rooms and yatra packages in Kasi, with Andhra food",
    description:
      "Air-conditioned deluxe rooms a walk from Kashi Vishwanath, home-style Andhra meals, and yatra packages across the northern circuit.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: business.name,
    description:
      "Air-conditioned deluxe rooms close to Kashi Vishwanath with Andhra meals, plus yatra packages and vehicle hire.",
    telephone: business.phoneDisplay,
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${business.address.line1}, ${business.address.line2}`,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.pincode,
      addressCountry: "IN",
    },
    amenityFeature: [
      "Air conditioning",
      "Wi-Fi",
      "Hot water",
      "Lift",
      "Car parking",
    ].map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true,
    })),
  };

  return (
    <html
      lang="en-IN"
      data-scroll-behavior="smooth"
      className={`${bricolage.variable} ${manrope.variable} h-full antialiased`}
    >
      {/* Bottom padding on mobile clears the fixed call bar. */}
      <body className="flex min-h-full flex-col bg-surface pb-[68px] text-text sm:pb-0">
        <script
          type="application/ld+json"
          // Structured data is a static object built above, not user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <a
          href="#main"
          className="sr-only rounded-control bg-brand px-4 py-2 text-on-brand focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer address={addressOneLine} />
        <CallBar />
      </body>
    </html>
  );
}
