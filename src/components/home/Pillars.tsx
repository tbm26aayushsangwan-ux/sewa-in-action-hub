import { Users, Leaf, Heart } from 'lucide-react';

const pillars = [
  {
    icon: Users,
    title: 'People',
    description: 'Building a culture of service and community. Every volunteer, every act of kindness creates ripples of positive change.',
    color: 'bg-cause-education/10 text-cause-education',
  },
  {
    icon: Leaf,
    title: 'Planet',
    description: 'Environmental and animal welfare drives. From tree plantation to shelter visits, we care for all living beings.',
    color: 'bg-cause-environment/10 text-cause-environment',
  },
  {
    icon: Heart,
    title: 'Dignity',
    description: 'Menstrual health and social awareness campaigns. Breaking taboos, one conversation at a time.',
    color: 'bg-cause-health/10 text-cause-health',
  },
];

const Pillars = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Our Key Pillars
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            SEWA Club focuses on three interconnected pillars that guide all our initiatives and events.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="bg-background rounded-xl p-8 text-center hover-lift shadow-card"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${pillar.color} mb-6`}>
                <pillar.icon className="w-8 h-8" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
