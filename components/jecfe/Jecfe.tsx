import { JcfeLogoWhite } from "@/assets";

export function Jecfe() {
  return (
    <div className="pointer-events-none absolute right-6 top-6 z-10 opacity-70 sm:right-8 sm:top-8">
      <JcfeLogoWhite
        aria-hidden="true"
        width={112}
        height={36}
        className="h-auto w-24 sm:w-28"
        style={{ height: 36, width: 112 }}
      />
    </div>
  );
}
