import { JcfeLogo } from "@/assets";
import {
  AboutMe,
  Experience,
  Introduction,
  Jecfe,
  ProfessionalProjects,
  Proficiencies,
  Project,
} from "@/components";
import { getCarouselProjects } from "@/content";
import { siteData } from "@/data";

const Home = () => {
  const professionalProjects = getCarouselProjects();
  const hasProfessionalProjects = professionalProjects.length > 0;

  return (
    <div id="absolute" className="relative overflow-clip">
      <Jecfe />
      <main className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid gap-20 lg:grid-cols-[minmax(280px,0.72fr)_minmax(0,1.28fr)] lg:gap-24">
          <Introduction hasProfessionalProjects={hasProfessionalProjects} />
          <div className="flex min-w-0 flex-col pt-20 lg:py-24">
            <AboutMe id="about" />
            <Proficiencies id="proficiencies" />
            <Experience id="experience" />
            <ProfessionalProjects
              id="professional-projects"
              projects={professionalProjects}
            />
            <Project
              id="projects"
              eyebrow={hasProfessionalProjects ? "05" : "04"}
            />
          </div>
        </div>

        <div className="pointer-events-none flex w-full items-center justify-center pb-12 lg:hidden">
          <JcfeLogo
            aria-hidden="true"
            width={48}
            height={48}
            className="h-12 w-12"
            style={{ height: 48, width: 48 }}
          />
        </div>

        <footer className="border-t border-slate-800/80 py-8 text-center font-mono text-xs tracking-[0.14em] text-slate-500">
          &copy; {new Date().getFullYear()} {siteData.footer.copyrightName}
        </footer>
      </main>
    </div>
  );
};

export default Home;
