import { Banknote, Footprints, Vegan, Clock, AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';

const tips = [
  {
    icon: <Banknote className="text-red-600" />,
    bg: "bg-red-50",
    title: "Cash is King",
    description: "We primarily accept Cash. Network issues in Hampi often make UPI/Cards unreliable. Please carry sufficient cash."
  },
  {
    icon: <Footprints className="text-orange-600" />,
    bg: "bg-orange-50",
    title: "Shoe Policy",
    description: "To maintain hygiene in our floor-seating areas, you will be required to leave your footwear outside the restaurant."
  },
  {
    icon: <Vegan className="text-green-600" />,
    bg: "bg-green-50",
    title: "Vegan Friendly",
    description: "The kitchen is very accommodating. Simply mention \"No milk/ghee/butter\" and we can veganize most Indian dishes."
  },
  {
    icon: <Clock className="text-blue-600" />,
    bg: "bg-blue-50",
    title: "Peak Hours",
    description: "We get crowded! For lunch, arrive by 12:30 PM to secure a spot. Average cost is ₹350–₹500 for two."
  }
];

export default function Essentials() {
  return (
    <section id="essentials" className="py-24 px-6 bg-[#f0fdf4] border-t border-green-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heritage text-green-900 mb-4">Traveler Essentials</h2>
          <p className="text-green-800/70 font-light">Important things to know before you visit.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {tips.map((tip, index) => (
            <motion.div 
              key={tip.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl border border-green-100 flex gap-5 items-start shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`${tip.bg} p-3 rounded-full shrink-0`}>
                {tip.icon}
              </div>
              <div>
                <h4 className="font-bold text-stone-800 text-lg mb-2 font-heritage">{tip.title}</h4>
                <p className="text-sm text-stone-600 leading-relaxed">{tip.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Warning strip */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 bg-stone-50 border border-stone-200 rounded-lg p-4 flex items-center justify-center gap-3 text-stone-600 text-sm font-medium"
        >
          <AlertTriangle className="text-orange-500" size={18} />
          <span>Note: Restroom facilities are not available inside the premises but are located nearby.</span>
        </motion.div>
      </div>
    </section>
  );
}
