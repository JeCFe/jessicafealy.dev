"use client";
import { Github, LinkedIn } from "@/assets";
import { Glow, GlowCapture } from "@codaworks/react-glow";
import { ArrowDown } from "@jecfe/react-design-system";
import Image from "next/image";
import Link from "next/link";
import selfie from "@/assets/selfie3.jpg";

export default function Home() {
  return (
    <div>
      <GlowCapture size={700}>
        <Glow>
          <div className="bg-slate-900 min-h-screen flex flex-col text-white w-full glow:bg-slate-700/50">
            <div className="container mx-auto flex flex-row items-center justify-center pt-20">
              <div className="flex flex-row md:flex-col w-2/3 space-y-28">
                <div className="text-7xl space-y-16 glow:bg-gradient-to-r glow:from-pink-500 glow:via-sky-400 glow:to-blue-500 glow:text-transparent glow:bg-clip-text ">
                  <h1>Hi there!</h1>
                  <h1 className="ml-40">{`I'm Jessica`} </h1>
                </div>
                <div className="text-2xl ml-40 text-center">
                  {`I'm a fullstack software engineer that enjoys toying around with
                  micro-processors, and web application projects. Having build various projects including custom macro pads, secure chat server, and react design systems`}
                </div>

                <div className="flex flex-row space-x-12 ml-40">
                  <Link
                    className=" flex flex-col"
                    href="https://github.com/JeCFe"
                    target="_blank"
                  >
                    <Github
                      alt="Github logo"
                      className="w-20 h-20 fill-white glow:fill-pink-500"
                    />
                  </Link>
                  <Link
                    className="flex flex-col"
                    href="https://uk.linkedin.com/in/jessicaclarafealy"
                    target="_blank"
                  >
                    <LinkedIn
                      alt="LinkedIn logo"
                      className="w-20 h-20 fill-white glow:fill-cyan-500"
                    />
                  </Link>
                </div>
              </div>
              <div className="flex flex-row md:flex-col w-1/3 items-center justify-center h-1/2">
                <Image
                  src={selfie}
                  alt="Phone of Jessica Fealy"
                  width={400}
                  className="shadow rounded-full max-w-full align-middle border-4  border-transparent glow:border-pink-500 glow:shadow-2xl glow:shadow-cyan-500"
                />
              </div>
            </div>
            <div className="flex-grow" />
            <div className="flex flex-row w-full items-center text-center justify-center pb-16">
              <div className="border-2 rounded-full glow:border-pink-500">
                <Link href={""}>
                  <ArrowDown className="fill-white hover:fill-cyan-500" />
                </Link>
              </div>
            </div>
          </div>
        </Glow>
      </GlowCapture>
    </div>
  );
}
