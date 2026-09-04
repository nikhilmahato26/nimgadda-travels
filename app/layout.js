import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import CallBar from "@/components/site/CallBar";
import { business, addressOneLine } from "@/data/business";
import { SITE_URL } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${business.name} | Rooms & Yatra Packages in Kasi`,
    template: `%s | ${business.name}`,
  },
  description:
    "Air-conditioned deluxe rooms near Kashi Vishwanath temple, authentic Andhra meals, vehicle fleet hire, and yatra packages covering Prayagraj, Ayodhya, Gaya, Mathura and Agra in Varanasi.",
  keywords: [
    "Kasi rooms",
    "Varanasi accommodation Telugu",
    "Kashi Vishwanath stay",
    "Andhra meals Varanasi",
    "Andhra ashram Varanasi",
    "Telugu travellers Kasi stay",
    "Kasi yatra package",
    "Ayodhya Prayagraj Gaya tour from Varanasi",
    "Varanasi tempo traveller bus hire",
    "Panday Haweli Varanasi rooms",
    business.name,
    business.shortName,
  ],
  authors: [{ name: business.owner.name }],
  creator: business.name,
  publisher: business.name,
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: business.name,
    title: `${business.name} | Rooms & Yatra Packages in Kasi`,
    description:
      "Air-conditioned deluxe rooms close to Kashi Vishwanath, home-style Andhra meals, vehicle hire, and yatra packages across the northern pilgrimage circuit.",
    images: [
      {
        url: "/images/kashi-temple.jpg",
        width: 1200,
        height: 630,
        alt: `${business.name} - Kashi Vishwanath and Yatra Services`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} | Rooms & Yatra in Kasi`,
    description:
      "Air-conditioned rooms near Kashi Vishwanath, home-style Andhra meals, and all-inclusive yatra packages in Varanasi.",
    images: ["/images/kashi-temple.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Varanasi",
    "geo.position": "25.3036;83.0076",
    ICBM: "25.3036, 83.0076",
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LodgingBusiness", "TravelAgency"],
        "@id": `${SITE_URL}/#business`,
        name: business.name,
        alternateName: business.shortName,
        description:
          "Air-conditioned deluxe rooms close to Kashi Vishwanath with authentic home-style Andhra meals, plus yatra packages and private vehicle fleet hire for pilgrims.",
        telephone: business.phoneDisplay,
        url: SITE_URL,
        image: `${SITE_URL}/images/kashi-temple.jpg`,
        logo: `${SITE_URL}/images/logo-mark-transparent.png`,
        priceRange: "₹₹",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, UPI, Bank Transfer",
        address: {
          "@type": "PostalAddress",
          streetAddress: `${business.address.line1}, ${business.address.line2}`,
          addressLocality: "Varanasi",
          addressRegion: "Uttar Pradesh",
          postalCode: business.address.pincode,
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 25.3036,
          longitude: 83.0076,
        },
        hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          business.mapsQuery
        )}`,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        amenityFeature: [
          "Air conditioning",
          "Wi-Fi",
          "Hot water round the clock",
          "Lift access",
          "Car parking",
          "Andhra meals dining",
          "Railway station pickup & drop",
        ].map((name) => ({
          "@type": "LocationFeatureSpecification",
          name,
          value: true,
        })),
        areaServed: [
          { "@type": "City", name: "Varanasi" },
          { "@type": "City", name: "Prayagraj" },
          { "@type": "City", name: "Ayodhya" },
          { "@type": "City", name: "Gaya" },
          { "@type": "City", name: "Mathura" },
          { "@type": "City", name: "Agra" },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: business.name,
        publisher: {
          "@id": `${SITE_URL}/#business`,
        },
        inLanguage: "en-IN",
      },
    ],
  };

  return (
    <html
      lang="en-IN"
      data-scroll-behavior="smooth"
      className={`${jakarta.variable} h-full antialiased`}
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
          className="sr-only rounded-pill bg-accent px-4 py-2 text-on-accent focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50"
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
