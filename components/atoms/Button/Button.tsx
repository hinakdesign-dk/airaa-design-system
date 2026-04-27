import React from 'react';
import clsx from 'clsx';
import './Button.css';

export type ButtonStyle = 'filled' | 'outlined' | 'text';
export type ButtonVariant = 'default' | 'primary' | 'secondary';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  style?: ButtonStyle;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      style = 'filled',
      variant = 'default',
      size = 'medium',
      fullWidth = false,
      loading = false,
      icon,
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
          `airaa-button--${style}-${variant}`,
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
        <span className={clsx('airaa-button__content', { 'airaa-button__content--loading': loading })}>
          {icon && <span className="airaa-button__icon">{icon}</span>}
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';
