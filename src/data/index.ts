import heroRun from '@/assets/hero-run.jpg';
import treePlanting from '@/assets/event-tree-planting.jpg';
import healthAwareness from '@/assets/event-health-awareness.jpg';
import animalWelfare from '@/assets/event-animal-welfare.jpg';
import education from '@/assets/event-education.jpg';
import { Event, BlogPost, Testimonial, TeamMember } from '@/types';

export const upcomingEvents: Event[] = [
  {
    id: '1',
    title: 'Run For A Cause',
    shortDescription: '5K community run to support menstrual health awareness',
    description: 'Join us for a morning 5K run through the campus and surrounding areas. All proceeds go towards distributing sanitary products to underprivileged communities.',
    fullDescription: `Join SEWA Club for our flagship 5K charity run! This isn't just about running—it's about taking steps towards creating a more equitable world.

Every registration contributes to our menstrual health initiative, which provides sanitary products and education to women and girls in underserved communities.

Whether you're a seasoned runner or just starting out, everyone is welcome. Walk, jog, or run—what matters is that you're part of the movement.`,
    date: '2025-01-15',
    time: '6:00 AM',
    location: 'Masters\' Union Campus',
    cause: 'health',
    causeName: "Women's Health",
    image: healthAwareness,
    donation: 500,
    maxParticipants: 200,
    spotsLeft: 78,
    isCompleted: false,
    schedule: [
      '5:30 AM - Registration & Warm-up',
      '6:00 AM - Run begins',
      '7:30 AM - Cool down & stretching',
      '8:00 AM - Breakfast & networking',
    ],
    whatToBring: [
      'Comfortable running shoes',
      'Water bottle',
      'Sunscreen',
      'Positive energy!',
    ],
  },
  {
    id: '2',
    title: 'Green Campus Drive',
    shortDescription: 'Plant 500 trees across campus to build a greener future',
    description: 'Be part of our ambitious goal to plant 500 trees across and around the campus. Each sapling represents hope for a sustainable tomorrow.',
    fullDescription: `This Earth Day, SEWA Club invites you to leave a lasting green legacy on our campus. Our goal is ambitious but achievable: plant 500 trees in a single day!

Each tree you plant is more than just a sapling—it's a promise to future generations. These trees will provide shade, clean air, and habitat for wildlife for decades to come.

No gardening experience needed! Our team of experts will guide you through the entire process, from preparing the soil to planting your very own tree.`,
    date: '2025-02-22',
    time: '7:00 AM',
    location: 'Various locations around campus',
    cause: 'environment',
    causeName: 'Environment',
    image: treePlanting,
    donation: 300,
    maxParticipants: 150,
    spotsLeft: 45,
    isCompleted: false,
    schedule: [
      '6:30 AM - Gather at main quad',
      '7:00 AM - Brief orientation',
      '7:30 AM - Disperse to planting sites',
      '11:00 AM - Celebration & refreshments',
    ],
    whatToBring: [
      'Gardening gloves (extras available)',
      'Comfortable clothes you don\'t mind getting dirty',
      'Hat and sunscreen',
      'Reusable water bottle',
    ],
  },
  {
    id: '3',
    title: 'Paws & Care',
    shortDescription: 'Volunteer day at the local animal shelter',
    description: 'Spend a heartwarming day at our partner animal shelter, helping care for rescued animals and learning about animal welfare.',
    fullDescription: `Animals need love too! Join us for a day of giving back to our four-legged friends at the local animal shelter.

You'll have the opportunity to feed, groom, and play with rescued dogs and cats. More importantly, you'll be providing them with much-needed human interaction and socialization.

Our partner shelter is also looking for foster families and potential adopters—who knows, you might just find your new best friend!`,
    date: '2025-03-08',
    time: '9:00 AM',
    location: 'Gurgaon Animal Shelter',
    cause: 'animal',
    causeName: 'Animal Welfare',
    image: animalWelfare,
    donation: 400,
    maxParticipants: 40,
    spotsLeft: 12,
    isCompleted: false,
    schedule: [
      '9:00 AM - Arrival and orientation',
      '9:30 AM - Feeding and cleaning',
      '11:00 AM - Grooming session',
      '12:30 PM - Lunch break',
      '1:30 PM - Playtime with animals',
      '3:00 PM - Wrap up',
    ],
    whatToBring: [
      'Old clothes (expect fur!)',
      'Closed-toe shoes',
      'Any pet supplies to donate',
    ],
  },
  {
    id: '4',
    title: 'Teach & Transform',
    shortDescription: 'Education outreach program for underprivileged children',
    description: 'Spend an afternoon teaching and mentoring children from local communities. Share your knowledge and inspire the next generation.',
    fullDescription: `Education is the most powerful weapon we can use to change the world. This month, SEWA Club partners with local schools to bring quality education and mentorship to children who need it most.

You don't need to be a teacher—just bring your passion for sharing knowledge. Whether it's math, science, English, or life skills, your expertise matters.

These sessions create lasting bonds between students and mentors. Many of our past volunteers continue to stay in touch with the children they've mentored.`,
    date: '2025-03-22',
    time: '2:00 PM',
    location: 'Government School, Sector 45',
    cause: 'education',
    causeName: 'Education & Youth',
    image: education,
    donation: 250,
    maxParticipants: 30,
    spotsLeft: 18,
    isCompleted: false,
    schedule: [
      '2:00 PM - Arrival and setup',
      '2:30 PM - Interactive learning session',
      '4:00 PM - Fun activities and games',
      '5:00 PM - Snacks and farewell',
    ],
    whatToBring: [
      'Educational materials/books to donate',
      'Stationery items',
      'Creative activity supplies',
    ],
  },
];

