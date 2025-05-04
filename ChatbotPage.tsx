import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Info, ArrowRight } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatbotPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hi there! I\'m your AI Career Assistant. How can I help you with your career planning today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue);
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };
  
  const generateBotResponse = (userQuery: string): Message => {
    const lowerQuery = userQuery.toLowerCase();
    let response = '';
    
    // Very basic response logic - in a real app, this would be an API call to a backend
    if (lowerQuery.includes('software') || lowerQuery.includes('developer')) {
      response = "Software development is an excellent career path! With an average salary of $105,000 and 22% growth rate, it's both financially rewarding and has strong job security. Would you like me to share more details about the skills needed or the career roadmap?";
    } else if (lowerQuery.includes('data science') || lowerQuery.includes('data scientist')) {
      response = "Data Science is one of the fastest-growing fields with a 31% growth rate and average salary of $120,000. It combines statistics, programming, and domain expertise. Is there something specific about this career path you'd like to know?";
    } else if (lowerQuery.includes('ux') || lowerQuery.includes('design')) {
      response = "UX Design is perfect for those who blend creativity with analytical thinking. The field is growing at 25% with an average salary of $95,000. Would you like to know more about the skills needed or the daily responsibilities?";
    } else if (lowerQuery.includes('skill') || lowerQuery.includes('learn')) {
      response = "Building the right skills is crucial for tech careers. Based on your profile, I recommend focusing on programming fundamentals, problem-solving, and collaborative skills. Would you like personalized learning resources for these areas?";
    } else if (lowerQuery.includes('salary') || lowerQuery.includes('pay') || lowerQuery.includes('money')) {
      response = "Tech careers offer competitive salaries. Entry-level positions typically start at $70,000-$90,000, while experienced professionals can earn $120,000-$160,000+. Would you like to see salary comparisons for specific roles?";
    } else if (lowerQuery.includes('help') || lowerQuery.includes('advice') || lowerQuery.includes('guidance')) {
      response = "I'm here to help with your career questions! I can provide information about different tech career paths, skill requirements, salary expectations, or educational pathways. What specific area would you like guidance on?";
    } else {
      response = "That's an interesting question about your career journey. Could you tell me more about your specific interests and skills so I can provide more tailored guidance?";
    }
    
    return {
      id: (Date.now() + 1).toString(),
      text: response,
      sender: 'bot',
      timestamp: new Date()
    };
  };
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="pt-20 pb-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* Chat Header */}
            <div className="bg-blue-600 p-4 text-white">
              <div className="flex items-center">
                <div className="bg-white p-2 rounded-full mr-3">
                  <Bot size={24} className="text-blue-600" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">AI Career Assistant</h1>
                  <p className="text-blue-100 text-sm">Ask me anything about tech careers</p>
                </div>
              </div>
            </div>
            
            {/* Chat Messages */}
            <div className="h-[500px] overflow-y-auto p-4 bg-gray-50">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div 
                    key={message.id} 
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === 'user' 
                          ? 'bg-blue-600 text-white rounded-tr-none' 
                          : 'bg-white text-gray-800 rounded-tl-none shadow-sm'
                      }`}
                    >
                      <div className="flex items-center mb-1">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${
                          message.sender === 'user' 
                            ? 'bg-blue-700 text-white' 
                            : 'bg-blue-100 text-blue-600'
                        }`}>
                          {message.sender === 'user' ? <User size={12} /> : <Bot size={12} />}
                        </div>
                        <span className={`text-xs ${message.sender === 'user' ? 'text-blue-200' : 'text-gray-500'}`}>
                          {formatTime(message.timestamp)}
                        </span>
                      </div>
                      <p className="whitespace-pre-wrap">{message.text}</p>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-800 rounded-lg rounded-tl-none p-3 max-w-[80%] shadow-sm">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
            </div>
            
            {/* Chat Input */}
            <div className="p-4 border-t">
              <form onSubmit={handleSendMessage} className="flex">
                <input
                  type="text"
                  placeholder="Ask about careers, skills, or education paths..."
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button
                  type="submit"
                  className={`px-4 py-2 bg-blue-600 text-white rounded-r-md transition-colors ${
                    !inputValue.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
                  }`}
                  disabled={!inputValue.trim()}
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
          
          {/* Suggested Questions */}
          <div className="mt-6 bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <Info size={18} className="text-blue-600 mr-2" />
              <h2 className="text-lg font-semibold">Suggested Questions</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <SuggestedQuestion 
                question="What skills do I need to become a software developer?" 
                onClick={() => {
                  setInputValue("What skills do I need to become a software developer?");
                }}
              />
              <SuggestedQuestion 
                question="How much can I earn as a data scientist?" 
                onClick={() => {
                  setInputValue("How much can I earn as a data scientist?");
                }}
              />
              <SuggestedQuestion 
                question="Which tech career has the best work-life balance?" 
                onClick={() => {
                  setInputValue("Which tech career has the best work-life balance?");
                }}
              />
              <SuggestedQuestion 
                question="Do I need a degree for UX design jobs?" 
                onClick={() => {
                  setInputValue("Do I need a degree for UX design jobs?");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface SuggestedQuestionProps {
  question: string;
  onClick: () => void;
}

const SuggestedQuestion: React.FC<SuggestedQuestionProps> = ({ question, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-left p-3 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors flex justify-between items-center"
    >
      <span>{question}</span>
      <ArrowRight size={14} className="text-blue-600" />
    </button>
  );
};

export default ChatbotPage;