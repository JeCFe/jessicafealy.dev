import {
  CSharp,
  Cypress,
  Docker,
  Dotnet,
  Git,
  Jest,
  Js,
  Next,
  React,
  SQLServer,
  Tailwind,
  Ts,
  XUnit,
} from "@/assets";
import { cva } from "class-variance-authority";

const logo = cva("w-24 h-24");

export function Proficiencies() {
  return (
    <>
      <div className="h-4 bg-black glow:bg-gray-700" />
      <div className="flex w-full flex-col items-center justify-center space-y-12 bg-purple-600 py-12">
        <div className="container flex w-full flex-row justify-between">
          <CSharp className={logo()} />
          <Dotnet className={logo()} />
          <Ts className={logo()} />
          <Js className={logo()} />
          <Next className={`${logo()} fill-white`} />
          <Cypress className={logo()} />
          <XUnit className={logo()} />
          <Jest className={logo()} /> <Docker className={logo()} />
          <Git className={logo()} />
          <React className={logo()} />
          <Tailwind className={logo()} />
          <SQLServer className={`${logo()} fill-white`} />
        </div>
      </div>
      <div className="h-4 bg-black glow:bg-gray-700" />
    </>
  );
}
