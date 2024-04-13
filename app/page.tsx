"use client";
import { Github, LinkedIn } from "@/assets";
import { Glow, GlowCapture } from "@codaworks/react-glow";
import Image from "next/image";
import Link from "next/link";
import selfie from "@/assets/selfie3.jpg";
import { Jecfe, NavArrow, Projects } from "@/components";

export default function Home() {
  return (
    <div id="home">
      <GlowCapture size={700}>
        <Jecfe />
        <Glow>
          <div className="flex min-h-screen w-full flex-col bg-slate-900 text-white glow:bg-slate-700/50">
            <div className="container mx-auto flex flex-col items-center justify-center pt-20 md:flex-row">
              <div className="flex w-2/3 flex-col space-y-28">
                <div className="space-y-4 bg-gradient-to-r from-pink-500 via-sky-400 to-blue-500 bg-clip-text text-center text-5xl font-bold text-transparent md:text-7xl">
                  <h1>Hi there!</h1>
                  <h1>{`I'm Jessica`} </h1>
                </div>
                <div className="text-center text-2xl font-light md:mx-40">
                  {`I'm a fullstack software engineer that enjoys toying around with
                  micro-processors, and web application projects. Having build various projects including custom macro pads, secure chat server, and react design systems`}
                </div>

                <div className="flex w-full flex-row justify-center space-x-12 pb-20 md:justify-start md:pb-0 ">
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
            <NavArrow direction="down" id="projects" />
          </div>

          <div className="h-4 bg-black glow:bg-gray-700"></div>
        </Glow>

        <Projects />
      </GlowCapture>
    </div>
  );
}
