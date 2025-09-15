import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋 I can answer a few questions. Please choose one:" },
  ]);

  const toggleChat = () => setIsOpen(!isOpen);

  // Predefined questions and answers
  const faq = {
    "What services do you offer?":
      "We provide Ayurvedic healthcare services, herbal products, and wellness consultations.",
    "Where are you located?":
      "We are located in Varanasi, India. You can also reach us online!",
    "What are your working hours?":
      "Our working hours are Mon–Sat, 9 AM to 6 PM.",
    "How can I contact support?":
      "You can contact us at support@example.com or call +91-9876543210.",
  };

  const handleQuestionClick = (question) => {
    // Show user's question
    setMessages((prev) => [...prev, { from: "user", text: question }]);

    // Show bot's answer
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: faq[question] }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Toggle Button */}
      <button
        onClick={toggleChat}
        className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 h-130 bg-white shadow-xl rounded-2xl flex flex-col mt-4">
          {/* Header */}
          <div className="bg-green-600 text-white p-3 rounded-t-2xl font-semibold">
            Chat with Us
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[75%] ${
                  msg.from === "user"
                    ? "bg-green-100 self-end ml-auto"
                    : "bg-gray-100 self-start mr-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Options (Only shown if last message is from bot) */}
          {messages[messages.length - 1].from === "bot" && (
            <div className="p-3 border-t flex flex-wrap gap-2">
              {Object.keys(faq).map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleQuestionClick(q)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded-full text-xs"
                >
                  {q}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
