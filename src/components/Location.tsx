import { motion } from 'motion/react';
import { MapPin, Clock, Phone, Mail, Instagram, Twitter, Facebook, ArrowRight, Coffee, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Location() {
  const locations = [
    {
      city: "Hibikino Campus",
      address: "University of Kitakyushu, Hibikino 1-1, Wakamatsu-ku",
      hours: "Mon - Fri: 9am - 6pm"
    },
    {
      city: "Lab Headquarters",
      address: "Science & Engineering Building",
      hours: "By Appointment Only"
    }
  ];

  return (
    <section id="locations" className="min-h-screen py-48 px-6 bg-beige/30 dark:bg-zen-dark/30 transition-colors duration-500 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-[0.3em] text-matcha mb-4 block"
            >
              Visit Our Lab
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-serif text-zen-dark dark:text-beige leading-tight mb-12"
            >
              Find Us on <br />
              <span className="italic text-matcha">Campus</span>
            </motion.h2>

            <div className="flex flex-col gap-12">
              {locations.map((loc, i) => (
                <motion.div
                  key={loc.city}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="group cursor-pointer"
                >
                  <h3 className="text-2xl font-serif text-zen-dark dark:text-beige mb-6 group-hover:text-matcha transition-colors">{loc.city}</h3>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 text-zen-dark dark:text-beige font-medium">
                      <MapPin size={18} className="text-matcha" />
                      <span>{loc.address}</span>
                    </div>
                    <div className="flex items-center gap-4 text-zen-dark dark:text-beige font-medium">
                      <Clock size={18} className="text-matcha" />
                      <span>{loc.hours}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl bg-matcha/5"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.119782554581!2d130.7058810764426!3d33.89114692578505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3543c08686666667%3A0x8666666666666666!2sThe%20University%20of%20Kitakyushu%20-%20Hibikino%20Campus!5e0!3m2!1sen!2sjp!4v1712040000000!5m2!1sen!2sjp" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125 opacity-80 hover:opacity-100 transition-opacity duration-500"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-zen-dark text-beige py-32 px-6 transition-all duration-500 overflow-hidden">
      {/* Subtle Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-matcha/10 via-transparent to-caramel/5 pointer-events-none" />
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-matcha/30 to-transparent" />
      <div className="absolute -top-48 -left-48 w-[40rem] h-[40rem] bg-matcha/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-48 -right-48 w-[40rem] h-[40rem] bg-caramel/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-24 mb-32">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-block group mb-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-matcha rounded-2xl flex items-center justify-center text-beige shadow-xl shadow-matcha/20 group-hover:rotate-12 transition-transform duration-500">
                  <Leaf size={28} />
                </div>
                <h2 className="text-4xl font-serif tracking-tighter text-white">LONG'S CAFE</h2>
              </div>
            </Link>
            <p className="text-white font-light leading-relaxed max-w-md mb-12 text-lg text-balance opacity-90">
              The artisan matcha lab of Kitakyushu Hibikino Campus. 
              We blend scientific precision with centuries-old tradition to bring you the perfect cup of experimental matcha.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Facebook, label: 'Facebook' }
              ].map((social) => (
                <motion.a 
                  key={social.label}
                  whileHover={{ y: -5, scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  href="#" 
                  className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-matcha hover:border-matcha transition-all duration-500 group"
                  aria-label={social.label}
                >
                  <social.icon size={20} className="text-white group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-matcha mb-10">Quick Links</h4>
              <ul className="flex flex-col gap-5 text-white font-light opacity-80">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'Menu', path: '/#menu' },
                  { name: 'Wishlist', path: '/wishlist' },
                  { name: 'Experience', path: '/#experience' },
                  { name: 'Locations', path: '/#locations' }
                ].map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="hover:text-matcha transition-all flex items-center gap-3 group text-sm"
                    >
                      <span className="w-0 h-[1px] bg-matcha group-hover:w-4 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-matcha mb-10">Support</h4>
              <ul className="flex flex-col gap-5 text-white font-light opacity-80">
                {[
                  { name: 'Contact Us', path: '/contact' },
                  { name: 'FAQs', path: '/faq' },
                  { name: 'Shipping', path: '/shipping' },
                  { name: 'Returns', path: '/returns' }
                ].map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="hover:text-matcha transition-all flex items-center gap-3 group text-sm"
                    >
                      <span className="w-0 h-[1px] bg-matcha group-hover:w-4 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-matcha mb-10">Hours</h4>
              <div className="bg-white/10 rounded-[2rem] p-8 border border-white/20 backdrop-blur-sm">
                <ul className="flex flex-col gap-6 text-white font-light">
                  <li className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-widest text-white/60">Mon - Fri</span>
                    <span className="text-lg font-serif text-white">9:00am - 6:00pm</span>
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-widest text-white/60">Sat - Sun</span>
                    <span className="text-lg font-serif text-white">Closed (Lab Work)</span>
                  </li>
                </ul>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="flex items-center gap-3 text-matcha">
                    <MapPin size={14} />
                    <span className="text-[10px] uppercase tracking-widest text-white">Hibikino Campus</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] text-white/40 uppercase tracking-[0.3em]">
          <p>© 2026 Long's Cafe. Born in the Lab, Served on Campus.</p>
        </div>
      </div>
    </footer>
  );
}
