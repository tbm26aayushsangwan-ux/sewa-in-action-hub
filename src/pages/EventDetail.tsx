import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Clock, Users, ArrowLeft, Check } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { upcomingEvents, completedEvents } from '@/data';

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const event = [...upcomingEvents, ...completedEvents].find(e => e.id === id);
  
  const [showRegistration, setShowRegistration] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cohort: '',
    tickets: 1,
  });

  if (!event) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="font-display text-2xl font-bold mb-4">Event Not Found</h1>
          <Link to="/events">
            <Button>Back to Events</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const causeVariant = {
    environment: 'environment',
    health: 'health',
    animal: 'animal',
    education: 'education',
  } as const;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowRegistration(false);
    setShowConfirmation(true);
    toast({
      title: "Registration Successful!",
      description: "Check your email for event details.",
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container mx-auto">
            <Link to="/events" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Events
            </Link>
            <Badge variant={causeVariant[event.cause]} className="mb-4">
              {event.causeName}
            </Badge>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-2">
              {event.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-semibold mb-4">About This Event</h2>
              <p className="text-muted-foreground leading-relaxed mb-6 whitespace-pre-line">
                {event.fullDescription || event.description}
              </p>

              {event.schedule && (
                <>
                  <h3 className="font-display text-xl font-semibold mb-4">Schedule</h3>
                  <ul className="space-y-3 mb-8">
                    {event.schedule.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Clock className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {event.whatToBring && (
                <>
                  <h3 className="font-display text-xl font-semibold mb-4">What to Bring</h3>
                  <ul className="space-y-2 mb-8">
                    {event.whatToBring.map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-xl p-6 shadow-soft sticky top-24">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">
                        {new Date(event.date).toLocaleDateString('en-IN', {
                          weekday: 'long',
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </p>
                      <p className="text-sm text-muted-foreground">{event.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                    <p className="font-medium">{event.location}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-muted-foreground" />
                    <p className="font-medium">
                      {event.spotsLeft} of {event.maxParticipants} spots left
                    </p>
                  </div>
                </div>

                {!event.isCompleted && (
                  <>
                    <div className="border-t border-border pt-6 mb-6">
                      <p className="text-sm text-muted-foreground mb-1">Suggested Donation</p>
                      <p className="font-display text-3xl font-bold">₹{event.donation}</p>
                    </div>
                    <Button 
                      variant="hero" 
                      size="xl" 
                      className="w-full"
                      onClick={() => setShowRegistration(true)}
                    >
                      Register & Pay
                    </Button>
                  </>
                )}

                {event.isCompleted && event.impactNote && (
                  <div className="border-t border-border pt-6">
                    <p className="text-sm text-muted-foreground mb-2">Impact</p>
                    <p className="font-medium text-secondary">{event.impactNote}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Modal */}
      <Dialog open={showRegistration} onOpenChange={setShowRegistration}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Register for {event.title}</DialogTitle>
            <DialogDescription>
              Fill in your details to complete registration.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="cohort">MU Cohort/Role</Label>
              <Input
                id="cohort"
                placeholder="e.g., PGP 2024, Staff"
                value={formData.cohort}
                onChange={(e) => setFormData({ ...formData, cohort: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="tickets">Number of Tickets</Label>
              <Input
                id="tickets"
                type="number"
                min={1}
                max={5}
                value={formData.tickets}
                onChange={(e) => setFormData({ ...formData, tickets: parseInt(e.target.value) })}
                required
              />
            </div>
            <div className="border-t border-border pt-4">
              <p className="text-sm text-muted-foreground mb-2">Total Amount</p>
              <p className="font-display text-2xl font-bold">₹{event.donation * formData.tickets}</p>
            </div>
            <Button type="submit" variant="hero" className="w-full">
              Complete Registration
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Confirmation Modal */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="sm:max-w-md text-center">
          <div className="py-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-primary" />
            </div>
            <DialogTitle className="text-2xl mb-2">You're Registered!</DialogTitle>
            <DialogDescription className="text-base">
              Check your email for event details and meeting point information.
            </DialogDescription>
            <Button 
              variant="hero" 
              className="mt-6"
              onClick={() => {
                setShowConfirmation(false);
                navigate('/my-registrations');
              }}
            >
              View My Registrations
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default EventDetail;
