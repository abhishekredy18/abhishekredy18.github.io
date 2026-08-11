# New Assets + Resume Update — Design

Date: 2026-08-10
Status: Approved (pending spec review)

## Goal

Integrate newly provided assets into the portfolio site and align site copy
with the updated, ML-engineer-positioned resume.

Source assets (outside the repo):

- `/home/ak/Documents/github_abhishek/resume/AbhishekMalreddyResume.pdf` — new resume
- `/home/ak/Documents/github_abhishek/assets/demo-1.mp4` — pedestrian-detection full demo, 848×288, ~2.5 min, 4.3 MB
- `/home/ak/Documents/github_abhishek/assets/demo-2.mp4` — pedestrian-detection short clip, 848×288, ~6 s, 142 KB
- `/home/ak/Documents/github_abhishek/assets/IDL Presentation.pdf` — 18-786 pedestrian-detection slides, 2.3 MB
- `/home/ak/Documents/github_abhishek/assets/Abhishek's Masters Research.pdf` — HEO chemical-ordering slides, 3.1 MB

## 1. Asset placement

Copy into the repo:

| Source | Destination |
|---|---|
| `AbhishekMalreddyResume.pdf` | `public/resume/Abhishek Malreddy.pdf` (overwrite) |
| `demo-1.mp4` | `public/videos/pedestrian-demo.mp4` |
| `demo-2.mp4` | `public/videos/pedestrian-demo-loop.mp4` |
| `IDL Presentation.pdf` | `public/slides/pedestrian-detection-idl.pdf` |
| `Abhishek's Masters Research.pdf` | `public/slides/heo-masters-research.pdf` |

The resume path is unchanged because it is load-bearing: it is linked from
printed résumés and the old site (documented in `src/data/site.ts`).

## 2. Video embedding (pedestrian-detection case study)

- New optional frontmatter field `heroVideo` (site-relative path, zod:
  `z.string().startsWith("/").optional()`).
- Case-study page (`src/app/projects/[slug]/page.tsx`): when `heroVideo` is
  set, render a `<video autoPlay loop muted playsInline>` in place of the
  static hero image, inside the same rounded-border wrapper. The `image`
  field is unchanged and still used for the project card and OG metadata.
- New `Video` component registered in `src/components/mdx-content.tsx`
  (alongside the existing `a` override): renders
  `<video controls preload="metadata">` in a rounded-border wrapper for use
  inside MDX bodies.
- `content/projects/pedestrian-detection.mdx`:
  - `heroVideo: "/videos/pedestrian-demo-loop.mp4"`
  - `<Video src="/videos/pedestrian-demo.mp4" />` embedded in the body under
    the section that describes results/outcomes; if no such section exists,
    append a short "Demo" section at the end holding the video.

## 3. Slides buttons

- New optional frontmatter field `slides` (site-relative path, zod:
  `z.string().startsWith("/").optional()`). Kept separate from `links.*`
  because those require absolute URLs.
- `src/components/project-meta.tsx`: render a "Slides" button (same style as
  Paper/Website/Code) when `slides` is set.
- `content/projects/pedestrian-detection.mdx`:
  `slides: "/slides/pedestrian-detection-idl.pdf"`
- `content/projects/heo-chemical-ordering.mdx`:
  `slides: "/slides/heo-masters-research.pdf"`

## 4. Site copy aligned with the new resume

- `src/data/site.ts`:
  - `headline` and `description` shift to ML Engineer positioning: building
    and deploying production ML pipelines, computer-vision systems, and LLM
    applications.
  - `jobTitle` stays "Junior AI/ML Engineer" (actual title at SPAN).
- `src/data/skills.ts`: regroup into the resume's five groups:
  1. ML & Computer Vision — PyTorch, Transformers, Scikit-learn, Computer
     Vision, Semantic Segmentation, Object Tracking, Graph Neural Networks,
     Reinforcement Learning, Hugging Face
  2. ML Engineering — Model Training, Model Evaluation, Fine-Tuning, Feature
     Engineering, Hyperparameter Optimization, ML Pipelines, Model Deployment
  3. Languages — Python, SQL, C/C++, TypeScript, JavaScript
  4. Backend & Infrastructure — FastAPI, Docker, AWS, GCP, PostgreSQL,
     pgvector, Git, Linux
  5. Generative AI — LangChain, LangGraph, RAG, MCP, Whisper, LLM Integration
- `src/data/experience.ts`:
  - Rename org "Mobility Research (IIIT-H Affiliated)" →
    "Machine Learning & Computer Vision Research (IIIT-H Affiliated)".
  - Vigilant: add the resume's new CI/CD bullet (automated testing, Docker
    builds, deployment validation, production monitoring), replacing the
    third bullet's weaker containerization phrasing.
  - SPAN bullets keep the site's richer prose; the resume only compressed
    wording there. The site is the long-form version.
- Same org rename in `src/app/page.tsx` (about text) and
  `content/projects/idd-aw.mdx` (`role` line).
- `content/projects/pedestrian-detection.mdx`: confirm dates read
  "Jan 2025 – Apr 2025" per the resume.

## Error handling

- Frontmatter is zod-validated at build time; invalid `heroVideo`/`slides`
  paths fail the build, not the visitor (existing pattern).
- Videos: `muted`+`playsInline` are required for mobile autoplay; the body
  video uses `preload="metadata"` so the 4.3 MB file is not fetched until
  played.

## Verification

1. `npm run build` — static export succeeds, zod frontmatter validation
   passes.
2. Built output contains the five new/updated files under `out/`.
3. Spot-check `out/projects/pedestrian-detection/index.html` (hero video +
   body video + Slides button) and `out/projects/heo-chemical-ordering/index.html`
   (Slides button).
4. Resume link on the homepage still points at
   `/resume/Abhishek Malreddy.pdf` and the served file is the new PDF.

## Out of scope

- No redesign of cards or other pages; `image` remains the card/OG asset.
- No compression/re-encoding of the videos (already small).
- No changes to publications, education, or other case studies.
