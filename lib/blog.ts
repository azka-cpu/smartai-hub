import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  app: "pdf-copilot" | "spendsnap" | "meeting-notes-bot" | "barcode-scanner";
};

export const appMeta: Record<
  PostMeta["app"],
  { label: string; accent: string; href: string }
> = {
  "pdf-copilot": {
    label: "PDF Copilot",
    accent: "#0d9488",
    href: "/apps/pdf-copilot",
  },
  spendsnap: {
    label: "SpendSnap",
    accent: "#ea580c",
    href: "/apps/spendsnap",
  },
  "meeting-notes-bot": {
    label: "Meeting Notes Bot",
    accent: "#4f46e5",
    href: "/apps/meeting-notes-bot",
  },
  "barcode-scanner": {
    label: "Barcode Scanner",
    accent: "#e11d48",
    href: "/apps/barcode-scanner",
  },
};

export function getPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): {
  meta: PostMeta;
  content: string;
} {
  const fullPath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  return {
    meta: { slug, ...(data as Omit<PostMeta, "slug">) },
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug).meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
