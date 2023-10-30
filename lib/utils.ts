import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { BlogPostProps } from '../components/blog/types';

const root = process.cwd()

export async function getAllTags(posts: BlogPostProps[]) {
  const tagsMap = new Map<string, number>();
  for (const post of posts) {
    const tags = post.frontMatter.tags;
    if (tags && Array.isArray(tags)) {
      for (const tag of tags) {
        if (!tagsMap.has(tag)) {
          tagsMap.set(tag, 1);
        } else {
          tagsMap.set(tag, tagsMap.get(tag)! + 1);
        }
      }
    }
  }

  const tagsArray = Array.from(tagsMap.entries());
  tagsArray.sort((a, b) => b[1] - a[1]);

  const tagsSortedByOccurrence = tagsArray.map((tag) => tag[0]);

  return tagsSortedByOccurrence;
}

export async function getFiles(dataType: string) {
  return fs.readdirSync(path.join(root, 'public', 'data', dataType), 'utf-8');
}

export async function getPostBySlug(dataType: string, slug: string) {
  const source = fs.readFileSync(path.join(root, 'public', 'data', dataType, `${slug}.md`), 'utf8');

  const { data, content } = matter(source)

  return {
    frontMatter: data,
    markdownBody: content,
  }
}

export async function getAllPostsWithFrontMatter(dataType: string) {
  const files = fs.readdirSync(path.join(root, 'public', 'data', dataType));

  // @ts-ignore
  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(path.join(root, 'public', 'data', dataType, postSlug), 'utf8');
    const { data } = matter(source)

    return [
      {
        frontMatter: data,
        slug: postSlug.replace('.md', ''),
      },
      ...allPosts,
    ]
  }, [])
}

export default getAllPostsWithFrontMatter;


export function extractImageLinksFromMarkdown(markdownContent: string) {
  const imageLinks: string[] = [];
  const imageLinkRegex = /!\[\[([^\]]+)\]\]/g;
  let match = imageLinkRegex.exec(markdownContent);
  while (match !== null) {
    imageLinks.push(match[1]);
    match = imageLinkRegex.exec(markdownContent);
  }
  return imageLinks;
}

export async function getAllImageLinks(dataType: string) {
  const files = fs.readdirSync(path.join(root, 'public', 'data', dataType));
  const allImageLinks: string[] = [];

  for (const file of files) {
    const source = fs.readFileSync(path.join(root, 'public', 'data', dataType, file), 'utf8');
    const { content } = matter(source);
    const imageLinks = extractImageLinksFromMarkdown(content);
    allImageLinks.push(...imageLinks);
  }

  return allImageLinks;
}
