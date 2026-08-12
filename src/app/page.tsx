import { FileDown } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { ContactRows } from "@/components/contact-rows";
import { EducationItem } from "@/components/education-item";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { ProjectEntryList } from "@/components/project-entry";
import { PublicationCard } from "@/components/publication-card";
import { Section } from "@/components/section";
import { SkillGroup } from "@/components/skill-group";
import { TimelineItem } from "@/components/timeline-item";
import { TopBar } from "@/components/top-bar";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { publications } from "@/data/publications";
import { site } from "@/data/site";
import { skillGroups } from "@/data/skills";
import { getAllProjects } from "@/lib/content";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  email: `mailto:${site.email}`,
  url: site.url,
  image: `${site.url}/images/dp-hero.jpg`,
  jobTitle: site.jobTitle,
  worksFor: { "@type": "Organization", name: "SPAN Enterprises LLC" },
  alumniOf: [
    "Carnegie Mellon University",
    "National Institute of Technology Calicut",
  ],
  sameAs: [site.github, site.linkedin, site.scholar],
};

/* Anchored sections need clearance for the sticky top bar. */
const SECTION_SCROLL = "mt-20 scroll-mt-20";

export default function Home() {
  const projects = getAllProjects();
  const bySlug = new Map(projects.map((p) => [p.slug, p]));

  return (
    <>
      <TopBar />
      <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Hero />

        <main>
          <Section id="about" label="About" className={SECTION_SCROLL}>
            <div className="space-y-4 text-[15.5px] leading-relaxed">
              <p>
                I am a Junior AI/ML Engineer at SPAN Enterprises, where I build
                production AI systems: a call analytics platform powered by
                Whisper and a self-hosted LLM, and LangChain/LangGraph chatbots
                with agentic tool calling and MCP integrations behind live tax
                products.
              </p>
              <p>
                I completed my MS in Artificial Intelligence Engineering at
                Carnegie Mellon University in December 2025, with a focus on
                Materials Science and Engineering. Before that, my research on
                robust semantic segmentation for autonomous driving with the
                Machine Learning & Computer Vision Research group (IIIT
                Hyderabad) was published at WACV 2024.
              </p>
              <p>
                I care about ML that survives production: pipelines that run
                in-house under real constraints, assistants that cite their
                sources, and models evaluated for safety — not just accuracy.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-2 border-y border-line py-3.5 font-mono text-xs text-muted">
              <span>
                <span className="text-accent">WACV 2024</span> publication
              </span>
              <span>MS AI Engineering · CMU · GPA 3.82</span>
              <span>9,000+ calls/month analytics platform</span>
            </div>
          </Section>

          <Section id="skills" label="Skills" className={SECTION_SCROLL}>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <SkillGroup key={group.label} group={group} />
              ))}
            </div>
          </Section>

          <Section id="projects" label="Projects" className={SECTION_SCROLL}>
            <ProjectEntryList projects={projects} />
          </Section>

          <Section
            id="experience"
            label="Experience"
            className={SECTION_SCROLL}
          >
            <ol>
              {experience.map((entry) => (
                <TimelineItem
                  key={`${entry.title}-${entry.org}`}
                  entry={entry}
                  projects={(entry.projects ?? [])
                    .map((slug) => bySlug.get(slug))
                    .filter((p): p is NonNullable<typeof p> => Boolean(p))
                    .map((p) => ({ slug: p.slug, title: p.title }))}
                />
              ))}
            </ol>
            <h3 className="mb-5 mt-12 text-lg font-semibold tracking-tight">
              Publications
            </h3>
            <div className="space-y-5">
              {publications.map((pub) => (
                <PublicationCard key={pub.arxivId} pub={pub} />
              ))}
            </div>
          </Section>

          <Section id="education" label="Education" className={SECTION_SCROLL}>
            <div className="space-y-6">
              {education.map((edu) => (
                <EducationItem key={edu.degree} edu={edu} />
              ))}
            </div>
          </Section>

          <Section id="contact" label="Contact" className={SECTION_SCROLL}>
            <p className="max-w-lg text-[15.5px] leading-relaxed text-muted">
              The fastest way to reach me is by email.
            </p>
            <div className="mt-4">
              <ContactRows />
            </div>
            <div className="mt-8">
              <ButtonLink href={site.resume} download>
                <FileDown className="size-4" aria-hidden /> Download résumé
              </ButtonLink>
            </div>
          </Section>
        </main>

        <Footer />
      </div>
    </>
  );
}
