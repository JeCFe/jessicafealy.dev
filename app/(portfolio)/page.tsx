import {
  ContentCard,
  ContentCarousel,
  ExperienceBox,
  MarkdownContent,
  PillList,
  Proficiencies,
  ProjectLinks,
  Section,
  Typography,
} from "@/components";
import { getCarouselProjects } from "@/content";
import {
  aboutData,
  experienceData,
  professionalProjectsData,
  proficiencyData,
  projectData,
} from "@/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Home = () => {
  const professionalProjects = getCarouselProjects();

  return (
    <div className="flex min-w-0 flex-col pt-20 lg:py-24">
      <Section
        id="about"
        heading={aboutData.heading}
        eyebrow="01"
        className="mt-0"
      >
        <MarkdownContent content={aboutData.body} />
      </Section>
      <Section
        id="proficiencies"
        heading={proficiencyData.heading}
        eyebrow="02"
      >
        <Proficiencies />
      </Section>
      <Section id="experience" heading={experienceData.heading} eyebrow="03">
        <div className="space-y-12">
          {experienceData.items
            .filter(({ published, volunteer }) => published && !volunteer)
            .map((experience, index) => (
              <ExperienceBox
                {...experience}
                collapseCurrentRole={index > 0}
                labels={experienceData.labels}
                key={`${experience.employer.name}-${index}`}
              />
            ))}
        </div>
        {experienceData.items.some(
          ({ published, volunteer }) => published && volunteer,
        ) && (
          <div className="mt-16 border-t border-slate-800 pt-8">
            <Typography as="h3" className="!text-xl text-slate-100">
              {experienceData.labels.volunteeringHeading}
            </Typography>
            <div className="mt-6 space-y-8">
              {experienceData.items
                .filter(({ published, volunteer }) => published && volunteer)
                .map((experience, index) => (
                  <ExperienceBox
                    {...experience}
                    compact
                    labels={experienceData.labels}
                    key={`${experience.employer.name}-volunteer-${index}`}
                  />
                ))}
            </div>
          </div>
        )}
      </Section>
      <Section
        id="professional-projects"
        heading={professionalProjectsData.heading}
        eyebrow="04"
      >
        <ContentCarousel {...professionalProjectsData.carousel}>
          {professionalProjects.map((project) => {
            const card = (
              <ContentCard
                heading={project.title}
                image={project.image}
                imageAlt={project.imageAlt}
                imageLayout="wide"
                interactive
                footer={
                  project.hasWriteUp ? (
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
                      {professionalProjectsData.readMoreLabel}
                      <ArrowRight
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  ) : undefined
                }
              >
                <MarkdownContent content={project.carouselSummary} />
              </ContentCard>
            );

            return project.hasWriteUp ? (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              >
                {card}
              </Link>
            ) : (
              <div key={project.slug}>{card}</div>
            );
          })}
        </ContentCarousel>
      </Section>
      <Section
        id="projects"
        heading={projectData.heading}
        eyebrow="05"
        className="pb-24"
      >
        <div className="space-y-8">
          {[...projectData.items]
            .sort((a, b) => b.order - a.order)
            .map((project, index) => (
              <ContentCard
                key={`${project.heading}-${index}`}
                heading={project.heading}
                image={project.image}
                imageAlt={project.imageAlt}
                imageLayout={project.imageLayout === "wide" ? "wide" : "side"}
                actions={<ProjectLinks links={project.link} />}
                footer={<PillList items={project.pills} />}
              >
                <MarkdownContent content={project.body} />
              </ContentCard>
            ))}
        </div>
      </Section>
    </div>
  );
};

export default Home;
