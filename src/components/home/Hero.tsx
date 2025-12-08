import { Link } from 'react-router-dom';
import { ArrowRight, Users, Heart, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import sewaLogo from '@/assets/sewa-logo.jpg';
import heroImage from '@/assets/hero-run.jpg';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-sewa-warm to-background">
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-in-right">
            <img
              src={sewaLogo}
              alt="SEWA Club"
              className="w-16 h-16 md:w-20 md:h-20 rounded-full mb-6 shadow-warm"
            />
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Service in{' '}
              <span className="text-primary">Action.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
              SEWA Club – Masters' Union brings students together to run, walk, and volunteer for causes that matter.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/events">
                <Button variant="hero" size="xl">
                  View Upcoming Events
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="#about">
                <Button variant="hero-outline" size="xl">
                  Why SEWA?
                </Button>
              </a>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 mt-12">
              {[
                { icon: Users, label: 'Volunteers', value: '500+' },
                { icon: Heart, label: 'Events', value: '25+' },
                { icon: Leaf, label: 'Trees Planted', value: '1000+' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-lg">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-warm">
              <img
                src={heroImage}
                alt="SEWA Club volunteers running for a cause"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-soft hidden md:block animate-float">
              <p className="font-display font-bold text-2xl text-primary">2000+</p>
              <p className="text-sm text-muted-foreground">Hours of Service</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-secondary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;
