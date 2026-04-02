import { motion } from 'motion/react';
import { Truck, Globe, Clock, ShieldCheck, Package, MapPin } from 'lucide-react';

const shippingMethods = [
  {
    title: "Standard Shipping",
    time: "3-5 Business Days",
    price: "$5.00 (Free over $50)",
    icon: <Truck size={24} />,
    color: "text-matcha",
    bg: "bg-matcha/10"
  },
  {
    title: "Expedited Shipping",
    time: "1-2 Business Days",
    price: "$15.00",
    icon: <Clock size={24} />,
    color: "text-caramel",
    bg: "bg-caramel/10"
  },
  {
    title: "International Shipping",
    time: "7-14 Business Days",
    price: "Calculated at Checkout",
    icon: <Globe size={24} />,
    color: "text-caramel",
    bg: "bg-caramel/10"
  }
];

export default function ShippingPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-beige dark:bg-zen-dark transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold uppercase tracking-[0.4em] text-matcha mb-4 block"
          >
            Logistics
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif text-zen-dark dark:text-beige"
          >
            Shipping <span className="italic text-caramel">Information</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          {shippingMethods.map((method, i) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="glass p-10 rounded-[3rem] shadow-xl border border-zen-dark/5 dark:border-white/5 relative overflow-hidden group"
            >
              <div className={`w-16 h-16 ${method.bg} ${method.color} rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110`}>
                {method.icon}
              </div>
              <h3 className="text-2xl font-serif text-zen-dark dark:text-beige mb-4">{method.title}</h3>
              <div className="space-y-2">
                <p className="text-sm text-zen-dark/60 dark:text-beige/60 font-medium">{method.time}</p>
                <p className="text-sm text-matcha font-bold">{method.price}</p>
              </div>
              <div className="mt-8 pt-8 border-t border-zen-dark/5 dark:border-white/5">
                <p className="text-xs text-zen-dark/40 dark:text-beige/40 leading-relaxed">
                  Orders placed before 2pm PST are processed the same business day.
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="flex gap-8">
              <div className="w-14 h-14 bg-matcha/10 rounded-2xl flex items-center justify-center text-matcha flex-shrink-0">
                <ShieldCheck size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-serif text-zen-dark dark:text-beige mb-4">Secure Packaging</h3>
                <p className="text-zen-dark/60 dark:text-beige/60 font-light leading-relaxed">
                  Our matcha fusions are packed in airtight, UV-protected containers to ensure maximum freshness upon arrival. We use eco-friendly, recyclable materials for all our shipping.
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="w-14 h-14 bg-matcha/10 rounded-2xl flex items-center justify-center text-matcha flex-shrink-0">
                <Package size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-serif text-zen-dark dark:text-beige mb-4">Order Tracking</h3>
                <p className="text-zen-dark/60 dark:text-beige/60 font-light leading-relaxed">
                  Once your order ships, you'll receive a confirmation email with a tracking number. You can monitor your package's journey from our lab to your doorstep.
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="w-14 h-14 bg-caramel/10 rounded-2xl flex items-center justify-center text-caramel flex-shrink-0">
                <MapPin size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-serif text-zen-dark dark:text-beige mb-4">Local Pickup</h3>
                <p className="text-zen-dark/60 dark:text-beige/60 font-light leading-relaxed">
                  Live near one of our locations? Choose "Local Pickup" at checkout to collect your order for free within 2 hours of placement.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?auto=format&fit=crop&q=80&w=1200" 
              alt="Shipping Process" 
              className="w-full h-full object-cover grayscale opacity-40 dark:opacity-20"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-matcha/20 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="glass p-12 rounded-[3rem] shadow-2xl backdrop-blur-xl border border-white/20 text-center max-w-sm">
                <h3 className="text-3xl font-serif text-zen-dark dark:text-beige mb-4">Global Reach</h3>
                <p className="text-sm text-zen-dark/60 dark:text-beige/60 font-light leading-relaxed">
                  We ship our artisan collections to matcha enthusiasts worldwide.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
