import { MarkdownContent, Typography } from "@/components";
import { siteData } from "@/data";
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center text-slate-200">
      <Typography
        as="small"
        className="font-semibold uppercase tracking-widest !text-pink-300"
      >
        {siteData.notFound.eyebrow}
      </Typography>
      <Typography
        as="h1"
        className="mt-5 bg-gradient-to-r from-pink-300 to-cyan-300 bg-clip-text !text-transparent"
      >
        {siteData.notFound.title}
      </Typography>
      <div className="max-w-md">
        <MarkdownContent content={siteData.notFound.description} />
      </div>
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
