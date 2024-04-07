import { Footer, Header } from "@jecfe/react-design-system";
import "@jecfe/react-design-system/src/tailwind.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white font-mono">
        <Header title="JeCFe - Next Template" />
        <div className="flex-1 container mx-auto">{children}</div>
        <Footer>JeCFe - Next Template</Footer>
      </body>
    </html>
  );
}
