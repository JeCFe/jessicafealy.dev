import {
  AboutMe,
  Experience,
  ProfessionalProjects,
  Proficiencies,
  Project,
} from "@/components";
import { getCarouselProjects } from "@/content";

const Home = () => {
  const professionalProjects = getCarouselProjects();

  return (
    <div className="flex min-w-0 flex-col pt-20 lg:py-24">
      <AboutMe id="about" />
      <Proficiencies id="proficiencies" />
      <Experience id="experience" />
      <ProfessionalProjects
        id="professional-projects"
        projects={professionalProjects}
      />
      <Project id="projects" />
    </div>
  );
};

export default Home;
