"use client"

import { useEffect, useState } from 'react';

interface TypingEffectProps {
  text: string;
  speed?: number;
  delay?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed = 100, delay = 1000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'clearing'>('typing');

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (phase === 'typing') {
      if (index < text.length) {
        timer = setTimeout(() => {
          setDisplayedText((prev) => prev + text[index]);
          setIndex((prev) => prev + 1);
        }, speed);
      } else {
        // Switch to clearing phase after typing is complete
        setPhase('clearing');
        timer = setTimeout(() => {
          setIndex(text.length - 1); // Start from end for clearing effect
        }, delay);
      }
    } else if (phase === 'clearing') {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
        }, speed);
      } else {
        // Switch back to typing phase after clearing is complete
        setPhase('typing');
        setIndex(0);
      }
    }

    return () => clearTimeout(timer);
  }, [index, text, speed, delay, phase, displayedText]);

  return <span>{displayedText}</span>;
};

export default TypingEffect;