import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackToTop from "./components/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.saanviautolink.com.np"),

  title: {
    default: "Saanvi Auto Link | Authorized TVS Showroom in Kathmandu",
    template: "%s | Saanvi Auto Link",
  },

  description:
    "Saanvi Auto Link is an authorized TVS showroom in Kathmandu, Nepal. Explore TVS bikes, scooters, genuine spare parts, servicing, finance options, and book your test ride today.",

  keywords: [
    "TVS Nepal",
    "TVS Showroom Kathmandu",
    "TVS Dealer Nepal",
    "TVS Bikes Nepal",
    "TVS Scooters Nepal",
    "Apache RTR Nepal",
    "TVS Raider Nepal",
    "TVS Ntorq Nepal",
    "TVS Service Center Kathmandu",
    "Saanvi Auto Link",
  ],

  authors: [{ name: "Saanvi Auto Link" }],

  creator: "Saanvi Auto Link",

  publisher: "Saanvi Auto Link",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Authorized TVS Showroom in Kathmandu",
    description:
      "Buy the latest TVS bikes and scooters in Nepal. Genuine spare parts, servicing and finance available.",
    url: "https://www.saanviautolink.com.np",
    siteName: "Saanvi Auto Link",
    locale: "en_NP",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Saanvi Auto Link",
    description: "Authorized TVS Showroom in Kathmandu",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
