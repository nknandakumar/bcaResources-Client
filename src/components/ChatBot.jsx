import { useState, useEffect } from 'react';
import ChatbotLogo from "../assets/chatbot.gif"
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Copy, 
  Check, 
  X, 
  Send,
  MessageCircle,
  Bot,
  User,
  Loader
} from 'lucide-react';

// Animated Bot Logo Component
const AnimatedBotLogo = () => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20
    }}
    className="relative"
  >
    <Bot className="w-6 h-6 text-teal-400" />
    <motion.div
      className="absolute inset-0 border-2 border-teal-400 rounded-full"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [1, 0, 1]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  </motion.div>
);

// Enhanced Copy Button with Animation
const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleCopy}
      className="p-1.5 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 transition-colors backdrop-blur-sm"
      title={copied ? 'Copied!' : 'Copy to clipboard'}
    >
      <motion.div
        initial={false}
        animate={{ scale: copied ? 0.8 : 1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-400" />
        ) : (
          <Copy className="w-4 h-4 text-gray-300" />
        )}
      </motion.div>
    </motion.button>
  );
};

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [conversation, setConversation] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    const newPrompt = prompt.trim();
    setPrompt('');
    
    setConversation(prev => [...prev, {
      type: 'user',
      content: newPrompt,
    }]);

    try {
      const response = await axios.post('http://localhost:3000/generate', { prompt: newPrompt });
      
      if (response.data.text) {
        setConversation(prev => [...prev, {
          type: 'ai',
          content: response.data.text,
          status: 'success'
        }]);
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'An error occurred. Please try again.';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8  right-4 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className=" w-full max-w-sm sm:w-96 bg-gray-900/95 backdrop-blur-lg rounded-xl shadow-xl border border-gray-800/50"
          >
            {/* Header */}
            <div className="p-4  border-b border-gray-800/50">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <AnimatedBotLogo />
                  <h2 className="text-lg font-medium text-gray-100">
                    AI Assistant
                  </h2>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-gray-800/50 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400 hover:text-gray-200" />
                </motion.button>
              </div>
            </div>

            {/* Messages Container */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {conversation.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-3 rounded-lg flex items-start gap-2 ${
                    message.type === 'user' 
                      ? 'bg-teal-500/20 text-white'
                      : 'bg-gray-800/50 text-gray-100'
                  }`}>
                    {message.type === 'user' ? (
                      <User className="w-5 h-5 text-teal-400 mt-1" />
                    ) : (
                      <Bot className="w-5 h-5 text-teal-400 mt-1" />
                    )}
                    <div className="flex-1 text-sm leading-relaxed">
                      {message.content}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <div className="flex items-center gap-2 p-3 bg-gray-800/50 rounded-lg w-fit">
                  <Bot className="w-5 h-5 text-teal-400" />
                  <Loader className="w-4 h-4 text-gray-400 animate-spin" />
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-800/50">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className="flex-1 p-2 rounded-lg bg-gray-800/50 text-gray-100 placeholder-gray-400 border border-gray-700/50 focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 focus:outline-none text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isLoading || !prompt.trim()}
                  className="p-2 bg-teal-500/20 rounded-lg hover:bg-teal-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-5 h-5 text-teal-400" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-indigo-500 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-1
        00 shadow-lg hover:bg-teal-500/30 transition-colors border border-teal-500/30"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
        <>
        
          <img className=' rounded-full  ' src={ChatbotLogo}/>
        </> 
        )}
      </motion.button>
    </div>
  );
}

export default Chatbot;

//http://localhost:3000/generate     <MessageCircle className="w-6 h-6" />