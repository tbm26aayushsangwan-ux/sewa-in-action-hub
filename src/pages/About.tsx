import { Link } from 'react-router-dom';
import { ArrowRight, Target, Heart, Users, Calendar } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { teamMembers } from '@/data';
import sewaLogo from '@/assets/sewa-logo.jpg';
import heroRun from '@/assets/hero-run.jpg';

const About = () => {
  const timeline = [
    { year: '2022', event: 'SEWA Club founded at Masters\' Union' },
    { year: '2023', event: 'First charity run with 100+ participants' },
    { year: '2023', event: 'Launched menstrual health awareness campaign' },
    { year: '2024', event: 'Crossed 500 volunteer registrations' },
    { year: '2024', event: 'Expanded to animal welfare initiatives' },
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="py-12 md:py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <img
              src={sewaLogo}
              alt="SEWA Club Logo"
              className="w-16 h-16 md:w-20 md:h-20 rounded-full"
            />
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold">
                About SEWA
              </h1>
              <p className="text-muted-foreground">Masters' Union Social Initiative Club</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                What is SEWA Club?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                "Sewa" means service in Hindi. At Masters' Union, SEWA Club is our student-led 
                platform for channeling energy, skills, and passion towards causes that create 
                lasting impact in our communities.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                From charity runs to tree plantations, from menstrual health awareness to animal 
                welfare drives – every initiative is designed to make service accessible, 
                meaningful, and transformative.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that true leadership includes giving back. Through SEWA, students 
                discover the power of collective action and the joy of making a difference.
              </p>
            </div>
            <div className="relative">
              <img
                src={heroRun}
                alt="SEWA volunteers in action"
                className="rounded-2xl shadow-warm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Compassion',
                description: 'Every action stems from genuine care for people, animals, and the planet.',
              },
              {
                icon: Users,
                title: 'Community',
                description: 'Building connections through shared service and collective impact.',
              },
              {
                icon: Target,
                title: 'Impact',
                description: 'Focusing on outcomes that create real, measurable change.',
              },
              {
                icon: Calendar,
                title: 'Consistency',
                description: 'Regular engagement for sustained, lasting transformation.',
              },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Journey
          </h2>
          <div className="max-w-2xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-4 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="font-display font-bold text-primary">{item.year}</p>
                  <p className="text-muted-foreground">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">
            Core Team
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="font-display text-3xl font-bold text-primary">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-display font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Join SEWA Club today and be part of a community that believes in the power of service.
          </p>
          <Link to="/events">
            <Button variant="warm" size="xl">
              View Upcoming Events
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
