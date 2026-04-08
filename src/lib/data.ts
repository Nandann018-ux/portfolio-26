export interface ChronologyNode {
  year: string;
  label: string;
  title: string;
  subtitle: string;
}

export interface ProjectNode {
  year: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export const chronology: ChronologyNode[] = [
  {
    year: "2024",
    label: "PRESENT",
    title: "Full Stack Developer",
    subtitle: "Building production-grade systems with modern web technologies and cloud infrastructure."
  },
  {
    year: "2023",
    label: "RESEARCH",
    title: "AI & Machine Learning",
    subtitle: "Deep learning research, neural network architectures, and intelligent system design."
  },
  {
    year: "2022",
    label: "FOUNDATION",
    title: "Computer Science",
    subtitle: "Algorithms, data structures, and the mathematical foundations of computation."
  },
  {
    year: "2021",
    label: "ORIGIN",
    title: "First Line of Code",
    subtitle: "The beginning of a journey from curiosity to craft."
  }
];

export const projects: ProjectNode[] = [
  {
    year: "2024",
    title: "Nexus AI Interface",
    description: "A high-performance offline interface for local LLM inference featuring real-time state management.",
    tags: ["MERN", "PyTorch", "Next.js"],
  },
  {
    year: "2023",
    title: "UrbanGear E-Commerce",
    description: "A premium, cinematic shopping experience with modular frontend architecture and robust authentication.",
    tags: ["React", "Express", "PostgreSQL"],
  },
  {
    year: "2022",
    title: "Neural Plan Optimization",
    description: "An AI-powered tool for dynamic study plan generation and persistence management.",
    tags: ["TypeScript", "FastAPI", "MongoDB"],
  }
];
