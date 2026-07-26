import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";

const PROJECT_TAGS = ["Professional", "Research", "LLM", "CV", "ML", "Edge"] as const;

const projectSchema = z.object({
  title: z.string().min(1),
  // Also used as the meta/OG description on the case-study page.
  summary: z.string().min(1).max(160),
  role: z.string().min(1),
  dates: z.string().min(1),
  tech: z.array(z.string().min(1)).min(1),
  tags: z.array(z.enum(PROJECT_TAGS)).min(1),
  links: z
    .object({
      github: z.string().url().optional(),
      demo: z.string().url().optional(),
      paper: z.string().url().optional(),
    })
    .default({}),
  image: z.string().startsWith("/").optional(),
  highlights: z.array(z.string().min(1)).max(3).optional(),
  featured: z.boolean().default(false),
  order: z.number().int().default(999),
  draft: z.boolean().default(false),
});

export type ProjectFrontmatter = z.infer<typeof projectSchema>;
export type ProjectTag = (typeof PROJECT_TAGS)[number];
export type Project = ProjectFrontmatter & { slug: string; body: string };

const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");

function loadProject(filename: string): Project {
  const slug = filename.replace(/\.mdx$/, "");
  const raw = fs.readFileSync(path.join(PROJECTS_DIR, filename), "utf8");
  const { data, content } = matter(raw);
  const parsed = projectSchema.safeParse(data);
  if (!parsed.success) {
    // Bad frontmatter fails the build, not the visitor.
    throw new Error(
      `Invalid frontmatter in content/projects/${filename}: ${parsed.error.message}`,
    );
  }
  return { ...parsed.data, slug, body: content };
}

export function getAllProjects(): Project[] {
  if (!fs.existsSync(PROJECTS_DIR)) return [];
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map(loadProject)
    .filter((p) => !p.draft)
    .sort(
      (a, b) =>
        Number(b.featured) - Number(a.featured) ||
        a.order - b.order ||
        a.title.localeCompare(b.title),
    );
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((p) => p.slug === slug);
}
