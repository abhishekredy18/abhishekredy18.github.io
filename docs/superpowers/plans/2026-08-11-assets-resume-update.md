# New Assets + Resume Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Integrate the new resume PDF, two pedestrian-detection demo videos, and two presentation decks into the portfolio site, and align site copy with the new ML-engineer resume.

**Architecture:** Static-export Next.js 16 site. Binary assets go under `public/` and are copied verbatim into `out/` at build time. Case-study pages are MDX with zod-validated frontmatter (`src/lib/content.ts`); two new optional frontmatter fields (`heroVideo`, `slides`) drive a looping hero video and a "Slides" link. Site copy lives in typed data files under `src/data/`.

**Tech Stack:** Next.js 16 (static export), TypeScript, Tailwind v4, MDX via next-mdx-remote, zod v4, gray-matter.

**Spec:** `docs/superpowers/specs/2026-08-10-assets-resume-update-design.md`

## Global Constraints

- No new npm dependencies.
- The resume must stay at exactly `public/resume/Abhishek Malreddy.pdf` — the path is linked from printed résumés and the old site.
- `jobTitle` in `src/data/site.ts` stays `"Junior AI/ML Engineer"` (actual title at SPAN).
- The `image` frontmatter field keeps its current role (project card + OG image); `heroVideo` only changes the case-study page hero.
- There is no unit-test framework in this repo. The test cycle for every task is `npm run build` (zod validates all frontmatter at build time; the export fails on any invalid content) plus grep/file checks against `out/`.
- Source assets live outside the repo:
  - `/home/ak/Documents/github_abhishek/resume/AbhishekMalreddyResume.pdf`
  - `/home/ak/Documents/github_abhishek/assets/demo-1.mp4`
  - `/home/ak/Documents/github_abhishek/assets/demo-2.mp4`
  - `/home/ak/Documents/github_abhishek/assets/IDL Presentation.pdf`
  - `/home/ak/Documents/github_abhishek/assets/Abhishek's Masters Research.pdf`

---

### Task 1: Copy assets into `public/`

**Files:**
- Create: `public/videos/pedestrian-demo.mp4` (from `demo-1.mp4`)
- Create: `public/videos/pedestrian-demo-loop.mp4` (from `demo-2.mp4`)
- Create: `public/slides/pedestrian-detection-idl.pdf` (from `IDL Presentation.pdf`)
- Create: `public/slides/heo-masters-research.pdf` (from `Abhishek's Masters Research.pdf`)
- Modify: `public/resume/Abhishek Malreddy.pdf` (overwrite with `AbhishekMalreddyResume.pdf`)

**Interfaces:**
- Consumes: nothing.
- Produces: the five public paths above. Tasks 3–4 reference `/videos/pedestrian-demo.mp4`, `/videos/pedestrian-demo-loop.mp4`, `/slides/pedestrian-detection-idl.pdf`, `/slides/heo-masters-research.pdf`.

- [ ] **Step 1: Copy the files**

```bash
cd /home/ak/Documents/github_abhishek/abhishekredy18.github.io
mkdir -p public/videos public/slides
cp "/home/ak/Documents/github_abhishek/assets/demo-1.mp4"                       public/videos/pedestrian-demo.mp4
cp "/home/ak/Documents/github_abhishek/assets/demo-2.mp4"                       public/videos/pedestrian-demo-loop.mp4
cp "/home/ak/Documents/github_abhishek/assets/IDL Presentation.pdf"             public/slides/pedestrian-detection-idl.pdf
cp "/home/ak/Documents/github_abhishek/assets/Abhishek's Masters Research.pdf"  public/slides/heo-masters-research.pdf
cp "/home/ak/Documents/github_abhishek/resume/AbhishekMalreddyResume.pdf"       "public/resume/Abhishek Malreddy.pdf"
```

- [ ] **Step 2: Verify the copies**

Run:
```bash
ls -la public/videos public/slides
md5sum "/home/ak/Documents/github_abhishek/resume/AbhishekMalreddyResume.pdf" "public/resume/Abhishek Malreddy.pdf"
```
Expected: `pedestrian-demo.mp4` ≈ 4.3 MB, `pedestrian-demo-loop.mp4` ≈ 143 KB, `pedestrian-detection-idl.pdf` ≈ 2.3 MB, `heo-masters-research.pdf` ≈ 3.1 MB; the two md5 hashes are identical.

