import { motion } from 'motion/react';

const menuItems = [
  {
    title: "The Grand Thali",
    description: "Our most famous offering. A massive platter served with diverse local preparations, rice, sambar, rasam, and dessert.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1500&auto=format&fit=crop",
    tag: "Signature",
    size: "large"
  },
  {
    title: "Banoffee Pie",
    tag: "Cult Favorite",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=600&auto=format&fit=crop",
    size: "small"
  },
  {
    title: "Hummus & Falafel",
    description: "Mediterranean Platter",
    image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=600&auto=format&fit=crop",
    size: "small"
  },
  {
    title: "Wood-Fired Pizza",
    description: "Fresh Basil & Tomato",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=600&auto=format&fit=crop",
    size: "small"
  },
  {
    title: "Hot & Grilled",
    description: "Steaming hot vegetable patties served with fries and grilled veggies.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600&auto=format&fit=crop",
    size: "tall"
  },
  {
    title: "All Day Breakfast",
    description: "Pancakes, Shakshuka & Fresh Juices",
    image: "https://images.unsplash.com/photo-1496042399014-dc73c4f2bde1?q=80&w=1500&auto=format&fit=crop",
    size: "wide"
  },
  {
    title: "Fresh Juices",
    description: "Lemon Nana & Watermelon",
    image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=600&auto=format&fit=crop",
    size: "small"
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 px-6 bg-[#1c1917] text-stone-100 relative overflow-hidden">
      {/* Decorative bg pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-stone-800 pb-8">
          <div>
            <span className="text-green-500 font-bold tracking-widest uppercase text-xs mb-3 block">Pure Vegetarian & Egg Options</span>
            <h2 className="text-5xl md:text-7xl font-heritage text-white">Global Flavors</h2>
          </div>
          <p className="text-stone-400 max-w-md text-sm md:text-base font-light">
            From the streets of Tel Aviv to the kitchens of Karnataka. Our menu is a journey in itself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {menuItems.map((item, index) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-sm overflow-hidden cursor-pointer border border-stone-800 
                ${item.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                ${item.size === 'tall' ? 'md:col-span-1 md:row-span-2' : ''}
                ${item.size === 'wide' ? 'md:col-span-2 md:row-span-1' : ''}
                ${item.size === 'small' ? 'md:col-span-1 md:row-span-1' : ''}
              `}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                {item.tag && (
                  <div className="bg-yellow-600 text-black text-[10px] font-bold px-2 py-1 uppercase tracking-wider inline-block rounded-sm mb-3">
                    {item.tag}
                  </div>
                )}
                <h3 className={`${item.size === 'large' ? 'text-3xl' : 'text-xl'} font-heritage font-bold mb-2 text-white`}>
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-stone-300 text-sm line-clamp-2 max-w-md">
                    {item.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start text-xs font-bold uppercase tracking-wider text-stone-500">
          {['Vegan Options', 'North Indian', 'Italian', 'Israeli'].map(tag => (
            <span key={tag} className="px-3 py-1 border border-stone-800 rounded-full hover:border-green-600 hover:text-green-500 transition-colors cursor-default">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
