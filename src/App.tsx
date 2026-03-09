import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Essentials from './components/Essentials';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import { motion } from 'motion/react';

export default function App() {
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col"
    >
      <Navbar />
      <main className="flex-grow">
        <Hero onOpenAI={() => setIsAIChatOpen(true)} />
        <About />
        <Menu />
        <Gallery />
        <Essentials />
      </main>
      <Footer />
      
      <AIChat 
        isOpen={isAIChatOpen} 
        onClose={() => setIsAIChatOpen(false)} 
      />
    </motion.div>
  );
}
