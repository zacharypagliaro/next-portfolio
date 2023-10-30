export type BlogFrontMatter = {
  title: string
  description: string
  published: string
  edited: string
  tags: string[]
}

export type BlogLayoutProps = {
  children: React.ReactNode
  frontMatter: BlogFrontMatter
  wordCount: number
  readingTime: string
}

export type BlogPostProps = {
  slug: string
  siteTitle: string
  frontMatter: BlogFrontMatter
  markdownBody: any
  wordCount: number
  readingTime: string
  imageLinks: string[]
}

export type BlogPostsProps = {
  posts?: BlogPostProps[];
  selectedTags: string[]; // Add the selectedTags prop
  imageLinks: string[];
};

export interface BlogProps extends BlogPostsProps {
  title: string
  description: string
}