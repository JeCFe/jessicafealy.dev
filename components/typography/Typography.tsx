import type { HTMLAttributes } from "react";

const body = "text-base leading-8 text-slate-300";
const small = "text-sm leading-6 text-slate-400";
const strong = "font-semibold text-slate-100";

const styles = {
  h1: "text-4xl font-semibold tracking-tight text-slate-100 sm:text-6xl",
  h2: "text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl",
  h3: "text-xl font-semibold tracking-tight text-slate-100 sm:text-2xl",
  h4: "text-lg font-semibold text-slate-100",
  h5: "text-base font-semibold text-slate-100",
  h6: "text-sm font-semibold text-slate-100",
  p: body,
  span: body,
  small,
  ul: body,
  ol: body,
  blockquote: `${body} border-l-2 border-cyan-300/70 pl-5 italic`,
  figcaption: small,
  strong,
  em: "italic",
  del: "line-through",
  table: body,
  th: strong,
  pre: "text-sm leading-6 text-slate-200",
  code: "text-[0.9em] text-cyan-100",
};

type TypographyProps = HTMLAttributes<HTMLElement> & {
  as?: keyof typeof styles;
};

export const Typography = ({
  as: Tag = "p",
  className = "",
  ...props
}: TypographyProps) => {
  const font = Tag === "pre" || Tag === "code" ? "font-mono" : "font-poppins";

  return <Tag className={`${font} ${styles[Tag]} ${className}`} {...props} />;
};
