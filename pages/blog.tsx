import BlogPosts from '../components/blog/BlogPosts';
import SiteContainer from '../components/blog/SiteContainer';
import { getAllPostsWithFrontMatter, getAllTags } from '../lib/utils';
import { BlogProps, BlogPostProps } from '../components/blog/types';
import { useState, useEffect } from 'react';
import Link from 'next/link'

export default function Blog({ posts, title, description }: BlogProps) {
  const [allTags, setAllTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    const fetchTags = async () => {
      if (posts) {
        // Extract tags from the posts array
        const tags: string[] = [];
        posts.forEach((post) => {
          if (post.frontMatter.tags && Array.isArray(post.frontMatter.tags)) {
            tags.push(...post.frontMatter.tags);
          }
        });

        // Remove duplicates by creating a Set and converting it back to an array
        const uniqueTags = Array.from(new Set(tags));
        setAllTags(uniqueTags);
      }
    };
    fetchTags();
  }, [posts]);

  // Function to handle tag selection
  const handleTagSelect = (tag: string) => {
    setSelectedTags((prevSelectedTags) => {
      if (prevSelectedTags.includes(tag)) {
        return prevSelectedTags.filter((t) => t !== tag); // Remove the tag if already selected
      } else {
        return [...prevSelectedTags, tag]; // Add the tag if not selected
      }
    });
  };

  return (
    <div className="bg-body text-white font-poppins pb-12">

      <SiteContainer title={title} description={description}>
        <div>
          <section className="blog-posts">
            <p className="text-gray-500">
              I play guitar and make music! I also develop apps and stuff for the web. If you spot an error, or have any comments, suggestions or questions about what I&apos;ve written here,{' '}
              <Link href="/#contact" className="text-theme hover:underline">
                contact me
              </Link>
              .
            </p>            <br></br>
            <h3>Thanks for reading.</h3>
            <br></br>
            <BlogPosts posts={posts} selectedTags={selectedTags} />

            {/* Display the most used tags */}
            <div className="tag-list pt-8">
              <h3>Tags:</h3>
              <ul>
                <li
                  className="p-2"
                  key="all" // Special key for "All" tag
                  onClick={() => setSelectedTags([])} // Clicking "All" tag clears the selection
                  style={{
                    color: selectedTags.length === 0 ? 'blue' : 'black',
                    cursor: 'pointer',
                  }}
                >
                  <button className={`bg-${selectedTags.length === 0 ? 'blue-400 opacity-70 cursor-not-allowed' : 'selected-text bg-theme'} p-1 text-white font-bold`}>
                    all posts
                  </button>
                </li>
                <div className="flex flex-wrap">
                  {allTags.map((tag) => (
                    <li
                      key={tag}
                      onClick={() => handleTagSelect(tag)}
                      className="mb-2 mr-2"
                    >
                      <span
                        className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${selectedTags.includes(tag) ? 'bg-theme text-white' : 'bg-gray-200 text-gray-700'
                          } hover:bg-theme hover:text-white`}
                      >
                        {'# ' + tag}
                      </span>
                    </li>
                  ))}
                </div>
              </ul>
            </div>
          </section>
        </div>
      </SiteContainer>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllPostsWithFrontMatter('blog');

  return {
    props: {
      posts,
      title: 'Blog',
      description: 'Posts on playing guitar, music production, and software engineering',
    },
  };
}
