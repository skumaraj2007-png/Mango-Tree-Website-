import { MapPin, Phone, MessageCircle, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="location" className="bg-[#1c1917] text-stone-300 pt-24 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16 mb-20 border-b border-stone-800 pb-16">
        
        {/* Address */}
        <div>
          <h3 className="text-white font-heritage text-3xl mb-8">Visit Us</h3>
          <address className="not-italic space-y-6 text-stone-400">
            <p className="flex items-start gap-4">
              <MapPin className="mt-1 shrink-0 text-green-600" size={20} />
              <span className="leading-relaxed">Opposite Police Station, Near Bus Stand,<br />Janatha Plot, Hampi Main Road,<br />Hampi, Karnataka 583239</span>
            </p>
            <p className="text-sm text-green-500 font-medium pl-10">Very close to Virupaksha Temple & Hampi Bazaar</p>
          </address>
          <div className="mt-10">
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-stone-900 bg-stone-200 px-6 py-3 rounded-full text-sm font-bold hover:bg-white transition-colors"
            >
              Get Directions <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-heritage text-3xl mb-8">Contact</h3>
          <div className="space-y-6 text-lg">
            <p className="flex items-center gap-4 border-b border-stone-800 pb-4">
              <Phone className="text-stone-500" size={20} />
              <a href="tel:+919448765213" className="hover:text-white transition-colors">+91 9448765213</a>
            </p>
            <p className="flex items-center gap-4 border-b border-stone-800 pb-4">
              <Phone className="text-stone-500" size={20} />
              <a href="tel:+919845991455" className="hover:text-white transition-colors">+91 9845991455</a>
            </p>
            <p className="flex items-center gap-4">
              <MessageCircle className="text-green-500" size={20} />
              <a href="https://wa.me/918088379983" className="hover:text-green-400 transition-colors">+91 8088379983 (WhatsApp)</a>
            </p>
          </div>
        </div>

        {/* Hours */}
        <div>
          <h3 className="text-white font-heritage text-3xl mb-8">Operating Hours</h3>
          <div className="bg-stone-800/30 p-8 rounded-2xl border border-stone-800/50 backdrop-blur-sm">
            <div className="flex justify-between items-center mb-4 border-b border-stone-700 pb-4">
              <span className="font-bold text-white text-lg">Mon - Sun</span>
              <span className="text-green-400 font-mono">7:30 AM – 9:30 PM</span>
            </div>
            <p className="text-xs text-stone-500 mb-6 italic">*Open till 11:00 PM on busy nights</p>
            <div className="flex gap-2 flex-wrap">
              {['Breakfast', 'Brunch', 'Lunch', 'Dinner'].map(meal => (
                <span key={meal} className="px-3 py-1 bg-stone-700/50 text-stone-300 text-[10px] uppercase tracking-wider rounded-md">
                  {meal}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-stone-600 font-medium uppercase tracking-widest">
        <p>© 2024 Mango Tree Hampi. Crafted with <span className="text-red-800">♥</span></p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-stone-400 transition-colors">Instagram</a>
          <a href="#" className="hover:text-stone-400 transition-colors">Facebook</a>
          <a href="#" className="hover:text-stone-400 transition-colors">TripAdvisor</a>
        </div>
      </div>
    </footer>
  );
}
