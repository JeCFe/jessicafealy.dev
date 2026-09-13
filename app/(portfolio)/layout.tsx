import { Introduction } from "@/components";

const PortfolioLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
      <div className="grid min-h-screen w-full max-w-2xl lg:max-w-none lg:grid-cols-[minmax(280px,0.72fr)_minmax(0,1.28fr)] lg:gap-24">
        <Introduction />
        <div className="min-w-0">{children}</div>
      </div>
    </main>
  );
};

export default PortfolioLayout;
