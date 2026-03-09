import { Fan, Wifi, Accessibility, Dog } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#fafaf9] relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-100/50 -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-heritage text-stone-800 mb-6 leading-tight">
              A Sanctuary <br /> <span className="text-green-700 italic">Amidst the Ruins.</span>
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              Located near the Virupaksha Temple, Mango Tree offers a unique mix of standard seating and traditional floor mats with low tables. It’s a melting pot where backpackers from around the world gather to share stories under the canopy of ancient trees.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700">
                  <Fan size={20} />
                </div>
                <span className="text-stone-700 font-medium text-sm">Open Air & Fans</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700">
                  <Wifi size={20} />
                </div>
                <span className="text-stone-700 font-medium text-sm">Free WiFi</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700">
                  <Accessibility size={20} />
                </div>
                <span className="text-stone-700 font-medium text-sm">Wheelchair Access</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700">
                  <Dog size={20} />
                </div>
                <span className="text-stone-700 font-medium text-sm">Pet Friendly</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-full h-full border border-stone-300 rounded-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop" 
              alt="Ambience" 
              className="rounded-2xl shadow-2xl relative z-10 hover:scale-[1.02] transition-transform duration-700 w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl z-20 max-w-xs border border-stone-100 hidden md:block">
              <p className="font-heritage text-xl italic text-stone-800">"The floor seating is a vibe. Take off your shoes and stay a while."</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
