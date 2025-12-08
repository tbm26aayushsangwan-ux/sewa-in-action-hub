import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Event } from '@/types';

interface EventCardProps {
  event: Event;
  featured?: boolean;
}

const EventCard = ({ event, featured = false }: EventCardProps) => {
  const causeVariant = {
    environment: 'environment',
    health: 'health',
    animal: 'animal',
    education: 'education',
  } as const;

  if (featured) {
    return (
      <div className="relative overflow-hidden rounded-2xl bg-card shadow-soft hover-lift">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative h-64 md:h-auto">
            <img
              src={event.image}
              alt={event.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent md:bg-gradient-to-r" />
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <Badge variant={causeVariant[event.cause]} className="w-fit mb-4">
              {event.causeName}
            </Badge>
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">{event.title}</h3>
            <p className="text-muted-foreground mb-4">{event.shortDescription}</p>
            <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {new Date(event.date).toLocaleDateString('en-IN', {
                  weekday: 'short',
                  day: 'numeric',
                  month: 'short',
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                {event.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4" />
                {event.spotsLeft} spots left
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-display text-xl font-bold">₹{event.donation}</span>
              <Link to={`/events/${event.id}`}>
                <Button variant="hero" size="lg">
                  Register Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      to={event.isCompleted ? `/impact/${event.id}` : `/events/${event.id}`}
      className="group block overflow-hidden rounded-xl bg-card shadow-card hover-lift"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <Badge variant={causeVariant[event.cause]}>{event.causeName}</Badge>
        </div>
        {event.isCompleted && (
          <div className="absolute inset-0 bg-foreground/20 flex items-center justify-center">
            <Badge variant="soft" className="bg-card/90 text-foreground">
              Completed
            </Badge>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
          {event.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {event.shortDescription}
        </p>
        <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-4">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {new Date(event.date).toLocaleDateString('en-IN', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            {event.location.split(',')[0]}
          </span>
        </div>
        {!event.isCompleted ? (
          <div className="flex items-center justify-between">
            <span className="font-display font-bold text-primary">₹{event.donation}</span>
            <span className="text-xs text-muted-foreground">{event.spotsLeft} spots left</span>
          </div>
        ) : (
          <p className="text-xs text-secondary font-medium">{event.impactNote}</p>
        )}
      </div>
    </Link>
  );
};

export default EventCard;
