import aboutData from "./about.json";
import experienceData from "./experience.json";
import proficiencyData from "./proficiencies.json";
import projectData from "./projects.json";
import siteData from "./site.json";

const navData = [
  { text: aboutData.heading, id: "about" },
  { text: proficiencyData.heading, id: "proficiencies" },
  { text: experienceData.heading, id: "experience" },
  { text: projectData.heading, id: "projects" },
];

export {
  aboutData,
  experienceData,
  navData,
  proficiencyData,
  projectData,
  siteData,
};
