'use client';

import { useState } from 'react';
import { useTheme } from '@/hooks/useTheme';

export function GoodVibesToggle() {
  const { theme, toggleTheme, mounted } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    toggleTheme();
    setTimeout(() => setIsAnimating(false), 600);
  };

  if (!mounted) {
    return null;
  }

  const isDark = theme === 'dark';

  return (
    <button
      onClick={handleClick}
      className="good-vibes-toggle"
      aria-label={isDark ? 'Disable good vibes modus' : 'Enable good vibes modus'}
    >
      {/* Heart Icon */}
      <svg
        viewBox="0 0 24 24"
        className={`heart ${isAnimating ? 'animate-heart-beat' : ''}`}
        style={{ width: 20, height: 20 }}
      >
        {/* Heart outline */}
        <path
          className="heart-outline"
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          style={{
            fill: 'none',
            stroke: isDark ? '#FF2A2A' : 'var(--fg-primary)',
            strokeWidth: 2,
            transition: 'stroke 0.3s ease',
          }}
        />
        {/* Heart fill */}
        <path
          className="heart-fill"
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          style={{
            fill: isDark ? '#FF2A2A' : 'var(--fg-primary)',
            opacity: isDark ? 1 : 0,
            transition: 'all 0.3s ease',
          }}
        />
      </svg>

      {/* Label */}
      <span className="label-text hidden sm:inline">
        {isDark ? 'Good vibes on' : 'Enable good vibes'}
      </span>
    </button>
  );
}
