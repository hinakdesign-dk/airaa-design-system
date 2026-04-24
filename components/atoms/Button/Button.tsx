import React from 'react';
import clsx from 'clsx';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          'airaa-button',
          `airaa-button--${variant}`,
          `airaa-button--${size}`,
          {
            'airaa-button--full-width': fullWidth,
            'airaa-button--loading': loading,
          },
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <span className="airaa-button__spinner" />}
        <span className={clsx({ 'airaa-button__content--loading': loading })}>
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';
