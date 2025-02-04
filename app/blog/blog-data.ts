export const categories = [
  "All",
  "Web Development",
  "DevOps",
  "UI/UX Design",
  "Career Tips",
  "Tutorials",
] as const;

export type Category = (typeof categories)[number];

export interface BlogPost {
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  category: Category;
  readTime: string;
  date: string;
  slug: string;
  featured: boolean;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    title: "Building a Modern Portfolio with Next.js and Tailwind",
    excerpt:
      "A comprehensive guide to creating a performant and beautiful portfolio website using Next.js 14 and Tailwind CSS.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069",
    category: "Web Development",
    readTime: "8 min read",
    date: "Mar 15, 2024",
    slug: "building-modern-portfolio",
    featured: true,
    author: {
      name: "John Doe",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070",
      role: "Senior Developer",
    },
    tags: ["Next.js", "Tailwind CSS", "React", "Portfolio"],
  },
  {
    title: "Mastering TypeScript: Advanced Tips and Tricks",
    excerpt:
      "Deep dive into TypeScript's advanced features, best practices, and patterns for large-scale applications.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070",
    category: "Tutorials",
    readTime: "12 min read",
    date: "Mar 10, 2024",
    slug: "mastering-typescript",
    featured: true,
    author: {
      name: "Jane Smith",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070",
      role: "Tech Lead",
    },
    tags: ["TypeScript", "JavaScript", "Programming", "Development"],
  },
  {
    title: "CI/CD Pipeline Setup with GitHub Actions",
    excerpt:
      "Step-by-step guide to setting up a robust CI/CD pipeline using GitHub Actions for your web applications.",
    image:
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2043",
    category: "DevOps",
    readTime: "10 min read",
    date: "Mar 5, 2024",
    slug: "cicd-github-actions",
    featured: false,
    author: {
      name: "Mike Johnson",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070",
      role: "DevOps Engineer",
    },
    tags: ["DevOps", "GitHub Actions", "CI/CD", "Automation"],
  },
  {
    title: "Design Systems: From Theory to Implementation",
    excerpt:
      "Learn how to create and implement a comprehensive design system for your applications.",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2070",
    category: "UI/UX Design",
    readTime: "15 min read",
    date: "Mar 1, 2024",
    slug: "design-systems-implementation",
    featured: false,
    author: {
      name: "Sarah Lee",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070",
      role: "UI/UX Designer",
    },
    tags: ["Design Systems", "UI/UX", "Design", "Development"],
  },
  {
    title: "Navigating Your Tech Career: Tips for Success",
    excerpt:
      "Essential advice and strategies for building a successful career in technology.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070",
    category: "Career Tips",
    readTime: "10 min read",
    date: "Feb 28, 2024",
    slug: "tech-career-tips",
    featured: false,
    author: {
      name: "Alex Chen",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070",
      role: "Engineering Manager",
    },
    tags: ["Career", "Professional Development", "Tech Industry", "Advice"],
  },
];
