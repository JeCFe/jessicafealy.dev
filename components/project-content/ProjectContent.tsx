import type { ProfessionalProjectBlock } from "@/content";
import Image from "next/image";
import { MarkdownContent, Typography } from "..";

const ProjectContentBlock = ({
  block,
}: {
  block: ProfessionalProjectBlock;
}) => {
  if (block.type === "markdown") {
    return <MarkdownContent content={block.content} />;
  }

  if (block.type === "image") {
    return (
      <figure>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src={block.image}
            alt={block.alt}
            fill
            sizes="(min-width: 1024px) 896px, (min-width: 640px) calc(100vw - 80px), calc(100vw - 48px)"
            className="object-cover"
          />
        </div>
        <Typography as="figcaption" className="mt-3">
          {block.caption}
        </Typography>
      </figure>
    );
  }

  return (
    <figure>
      <video
        controls
        preload="metadata"
        poster={block.poster ?? undefined}
        className="aspect-[4/3] w-full rounded-2xl bg-slate-950 object-contain"
      >
        <source src={block.video} />
        Your browser does not support embedded videos.
      </video>
      <Typography as="figcaption" className="mt-3">
        {block.caption}
      </Typography>
    </figure>
  );
};

export const ProjectContent = ({
  blocks,
}: {
  blocks: ProfessionalProjectBlock[];
}) => (
  <div className="mt-12 space-y-8">
    {blocks.map((block, index) => (
      <ProjectContentBlock block={block} key={`${block.type}-${index}`} />
    ))}
  </div>
);
