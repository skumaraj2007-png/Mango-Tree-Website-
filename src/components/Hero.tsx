import { MapPin, Sparkles, ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenAI: () => void;
}

export default function Hero({ onOpenAI }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 min-h-[95vh] flex items-center bg-stone-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2070&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-60" 
          alt="Mango Tree Vibe"
          referrerPolicy="no-referrer"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto w-full relative z-20 grid md:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="md:col-span-8 text-white"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-stone-100 text-xs font-bold mb-8 tracking-widest uppercase">
            <MapPin className="text-yellow-400" size={14} />
            <span>Hampi's Legendary Kitchen</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-heritage font-bold mb-6 leading-[0.9] tracking-tighter drop-shadow-lg">
            EAT. RELAX. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-green-300">UNWIND.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-stone-200 max-w-lg mb-10 leading-relaxed font-light border-l-2 border-green-500 pl-6 drop-shadow-md">
            A culinary sanctuary amidst the ruins. Experience the iconic "Goa-shack" vibe, wholesome vegetarian global cuisine, and the best Thali in Hampi.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#location" className="w-full sm:w-auto px-8 py-4 bg-green-700 text-white text-sm font-bold rounded-full hover:bg-green-600 transition-all shadow-xl shadow-green-900/30 uppercase tracking-widest flex items-center justify-center gap-2">
              Find Us
            </a>
            <button 
              onClick={onOpenAI}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white text-sm font-bold rounded-full hover:bg-white hover:text-stone-900 transition-all shadow-xl uppercase tracking-widest flex items-center justify-center gap-2 group"
            >
              <Sparkles className="text-yellow-400 group-hover:text-yellow-600" size={18} /> Ask the Chef
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce flex flex-col items-center gap-2 opacity-70 z-20">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ArrowDown size={20} />
      </div>
    </section>
  );
}
