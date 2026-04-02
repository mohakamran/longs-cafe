import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import React, { useState } from 'react';
import Location from '../components/Location';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-beige dark:bg-zen-dark transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold uppercase tracking-[0.4em] text-matcha mb-4 block"
          >
            Get in Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif text-zen-dark dark:text-beige"
          >
            Contact <span className="italic text-caramel">Long's Cafe</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="glass p-10 rounded-[3rem] shadow-xl border border-zen-dark/5 dark:border-white/5">
              <h2 className="text-3xl font-serif text-zen-dark dark:text-beige mb-8">Visit Our Sanctuary</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-matcha/10 rounded-2xl flex items-center justify-center text-matcha flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif text-zen-dark dark:text-beige mb-1">Location</h4>
                    <p className="text-zen-dark/60 dark:text-beige/60 font-light">University of Kitakyushu<br />Hibikino Campus, Kitakyushu, Japan</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-caramel/10 rounded-2xl flex items-center justify-center text-caramel flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif text-zen-dark dark:text-beige mb-1">Email</h4>
                    <p className="text-zen-dark/60 dark:text-beige/60 font-light">hello@longscafe.com</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-matcha/10 rounded-2xl flex items-center justify-center text-matcha flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif text-zen-dark dark:text-beige mb-1">Hours</h4>
                    <p className="text-zen-dark/60 dark:text-beige/60 font-light">Mon - Fri: 9am - 6pm<br />Sat: 10am - 4pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-10 rounded-[3rem] shadow-xl border border-zen-dark/5 dark:border-white/5 bg-matcha text-white">
              <MessageSquare size={40} className="mb-6 opacity-50" />
              <h3 className="text-2xl font-serif mb-4">Campus Events</h3>
              <p className="text-white/70 font-light leading-relaxed mb-8">
                Interested in having Long's Cafe at your campus event? We'd love to bring our lab experiments to your club or department.
              </p>
              <button className="px-8 py-4 bg-white text-matcha rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-beige transition-all">
                Partner With Us
              </button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass p-10 md:p-16 rounded-[3rem] shadow-2xl border border-zen-dark/5 dark:border-white/5"
          >
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-matcha/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Send className="text-matcha" size={40} />
                </div>
                <h2 className="text-3xl font-serif text-zen-dark dark:text-beige mb-4">Message Sent</h2>
                <p className="text-zen-dark/60 dark:text-beige/60 font-light mb-8">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-matcha font-medium hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zen-dark/40 dark:text-beige/40 ml-1">Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Your name"
                      className="w-full px-6 py-4 bg-beige/50 dark:bg-white/5 border border-zen-dark/10 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-matcha/20 transition-all dark:text-beige"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zen-dark/40 dark:text-beige/40 ml-1">Email</label>
                    <input 
                      required
                      type="email" 
                      placeholder="Your email"
                      className="w-full px-6 py-4 bg-beige/50 dark:bg-white/5 border border-zen-dark/10 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-matcha/20 transition-all dark:text-beige"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zen-dark/40 dark:text-beige/40 ml-1">Subject</label>
                  <select className="w-full px-6 py-4 bg-beige/50 dark:bg-white/5 border border-zen-dark/10 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-matcha/20 transition-all dark:text-beige appearance-none">
                    <option>General Inquiry</option>
                    <option>Order Support</option>
                    <option>Wholesale</option>
                    <option>Press</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zen-dark/40 dark:text-beige/40 ml-1">Message</label>
                  <textarea 
                    required
                    rows={6}
                    placeholder="How can we help you?"
                    className="w-full px-6 py-4 bg-beige/50 dark:bg-white/5 border border-zen-dark/10 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-matcha/20 transition-all dark:text-beige resize-none"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-6 bg-zen-dark dark:bg-beige text-white dark:text-zen-dark rounded-[2rem] font-bold tracking-[0.2em] uppercase text-sm hover:bg-matcha hover:text-white dark:hover:bg-matcha dark:hover:text-white transition-all shadow-xl flex items-center justify-center gap-3"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            )}
          </motion.div>
        </div>

        <div className="pt-20 border-t border-zen-dark/5 dark:border-white/5">
          <Location />
        </div>
      </div>
    </div>
  );
}
