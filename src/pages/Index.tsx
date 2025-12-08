import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EventCard from '@/components/events/EventCard';
import BlogCard from '@/components/blog/BlogCard';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import Pillars from '@/components/home/Pillars';
import ImpactStats from '@/components/home/ImpactStats';
import Newsletter from '@/components/home/Newsletter';
import { upcomingEvents, blogPosts } from '@/data';

const Index = () => {
  const featuredEvent = upcomingEvents[0];
  const previewEvents = upcomingEvents.slice(1, 4);
  const previewBlogs = blogPosts.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <Hero />

      {/* Pillars Section */}
      <Pillars />

      {/* Featured Event */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-8 md:mb-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
                Featured Event
              </h2>
              <p className="text-muted-foreground">Don't miss our next big initiative</p>
            </div>
          </div>
          <EventCard event={featuredEvent} featured />
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8 md:mb-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
                Upcoming Events
              </h2>
              <p className="text-muted-foreground">Find your next opportunity to make a difference</p>
            </div>
            <Link to="/events">
              <Button variant="outline">
                View All Events
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <ImpactStats />

      {/* About Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Why SEWA?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              "Sewa" means service in Hindi. At Masters' Union, we believe that true leadership 
              includes giving back to the community. SEWA Club is our platform for students to 
              channel their energy, skills, and passion towards causes that create lasting impact.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              From charity runs to tree plantations, from menstrual health awareness to animal 
              welfare drives – every initiative is student-led and community-focused. Join us 
              in making service a way of life.
            </p>
            <Link to="/about">
              <Button variant="hero-outline" size="lg">
                Learn More About SEWA
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8 md:mb-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
                From Our Blog
              </h2>
              <p className="text-muted-foreground">Stories, insights, and inspiration from the SEWA community</p>
            </div>
            <Link to="/blog">
              <Button variant="outline">
                Read All Posts
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewBlogs.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </Layout>
  );
};

export default Index;
