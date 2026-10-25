'use client';

import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Moon, Sun, Zap } from 'lucide-react';
import { ThemeMode } from '../../types';

export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const themes: { id: ThemeMode; label: string; icon: React.ReactNode }[] = [
    { id: 'dark', label: 'Dark', icon: <Moon size={14} /> },
    { id: 'light', label: 'Light', icon: <Sun size={14} /> },
    { id: 'neon', label: 'Neon', icon: <Zap size={14} /> },
  ];

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        background: 'var(--bg-surface-elevated)',
        border: '1px solid var(--border-color)',
        borderRadius: '9999px',
        padding: '3px',
        gap: '2px',
      }}
      title="Toggle Aesthetic Mode"
      aria-label="Theme Switcher"
    >
      {themes.map((t) => {
        const isActive = theme === t.id;
        return (
          <button
            key={t.id}
            onClick={() => setTheme(t.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '4px 7px',
              borderRadius: '9999px',
              border: 'none',
              background: isActive ? 'var(--primary)' : 'transparent',
              color: isActive ? '#FFFFFF' : 'var(--text-muted)',
              fontSize: '0.75rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {t.icon}
            <span style={{ display: 'none' }} className="sm-inline">
              {t.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};
