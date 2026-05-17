'use client';

import { Zap } from 'lucide-react';

interface AtombergLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  variant?: 'light' | 'dark';
}

const sizes = {
  sm: { icon: 18, box: 'h-8 w-8', text: 'text-sm' },
  md: { icon: 22, box: 'h-10 w-10', text: 'text-base' },
  lg: { icon: 28, box: 'h-12 w-12', text: 'text-lg' },
};

export function AtombergLogo({ size = 'md', showText = true, variant = 'dark' }: AtombergLogoProps) {
  const s = sizes[size];
  const isLight = variant === 'light';

  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        className={`${s.box} inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-atomberg-gold to-atomberg-gold-dark shadow-lg shadow-atomberg-gold/20`}
      >
        <Zap size={s.icon} className="text-atomberg-black fill-atomberg-black" strokeWidth={2.5} />
      </span>
      {showText && (
        <span className="flex flex-col leading-tight">
          <span className={`font-bold tracking-tight ${s.text} ${isLight ? 'text-white' : 'text-atomberg-black'}`}>
            atomberg
          </span>
          <span className={`text-[10px] font-medium uppercase tracking-[0.2em] ${isLight ? 'text-atomberg-gold' : 'text-atomberg-gold-dark'}`}>
            Intelligence
          </span>
        </span>
      )}
    </span>
  );
}
