import { Anchor } from "@jecfe/react-design-system";
import { cva } from "class-variance-authority";
import Link from "next/link";

const link = cva("font-bold z-100");

export function AboutMe() {
  return (
    <div id="#about">
      <h2 className="w-full text-2xl font-bold tracking-tight text-slate-200 underline decoration-1 underline-offset-8 md:text-3xl">
        About me
      </h2>
      <p className="mt-4 text-lg leading-normal text-slate-400">
        Graduated in 2022 with a First Class Honours degree in Computer Science
        from the{" "}
        <Anchor
          href="https://www.southwales.ac.uk/"
          target="_blank"
          className={link()}
        >
          University of South Wales
        </Anchor>
        . Throughout my studies, I delved into a variety of subjects, including
        artificial intelligence, algorithms, and secure programming. My final
        year dissertation focused on researching, designing and implementing a
        secure chat server which expanded my knowledge of cryptography, secure
        programming techniques, and cyber security. Completion of the
        dissertation resulted in a dissertation{" "}
        <Anchor
          href="https://github.com/JeCFe/Final-Year-Project/blob/main/SUBMISSION/18024092_Dissertation_Report.pdf"
          className={link()}
          target="_blank"
        >
          paper
        </Anchor>
        ,{" "}
        <Anchor
          href="https://github.com/JeCFe/Final-Year-Project/blob/main/SUBMISSION/18024092_Submission_Poster.pdf"
          target="_blank"
          className={link()}
        >
          poster
        </Anchor>
        , and the final{" "}
        <Anchor
          href="https://github.com/JeCFe/Final-Year-Project/tree/main/SUBMISSION"
          className={link()}
          target="_blank"
        >
          solution
        </Anchor>{" "}
        written in C#.
      </p>
      <p className="mt-4 text-lg leading-normal text-slate-400">
        Currently, {`I'm`} working at{" "}
        <Anchor href="https://www.bjss.com/" className={link()} target="_blank">
          BJSS
        </Anchor>{" "}
        as a Software Engineer. In this role, I leverage my programming skills
        and problem-solving abilities to design and develop solutions and
        systems that fulfil client requirements through technical excellence
        using best programming practices with test-driven development.
      </p>
      <p className="mt-4 text-lg leading-normal text-slate-400">
        During my downtime, I’m usually reading a romance or fantasy book,
        watching science fiction TV, or playing games with friends.
      </p>
    </div>
  );
}
