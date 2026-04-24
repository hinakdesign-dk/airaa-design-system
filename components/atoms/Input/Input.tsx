import React from 'react';
import clsx from 'clsx';
import './Input.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      fullWidth = false,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div
        className={clsx('airaa-input-wrapper', {
          'airaa-input-wrapper--full-width': fullWidth,
        })}
      >
        {label && (
          <label htmlFor={inputId} className="airaa-input-label">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={clsx(
            'airaa-input',
            {
              'airaa-input--error': error,
            },
            className
          )}
          {...props}
        />
        {(error || helperText) && (
          <span
            className={clsx('airaa-input-text', {
              'airaa-input-text--error': error,
            })}
          >
            {error || helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
