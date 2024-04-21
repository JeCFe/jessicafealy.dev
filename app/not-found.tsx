import { Anchor, Info } from "@jecfe/react-design-system";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-slate-200">
      <Info className="size-32 fill-red-600" />
      <h1 className="flex text-center text-7xl font-bold leading-tight md:text-8xl">
        404 - Not Found
      </h1>

      <p className="mt-4 flex text-center text-xl text-slate-400">
        Requested resources was moved or deleted
      </p>
      <Anchor href="/" className="pt-8 text-2xl">
        Escape
      </Anchor>
    </div>
  );
}
