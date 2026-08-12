export type SkillGroup = {
  label: string;
  skills: string[];
};

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
