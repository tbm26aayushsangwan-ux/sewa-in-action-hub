import { Users, Calendar, Clock, Heart } from 'lucide-react';
import { impactStats } from '@/data';

const stats = [
  { icon: Users, value: impactStats.volunteers, label: 'Volunteers', suffix: '+' },
  { icon: Calendar, value: impactStats.events, label: 'Events Organised', suffix: '+' },
  { icon: Clock, value: impactStats.hoursOfService, label: 'Hours of Service', suffix: '+' },
  { icon: Heart, value: impactStats.livesImpacted, label: 'Lives Impacted', suffix: '+' },
];

const ImpactStats = () => {
  return (
    <section className="py-12 md:py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-foreground/10 mb-4">
                <stat.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                {stat.value.toLocaleString()}{stat.suffix}
              </p>
              <p className="text-sm text-primary-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
