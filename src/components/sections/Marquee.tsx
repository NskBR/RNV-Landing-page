'use client';

import { useEffect, useRef } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

export function Marquee() {
  const { tArray } = useTranslation();
  const trackRef = useRef<HTMLDivElement>(null);
  const items = tArray<string>('marquee.items');

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let scrollOffset = 0;
    const speed = 0.5;

    const handleScroll = () => {
      scrollOffset = window.scrollY * speed;
      track.style.transform = `translateX(-${scrollOffset}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (items.length === 0) return null;

  return (
    <div className="marquee-section">
      <div className="marquee-track" ref={trackRef}>
        {/* Repetir várias vezes para garantir que não acabe */}
        {[...Array(4)].map((_, i) => (
          items.map((item, index) => (
            <span key={`${i}-${index}`} className="marquee-item">
              {item}
              <span className="marquee-separator">✦</span>
            </span>
          ))
        ))}
      </div>
    </div>
  );
}
