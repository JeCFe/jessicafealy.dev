import "@jecfe/react-design-system/src/tailwind.css";

export const metadata = {
  title: "Jessica Fealy",
  description: "A Fullstack Engineer Portfolio",
};

import { Cookie, Poppins } from "next/font/google";

const cookie = Cookie({
  subsets: ["latin"],
  variable: "--font-cookie",
  weight: "400",
});

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
      <body className={`${cookie.variable} font-poppins min-h-screen flex-col`}>
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
