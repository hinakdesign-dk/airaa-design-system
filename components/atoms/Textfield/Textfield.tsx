import React, { useState } from 'react';
import clsx from 'clsx';
import './Textfield.css';

export type TextfieldType = 'outlined' | 'filled' | 'standard';
export type TextfieldVariant = 'textfield' | 'password' | 'search' | 'number' | 'otp' | 'multiline';
export type TextfieldSize = 'normal' | 'small';

export interface TextfieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>, 'size'> {
  type?: TextfieldType;
  variant?: TextfieldVariant;
  size?: TextfieldSize;
  label?: string;
  helperText?: string;
  error?: boolean;
  errorText?: string;
  fullWidth?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  rows?: number;
  maxLength?: number;
}

export const Textfield = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, TextfieldProps>(
  (
    {
      type = 'outlined',
      variant = 'textfield',
      size = 'normal',
      label,
      helperText,
      error = false,
      errorText,
      fullWidth = false,
      startAdornment,
      endAdornment,
      rows = 4,
      maxLength,
      disabled,
      className,
      id,
      value,
      defaultValue,
      onChange,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [internalValue, setInternalValue] = useState(defaultValue || value || '');
    
    const inputId = id || `textfield-${Math.random().toString(36).substr(2, 9)}`;
    const isMultiline = variant === 'multiline';
    const isPassword = variant === 'password';
    const isSearch = variant === 'search';
    const isNumber = variant === 'number';
    const isOtp = variant === 'otp';
    const isFilled = internalValue !== '';
    
    const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };
    
    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setInternalValue(e.target.value);
      onChange?.(e as any);
    };
    
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
    
    const inputType = isPassword ? (showPassword ? 'text' : 'password') : 
                     isNumber ? 'number' : 
                     isSearch ? 'search' : 
                     'text';
    
    const inputElement = isMultiline ? (
      <textarea
        ref={ref as React.ForwardedRef<HTMLTextAreaElement>}
        id={inputId}
        className={clsx(
          'airaa-textfield__input',
          `airaa-textfield__input--${type}`,
          `airaa-textfield__input--${size}`,
          {
            'airaa-textfield__input--error': error,
            'airaa-textfield__input--disabled': disabled,
            'airaa-textfield__input--focused': isFocused,
            'airaa-textfield__input--filled': isFilled,
          }
        )}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        rows={rows}
        maxLength={maxLength}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
      />
    ) : (
      <input
        ref={ref as React.ForwardedRef<HTMLInputElement>}
        id={inputId}
        type={inputType}
        className={clsx(
          'airaa-textfield__input',
          `airaa-textfield__input--${type}`,
          `airaa-textfield__input--${size}`,
          {
            'airaa-textfield__input--error': error,
            'airaa-textfield__input--disabled': disabled,
            'airaa-textfield__input--focused': isFocused,
            'airaa-textfield__input--filled': isFilled,
          }
        )}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        maxLength={maxLength}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
      />
    );
    
    return (
      <div
        className={clsx(
          'airaa-textfield',
          `airaa-textfield--${type}`,
          `airaa-textfield--${variant}`,
          `airaa-textfield--${size}`,
          {
            'airaa-textfield--full-width': fullWidth,
            'airaa-textfield--error': error,
            'airaa-textfield--disabled': disabled,
            'airaa-textfield--focused': isFocused,
            'airaa-textfield--filled': isFilled,
          },
          className
        )}
      >
        <div className="airaa-textfield__container">
          {label && (
            <label 
              htmlFor={inputId} 
              className={clsx(
                'airaa-textfield__label',
                `airaa-textfield__label--${type}`,
                {
                  'airaa-textfield__label--focused': isFocused,
                  'airaa-textfield__label--filled': isFilled,
                  'airaa-textfield__label--error': error,
                }
              )}
            >
              {label}
            </label>
          )}
          
          <div className="airaa-textfield__input-wrapper">
            {(startAdornment || isSearch) && (
              <span className="airaa-textfield__adornment airaa-textfield__adornment--start">
                {isSearch ? (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                ) : startAdornment}
              </span>
            )}
            
            {inputElement}
            
            {(endAdornment || isPassword) && (
              <span className="airaa-textfield__adornment airaa-textfield__adornment--end">
                {isPassword ? (
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="airaa-textfield__password-toggle"
                    tabIndex={-1}
                  >
                    {showPassword ? (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                        <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                      </svg>
                    )}
                  </button>
                ) : endAdornment}
              </span>
            )}
          </div>
        </div>
        
        {(helperText || errorText) && (
          <span
            className={clsx('airaa-textfield__helper-text', {
              'airaa-textfield__helper-text--error': error,
            })}
          >
            {error ? errorText : helperText}
          </span>
        )}
      </div>
    );
  }
);

Textfield.displayName = 'Textfield';
