import { projectData } from "@/data";
import { Anchor, Pill, Timeline } from "@jecfe/react-design-system";
import { TimelineItem } from "@jecfe/react-design-system/dist/cjs/components/timeline";

export function Projects() {
  const renderableContent: TimelineItem[] = projectData.map(
    (project): TimelineItem => ({
      children: (
        <div>
          <div className="space-x-3 pb-2">
            {project.pills.map((pill, index) => (
              <Pill
                size="medium"
                type="info"
                key={`${project.subheading}-${pill}-${index}`}
              >
                {pill}
              </Pill>
            ))}
          </div>

          <h3 className="text-xl font-bold">{project.heading}</h3>
          <h4 className="text-lg">{project.subheading}</h4>
          <div className="space-y-4">
            <p>{project.body}</p>
            {project.hrefs.map((href, index) => (
              <Anchor
                key={`${project.subheading}-${href.name}-${index}`}
                href={href.href}
                target="_blank"
              >
                {href.name}
              </Anchor>
            ))}
          </div>
        </div>
      ),
    }),
  );
  return <Timeline lineColour="black" items={renderableContent} />;
}
