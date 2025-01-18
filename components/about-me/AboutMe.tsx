import { Anchor } from "@jecfe/react-design-system";
import { cva } from "class-variance-authority";
import { PageId } from "..";

const link = cva("font-bold z-100");

export function AboutMe({ id }: { id: PageId }) {
  return (
    <div id={id}>
      <h2 className="w-full text-2xl font-bold tracking-tight text-slate-200 underline decoration-1 underline-offset-8 md:text-3xl">
        About me
      </h2>
      <p className="mt-4 text-lg leading-normal text-slate-400">
        I am a Full Stack Software Engineer based in Cardiff, Wales with a
        passion for building secure, scalable, and accessible applications.
        Committed to fostering a collaborative and inclusive environment,
        providing mentorship support for fellow engineers.
      </p>
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
        year dissertation focused on researching, designing, and implementing a
        secure chat server which expanded my knowledge of cryptography, secure
        programming techniques, and cyber security. My dissertation culminated
        in a{" "}
        <Anchor
          href="https://github.com/JeCFe/Final-Year-Project/blob/main/SUBMISSION/18024092_Dissertation_Report.pdf"
          className={link()}
          target="_blank"
        >
          research paper
        </Anchor>
        , a{" "}
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
        and problem-solving abilities to design, develop, and deliver solutions
        and systems. Doing so through technical excellence, best practices, and
        test-driven development to meet client needs and to exceed expectations.
      </p>
    </div>
  );
}
