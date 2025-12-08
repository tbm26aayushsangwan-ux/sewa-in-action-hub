import Layout from '@/components/layout/Layout';
import BlogCard from '@/components/blog/BlogCard';
import { blogPosts } from '@/data';

const Blog = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-12 md:py-16 bg-card">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Blog
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Stories, insights, and inspiration from the SEWA community. Learn about our initiatives and the impact we're creating together.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
