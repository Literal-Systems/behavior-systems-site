import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { ArrowLeft } from 'lucide-react';
import { Mermaid } from '../components/Mermaid';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import 'highlight.js/styles/github-dark.css';

interface BlogPostData {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  readTime: string;
  content: string;
}

// Load all markdown files
const markdownFiles = import.meta.glob('../content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
});

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const loadPost = async () => {
      try {
        setLoading(true);
        setError(null);

        // Get markdown content from preloaded files
        const filePath = `../content/blog/${slug}.md`;
        const markdownContent = markdownFiles[filePath];

        if (!markdownContent) {
          throw new Error(`Blog post not found: ${slug}`);
        }

        // Parse frontmatter (basic implementation)
        const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
        const match = (markdownContent as string).match(frontmatterRegex);

        if (!match) {
          throw new Error('Invalid markdown format');
        }

        const frontmatterText = match[1];
        const content = match[2];

        // Parse frontmatter fields
        const frontmatter: Record<string, string> = {};
        frontmatterText.split('\n').forEach((line) => {
          const [key, ...valueParts] = line.split(':');
          if (key && valueParts.length) {
            frontmatter[key.trim()] = valueParts
              .join(':')
              .trim()
              .replace(/^["']|["']$/g, '');
          }
        });

        setPost({
          title: frontmatter.title || 'Untitled',
          date: frontmatter.date || 'Unknown date',
          category: frontmatter.category || 'Uncategorized',
          excerpt: frontmatter.excerpt || '',
          readTime: frontmatter.readTime || '',
          content,
        });
      } catch (err) {
        setError('Blog post not found or could not be loaded.');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadPost();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--bg)] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-8 h-8 border-2 border-[var(--text-primary)] border-t-transparent rounded-full animate-spin mb-4" />
          <p className="text-[var(--text-muted)] text-sm">Loading...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-[var(--bg)] flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">
            Post Not Found
          </h1>
          <p className="text-[var(--text-muted)] mb-8">{error}</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[var(--text-primary)] underline underline-offset-4 decoration-[var(--text-muted)] hover:decoration-[var(--text-primary)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[var(--surface)] border-b border-[var(--border)]">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm no-underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </Link>
          <button
            onClick={toggleTheme}
            className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        {/* Meta Info */}
        <div className="mb-12">
          <div className="flex items-center gap-4 text-sm text-[var(--text-muted)] mb-4">
            <span>{post.date}</span>
            <span>&middot;</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold text-[var(--text-primary)] leading-tight mb-4">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-[var(--border)] mb-12" />

        {/* Content */}
        <div
          className="prose prose-neutral dark:prose-invert max-w-none
            prose-headings:font-semibold prose-headings:text-[var(--text-primary)]
            prose-h1:text-2xl prose-h1:mb-6 prose-h1:mt-12
            prose-h2:text-xl prose-h2:mb-4 prose-h2:mt-10
            prose-h3:text-lg prose-h3:mb-3 prose-h3:mt-8
            prose-p:text-[var(--text-secondary)] prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-[var(--text-primary)] prose-a:underline prose-a:underline-offset-4 prose-a:decoration-[var(--text-muted)] hover:prose-a:decoration-[var(--text-primary)]
            prose-strong:text-[var(--text-primary)] prose-strong:font-semibold
            prose-code:text-[var(--text-primary)] prose-code:bg-[var(--surface)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none prose-code:border prose-code:border-[var(--border)]
            prose-pre:bg-[var(--surface)] prose-pre:border prose-pre:border-[var(--border)] prose-pre:rounded-lg prose-pre:p-4 prose-pre:overflow-x-auto
            prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
            prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
            prose-li:text-[var(--text-secondary)] prose-li:mb-2
            prose-blockquote:border-l-2 prose-blockquote:border-[var(--border)] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-[var(--text-muted)]
            prose-img:rounded-lg
          "
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                const language = match ? match[1] : '';

                if (language === 'mermaid' && !inline) {
                  return <Mermaid chart={String(children).replace(/\n$/, '')} />;
                }

                return (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-[var(--border)]">
          <p className="text-[var(--text-muted)] mb-4">
            Found this helpful? Get in touch.
          </p>
          <a
            href="mailto:hello@aarish.co"
            className="text-[var(--text-primary)] underline underline-offset-4 decoration-[var(--text-muted)] hover:decoration-[var(--text-primary)] transition-colors"
          >
            hello@aarish.co
          </a>
        </div>
      </article>
    </div>
  );
}
