"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import axios from "axios";
import { useAuthStore } from "@/hooks/useAuth";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: string, content: string}[]>([]);
  const [input, setInput] = useState("");
  const token = useAuthStore((state) => state.token);
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = { role: "user", content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    try {
      const res = await axios.post(`${API_URL}/ai/query`, { query: input }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessages(prev => [...prev, { role: "ai", content: res.data.summary }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: "ai", content: "Sorry, I couldn't process that." }]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="flex h-[500px] w-[400px] flex-col rounded-lg bg-white shadow-2xl">
          <div className="flex items-center justify-between border-b p-4 bg-slate-900 text-white rounded-t-lg">
            <span className="font-semibold">Atomberg AI Assistant</span>
            <button onClick={() => setIsOpen(false)}><X size={20} /></button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-lg p-3 text-sm ${m.role === 'user' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-800'}`}>
                  {m.content}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t p-4 flex gap-2">
            <input
              type="text"
              className="flex-1 rounded-md border p-2 text-sm outline-none focus:border-indigo-500"
              placeholder="Ask about your goals..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend} className="bg-slate-900 text-white p-2 rounded-md hover:bg-slate-800">
              <Send size={18} />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white shadow-lg hover:bg-slate-800"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
}
