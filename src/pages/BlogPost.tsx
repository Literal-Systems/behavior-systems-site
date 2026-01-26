import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { Mermaid } from '../components/Mermaid';
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

  useEffect(() => {
    const loadPost = async () => {
      try {
        setLoading(true);
        setError(null);

        console.log('Loading blog post:', slug);

        // Get markdown content from preloaded files
        const filePath = `../content/blog/${slug}.md`;
        const markdownContent = markdownFiles[filePath];

        if (!markdownContent) {
          console.error('Available files:', Object.keys(markdownFiles));
          throw new Error(`Blog post not found: ${slug}`);
        }

        console.log('Markdown loaded, length:', markdownContent?.length);

        // Parse frontmatter (basic implementation)
        const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
        const match = markdownContent.match(frontmatterRegex);

        if (!match) {
          console.error('Failed to parse frontmatter');
          throw new Error('Invalid markdown format');
        }

        console.log('Frontmatter parsed successfully');

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
        console.error('Error loading blog post:', err);
        setError('Blog post not found or could not be loaded.');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadPost();
    }
  }, [slug]);

  const categoryColors: Record<string, string> = {
    'AI Engineering': 'bg-teal/10 text-teal border-teal/20',
    'Search & Retrieval': 'bg-coral/10 text-coral border-coral/20',
    'Enterprise Applications': 'bg-beige text-charcoal border-charcoal/20',
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-offwhite flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-12 h-12 border-4 border-teal border-t-transparent rounded-full animate-spin mb-4" />
          <p className="text-charcoal/60 font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-offwhite flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-heading font-bold text-charcoal mb-4">
            Post Not Found
          </h1>
          <p className="text-charcoal/60 mb-8">{error}</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-teal text-white font-semibold px-6 py-3 rounded-full hover:bg-teal/90 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-offwhite">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-charcoal/5">
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-charcoal hover:text-teal transition-colors font-semibold group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
          <span className="font-heading font-bold text-xl tracking-wider text-charcoal">
            A.
          </span>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        {/* Meta Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span
              className={`text-xs font-semibold px-4 py-2 rounded-full border ${
                categoryColors[post.category] || 'bg-beige text-charcoal border-charcoal/20'
              }`}
            >
              {post.category}
            </span>
            <div className="flex items-center gap-2 text-charcoal/60">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium">{post.date}</span>
            </div>
            <div className="flex items-center gap-2 text-charcoal/60">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">{post.readTime}</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-heading font-bold text-charcoal leading-tight mb-6">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-xl text-charcoal/70 leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </motion.div>

        {/* Divider */}
        <div className="w-24 h-1 bg-gradient-to-r from-teal to-coral rounded-full mb-12" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="prose prose-lg max-w-none
            prose-headings:font-heading prose-headings:font-bold prose-headings:text-charcoal
            prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-12
            prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-10
            prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-8
            prose-p:text-charcoal/80 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-teal prose-a:no-underline hover:prose-a:underline prose-a:font-semibold
            prose-strong:text-charcoal prose-strong:font-bold
            prose-code:text-coral prose-code:bg-coral/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-charcoal prose-pre:text-white prose-pre:rounded-2xl prose-pre:p-6 prose-pre:overflow-x-auto
            prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
            prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
            prose-li:text-charcoal/80 prose-li:mb-2
            prose-blockquote:border-l-4 prose-blockquote:border-teal prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-charcoal/70
            prose-img:rounded-2xl prose-img:shadow-lg
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
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 pt-12 border-t border-charcoal/10"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-charcoal/5 text-center">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-charcoal mb-4">
              Found this helpful?
            </h3>
            <p className="text-charcoal/70 mb-6 max-w-xl mx-auto">
              Let's connect! I'm always excited to discuss AI engineering and
              building systems that scale.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:hello@aarish.co"
                className="inline-block bg-teal text-white font-semibold px-6 py-3 rounded-full hover:bg-teal/90 transition-colors shadow-md hover:shadow-lg"
              >
                Get in Touch
              </a>
              <Link
                to="/#blog"
                className="inline-block bg-charcoal text-white font-semibold px-6 py-3 rounded-full hover:bg-charcoal/90 transition-colors shadow-md hover:shadow-lg"
              >
                More Articles
              </Link>
            </div>
          </div>
        </motion.div>
      </article>
    </div>
  );
}
