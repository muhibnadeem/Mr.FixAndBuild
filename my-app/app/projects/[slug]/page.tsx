import { getProjectSlug, projects } from "@/app/data/projects";
import ProjectClient from "./ProjectClient";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: getProjectSlug(project),
  }));
}

export const dynamicParams = false;

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug?: string }> | { slug?: string };
}) {
  const resolved = await params;
  const slug = resolved?.slug ?? "";
  return <ProjectClient slug={slug} />;
}
