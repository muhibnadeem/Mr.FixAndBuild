"use client";

import Link from "next/link";
import { useTheme } from "@/app/context/ThemeContext";
import { getProjectSlug, projects } from "@/app/data/projects";

interface Props {
  slug: string;
}

export default function ProjectClient({ slug }: Props) {
  const { darkMode } = useTheme();

  const normalizedSlug = slug?.toLowerCase() ?? "";
  const project = projects.find((p) => getProjectSlug(p) === normalizedSlug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Project not found
      </div>
    );
  }

  const otherProjects = projects.filter((p) => getProjectSlug(p) !== normalizedSlug);

  return (
    <div
      className={`min-h-screen px-6 pt-24 pb-12 transition-colors duration-300 ${
        darkMode ? "bg-[#121212] text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <h1 className="text-4xl md:text-5xl font-extrabold mb-10">
        {project.title}
      </h1>

      <div className="w-full max-w-4xl mx-auto mb-12">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      <div
        className={`max-w-3xl mx-auto mb-16 space-y-4 text-lg leading-relaxed ${
          darkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {project.detailed ?? project.desc}
      </div>

      {otherProjects.length > 0 && (
        <section className="max-w-7xl mx-auto">
          <h2
            className={`text-3xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            More Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherProjects.map((p, i) => (
              <Link
                key={i}
                href={`/projects/${getProjectSlug(p)}`}
                className="group relative overflow-hidden rounded-sm shadow-xl"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-64 object-cover"
                />
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
