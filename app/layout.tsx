import { JcfeLogo } from "@/assets";
import { Typography } from "@/components";
import { siteData } from "@/data";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
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

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600"],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${poppins.variable} min-h-screen flex-col font-poppins text-slate-200 antialiased`}
      >
        <div id="absolute" className="relative overflow-clip">
          {children}
        </div>
        <footer className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-slate-800/80 px-6 py-8 text-center sm:px-10 lg:px-16">
          <div className="pointer-events-none flex w-full items-center justify-center">
            <JcfeLogo
              aria-hidden="true"
              width={48}
              height={48}
              className="h-12 w-12"
              style={{ height: 48, width: 48 }}
            />
          </div>
          <Typography as="small">
            &copy; {new Date().getFullYear()} {siteData.footer.copyrightName}
          </Typography>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
