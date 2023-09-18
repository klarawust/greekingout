import type { MarkdownInstance } from "astro";

interface OverviewProps {
  posts: MarkdownInstance<Record<string, any>>[];
}

export const Overview = ({ posts }: OverviewProps) => {
  return (
    <ul className="flex md:flex-col gap-2 mt-12 flex-row">
      <p className="text-amber-500">
        <a href="/about">About us</a>
      </p>
      <p className="font-bold">
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
