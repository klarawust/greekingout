import type { MarkdownInstance } from "astro";

interface OverviewProps {
  posts: MarkdownInstance<Record<string, any>>[];
}

export const Overview = ({ posts }: OverviewProps) => {
  return (
    <ul className="flex md:flex-col gap-4 mt-12 flex-row">
      <p className="text-amber-500 hover:scale-105">
        <a href="/about">About us</a>
      </p>
      <p className="font-bold hover:scale-105">
        <a href="/">Blogposts</a>
      </p>
      {posts
        .slice()
        .reverse()
        .map((post) => (
          <li className="hidden md:block" key={post.url}>
            <a href={post.url}>{post.frontmatter.title}</a>{" "}
          </li>
        ))}
    </ul>
  );
};