export const completedEvents: Event[] = [
  {
    id: '101',
    title: 'Diwali for All',
    shortDescription: 'Celebrated Diwali with orphanage children',
    description: 'Spread light and joy by celebrating Diwali with children at the local orphanage.',
    date: '2024-11-01',
    time: '4:00 PM',
    location: 'Hope Orphanage, Gurgaon',
    cause: 'education',
    causeName: 'Education & Youth',
    image: education,
    donation: 0,
    maxParticipants: 50,
    spotsLeft: 0,
    isCompleted: true,
    impactNote: '50 children celebrated, 200+ gifts distributed',
  },
  {
    id: '102',
    title: 'Monsoon Tree Drive',
    shortDescription: 'Planted 200 saplings during monsoon season',
    description: 'Took advantage of the monsoon season to plant 200 saplings across the campus.',
    date: '2024-08-15',
    time: '7:00 AM',
    location: 'Masters\' Union Campus',
    cause: 'environment',
    causeName: 'Environment',
    image: treePlanting,
    donation: 0,
    maxParticipants: 80,
    spotsLeft: 0,
    isCompleted: true,
    impactNote: '200 trees planted, 95% survival rate',
  },
  {
    id: '103',
    title: 'Period Positivity',
    shortDescription: 'Menstrual health awareness in rural communities',
    description: 'Conducted awareness sessions and distributed sanitary products in nearby villages.',
    date: '2024-09-20',
    time: '10:00 AM',
    location: 'Sohna Village',
    cause: 'health',
    causeName: "Women's Health",
    image: healthAwareness,
    donation: 0,
    maxParticipants: 25,
    spotsLeft: 0,
    isCompleted: true,
    impactNote: 'Reached 150+ women, 500 pads distributed',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Why Sewa Matters: The Power of Student-Led Service',
    excerpt: 'Discover how student-led initiatives are creating ripples of positive change in communities across India. When young minds unite for a cause, magic happens.',
    category: 'Social Impact',
    readTime: '5 min read',
    date: '2024-12-01',
    image: heroRun,
    author: 'SEWA Core Team',
  },
  {
    id: '2',
    title: 'Running for a Cause: Turning Kilometers into Kindness',
    excerpt: 'Our charity runs aren\'t just about fitness—they\'re about fundraising, awareness, and building a community that cares. Here\'s how your steps make a difference.',
    category: 'Awareness',
    readTime: '4 min read',
    date: '2024-11-15',
    image: healthAwareness,
    author: 'Running Committee',
  },
  {
    id: '3',
    title: 'How Small Acts of Care Transform Animal Welfare',
    excerpt: 'From shelter visits to adoption drives, learn how SEWA Club is making a difference in the lives of stray and abandoned animals in our community.',
    category: 'Student Stories',
    readTime: '6 min read',
    date: '2024-11-01',
    image: animalWelfare,
    author: 'Animal Welfare Lead',
  },
  {
    id: '4',
    title: 'Pads, Dignity, and Conversation: Rethinking Menstrual Health',
    excerpt: 'Breaking taboos one conversation at a time. Our journey in normalizing menstrual health discussions and ensuring access to hygiene products for all.',
    category: 'Social Impact',
    readTime: '7 min read',
    date: '2024-10-15',
    image: healthAwareness,
    author: 'Health Awareness Team',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    cohort: 'PGP 2024',
    quote: 'Running for a cause made campus feel more connected. SEWA showed me that small actions, when done together, create big impact.',
  },
  {
    id: '2',
    name: 'Arjun Mehta',
    cohort: 'PGP 2023',
    quote: 'Teaching at the community school was the highlight of my MBA journey. The children\'s enthusiasm reminded me why education matters.',
  },
  {
    id: '3',
    name: 'Sneha Reddy',
    cohort: 'PGP 2024',
    quote: 'The tree planting drive wasn\'t just about saplings—it was about leaving a legacy. I drive past those trees every day and smile.',
  },
  {
    id: '4',
    name: 'Rahul Kumar',
    cohort: 'PGP 2023',
    quote: 'Volunteering at the animal shelter changed my perspective completely. I ended up adopting my best friend, Bruno!',
  },
  {
    id: '5',
    name: 'Ananya Singh',
    cohort: 'PGP 2024',
    quote: 'SEWA gave me purpose beyond case studies. The menstrual health awareness campaign was challenging but incredibly rewarding.',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Vikram Patel',
    role: 'Club President',
    image: '/placeholder.svg',
  },
  {
    id: '2',
    name: 'Meera Iyer',
    role: 'Vice President',
    image: '/placeholder.svg',
  },
  {
    id: '3',
    name: 'Aditya Joshi',
    role: 'Events Head',
    image: '/placeholder.svg',
  },
  {
    id: '4',
    name: 'Kavya Nair',
    role: 'Outreach Lead',
    image: '/placeholder.svg',
  },
];

export const impactStats = {
  volunteers: 500,
  events: 25,
  hoursOfService: 2000,
  livesImpacted: 5000,
};
