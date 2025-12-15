import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/data';

// Unique content for each blog
const blogContent: Record<string, string> = {
  '1': `Student-led service is transforming communities across India. SEWA Club empowers young people to take ownership of impact, from organizing charity runs to leading donation drives and awareness campaigns. Small acts—when multiplied by hundreds of hands—create extraordinary outcomes.

## The Power of Student Ownership

When students lead, they don't just participate—they invest emotionally and intellectually in the outcomes. This ownership mindset transforms casual volunteering into passionate advocacy. At SEWA Club, we've seen students go from first-time volunteers to initiative leaders within months.

## Building Sustainable Change

Unlike one-time charitable acts, student-led service creates lasting infrastructure for change. Our volunteers don't just show up—they design programs, build partnerships with local organizations, and train the next generation of leaders.

## Multiplying Impact

- **Peer influence**: When students see their classmates volunteering, they're more likely to join.
- **Network effects**: Each volunteer brings their own network, expanding our reach exponentially.
- **Fresh perspectives**: Young minds bring innovative solutions to age-old problems.

## Looking Forward

The future of social impact lies in empowering youth to lead. At SEWA Club, we're not just organizing events—we're nurturing a generation of changemakers who will carry this spirit of service throughout their careers and lives.`,

  '2': `SEWA's charity runs blend fitness with purpose. Each kilometer funds real initiatives: menstrual health programs, animal welfare, tree-planting efforts, and more. Beyond raising money, these events unite students in a shared commitment to kindness and community.

## More Than Just Running

Our charity runs are designed to be inclusive. Whether you're a marathon enthusiast or someone who prefers a leisurely walk, you're welcome. What matters isn't your pace—it's your presence and participation in something bigger than yourself.

## The Math of Compassion

Every registration fee, every pledge per kilometer, every sponsored water bottle adds up. Last year alone, our runs funded:
- **500+ sanitary pad kits** distributed to rural communities
- **200 trees planted** across campus and local parks
- **Medical care for 50+ stray animals** at partner shelters

## Building Community Through Movement

- **Pre-run warmups**: Create connections before the first step
- **Running buddies**: Pair experienced runners with newcomers
- **Post-run celebrations**: Share stories and build friendships

## The Ripple Effect

When you run for a cause, you inspire others. Family members ask questions. Friends get curious. Social media posts spark conversations. One person's morning jog becomes a community movement.`,

  '3': `From visiting shelters to supporting medical care for stray animals, SEWA volunteers are rewriting the narrative of compassion. Students share stories of how spending time with rescue animals changed not only the animals' lives but also their own understanding of empathy and responsibility.

## Stories from Our Volunteers

"I went to the shelter thinking I'd help the animals. I didn't realize they'd help me more. After a stressful week of exams, spending an afternoon with rescue dogs was the therapy I didn't know I needed." — Rahul, PGP 2024

## What We Do at the Shelter

Our partnership with local animal shelters goes beyond occasional visits. SEWA volunteers commit to:
- **Weekly feeding and grooming sessions**
- **Socialization training** to help animals become adoptable
- **Medical fund contributions** for emergency treatments
- **Adoption awareness campaigns** on campus and social media

## The Science of Animal-Human Bonds

- **Reduced stress**: Studies show petting animals lowers cortisol levels
- **Increased empathy**: Caring for vulnerable creatures builds emotional intelligence
- **Responsibility training**: Regular commitments teach time management and reliability

## Success Stories

Since our partnership began, over 30 animals from our partner shelter have been adopted by Masters' Union students and their families. Bruno, a three-legged rescue dog, now lives happily with one of our volunteers and has become the unofficial SEWA mascot.`,

  '4': `Menstrual health is still surrounded by stigma. SEWA's awareness efforts focus on normalizing conversations, distributing pads to underserved communities, and educating young girls with dignity and respect. Open dialogue and grassroots action can redefine menstrual well-being and reduce long-standing barriers.

## Breaking the Silence

In many communities, menstruation is still whispered about—if discussed at all. Young girls miss school, women miss work, and a natural biological process becomes a source of shame. SEWA Club believes that change starts with conversation.

## Our Three-Pillar Approach

**1. Education**
We conduct workshops in schools and community centers, teaching girls and boys alike about menstrual health. Knowledge dispels myths and builds understanding.

**2. Access**
We distribute sanitary products to women and girls who can't afford them. But we don't just hand out pads—we include educational materials and information about proper hygiene.

**3. Advocacy**
We push for better facilities in public spaces, more open discussions in families, and policy changes that support menstrual health.

## Impact Numbers

- **150+ women** reached through village awareness programs
- **500+ pad kits** distributed with educational materials
- **3 schools** now have dedicated menstrual health programs
- **Countless conversations** started about breaking the taboo

## Join the Movement

Menstrual health is everyone's issue. When half the population can't manage their periods with dignity, it affects families, workplaces, and communities. At SEWA, we're working to create a future where menstruation is just another topic—discussed openly, managed easily, and never a barrier to anyone's potential.`,
};

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

  const content = blogContent[post.id] || post.excerpt;

  return (
    <Layout>
      {/* Back Button - Above Hero */}
      <div className="container mx-auto px-4 py-4">
        <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>

      {/* Hero Image */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
              {post.title}
            </h1>

            {/* Category Tag */}
            <Badge variant="soft" className="mb-4">
              {post.category}
            </Badge>

            {/* Meta: Author • Date • Read Time */}
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
                  const match = paragraph.match(/\*\*(.*?)\*\*:?\s*(.*)/);
                  if (match) {
                    return (
                      <p key={index} className="text-muted-foreground mb-2 pl-4">
                        <strong className="text-foreground">{match[1]}:</strong> {match[2]}
                      </p>
                    );
                  }
                }
                if (paragraph.startsWith('**')) {
                  const match = paragraph.match(/\*\*(.*?)\*\*/);
                  if (match) {
                    return (
                      <p key={index} className="text-foreground font-semibold mt-6 mb-2">
                        {match[1]}
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