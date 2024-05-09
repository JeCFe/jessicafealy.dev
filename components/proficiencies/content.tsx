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
import { ReactNode } from "react";

const logo = cva("w-20 h-20", { variants: { white: { true: "fill-white" } } });

export const proficiencies: { href: string; children: ReactNode }[] = [
  {
    href: "https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/",
    children: <CSharp alt="C Sharp logo" className={logo()} />,
  },
  {
    href: "https://learn.microsoft.com/en-us/dotnet/core/whats-new/dotnet-8/overview",
    children: <Dotnet alt="Dotnet logo" className={logo()} />,
  },
  {
    href: "https://www.typescriptlang.org/",
    children: <Ts alt="TypeScript langage logo" className={logo()} />,
  },
  {
    href: "https://www.javascript.com/",
    children: <Js alt="JavaScript language logo" className={logo()} />,
  },
  {
    href: "https://nextjs.org/",
    children: (
      <Next alt="Next framework logo" className={logo({ white: true })} />
    ),
  },
  {
    href: "www.cypress.io/",
    children: <Cypress alt="Cypress logo" className={logo()} />,
  },
  {
    href: "https://xunit.net/",
    children: <XUnit alt="XUnit logo" className={logo()} />,
  },
  {
    href: "https://jestjs.io/",
    children: <Jest alt="Jest logo" className={logo()} />,
  },

  {
    href: "https://www.docker.com/",
    children: <Docker alt="Docker logo" className={logo()} />,
  },
  {
    href: "https://git-scm.com/",
    children: <Git alt="Git logo" className={logo()} />,
  },
  {
    href: "https://react.dev/",
    children: <React alt="React logo" className={logo()} />,
  },
  {
    href: "https://tailwindcss.com/",
    children: <Tailwind alt="Tailwind logo" className={logo()} />,
  },
  {
    href: "https://www.microsoft.com/en-gb/sql-server/sql-server-2019",
    children: (
      <SQLServer alt="SQL Server logo" className={logo({ white: true })} />
    ),
  },
  {
    href: "https://azure.microsoft.com/en-gb/",
    children: <Azure alt="Azure logo" className={logo()} />,
  },
  {
    href: "https://auth0.com/",
    children: <Auth0 alt="Auth0 logo" className={logo()} />,
  },
];
