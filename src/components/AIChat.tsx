import React, { useState, useRef, useEffect } from 'react';
import { ChefHat, X, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'ai';
  text: string;
}

interface AIChatProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AIChat({ isOpen, onClose }: AIChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'ai',
      text: "Namaste! 🙏 Welcome to Mango Tree. I can help you pick the perfect meal. Tell me what you're craving, or mention your dietary needs (Vegan? Spicy?), and I'll suggest something delicious!"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          {
            role: 'user',
            parts: [{ text: `You are the Chef/Concierge for "Mango Tree" restaurant in Hampi. 
            Context:
            - Location: Opposite Police Station, Janatha Plot, Hampi. Near Virupaksha Temple.
            - Vibe: Open-air, floor seating with mats, backpacker sanctuary, rustic, heritage.
            - Cuisine: Pure Vegetarian & Egg options. Global flavors (Indian, Israeli, Italian, Continental).
            - Signature Dishes: South Indian Thali, Banoffee Pie, Hummus & Falafel, Wood-Fired Pizza, Sizzlers, All Day Breakfast (Pancakes, Shakshuka).
            - Essentials: Cash only (UPI/Cards unreliable), No shoes inside, Vegan friendly, No restrooms inside (nearby), Busy hours (12:30 PM lunch).
            - Hours: 7:30 AM - 9:30 PM (sometimes 11 PM).
            
            User Question: ${userText}` }]
          }
        ],
        config: {
          systemInstruction: "You are a friendly, helpful, and knowledgeable Chef/Concierge for Mango Tree Hampi. Keep responses concise, warm, and helpful. Use emojis like 🙏, 🍃, 🥭 where appropriate. Always recommend signature dishes if relevant."
        }
      });

      const aiText = response.text || "I'm sorry, I couldn't process that. Please try again!";
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      console.error("AI Chat Error:", error);
      setMessages(prev => [...prev, { role: 'ai', text: "Namaste! I'm having a bit of trouble connecting right now. Please try again in a moment." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestions = [
    "Best dish for 2 people?",
    "I am Vegan, what to eat?",
    "Something sweet?",
    "Where are you located?"
  ];

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center px-4 pb-4 sm:p-0">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm" 
              onClick={onClose}
            />
            
            {/* Modal Panel */}
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden border border-stone-200 flex flex-col max-h-[85vh]"
            >
              {/* Header */}
              <div className="bg-green-700 p-4 sm:p-6 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
                    <ChefHat size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-heritage font-bold text-xl leading-tight">Menu Genie</h3>
                    <p className="text-green-100 text-xs">Your AI Concierge for Mango Tree</p>
                  </div>
                </div>
                <button onClick={onClose} className="text-green-100 hover:text-white transition-colors">
                  <X size={24} />
                </button>
              </div>

              {/* Chat Area */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-stone-50 min-h-[300px]">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold border ${msg.role === 'ai' ? 'bg-green-100 text-green-700 border-green-200' : 'bg-stone-200 text-stone-600 border-stone-300'}`}>
                      {msg.role === 'ai' ? 'AI' : 'You'}
                    </div>
                    <div className={`p-4 rounded-2xl shadow-sm border text-sm leading-relaxed max-w-[85%] ${msg.role === 'ai' ? 'bg-white border-stone-100 text-stone-600 rounded-tl-none' : 'bg-green-600 border-green-700 text-white rounded-tr-none'}`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center text-green-700 text-xs font-bold border border-green-200">AI</div>
                    <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-stone-100 text-stone-500 text-sm max-w-[85%] flex items-center gap-1">
                      <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 bg-white border-t border-stone-100">
                <form onSubmit={handleSend} className="relative">
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    disabled={isLoading}
                    className="w-full bg-stone-50 text-stone-800 placeholder-stone-400 border border-stone-200 rounded-full py-3 pl-5 pr-12 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all text-sm"
                    placeholder="e.g. I'm vegan and want something spicy..."
                  />
                  <button 
                    type="submit" 
                    disabled={isLoading || !input.trim()}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send size={14} />
                  </button>
                </form>
                <div className="flex gap-2 mt-3 overflow-x-auto no-scrollbar pb-1">
                  {suggestions.map(suggestion => (
                    <button 
                      key={suggestion}
                      onClick={() => {
                        setInput(suggestion);
                        // We can't easily trigger handleSend here without a ref or useEffect, 
                        // so we just set input and let user click send or press enter
                      }}
                      className="whitespace-nowrap px-3 py-1.5 bg-stone-100 hover:bg-green-50 hover:text-green-700 text-stone-500 text-xs rounded-full border border-stone-200 transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button 
          onClick={() => isOpen ? onClose() : onClose()} // This is a bit hacky, but App.tsx will handle the state
          className="w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-105 group border-2 border-white/20"
        >
          <Sparkles className="group-hover:animate-pulse" size={24} />
        </button>
      </div>
    </>
  );
}
