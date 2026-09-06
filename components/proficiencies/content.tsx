import {
  Auth0,
  Azure,
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

export const proficiencyLogo = cva("h-9 w-9 shrink-0", {
  variants: { white: { true: "fill-white" } },
});

export const proficiencyIcons = {
  auth0: { icon: Auth0 },
  azure: { icon: Azure },
  csharp: { icon: CSharp },
  cypress: { icon: Cypress },
  docker: { icon: Docker },
  dotnet: { icon: Dotnet },
  git: { icon: Git },
  javascript: { icon: Js },
  jest: { icon: Jest },
  nextjs: { icon: Next, white: true },
  react: { icon: React },
  sqlserver: { icon: SQLServer, white: true },
  tailwind: { icon: Tailwind },
  typescript: { icon: Ts },
  xunit: { icon: XUnit },
};
