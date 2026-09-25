import aboutData from "./about.json";
import experienceData from "./experience.json";
import professionalProjectsData from "./professional-projects.json";
import proficiencyData from "./proficiencies.json";
import projectData from "./projects.json";
import siteData from "./site.json";

const navData = [
  { text: aboutData.heading, id: "about" },
  { text: proficiencyData.heading, id: "proficiencies" },
  { text: experienceData.heading, id: "experience" },
  {
    text: professionalProjectsData.navigationLabel,
    id: "professional-projects",
  },
  { text: projectData.heading, id: "projects" },
] as const;

export type SectionId = (typeof navData)[number]["id"];

export {
  aboutData,
  experienceData,
  navData,
  professionalProjectsData,
  proficiencyData,
  projectData,
  siteData,
};
