import type { Metadata } from "next";
import { Montserrat, Geist_Mono } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Spookathon 2025 | Halloween Hackathon at Orange Coast College",
    template: "%s | Spookathon 2025"
  },
  description: "Join Spookathon 2025: A spooky 48-hour hackathon at Orange Coast College, Oct 24-31. Open to all students - build innovative solutions, win prizes, and have fun coding with the dead... I mean, with your team!",
  keywords: [
    "hackathon",
    "Orange Coast College",
    "OCC",
    "Halloween",
    "Spookathon",
    "coding competition",
    "programming contest",
    "student hackathon",
    "tech event",
    "2025",
    "California",
    "web development",
    "mobile development",
    "AI",
    "machine learning",
    "robotics",
    "computer science",
    "Iota Xi Honor Society"
  ],
  authors: [{ name: "Iota Xi Honor Society" }],
  creator: "Iota Xi Honor Society at Orange Coast College",
  publisher: "Orange Coast College",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://spookathon.org",
    title: "Spookathon 2025 | Halloween Hackathon at Orange Coast College",
    description: "Join Spookathon 2025: A spooky 48-hour hackathon at Orange Coast College, Oct 24-31. Open to all students - build innovative solutions, win prizes, and have fun coding!",
    siteName: "Spookathon 2025",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Spookathon 2025 - Halloween Hackathon at Orange Coast College",
      },
      {
        url: "/og-image-square.png",
        width: 1200,
        height: 1200,
        alt: "Spookathon 2025 Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spookathon 2025 | Halloween Hackathon at Orange Coast College",
    description: "Join Spookathon 2025: A spooky 48-hour hackathon at Orange Coast College, Oct 24-31. Open to all students - build innovative solutions, win prizes, and have fun coding!",
    images: ["/twitter-image.png"],
    creator: "@OCC_IotaXi",
    site: "@OCC_IotaXi",
  },
  metadataBase: new URL("https://spookathon.org"),
  alternates: {
    canonical: "https://spookathon.org",
  },
  category: "education",
  classification: "hackathon, education, technology, student event",
  other: {
    "apple-mobile-web-app-title": "Spookathon 2025",
    "application-name": "Spookathon 2025",
    "msapplication-TileColor": "#1a0d1a",
    "theme-color": "#1a0d1a",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Spookathon 2025",
    "description": "A spooky 48-hour hackathon hosted by the Iota Xi Honor Society at Orange Coast College. Open to students of all experience levels across any major.",
    "image": [
      "https://spookathon.org/assets/og-image.png"
    ],
    "startDate": "2025-10-24T09:00:00-07:00",
    "endDate": "2025-10-31T21:00:00-07:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Orange Coast College",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2701 Fairview Rd",
        "addressLocality": "Costa Mesa",
        "addressRegion": "CA",
        "postalCode": "92626",
        "addressCountry": "US"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "Iota Xi Honor Society",
      "url": "https://spookathon.org"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://spookathon.org"
    },
    "performer": {
      "@type": "Organization",
      "name": "Student Participants"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Students",
      "name": "College Students of All Majors"
    }
  };

  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="image" href="/assets/og-image.png" />
        <link rel="og:image" href="/assets/og-image.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${montserrat.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
