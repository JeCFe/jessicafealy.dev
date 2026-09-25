import { MarkdownContent, Typography } from "@/components";
import { siteData } from "@/data";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center text-slate-200 sm:px-10 lg:px-16 lg:py-24">
      <Typography as="h1">{siteData.notFound.title}</Typography>
      <div className="max-w-md">
        <MarkdownContent content={siteData.notFound.description} />
      </div>
      <Link
        href="/"
        className="mt-8 rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
      >
        {siteData.notFound.linkLabel}
      </Link>
    </div>
  );
};

export default NotFound;
