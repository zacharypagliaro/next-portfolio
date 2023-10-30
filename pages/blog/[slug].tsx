import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import BlogLayout from '../../components/blog/layouts/BlogLayout'
import { BlogPostProps } from '../../components/blog/types'
import { getFiles, getPostBySlug, getAllImageLinks } from '../../lib/utils'
import React from 'react'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import rehypeRaw from 'rehype-raw';
import remarkGfm from "remark-gfm";
import mermaid from 'mermaid'; // Import the mermaid library


// Custom List Component
interface CustomListProps {
  type: 'numbered' | 'unordered';
  children: React.ReactNode;
}

const CustomList: React.FC<CustomListProps> = ({ type, children }) => {
  const listStyles = {
    listStyleType: type === 'numbered' ? 'decimal' : 'disc',
    marginLeft: '2em', // Add some left margin to sub-lists
  };

  return <div className="text-secondary"><ul style={listStyles}>{children}</ul></div>;
};

const ParagraphWithSpacing = ({ children }: { children: React.ReactNode }) => {
  const paragraphs = React.Children.toArray(children);

  return (
    <>
      {paragraphs.map((paragraph, index) => {
        const isLink = typeof paragraph === 'string' && paragraph.includes('<a>'); // Check if the paragraph contains an anchor tag

        return (
          <React.Fragment key={index}>
            {index > 0 && <br />} {/* Add spacing before paragraphs (except the first one) */}
            {paragraph}
            <br />
          </React.Fragment>
        );
      })}
    </>
  );
};

const replaceImagesAndLinks = (source: string) => {
  const imagePlaceholderRegex = /!\[\[([^\]]+)\]\]/g;
  const linkRegex = /\[([^\]]+)\]\(([^\)]+)\)/g;

  const replacedImages = source.replace(imagePlaceholderRegex, (match, imageName) => {
    const imgSrc = `/img/blog-images/${imageName}`;
    const imgAlt = imageName;
    return `<img src="${imgSrc}" alt="${imgAlt}" width={800} height={600} />`;
  });

  const replacedImagesAndLinks = replacedImages.replace(linkRegex, (match, linkText, linkHref) => {
    return `<a href="${linkHref}" className="text-secondary underline hover:text-theme">${linkText}</a>`;
  });

  return replacedImagesAndLinks;
};

const replaceItalicsAndBold = (source: string) => {

  // Replace bold with <strong> tags
  const replacedBold = source.replace(/\*\*([^*]+)\*\*/g, (match, content) => {
    return `<strong>${content}</strong>`;
  });

  // Replace italics with <em> tags
  const replacedItalics = replacedBold.replace(/\*([^*]+)\*/g, (match, content) => {
    return `<em>${content}</em>`;
  });

  return replacedItalics;
};

const replacedStyling = (source: string) => {
  const replacedImagesAndLinks = replaceImagesAndLinks(source);
  const replacedItalicsAndBold = replaceItalicsAndBold(replacedImagesAndLinks);

  return replacedItalicsAndBold;
};

interface MermaidDiagramProps {
  value: string;
}

const MermaidDiagram: React.FC<MermaidDiagramProps> = ({ value }) => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    // Load and initialize Mermaid on component mount
    if (ref.current) {
      mermaid.initialize({ startOnLoad: true });
      mermaid.contentLoaded();
      mermaid.init(undefined, ref.current);
    }
  }, []);

  const modifiedValue = `${value}\nlinkStyle default stroke: purple\n`; // Add linkStyle directive
  //console.log("Modified Mermaid Diagram Code:", modifiedValue);

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: modifiedValue }} />;
};


const BlogPost = ({ frontMatter, markdownBody, wordCount, readingTime, imageLinks }: BlogPostProps) => {
  if (!frontMatter) return <></>

  const processedMarkdown = replacedStyling(markdownBody);


  return (
    <div className="bg-body text-white font-poppins pb-12">
      <BlogLayout frontMatter={frontMatter} wordCount={wordCount} readingTime={readingTime}>
        <ReactMarkdown

          rehypePlugins={[rehypeRaw]}
          remarkPlugins={[remarkGfm]}
          className={'markdown'}
          components={{

            // code component
            // code component
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');

              if (match && match[1] === 'mermaid') {
                const diagramCode = String(children).replace(/\n$/, '');

                return (
                  <div className="w-[85vw] md:w-full">
                    <div className="overflow-x-auto">
                      <MermaidDiagram value={diagramCode} />
                      <br></br>
                    </div>
                  </div>
                );
              } else if (match) { // Handle other code blocks
                return (
                  <div className="w-[85vw] md:w-full">
                    <SyntaxHighlighter
                      {...props}
                      style={vscDarkPlus}
                      language={match[1]}
                      PreTag="div"
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  </div>
                );
              } else {
                return <code {...props} className={className + " bg-slate-800 text-pink-200 font-normal rounded-md py-0.5 px-1"}>{children}</code>;
              }
            },

            //headers
            h1: ({ node, ...props }) => <h1 className="text-4xl font-bold my-4" {...props} />,
            h2: ({ node, ...props }) => <h2 className="text-3xl font-semibold my-3" {...props} />,
            h3: ({ node, ...props }) => <h3 className="text-2xl font-semibold my-2" {...props} />,
            h4: ({ node, ...props }) => <h4 className="text-xl font-semibold my-2" {...props} />,
            h5: ({ node, ...props }) => <h5 className="text-lg font-semibold my-1" {...props} />,
            h6: ({ node, ...props }) => <h6 className="text-base font-semibold my-1" {...props} />,


            //blockquotes
            blockquote: ({ children }) => (
              <div>
                <blockquote
                  style={{
                    color: '#666',
                    margin: 0,
                    paddingLeft: '3em',
                    borderLeft: '0.5em #eee solid',
                  }}
                >
                  {children}
                </blockquote>
                <br></br>
              </div>
            ),

            // tables
            table: ({ children }) => <div className="w-[85vw] md:w-full"> <div className="overflow-x-auto"> <table className='text-gray-100' style={{ borderCollapse: 'collapse' }}>{children}</table> </div> </div>,
            th: ({ children }) => <th style={{ padding: '6px 13px', border: '1px solid pink' }}>{children}</th>,
            td: ({ children }) => <td style={{ padding: '6px 13px', border: '1px solid pink' }}>{children}</td>,

            // preserve blank spacing
            p: ({ className, children, ...props }) => (
              <ParagraphWithSpacing>
                <p className={'text-secondary'} style={{ whiteSpace: 'pre-wrap' }} {...props}>
                  {children}
                </p>
              </ParagraphWithSpacing>
            ),


            // custom list rendering
            ul: ({ node, ...props }) => <CustomList type="unordered">{props.children}</CustomList>,
            ol: ({ children }) => (
              <>
                <CustomList type="numbered">{children}</CustomList>
                <br /> {/* Add newline after the list */}
              </>
            ),
          }}
        >
          {processedMarkdown}
        </ReactMarkdown>

      </BlogLayout>

    </div>
  )
}

export async function getStaticProps({ params }: Params) {
  const { frontMatter, markdownBody } = await getPostBySlug('blog', params.slug)
  const imageLinks = await getAllImageLinks('blog'); // Fetch the imageLinks data

  return {
    props: {
      frontMatter,
      markdownBody,
      imageLinks,
    },
  }
}

export async function getStaticPaths() {
  const posts = await getFiles('blog')

  const paths = posts.map((filename: string) => ({
    params: {
      slug: filename.replace(/\.md/, ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default BlogPost