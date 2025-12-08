import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import EventCard from '@/components/events/EventCard';
import { Button } from '@/components/ui/button';
import { upcomingEvents, completedEvents } from '@/data';

type CauseFilter = 'all' | 'environment' | 'health' | 'animal' | 'education';

const Events = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'completed'>('upcoming');
  const [causeFilter, setCauseFilter] = useState<CauseFilter>('all');

  const causes: { value: CauseFilter; label: string }[] = [
    { value: 'all', label: 'All Causes' },
    { value: 'environment', label: 'Environment' },
    { value: 'health', label: "Women's Health" },
    { value: 'animal', label: 'Animal Welfare' },
    { value: 'education', label: 'Education & Youth' },
  ];

  const events = activeTab === 'upcoming' ? upcomingEvents : completedEvents;
  const filteredEvents = causeFilter === 'all' 
    ? events 
    : events.filter(e => e.cause === causeFilter);

  return (
    <Layout>
      {/* Header */}
      <section className="py-12 md:py-16 bg-card">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Events
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Discover opportunities to volunteer, contribute, and make a difference in your community.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 border-b border-border sticky top-16 md:top-20 bg-background z-30">
        <div className="container mx-auto px-4">
          {/* Tabs */}
          <div className="flex gap-2 mb-4">
            <Button
              variant={activeTab === 'upcoming' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming Events
            </Button>
            <Button
              variant={activeTab === 'completed' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('completed')}
            >
              Completed Events
            </Button>
          </div>

          {/* Cause Filters */}
          <div className="flex flex-wrap gap-2">
            {causes.map((cause) => (
              <Button
                key={cause.value}
                variant={causeFilter === cause.value ? 'secondary' : 'soft'}
                size="sm"
                onClick={() => setCauseFilter(cause.value)}
              >
                {cause.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {filteredEvents.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No events found for this filter.
              </p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => setCauseFilter('all')}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Events;