- [ ] **Step 3: Build still passes (assets are inert until referenced)**

Run: `npm run build`
Expected: exit 0; `ls out/videos out/slides` shows the four new files; `md5sum "out/resume/Abhishek Malreddy.pdf"` matches the source hash from Step 2.

- [ ] **Step 4: Commit**

```bash
git add public/videos public/slides "public/resume/Abhishek Malreddy.pdf"
git commit -m "Add demo videos, presentation decks, and updated resume PDF"
```

---

### Task 2: Frontmatter schema + Slides button

**Files:**
- Modify: `src/lib/content.ts:24` (schema: add `heroVideo`, `slides`)
- Modify: `src/components/project-meta.tsx:22-26` (Slides link)

**Interfaces:**
- Consumes: nothing new.
- Produces: `Project.heroVideo?: string` and `Project.slides?: string` (both site-relative paths starting with `/`), available to Task 3 and Task 4 via `ProjectFrontmatter`/`Project` types. `ProjectMeta` renders a "Slides" link whenever `project.slides` is set.

Note on the test cycle: zod object schemas ignore unknown frontmatter keys, so there is no failing state to demonstrate before implementing — the observable check that flips from absent to present is the grep on the built pages, which runs in Task 3 Step 5 once content uses these fields. This task's gate is `npx tsc --noEmit && npm run build` passing with the new fields defined but unused.

- [ ] **Step 1: Add the schema fields**

In `src/lib/content.ts`, extend `projectSchema` directly under the `image` line:

```ts
  image: z.string().startsWith("/").optional(),
  heroVideo: z.string().startsWith("/").optional(),
  slides: z.string().startsWith("/").optional(),
```

- [ ] **Step 2: Render the Slides link**

In `src/components/project-meta.tsx`, extend the `links` array (Paper → Slides → Website → Code order):

```ts
  const links = [
    project.links.paper && { label: "Paper", href: project.links.paper },
    project.slides && { label: "Slides", href: project.slides },
    project.links.demo && { label: "Website", href: project.links.demo },
    project.links.github && { label: "Code", href: project.links.github },
  ].filter(Boolean) as { label: string; href: string }[];
```

(The existing renderer already applies `target="_blank"` and the external-link icon to every entry; a PDF opening in a new tab is the desired behavior.)

- [ ] **Step 3: Verify build and types**

Run: `npx tsc --noEmit && npm run build`
Expected: both exit 0. No page output changes yet (no content sets the new fields).

- [ ] **Step 4: Commit**

```bash
git add src/lib/content.ts src/components/project-meta.tsx
git commit -m "Add heroVideo and slides frontmatter fields with Slides link"
```

---

### Task 3: Hero video + MDX Video component, wired into both case studies

**Files:**
- Modify: `src/components/mdx-content.tsx` (add `Video` component)
- Modify: `src/app/projects/[slug]/page.tsx:71-81` (heroVideo replaces hero image)
- Modify: `content/projects/pedestrian-detection.mdx` (frontmatter + body video)
- Modify: `content/projects/heo-chemical-ordering.mdx` (frontmatter `slides`)

**Interfaces:**
- Consumes: `Project.heroVideo` / `Project.slides` from Task 2; asset paths from Task 1.
- Produces: `<Video src="..." />` usable in any project MDX body.

- [ ] **Step 1: Add the `Video` MDX component**

In `src/components/mdx-content.tsx`, add below `ProseLink` and register it:

```tsx
function Video({ src, label }: { src: string; label?: string }) {
  return (
    <div className="not-prose my-6 overflow-hidden rounded border border-line">
      <video
        src={src}
        controls
        preload="metadata"
        className="h-auto w-full"
        aria-label={label}
      />
    </div>
  );
}

const components = {
  a: ProseLink,
  Video,
};
```

- [ ] **Step 2: Render `heroVideo` on the case-study page**

In `src/app/projects/[slug]/page.tsx`, replace the existing `{project.image ? (...) : null}` block (lines 71–81) with:

