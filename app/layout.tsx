import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  verification: {
    google: "uRTAz7j8N8jDW5BzJaGn-wzrFY5C7KNStVLMKlGzo_4",
  },
  title: "CSS Animation Generator - Create CSS Animations | css-animation",
  description:
    "Free online CSS animation generator. Create custom keyframe animations with a visual editor. Adjust timing, easing, transforms, and export production-ready CSS instantly.",
  keywords: [
    "css animation generator",
    "css keyframe generator",
    "css animation tool",
    "create css animation",
    "animation builder",
    "keyframes generator",
  ],
  authors: [{ name: "css-animation" }],
  openGraph: {
    title: "CSS Animation Generator - Create CSS Animations",
    description:
      "Free online CSS animation generator. Build custom keyframe animations visually with presets, timing controls, and instant CSS export.",
    url: "https://css-animation.vercel.app",
    siteName: "css-animation",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CSS Animation Generator - Create CSS Animations",
    description:
      "Free online CSS animation generator. Build custom keyframe animations visually with presets, timing controls, and instant CSS export.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://css-animation.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "CSS Animation Generator",
              description:
                "Free online CSS animation generator with visual keyframe editor. Create, preview, and export CSS animations instantly.",
              url: "https://css-animation.vercel.app",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Any",
              browserRequirements: "Requires JavaScript",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "Visual keyframe animation editor",
                "Live animation preview",
                "Built-in animation presets",
                "Custom cubic-bezier timing",
                "One-click CSS export",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
