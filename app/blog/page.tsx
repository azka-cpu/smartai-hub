import Link from "next/link";
import { getAllPosts, appMeta } from "@/lib/blog";

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl font-semibold tracking-tight">Blog</h1>
      <p className="mt-3 text-lg text-muted-foreground">
        Notes on what we're building across PDF Copilot, SpendSnap, Meeting
        Notes Bot, and Barcode Scanner.
      </p>

      <div className="mt-12 divide-y divide-border">
        {posts.length === 0 && (
          <p className="py-10 text-muted-foreground">
            No posts yet â€” check back soon.
          </p>
        )}

        {posts.map((post) => {
          const app = appMeta[post.app];
          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block py-8"
            >
              <div className="flex items-center gap-2 text-xs">
                <span
                  className="rounded-full px-2 py-0.5 font-medium"
                  style={{
                    backgroundColor: `${app.accent}1a`,
                    color: app.accent,
                  }}
                >
                  {app.label}
                </span>
                <span className="text-muted-foreground">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <h2 className="mt-2 text-xl font-medium transition-colors group-hover:text-muted-foreground">
                {post.title}
              </h2>
              <p className="mt-1.5 text-muted-foreground">
                {post.description}
              </p>
            </Link>
          );
        })}
      </div>
    </main>
  );
}