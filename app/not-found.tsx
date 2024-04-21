import { Anchor, Info } from "@jecfe/react-design-system";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center  text-slate-200">
      <Info className="size-32 fill-red-600" />
      <h1 className="flex text-7xl font-bold leading-tight md:text-8xl">
        404 Not Found
      </h1>

      <p className="mt-4 text-xl">Requested resources was moved or deleted</p>
      <Anchor href="/" className="pt-8 text-2xl">
        Escape
      </Anchor>
    </div>
  );
}
