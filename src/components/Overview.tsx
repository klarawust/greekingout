import type { MarkdownInstance } from "astro";

interface OverviewProps {
  posts: MarkdownInstance<Record<string, any>>[];
}

export const Overview = ({ posts }: OverviewProps) => {
  return (
    <ul className="ml-20 mt-12">
      <li className="text-amber-500 mb-2">
        <a href="/about">About us</a>
      </li>
      <li className="font-bold">Blogposts</li>
      {posts.map((post) => (
        <li key={post.url}>
          <a href={post.url}>{post.frontmatter.title}</a>{" "}
        </li>
      ))}
    </ul>
  );
};
