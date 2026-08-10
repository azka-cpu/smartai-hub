import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getPostSlugs, appMeta } from "@/lib/blog";
import { ArrowLeft, ArrowRight } from "lucide-react";

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mt-10 text-2xl font-semibold tracking-tight" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mt-8 text-xl font-medium" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mt-4 leading-relaxed text-foreground/90" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mt-4 list-disc space-y-2 pl-6" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="mt-4 list-decimal space-y-2 pl-6" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="underline underline-offset-2" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold" {...props} />
  ),
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let meta, content;
  try {
    ({ meta, content } = getPostBySlug(slug));
  } catch {
    notFound();
  }

  const app = appMeta[meta.app];

  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <Link
        href="/blog"
        className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to blog
      </Link>

      <div className="mt-6 flex items-center gap-2 text-xs">
        <span
          className="rounded-full px-2 py-0.5 font-medium"
          style={{ backgroundColor: `${app.accent}1a`, color: app.accent }}
        >
          {app.label}
        </span>
        <span className="text-muted-foreground">
          {new Date(meta.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </span>
      </div>

      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
        {meta.title}
      </h1>
      <p className="mt-3 text-lg text-muted-foreground">
        {meta.description}
      </p>

      <article className="mt-10">
        <MDXRemote source={content} components={mdxComponents} />
      </article>

      <div className="mt-12 border-t border-border pt-8">
        <Link
          href={app.href}
          className="flex items-center gap-1.5 text-sm font-medium"
          style={{ color: app.accent }}
        >
          Try {app.label}
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </main>
  );
}