import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight, Ticket } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { upcomingEvents } from '@/data';
import { Registration } from '@/types';

// Mock registrations - in a real app, this would come from the database
const mockRegistrations: Registration[] = [
  {
    eventId: '1',
    eventTitle: 'Run For A Cause',
    date: '2025-01-15',
    location: "Masters' Union Campus",
    tickets: 2,
  },
  {
    eventId: '2',
    eventTitle: 'Green Campus Drive',
    date: '2025-02-22',
    location: 'Various locations around campus',
    tickets: 1,
  },
];

const MyRegistrations = () => {
  const registrations = mockRegistrations;

  return (
    <Layout>
      {/* Header */}
      <section className="py-12 md:py-16 bg-card">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            My Registrations
          </h1>
          <p className="text-lg text-muted-foreground">
            View your upcoming event registrations.
          </p>
        </div>
      </section>

      {/* Registrations */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {registrations.length > 0 ? (
            <div className="space-y-4 max-w-2xl">
              {registrations.map((registration, index) => {
                const event = upcomingEvents.find(e => e.id === registration.eventId);
                return (
                  <div
                    key={index}
                    className="bg-card rounded-xl p-6 shadow-card flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-lg mb-2">
                        {registration.eventTitle}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(registration.date).toLocaleDateString('en-IN', {
                            weekday: 'short',
                            day: 'numeric',
                            month: 'short',
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {registration.location.split(',')[0]}
                        </span>
                        <span className="flex items-center gap-1">
                          <Ticket className="w-4 h-4" />
                          {registration.tickets} ticket{registration.tickets > 1 ? 's' : ''}
                        </span>
                      </div>
                    </div>
                    <Link to={`/events/${registration.eventId}`}>
                      <Button variant="outline" size="sm">
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <Ticket className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h2 className="font-display text-xl font-semibold mb-2">No Registrations Yet</h2>
              <p className="text-muted-foreground mb-6">
                You haven't registered for any events. Start making a difference today!
              </p>
              <Link to="/events">
                <Button variant="hero">
                  Browse Events
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default MyRegistrations;
