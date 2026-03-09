import { motion } from 'motion/react';

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1500&auto=format&fit=crop",
    title: "Chill Seating"
  },
  {
    url: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=1500&auto=format&fit=crop",
    title: "Rustic Decor"
  },
  {
    url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1500&auto=format&fit=crop",
    title: "Hampi Views"
  },
  {
    url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1500&auto=format&fit=crop",
    title: "Global Friends"
  },
  {
    url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1500&auto=format&fit=crop",
    title: "Happy Gatherings"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-[#fafaf9]">
      <div className="mb-12 text-center px-6">
        <span className="text-green-700 font-bold tracking-widest uppercase text-xs mb-2 block">The Experience</span>
        <h2 className="text-4xl md:text-5xl font-heritage text-stone-800">Visual Diary</h2>
      </div>
      
      {/* Horizontal Scroll Container */}
      <div className="flex overflow-x-auto no-scrollbar gap-4 px-6 md:px-12 pb-8">
        {galleryImages.map((image, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="min-w-[300px] md:min-w-[400px] aspect-[4/5] rounded-lg overflow-hidden relative group"
          >
            <img 
              src={image.url} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt={image.title}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            <div className="absolute bottom-4 left-4 text-white font-heritage opacity-0 group-hover:opacity-100 transition-opacity">
              {image.title}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
