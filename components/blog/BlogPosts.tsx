import Link from 'next/link';
import { BlogPostProps } from './types';

interface BlogPostsProps {
  posts?: BlogPostProps[];
  selectedTags: string[];
}

const BlogPosts = ({ posts, selectedTags }: BlogPostsProps) => {
  const filteredPosts = posts
    ? posts.filter((post) => {
      if (selectedTags.length === 0) {
        return true; // Show all posts when no tags are selected
      }

      // Check if all selected tags are present in the post's tags
      if (post.frontMatter.tags && Array.isArray(post.frontMatter.tags)) {
        return selectedTags.every((tag) => post.frontMatter.tags.includes(tag));
      }
      return false;
    })
    : [];

  return (
    <div className="posts">
      {!filteredPosts.length && <div>No posts!</div>}
      <ul className="grid grid-cols-1 gap-4 justify-center sm:grid-cols-2 lg:grid-cols-3">
        {filteredPosts
          .sort((a, b) => new Date(b.frontMatter.published).getTime() - new Date(a.frontMatter.published).getTime()) // Sort by date (most recent first)
          .map((post) => (
            post.frontMatter && post.frontMatter.title && // Add this condition to check if frontMatter and title exist
            <article key={post.slug} className="post-title bg-white p-4 shadow-md rounded-md relative">
              <Link href={{ pathname: `/blog/${post.slug}` }}>
                <h3 className="text-xl text-theme font-semibold mb-2 hover:underline">{post.frontMatter.title}</h3>
              </Link>
              <p className="text-gray-600 mb-4">{post.frontMatter.description}</p>
              {post.frontMatter.tags && (
                <p className="text-gray-500 pb-2">
                  {post.frontMatter.tags.map(tag => `#${tag}`).join(', ')}
                </p>
              )}
              <p className="text-gray-500 absolute bottom-0 right-0 px-4">
                {post.frontMatter.published}
              </p>
            </article>
          ))}
      </ul>
    </div>
  );
};

export default BlogPosts;