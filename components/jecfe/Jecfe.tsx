import { TypeAnimation } from "react-type-animation";

export function Jecfe() {
  return (
    <div className="font-cookie absolute right-8 top-8 text-5xl text-pink-500 glow:text-pink-500">
      <TypeAnimation
        sequence={["JeCFe", 10000, "", 2000]}
        cursor={true}
        repeat={Infinity}
        speed={1}
      />
    </div>
  );
}
