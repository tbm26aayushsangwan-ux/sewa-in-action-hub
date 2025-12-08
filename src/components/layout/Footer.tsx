import { Link } from 'react-router-dom';
import { Heart, Mail, MapPin, Phone } from 'lucide-react';
import sewaLogo from '@/assets/sewa-logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src={sewaLogo}
                alt="SEWA Club Logo"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <span className="font-display font-bold text-lg">SEWA Club</span>
                <span className="block text-xs opacity-80">Masters' Union</span>
              </div>
            </Link>
            <p className="text-sm opacity-80 leading-relaxed">
              Service in Action. Bringing students together to run, walk, and volunteer for causes that matter.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Events', 'Impact', 'Blog', 'About SEWA'].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase().replace(' ', '-').replace('sewa', 'about')}`}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Causes */}
          <div>
            <h4 className="font-display font-semibold mb-4">Our Causes</h4>
            <ul className="space-y-2">
              {['Environment', "Women's Health", 'Animal Welfare', 'Education & Youth'].map((cause) => (
                <li key={cause}>
                  <span className="text-sm opacity-80">{cause}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 opacity-80" />
                <span className="text-sm opacity-80">
                  Masters' Union, Sector 56, Gurgaon, Haryana
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 opacity-80" />
                <a
                  href="mailto:sewa@mastersunion.org"
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  sewa@mastersunion.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} SEWA Club – Masters' Union. All rights reserved.
          </p>
          <p className="text-sm opacity-70 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 fill-current" /> for the community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
