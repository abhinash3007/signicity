import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Brand Experiences. Built to be Seen.`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "brand activation agency",
    "event management",
    "exhibition stall fabrication",
    "retail branding",
    "POSM",
    "product display units",
    "corporate gifting",
    "awards and trophies",
    "trade marketing India",
    "event management Asansol",
    "branding agency Asansol",
    "event management Durgapur",
    "exhibition stall West Bengal",
    "corporate gifting Asansol",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — Brand Experiences. Built to be Seen.`,
    description: site.description,
    url: site.url,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#131418",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          // Local business details for Google search results.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: site.name,
              description: site.description,
              url: site.url,
              email: site.email,
              ...(site.phone ? { telephone: site.phone } : {}),
              address: {
                "@type": "PostalAddress",
                streetAddress: site.address.street,
                addressLocality: site.address.locality,
                addressRegion: site.address.region,
                postalCode: site.address.postalCode,
                addressCountry: site.address.country,
              },
              areaServed: "IN",
              taxID: site.gstin,
            }),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
