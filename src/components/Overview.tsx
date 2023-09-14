import type { MarkdownInstance } from "astro";

interface OverviewProps {
  posts: MarkdownInstance<Record<string, any>>[];
}

export const Overview = ({ posts }: OverviewProps) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.url}>
          <a href={post.url}>{post.frontmatter.title}</a>{" "}
        </li>
      ))}
    </ul>
  );
};
