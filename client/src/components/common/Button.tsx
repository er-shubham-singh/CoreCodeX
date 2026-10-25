'use client';

import React from 'react';
import { Loader } from './Loader';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glow';
  loading?: boolean;
  loadingText?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  loading = false,
  loadingText,
  icon,
  iconPosition = 'right',
  fullWidth = false,
  disabled,
  className = '',
  style,
  ...props
}) => {
  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case 'primary':
        return {
          background: 'var(--primary)',
          color: '#FFFFFF',
          border: 'none',
          boxShadow: '0 4px 18px -3px var(--primary)',
        };
      case 'secondary':
        return {
          background: 'var(--bg-surface-elevated)',
          color: 'var(--text-main)',
          border: '1px solid var(--border-color)',
        };
      case 'outline':
        return {
          background: 'transparent',
          color: 'var(--primary)',
          border: '1px solid var(--primary)',
        };
      case 'glow':
        return {
          background: 'var(--gradient-primary)',
          color: '#FFFFFF',
          border: 'none',
          boxShadow: '0 0 25px -4px var(--primary)',
        };
    }
  };

  return (
    <button
      disabled={disabled || loading}
      style={{
        display: fullWidth ? 'flex' : 'inline-flex',
        width: fullWidth ? '100%' : 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        padding: '0.68rem 1.45rem',
        borderRadius: '9999px',
        fontSize: '0.9rem',
        fontWeight: 700,
        fontFamily: 'var(--font-main)',
        cursor: disabled || loading ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        ...getVariantStyles(),
        ...style,
      }}
      className={`btn-pill-${variant} ${className}`}
      {...props}
    >
      {loading ? (
        <>
          <Loader size="sm" />
          <span>{loadingText || 'Processing...'}</span>
        </>
      ) : (
        <>
          {icon && iconPosition === 'left' && icon}
          <span>{children}</span>
          {icon && iconPosition === 'right' && icon}
        </>
      )}
    </button>
  );
};
