export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  arxivId: string;
  arxivUrl: string;
  websiteUrl?: string;
};

export const publications: Publication[] = [
  {
    title:
      "IDD-AW: A Benchmark for Safe and Robust Segmentation of Drive Scenes in Unstructured Traffic and Adverse Weather",
    authors:
      "Furqan Ahmed Shaik, Abhishek Malreddy, Nikhil Reddy Billa, Kunal Chaudhary, Sunny Manchanda, Girish Varma",
    venue:
      "IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)",
    year: 2024,
    arxivId: "2311.14459",
    arxivUrl: "https://arxiv.org/abs/2311.14459",
    websiteUrl: "https://iddaw.github.io/",
  },
];
