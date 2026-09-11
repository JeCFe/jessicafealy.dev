import type { ProfessionalProject } from "@/content";
import Link from "next/link";
import { ProjectBox } from "..";
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
  if (projects.length === 0) return null;

  return (
    <section className="mt-24 scroll-mt-24" id={id}>
      <Carousel opts={{ align: "start" }} aria-label="Professional projects">
        <div className="mb-8 flex items-center justify-between gap-6">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-100 md:text-4xl">
            Professional Projects
          </h2>
          {projects.length > 1 ? (
            <div className="flex shrink-0 gap-2">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          ) : null}
        </div>
        <CarouselContent>
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
