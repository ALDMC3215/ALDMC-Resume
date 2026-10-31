import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Check saved preference or system preference
    const saved = localStorage.getItem('aldmc-theme') as 'light' | 'dark' | null;
    if (saved === 'dark' || saved === 'light') {
      setTheme(saved);
      document.documentElement.setAttribute('data-theme', saved);
      updateThemeColorMeta(saved);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initial = prefersDark ? 'dark' : 'light';
      setTheme(initial);
      document.documentElement.setAttribute('data-theme', initial);
      updateThemeColorMeta(initial);
    }
  }, []);

  const updateThemeColorMeta = (currentTheme: 'light' | 'dark') => {
    const meta = document.getElementById('theme-color-meta');
    if (meta) {
      meta.setAttribute('content', currentTheme === 'dark' ? '#27211D' : '#F6F0E7');
    }
  };

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('aldmc-theme', next);
    updateThemeColorMeta(next);
  };

  return (
    <button
      onClick={toggleTheme}
      className="btn-icon theme-toggle-btn"
      aria-label={theme === 'light' ? 'تغییر به تم تیره' : 'تغییر به تم روشن'}
      title={theme === 'light' ? 'تغییر به حالت تاریک (Charcoal)' : 'تغییر به حالت روشن (Paper)'}
      type="button"
    >
      {theme === 'light' ? (
        <Moon size={18} strokeWidth={2} className="theme-icon moon-icon" />
      ) : (
        <Sun size={18} strokeWidth={2} className="theme-icon sun-icon text-brand-orange" />
      )}
    </button>
  );
};
