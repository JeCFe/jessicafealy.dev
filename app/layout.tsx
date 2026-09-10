import { siteData } from "@/data";
import type { Metadata } from "next";
import PlausibleProvider from "next-plausible";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jessicafealy.dev"),
  title: siteData.metadata.title,
  description: siteData.metadata.description,
  openGraph: {
    title: siteData.metadata.title,
    description: siteData.metadata.description,
    url: "https://jessicafealy.dev",
    siteName: "Jessica Fealy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.metadata.title,
    description: siteData.metadata.description,
  },
};

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "400",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider
          trackOutboundLinks
          enabled
          domain={siteData.analytics.domain}
        />
      </head>
      <body
        className={`${poppins.variable} min-h-screen flex-col font-poppins text-slate-200 antialiased`}
      >
        <div className="min-h-screen w-full flex-1 flex-col">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
