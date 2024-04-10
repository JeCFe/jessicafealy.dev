import { Footer } from "@jecfe/react-design-system";
import "@jecfe/react-design-system/src/tailwind.css";

export const metadata = {
  title: "Jessica Fealy",
  description: "A Fullstack Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" flex-col min-h-screen font-mono">
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
