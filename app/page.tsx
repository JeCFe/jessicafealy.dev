"use client";
import { Github, LinkedIn } from "@/assets";
import { Glow, GlowCapture } from "@codaworks/react-glow";
import { Anchor, ArrowDown, Pill, Timeline } from "@jecfe/react-design-system";
import Image from "next/image";
import Link from "next/link";
import selfie from "@/assets/selfie3.jpg";
import { projectData } from "@/data";
import { TimelineItem } from "@jecfe/react-design-system/dist/cjs/components/timeline/Timeline";

const renderableContent: TimelineItem[] = projectData.map(
  (project): TimelineItem => ({
    children: (
      <div>
        <div className="space-x-3 pb-2">
          {project.pills.map((pill, index) => (
            <Pill
              size="medium"
              type="info"
              key={`${project.subheading}-${pill}-${index}`}
            >
              {pill}
            </Pill>
          ))}
        </div>

        <h3 className="text-xl font-bold">{project.heading}</h3>
        <h4 className="text-lg">{project.subheading}</h4>
        <div className="space-y-4">
          <p>{project.body}</p>
          {project.hrefs.map((href, index) => (
            <Anchor
              key={`${project.subheading}-${href.name}-${index}`}
              href={href.href}
              target="_blank"
            >
              {href.name}
            </Anchor>
          ))}
        </div>
      </div>
    ),
  }),
);

export default function Home() {
  return (
    <div>
      <GlowCapture size={700}>
        <Glow>
          <div className="flex min-h-screen w-full flex-col bg-slate-900 text-white glow:bg-slate-700/50">
            <div className="container mx-auto flex flex-col items-center justify-center pt-20 md:flex-row">
              <div className="flex w-2/3 flex-col space-y-28">
                <div className="space-y-16 text-7xl glow:bg-gradient-to-r glow:from-pink-500 glow:via-sky-400 glow:to-blue-500 glow:bg-clip-text glow:text-transparent">
                  <h1>Hi there!</h1>
                  <h1 className="md:ml-40">{`I'm Jessica`} </h1>
                </div>
                <div className="text-center text-2xl md:ml-40">
                  {`I'm a fullstack software engineer that enjoys toying around with
                  micro-processors, and web application projects. Having build various projects including custom macro pads, secure chat server, and react design systems`}
                </div>

                <div className="flex flex-row space-x-12 md:ml-40  ">
                  <Link
                    className="flex flex-col"
                    href="https://github.com/JeCFe"
                    target="_blank"
                  >
                    <Github
                      alt="Github logo"
                      className="h-20 w-20 fill-white glow:fill-pink-500"
                    />
                  </Link>
                  <Link
                    className="flex flex-col"
                    href="https://uk.linkedin.com/in/jessicaclarafealy"
                    target="_blank"
                  >
                    <LinkedIn
                      alt="LinkedIn logo"
                      className="h-20 w-20 fill-white glow:fill-cyan-500"
                    />
                  </Link>
                </div>
              </div>
              <div className="hidden h-1/2 w-1/3 flex-row items-center justify-center md:visible md:flex md:flex-col">
                <Image
                  src={selfie}
                  alt="Phone of Jessica Fealy"
                  width={400}
                  className="max-w-full rounded-full border-4 border-transparent align-middle  shadow glow:border-pink-500 glow:shadow-2xl glow:shadow-cyan-500"
                />
              </div>
            </div>
            <div className="flex-grow" />
            <div className="flex w-full flex-row items-center justify-center pb-16 pt-20 text-center md:pt-0">
              <div className="rounded-full border-2 glow:border-pink-500">
                <Link href={""}>
                  <ArrowDown className="fill-white hover:fill-cyan-500" />
                </Link>
              </div>
            </div>
          </div>

          <div className="h-4 bg-black glow:bg-gray-700"></div>
        </Glow>
        <div className="min-h-screen bg-pink-900 py-20">
          <Timeline lineColour="black" items={renderableContent} />
        </div>
      </GlowCapture>
    </div>
  );
}
