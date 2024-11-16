import "@jecfe/react-design-system/src/tailwind.css";
import PlausibleProvider from "next-plausible";

export const metadata = {
  title: "Jessica Fealy",
  description: "A Fullstack Engineer Portfolio",
};

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider
          trackOutboundLinks
          enabled
          domain="jessicafealy.dev"
        />
      </head>
      <body
        className={`${poppins.variable} min-h-screen flex-col bg-slate-900 font-poppins`}
      >
        <div className="min-h-screen w-full flex-1 flex-col">{children}</div>
      </body>
    </html>
  );
}
