export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages & Frameworks",
    skills: [
      "Python",
      "TypeScript",
      "JavaScript",
      "SQL",
      "C/C++",
      "FastAPI",
      "React",
      "Next.js",
      "Node.js",
    ],
  },
  {
    label: "AI & ML",
    skills: [
      "LLM Integration",
      "RAG",
      "AI Agents (LangChain, LangGraph, MCP)",
      "PyTorch",
      "Transformers",
      "Whisper",
      "Fine-Tuning",
      "Computer Vision",
      "Reinforcement Learning",
      "Graph Neural Networks",
    ],
  },
  {
    label: "Databases & Infrastructure",
    skills: [
      "PostgreSQL (pgvector, PostGIS)",
      "MongoDB",
      "Supabase",
      "Docker",
      "AWS",
      "GCP",
      "RunPod",
      "Git",
      "Linux",
    ],
  },
];
