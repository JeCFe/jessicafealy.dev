import { siteData } from "@/data";
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center text-slate-200">
      <p className="font-mono text-sm font-semibold uppercase tracking-[0.24em] text-pink-300">
        {siteData.notFound.eyebrow}
      </p>
      <h1 className="mt-5 bg-gradient-to-r from-pink-300 to-cyan-300 bg-clip-text text-6xl font-semibold tracking-tight text-transparent md:text-8xl">
        {siteData.notFound.title}
      </h1>
      <p className="mt-5 max-w-md text-lg leading-8 text-slate-400">
        {siteData.notFound.description}
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
      >
        {siteData.notFound.linkLabel}
      </Link>
    </main>
  );
};

export default NotFound;
