'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Send, X, Cpu } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "> system initialized.\n> loading profile AI/ML Expert...\n> connection established. How can I assist you?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now(),
      text: `> ${inputValue.trim()}`,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: inputValue.trim() }),
      });

      const data = await response.json();

      if (data.success) {
        const botMessage: Message = {
          id: Date.now() + 1,
          text: `> ${data.response}`,
          isBot: true,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
      } else {
        const errorMessage: Message = {
          id: Date.now() + 1,
          text: "> ERROR: connection failed. Please try again later.",
          isBot: true,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, errorMessage]);
      }
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: "> FATAL ERROR: network request failed.",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isLoading) {
      handleSendMessage();
    }
  };

  const handleQuickAction = async (action: string) => {
    setInputValue(action);
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-slate-900 border border-cyan-500/50 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.8)] transition-all duration-300 flex items-center justify-center backdrop-blur-md"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
      >
        <div className="relative z-10 text-cyan-400">
          {isOpen ? <X size={28} /> : <Terminal size={28} />}
        </div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 h-[30rem] bg-slate-950/95 border border-cyan-500/30 rounded-lg shadow-2xl overflow-hidden font-mono backdrop-blur-xl"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Terminal Header */}
            <div className="bg-slate-900 border-b border-cyan-500/30 px-4 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2 text-cyan-400 text-xs">
                <Cpu size={14} />
                <span>sailappan_ai_cli v1.0.0</span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
              </div>
            </div>

            {/* Messages Container */}
            <div className="relative z-10 h-[calc(100%-8rem)] overflow-y-auto p-4 space-y-4 text-sm" style={{ scrollbarWidth: 'thin', scrollbarColor: '#22d3ee transparent' }}>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.isBot ? 'text-cyan-400' : 'text-purple-400 justify-end'}`}
                  initial={{ opacity: 0, x: message.isBot ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="max-w-[90%] whitespace-pre-wrap">
                    <p>{message.text}</p>
                    <p className="text-[10px] opacity-40 mt-1 text-slate-500 text-right">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}
              
              {/* Loading indicator */}
              {isLoading && (
                <motion.div
                  className="flex justify-start text-cyan-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="flex items-center space-x-1">
                    <span>{'> processing'}</span>
                    <span className="animate-pulse">_</span>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="absolute bottom-0 w-full bg-slate-900/80 p-3 border-t border-cyan-500/30 backdrop-blur-sm">
              <div className="flex gap-2 mb-2">
                <div className="relative flex-1">
                  <span className="absolute left-3 top-2 text-cyan-500">~$</span>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="execute cmd..."
                    disabled={isLoading}
                    className="w-full pl-8 pr-3 py-2 bg-black/50 border border-slate-700 rounded text-cyan-300 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors text-sm disabled:opacity-50"
                  />
                </div>
                <motion.button
                  onClick={handleSendMessage}
                  disabled={isLoading}
                  whileHover={{ scale: isLoading ? 1 : 1.05 }}
                  whileTap={{ scale: isLoading ? 1 : 0.95 }}
                  className="px-3 py-2 bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 rounded hover:bg-cyan-500/30 transition-all duration-300 disabled:opacity-50"
                >
                  <Send size={16} />
                </motion.button>
              </div>
              
              {/* Quick Actions */}
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                {['skills', 'projects', 'resume', 'contact'].map((action) => (
                  <button
                    key={action}
                    onClick={() => handleQuickAction(action)}
                    disabled={isLoading}
                    className="whitespace-nowrap px-2 py-0.5 bg-slate-800 border border-slate-700 text-slate-400 rounded text-[10px] hover:border-cyan-500/50 hover:text-cyan-400 transition-colors disabled:opacity-50"
                  >
                    ./{action}.sh
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotWidget;
