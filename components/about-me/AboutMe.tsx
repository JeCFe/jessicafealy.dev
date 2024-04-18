import { cva } from "class-variance-authority";
import Link from "next/link";

const link = cva(
  "font-bold text-white hover:underline hover:underline-offset-4",
);

export function AboutMe() {
  return (
    <div id="#about">
      <h2 className="w-full text-xl font-bold tracking-tight text-slate-200 underline decoration-1 underline-offset-8 md:text-3xl">
        About me
      </h2>
      <p className="mt-4 text-lg leading-normal text-slate-400">
        Graduated in 2022 with a First Class Honours degree in Computer Science
        from the{" "}
        <Link href={"https://www.southwales.ac.uk/"} className={link()}>
          University of South Wales
        </Link>
        . Throughout my studies, I delved into a variety of subjects, including
        artificial intelligence, algorithms, and secure programming. My final
        year dissertation focused on researching, designing and implementing a
        secure chat server which expanded my knowledge of cryptography, secure
        programming techniques, and cyber security. Completion of the
        dissertation resulted in a dissertation{" "}
        <Link
          href="https://github.com/JeCFe/Final-Year-Project/blob/main/SUBMISSION/18024092_Dissertation_Report.pdf"
          className={link()}
          target="_blank"
        >
          paper
        </Link>
        ,{" "}
        <Link
          href="https://github.com/JeCFe/Final-Year-Project/blob/main/SUBMISSION/18024092_Submission_Poster.pdf"
          target="_blank"
          className={link()}
        >
          poster
        </Link>
        , and the final{" "}
        <Link
          href="https://github.com/JeCFe/Final-Year-Project/tree/main/SUBMISSION"
          className={link()}
          target="_blank"
        >
          solution
        </Link>{" "}
        written in C#.
      </p>
      <p className="mt-4 text-lg leading-normal text-slate-400">
        Currently, {`I'm`} working at{" "}
        <Link href="https://www.bjss.com/" className={link()} target="_blank">
          BJSS
        </Link>{" "}
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
