import type { ProfessionalProject } from "@/content";
import Link from "next/link";
import { ProjectBox, SectionHeading } from "..";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const ProjectSlide = ({ project }: { project: ProfessionalProject }) => {
  const content = (
    <ProjectBox
      variant="carousel"
      heading={project.title}
      body={project.carouselSummary}
      image={project.image}
      imageAlt={project.imageAlt}
      imageLayout="wide"
      link={[]}
      order={project.order}
      showImagePlaceholder
      actionLabel={project.hasWriteUp ? "Continue reading" : undefined}
    />
  );

  if (!project.hasWriteUp) return content;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
    >
      {content}
    </Link>
  );
};

export const ProfessionalProjects = ({
  projects,
  id,
}: {
  projects: ProfessionalProject[];
  id: "professional-projects";
}) => {
  return (
    <section className="mt-24 scroll-mt-24" id={id}>
      <SectionHeading eyebrow="04">Professional projects</SectionHeading>
      <Carousel opts={{ align: "start" }} aria-label="Professional projects">
        <div className="mt-6 flex justify-end gap-2">
          <CarouselPrevious className="static size-11 translate-y-0 border-slate-600 bg-slate-900 text-slate-200 hover:border-cyan-300 hover:bg-slate-800 hover:text-cyan-300" />
          <CarouselNext className="static size-11 translate-y-0 border-slate-600 bg-slate-900 text-slate-200 hover:border-cyan-300 hover:bg-slate-800 hover:text-cyan-300" />
        </div>

        <CarouselContent className="mt-4">
          {projects.map((project) => (
            <CarouselItem key={project.slug}>
              <ProjectSlide project={project} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