```tsx
      {project.heroVideo ? (
        <div className="mt-8 overflow-hidden rounded border border-line">
          <video
            src={project.heroVideo}
            autoPlay
            loop
            muted
            playsInline
            className="h-auto w-full"
            aria-label={`${project.title} demo loop`}
          />
        </div>
      ) : project.image ? (
        <div className="mt-8 overflow-hidden rounded border border-line">
          <Image
            src={project.image}
            alt={`${project.title} illustration`}
            width={840}
            height={840}
            className="h-auto w-full"
          />
        </div>
      ) : null}
```

- [ ] **Step 3: Wire the pedestrian-detection MDX**

First confirm the frontmatter `dates` line already reads `"Jan 2025 – Apr 2025"` (it does as of planning — this matches the resume; no edit expected).

In `content/projects/pedestrian-detection.mdx` frontmatter, add after the `image` line:

```yaml
heroVideo: "/videos/pedestrian-demo-loop.mp4"
slides: "/slides/pedestrian-detection-idl.pdf"
```

At the end of the `## Results` section (after "…entirely on the edge device."), append:

```mdx
The full demo below shows the system at a signalized intersection: live
pedestrian and vehicle detections, traffic-light state tracking, and
crossing events flagged in real time.

<Video src="/videos/pedestrian-demo.mp4" label="Pedestrian detection demo" />
```

- [ ] **Step 4: Wire the HEO MDX**

In `content/projects/heo-chemical-ordering.mdx` frontmatter, add after the `tags` line:

```yaml
slides: "/slides/heo-masters-research.pdf"
```

- [ ] **Step 5: Build and verify the output**

Run:
```bash
npm run build
grep -o "pedestrian-demo-loop.mp4\|pedestrian-demo.mp4\|slides/pedestrian-detection-idl.pdf" out/projects/pedestrian-detection/index.html | sort | uniq -c
grep -c "slides/heo-masters-research.pdf" out/projects/heo-chemical-ordering/index.html
```
Expected: build exit 0; first grep shows all three paths present; second grep ≥ 1. Also confirm the hero image markup is gone from the pedestrian page: `grep -c "images/projects/pedestrian.jpg" out/projects/pedestrian-detection/index.html` still ≥ 1 is acceptable ONLY in OG meta tags — check with `grep -o '<video[^>]*' out/projects/pedestrian-detection/index.html` that exactly two `<video` tags exist (hero loop + body demo).

- [ ] **Step 6: Commit**

```bash
git add src/components/mdx-content.tsx "src/app/projects/[slug]/page.tsx" content/projects/pedestrian-detection.mdx content/projects/heo-chemical-ordering.mdx
git commit -m "Embed pedestrian demo videos and add Slides links to case studies"
```

---

### Task 4: Align site copy with the new resume

**Files:**
- Modify: `src/data/site.ts:4-7` (headline, description)
- Modify: `src/data/skills.ts` (regroup into five resume groups)
- Modify: `src/data/experience.ts:33-40` (Vigilant bullet, org rename)
- Modify: `src/app/page.tsx:67-68` (about-text org rename)
- Modify: `content/projects/idd-aw.mdx:4` (role line org rename)

**Interfaces:**
- Consumes: nothing from earlier tasks (independent of Tasks 1–3).
- Produces: final site copy; no type or schema changes.

- [ ] **Step 1: Update `src/data/site.ts` headline and description**

Replace lines 4–7 with:

```ts
  headline:
    "Machine learning engineer building production ML pipelines, computer-vision systems, and LLM applications — from published research to deployed platforms.",
  description:
    "Portfolio of Abhishek Reddy Malreddy, Junior AI/ML Engineer at SPAN Enterprises and Carnegie Mellon AI Engineering graduate. Production ML pipelines, computer vision, and LLM applications.",
```

- [ ] **Step 2: Regroup `src/data/skills.ts`**

Replace the entire `skillGroups` array with:

