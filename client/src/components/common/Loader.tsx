'use client';

import React from 'react';

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  variant?: 'spinner' | 'pulse' | 'dots';
}

export const Loader: React.FC<LoaderProps> = ({ size = 'md', text, variant = 'spinner' }) => {
  const sizePx = size === 'sm' ? 18 : size === 'lg' ? 44 : 26;

  if (variant === 'pulse') {
    return (
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
        <div
          style={{
            width: sizePx,
            height: sizePx,
            borderRadius: '50%',
            background: 'var(--primary)',
            boxShadow: '0 0 16px var(--primary)',
            animation: 'pulseGlow 1.5s infinite ease-in-out',
          }}
        />
        {text && <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{text}</span>}
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--primary)',
              animation: 'pulseGlow 1s infinite ease-in-out',
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
        {text && <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginLeft: '6px' }}>{text}</span>}
      </div>
    );
  }

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
      <div
        style={{
          width: sizePx,
          height: sizePx,
          border: '3px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '50%',
          borderTopColor: 'var(--primary)',
          animation: 'spinLoader 0.75s linear infinite',
        }}
      />
      {text && <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{text}</span>}
    </div>
  );
};

export const Skeleton: React.FC<{ height?: string; width?: string; borderRadius?: string }> = ({
  height = '20px',
  width = '100%',
  borderRadius = '8px',
}) => {
  return (
    <div
      style={{
        height,
        width,
        borderRadius,
        background: 'linear-gradient(90deg, var(--bg-surface-elevated) 25%, var(--border-glow) 50%, var(--bg-surface-elevated) 75%)',
        backgroundSize: '200% 100%',
        animation: 'spinLoader 2s infinite linear',
        opacity: 0.6,
      }}
    />
  );
};
