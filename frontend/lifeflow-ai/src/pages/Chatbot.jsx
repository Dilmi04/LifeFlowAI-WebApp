import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: 'Hello! I\'m your LifeFlow AI assistant. How can I help you today?',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Quick reply suggestions
  const quickReplies = [
    'Find blood donors nearby',
    'Check my eligibility',
    'Emergency blood request',
    'Donation history',
    'Blood donation FAQs',
    'Contact support'
  ];

  // Scroll to bottom when new message arrives
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle sending message
  const handleSendMessage = async (text = inputText) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: text.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const botResponse = getBotResponse(text.toLowerCase());
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        text: botResponse,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  // Simple bot responses (replace with actual AI/API)
  const getBotResponse = (input) => {
    const responses = {
      'find blood donors': 'I can help you find blood donors nearby. Please share your location or blood type requirement.',
      'eligibility': 'To donate blood, you must be:\n• At least 18 years old\n• Weigh at least 50kg\n• Be in good health\n• Not have donated in the last 56 days\n\nWould you like to check your specific eligibility?',
      'emergency': 'For emergency blood requests, please provide:\n1. Blood type needed\n2. Number of units\n3. Hospital location\n4. Urgency level\n\nI\'ll connect you with available donors immediately.',
      'history': 'To view your donation history, please log in to your donor dashboard. You can see all your past donations, lives saved, and next eligible date.',
      'faq': 'Here are some common questions:\n• How often can I donate?\n• What happens during donation?\n• Are there any side effects?\n• How long does it take?\n\nWhich one would you like to know about?',
      'support': 'You can reach our support team:\n📞 Emergency: 1-800-BLOOD-NOW\n📧 Email: support@lifeflow.ai\n💬 Live chat: Available 24/7\n\nHow can I assist you right now?',
      'hello': 'Hello! How can I help you with blood donation today?',
      'hi': 'Hi there! What can I do for you?',
      'thanks': 'You\'re welcome! Is there anything else I can help you with?',
      'bye': 'Thank you for using LifeFlow AI. Stay safe and keep saving lives! 🩸❤️'
    };

    // Check for keywords
    for (const [key, response] of Object.entries(responses)) {
      if (input.includes(key)) {
        return response;
      }
    }

    // Default response
    return 'I\'m here to help with:\n• Finding blood donors\n• Checking donation eligibility\n• Emergency blood requests\n• Donation information\n• FAQs and support\n\nWhat would you like to know?';
  };

  // Handle Enter key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="chatbot-page">
      {/* Header */}
      <div className="chatbot-header">
        <Link to="/" className="back-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <div className="header-info">
          <div className="bot-avatar">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.38 0-2.68-.31-3.86-.85l-.28-.13-2.85.48.48-2.85-.13-.28C4.31 14.68 4 13.38 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
          </div>
          <div className="header-text">
            <h3>LifeFlow AI Assistant</h3>
            <p className="status">
              <span className="status-dot"></span>
              Online
            </p>
          </div>
        </div>
        <button className="menu-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="1" fill="currentColor" />
            <circle cx="12" cy="5" r="1" fill="currentColor" />
            <circle cx="12" cy="19" r="1" fill="currentColor" />
          </svg>
        </button>
      </div>

      {/* Messages Container */}
      <div className="chatbot-messages">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${message.type === 'user' ? 'message-user' : 'message-bot'}`}
          >
            {message.type === 'bot' && (
              <div className="message-avatar">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
            )}
            <div className="message-content">
              <div className="message-bubble">
                {message.text}
              </div>
              <span className="message-time">{message.time}</span>
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="message message-bot">
            <div className="message-avatar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            <div className="message-content">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Replies */}
      <div className="quick-replies">
        <p className="quick-replies-label">Quick replies:</p>
        <div className="quick-replies-list">
          {quickReplies.map((reply, index) => (
            <button
              key={index}
              className="quick-reply-btn"
              onClick={() => handleSendMessage(reply)}
            >
              {reply}
            </button>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="chatbot-input-area">
        <button className="attach-btn" title="Attach file">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
          </svg>
        </button>
        
        <input
          type="text"
          placeholder="Type your message..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={handleKeyPress}
          className="chat-input"
        />

        <button
          className="send-btn"
          onClick={() => handleSendMessage()}
          disabled={!inputText.trim()}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Chatbot;