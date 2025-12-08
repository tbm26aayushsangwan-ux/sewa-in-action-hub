import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/data';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="font-display text-2xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  // Generate mock content based on the post
  const content = `
${post.excerpt}

## The Power of Community Action

When students come together for a cause, the impact multiplies exponentially. At SEWA Club, we've witnessed this transformation firsthand through our various initiatives.

Every volunteer brings their unique perspective, skills, and energy to our events. Whether it's a morning run for charity, a tree-planting drive, or an awareness campaign—the collective effort creates ripples of change that extend far beyond the immediate action.

## Making Every Moment Count

Our approach is simple: make service accessible, meaningful, and impactful. We believe that:

- **Small actions matter**: Every tree planted, every pad distributed, every hour spent teaching—it all adds up.
- **Consistency beats intensity**: Regular engagement creates lasting change in communities.
- **Learning goes both ways**: Our volunteers often gain as much as they give.

## Looking Ahead

As SEWA Club continues to grow, we remain committed to our core values of service, community, and impact. Join us in making a difference—one event at a time.

The journey of a thousand miles begins with a single step. And at SEWA, that step is service.
  `;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container mx-auto max-w-3xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <Badge variant="soft" className="bg-card/90 text-foreground mb-4">
              {post.category}
            </Badge>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-border text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author || 'SEWA Team'}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('en-IN', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>

            {/* Article */}
            <article className="prose prose-lg max-w-none">
              {content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="font-display text-2xl font-semibold mt-8 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('- **')) {
                  const match = paragraph.match(/\*\*(.*?)\*\*: (.*)/);
                  if (match) {
                    return (
                      <p key={index} className="text-muted-foreground mb-2">
                        <strong className="text-foreground">{match[1]}:</strong> {match[2]}
                      </p>
                    );
                  }
                }
                if (paragraph.trim()) {
                  return (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  );
                }
                return null;
              })}
            </article>

            {/* Back Link */}
            <div className="mt-12 pt-8 border-t border-border">
              <Link to="/blog">
                <Button variant="outline">
                  <ArrowLeft className="w-4 h-4" />
                  Back to All Posts
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
