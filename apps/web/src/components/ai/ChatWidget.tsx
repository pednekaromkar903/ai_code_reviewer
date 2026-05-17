'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { IntelligenceChat } from './IntelligenceChat';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open Atomberg Intelligence"
          className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-atomberg-gold to-atomberg-gold-dark text-atomberg-black shadow-atomberg-lg animate-pulse-gold hover:scale-105 transition-transform duration-200"
        >
          <MessageCircle size={26} strokeWidth={2} />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex h-[min(640px,calc(100vh-3rem))] w-[min(440px,calc(100vw-2rem))] flex-col rounded-2xl overflow-hidden shadow-atomberg-lg border border-atomberg-gold/30">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close chat"
          >
            <X size={18} />
          </button>
          <IntelligenceChat mode="widget" onClose={() => setIsOpen(false)} />
        </div>
      )}
    </>
  );
}
