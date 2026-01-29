"use client";

import { useProjectData } from "@/hooks/useProjectData";
import { Project } from "@/types";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const { data, loading, error } = useProjectData<Project[]>(
    "projects",
    "projects"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetch the projects</p>;

  if (!data) return null;
  const projects = data;

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-bold mb-10">Projects</h1>

      <div className="flex flex-col w-240 gap-10">
        {projects.map((p, i) => (
          <div key={i} className="project_container">
            <span className="m-4 p-4">
              <a
                href={p.url}
                target="_blank"
                className="text-xl font-semibold hover:underline p-4"
              >
                {p.name}
              </a>
            </span>
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
    </div>
  );
}
