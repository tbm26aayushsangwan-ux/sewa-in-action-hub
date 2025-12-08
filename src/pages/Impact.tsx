import Layout from '@/components/layout/Layout';
import EventCard from '@/components/events/EventCard';
import TestimonialCard from '@/components/testimonials/TestimonialCard';
import ImpactStats from '@/components/home/ImpactStats';
import { completedEvents, testimonials } from '@/data';
import treePlanting from '@/assets/event-tree-planting.jpg';
import healthAwareness from '@/assets/event-health-awareness.jpg';
import animalWelfare from '@/assets/event-animal-welfare.jpg';
import education from '@/assets/event-education.jpg';

const initiativeImages = [treePlanting, healthAwareness, animalWelfare, education];

const Impact = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-12 md:py-16 bg-card">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Our Impact
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            See the difference we've made together. Every event, every volunteer, every moment of service adds up.
          </p>
        </div>
      </section>

      {/* Stats */}
      <ImpactStats />

      {/* Photo Mosaic */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
            Moments That Matter
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {initiativeImages.map((img, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-xl ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <img
                  src={img}
                  alt={`SEWA Initiative ${index + 1}`}
                  className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Completed Events */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 md:mb-12">
            Completed Events
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-center">
            What Our Volunteers Say
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            The real impact is measured in the stories of those who participate.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Where Your Contribution Goes */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">
            Where Your Contribution Goes
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Menstrual Health',
                description: 'Sanitary pad distribution and awareness campaigns in underserved communities.',
              },
              {
                title: 'Animal Shelters',
                description: 'Food, medical supplies, and care for rescued animals.',
              },
              {
                title: 'Environmental Care',
                description: 'Saplings, gardening supplies, and conservation efforts.',
              },
              {
                title: 'Education Access',
                description: 'Books, stationery, and learning materials for underprivileged children.',
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-primary-foreground/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Impact;
