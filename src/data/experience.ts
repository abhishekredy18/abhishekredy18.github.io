export type Experience = {
  title: string;
  org: string;
  location?: string;
  dates: string;
  advisor?: string;
  bullets: string[];
  /** Slugs of related case studies in content/projects/. */
  projects?: string[];
};

export const experience: Experience[] = [
  {
    title: "Junior AI/ML Engineer",
    org: "SPAN Enterprises LLC",
    location: "Fort Mill, SC, USA",
    dates: "Dec 2025 – Present",
    bullets: [
      "Shipped a call analytics platform for a 50-person customer support team handling 9,000+ calls per month, turning recordings into searchable transcripts, summaries, and per-representative performance metrics.",
      "Designed the underlying ML pipeline with Whisper transcription, speaker diarization, and a self-hosted Qwen 8B LLM to score sentiment, classify topics, and flag risky calls — plus a grounded chat assistant that cites the source calls behind each answer.",
      "Deployed the platform with Docker on the company's internal network so call data stays in-house.",
      "Created a central CMS in Python and React powering product content and chatbot knowledge for the live TaxBandits.com and Tax990.com applications, with role-based access control and CMS operations exposed as MCP tools.",
      "Developed a customer-facing chatbot and feedback loop on LangChain and LangGraph with agentic tool calling wired to TaxBandits developer APIs, and fine-tuned models on RunPod to extract structured data from uploaded tax form images.",
    ],
    projects: ["call-analytics", "tax-cms"],
  },
  {
    title: "Artificial Intelligence Engineering Intern",
    org: "Vigilant Inc.",
    location: "Remote, USA",
    dates: "Jun 2025 – Aug 2025",
    bullets: [
      "Designed and deployed a FastAPI microservice powering GENIE ML Deduplicator, the core pipeline ensuring Go Vigilant app users receive unique alerts in real time from 10,000+ global news and intelligence sources.",
      "Engineered a multistage deduplication pipeline combining static filtering, transformer embeddings, DBSCAN clustering, and semantic similarity with PostgreSQL, pgvector, and PostGIS to detect redundant event coverage and match alerts by location.",
      "Implemented CI/CD workflows for the containerized ML service, including automated testing, Docker builds, deployment validation, and production monitoring.",
    ],
  },
  {
    title: "Research Assistant",
    org: "Machine Learning & Computer Vision Research (IIIT-H Affiliated)",
    location: "Hyderabad, India",
    dates: "May 2023 – Jun 2024",
    advisor: "Dr. Girish Varma",
    bullets: [
      "Developed the large-scale IDD-AW dataset (5000 RGB-NIR image pairs) for semantic understanding of Indian driving scenes under adverse weather (rain, fog, snow, low light).",
      "Introduced the Safe mIoU metric to strengthen safety evaluation of segmentation models by penalizing critical misclassifications overlooked by traditional mIoU.",
      "Built SB3-based reinforcement learning models in SUMO to optimize lane selection and vehicle-to-vehicle communication, reducing emergency vehicle traversal times.",
    ],
    projects: ["idd-aw"],
  },
];
