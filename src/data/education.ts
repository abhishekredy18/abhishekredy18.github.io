export type Education = {
  degree: string;
  school: string;
  location: string;
  date: string;
  gpa?: string;
  coursework?: string[];
};

export const education: Education[] = [
  {
    degree:
      "MS in Artificial Intelligence Engineering — Materials Science and Engineering",
    school: "Carnegie Mellon University",
    location: "Pittsburgh, PA",
    date: "Dec 2025",
    gpa: "3.82/4.0",
    coursework: [
      "Computer Vision",
      "Systems and Tool Chains for AI Engineers",
      "Trustworthy AI",
      "Deep Learning & LLMs",
    ],
  },
  {
    degree: "BTech in Mechanical Engineering",
    school: "National Institute of Technology Calicut",
    location: "Calicut, India",
    date: "May 2022",
  },
];