```ts
export const skillGroups: SkillGroup[] = [
  {
    label: "ML & Computer Vision",
    skills: [
      "PyTorch",
      "Transformers",
      "Scikit-learn",
      "Computer Vision",
      "Semantic Segmentation",
      "Object Tracking",
      "Graph Neural Networks",
      "Reinforcement Learning",
      "Hugging Face",
    ],
  },
  {
    label: "ML Engineering",
    skills: [
      "Model Training",
      "Model Evaluation",
      "Fine-Tuning",
      "Feature Engineering",
      "Hyperparameter Optimization",
      "ML Pipelines",
      "Model Deployment",
    ],
  },
  {
    label: "Languages",
    skills: ["Python", "SQL", "C/C++", "TypeScript", "JavaScript"],
  },
  {
    label: "Backend & Infrastructure",
    skills: [
      "FastAPI",
      "Docker",
      "AWS",
      "GCP",
      "PostgreSQL",
      "pgvector",
      "Git",
      "Linux",
    ],
  },
  {
    label: "Generative AI",
    skills: ["LangChain", "LangGraph", "RAG", "MCP", "Whisper", "LLM Integration"],
  },
];
```

- [ ] **Step 3: Update `src/data/experience.ts`**

Replace the third Vigilant bullet (line 35, "Automated embedding generation…") with:

```ts
      "Implemented CI/CD workflows for the containerized ML service, including automated testing, Docker builds, deployment validation, and production monitoring.",
```

Replace the research org name (line 40):

```ts
    org: "Machine Learning & Computer Vision Research (IIIT-H Affiliated)",
```

- [ ] **Step 4: Rename the org in the about text**

In `src/app/page.tsx` (lines 66–68), replace:

```
                robust semantic segmentation for autonomous driving at Mobility
                Research (IIIT Hyderabad) was published at WACV 2024.
```

with:

```
                robust semantic segmentation for autonomous driving with the
                Machine Learning & Computer Vision Research group (IIIT
                Hyderabad) was published at WACV 2024.
```

- [ ] **Step 5: Rename the org in the IDD-AW role line**

In `content/projects/idd-aw.mdx` line 4:

```yaml
role: "Research Assistant, Machine Learning & Computer Vision Research (IIIT-H Affiliated) — Advisor: Dr. Girish Varma"
```

- [ ] **Step 6: Build and verify**

Run:
```bash
npx tsc --noEmit && npm run build
grep -rc "Mobility Research" out/ src/ content/ | grep -v ":0" || echo "no Mobility Research references remain"
grep -c "Machine learning engineer building production ML pipelines" out/index.html
```
Expected: tsc and build exit 0; no remaining "Mobility Research" references; homepage grep ≥ 1.

- [ ] **Step 7: Commit**

```bash
git add src/data/site.ts src/data/skills.ts src/data/experience.ts src/app/page.tsx content/projects/idd-aw.mdx
git commit -m "Align site copy with ML-engineer resume positioning"
```

---

### Task 5: Final verification pass

**Files:** none (read-only checks)

**Interfaces:**
- Consumes: everything above.
- Produces: evidence the spec's Verification section is satisfied.

- [ ] **Step 1: Clean build from scratch**

Run: `rm -rf out .next && npm run build`
Expected: exit 0.

- [ ] **Step 2: Run the spec's verification checklist**

```bash
ls out/videos/pedestrian-demo.mp4 out/videos/pedestrian-demo-loop.mp4 out/slides/pedestrian-detection-idl.pdf out/slides/heo-masters-research.pdf
md5sum "/home/ak/Documents/github_abhishek/resume/AbhishekMalreddyResume.pdf" "out/resume/Abhishek Malreddy.pdf"
grep -o '<video[^>]*' out/projects/pedestrian-detection/index.html
grep -c "slides/heo-masters-research.pdf" out/projects/heo-chemical-ordering/index.html
grep -c "resume/Abhishek Malreddy.pdf" out/index.html
```
Expected: all four asset files listed; resume hashes identical; exactly two `<video` tags (one with `autoplay loop muted`, one with `controls`); both greps ≥ 1.

- [ ] **Step 3: Lint**

Run: `npm run lint`
Expected: exit 0 (no new warnings from touched files).

- [ ] **Step 4: Report**

No commit. Report the verification evidence and hand back for the user's decision on pushing to GitHub Pages (deploy happens via the Pages workflow on push).
