import React, { useState } from 'react';
import { Textfield } from '../../atoms/Textfield/Textfield';
import { Button } from '../../atoms/Button/Button';
import './UserRegister.css';

interface CountryEntry {
  value: string;
  label: string;
  flag: string;
  dialCode: string;
}

const COUNTRY_LIST: CountryEntry[] = [
  { value: 'es', label: 'Spain', flag: '🇪🇸', dialCode: '+34' },
  { value: 'us', label: 'United States', flag: '🇺🇸', dialCode: '+1' },
  { value: 'gb', label: 'United Kingdom', flag: '🇬🇧', dialCode: '+44' },
  { value: 'fr', label: 'France', flag: '🇫🇷', dialCode: '+33' },
  { value: 'de', label: 'Germany', flag: '🇩🇪', dialCode: '+49' },
  { value: 'it', label: 'Italy', flag: '🇮🇹', dialCode: '+39' },
  { value: 'in', label: 'India', flag: '🇮🇳', dialCode: '+91' },
  { value: 'jp', label: 'Japan', flag: '🇯🇵', dialCode: '+81' },
  { value: 'au', label: 'Australia', flag: '🇦🇺', dialCode: '+61' },
  { value: 'br', label: 'Brazil', flag: '🇧🇷', dialCode: '+55' },
];

const chevronDownIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M4 6L8 10L12 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const calendarIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M6.5 1.66675V4.16675M13.5 1.66675V4.16675M2.91667 7.50008H17.0833M4.16667 3.33341H15.8333C16.7538 3.33341 17.5 4.07961 17.5 5.00008V16.6667C17.5 17.5872 16.7538 18.3334 15.8333 18.3334H4.16667C3.24619 18.3334 2.5 17.5872 2.5 16.6667V5.00008C2.5 4.07961 3.24619 3.33341 4.16667 3.33341Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const backArrowIcon = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M10 12L6 8L10 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export type UserRegisterVariant = 'register' | 'otp';

export interface UserRegisterProps {
  variant?: UserRegisterVariant;
  email?: string;
  onCancel?: () => void;
  onRegister?: (data: UserRegisterFormData) => void;
  onVerify?: (otp: string) => void;
  onBack?: () => void;
  onSignIn?: () => void;
  className?: string;
}

export interface UserRegisterFormData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  username: string;
  phoneCountry: string;
  phone: string;
  country: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const UserRegister: React.FC<UserRegisterProps> = ({
  variant = 'register',
  email: emailProp,
  onCancel,
  onRegister,
  onVerify,
  onBack,
  onSignIn,
  className,
}) => {
  const isOtp = variant === 'otp';

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [username, setUsername] = useState('');
  const [phoneCountry, setPhoneCountry] = useState<string>('es');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState<string>('es');
  const [email, setEmail] = useState(emailProp ?? '');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otp, setOtp] = useState('');

  const phoneCountryEntry = COUNTRY_LIST.find((c) => c.value === phoneCountry) ?? COUNTRY_LIST[0];
  const countryEntry = COUNTRY_LIST.find((c) => c.value === country) ?? COUNTRY_LIST[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isOtp) {
      onVerify?.(otp);
      return;
    }
    onRegister?.({
      firstName,
      lastName,
      dateOfBirth,
      username,
      phoneCountry,
      phone,
      country,
      email,
      password,
      confirmPassword,
    });
  };

  return (
    <div
      className={`dakk-user-register dakk-user-register--${variant} ${className ?? ''}`}
    >
      <form className="dakk-user-register__card" onSubmit={handleSubmit}>
        <div className="dakk-user-register__body">
          <div className="dakk-user-register__logo-row">
            {isOtp && (
              <button
                type="button"
                className="dakk-user-register__back-btn"
                onClick={onBack}
                aria-label="Go back"
              >
                <span className="dakk-user-register__back-btn-icon">{backArrowIcon}</span>
                <span className="dakk-user-register__back-btn-text">Back</span>
              </button>
            )}
            <span className="dakk-user-register__logo">
              D<span className="dakk-user-register__logo-accent">A</span>KK
            </span>
          </div>

          <div className="dakk-user-register__heading-block">
            <h1 className="dakk-user-register__title">
              {isOtp ? 'Verify your Email' : 'Register to Begin'}
            </h1>
            <p className="dakk-user-register__subtitle">
              {isOtp
                ? 'Enter the 6-digit code to complete process of account creation'
                : "Create your account, choose your LLM provider, and you're ready to use DAKK Assistant"}
            </p>
          </div>

          {isOtp ? (
            <div className="dakk-user-register__otp-block">
              <p className="dakk-user-register__otp-sent-to">
                Code was sent to {emailProp ?? 'hina.life@gmail.com'}
              </p>
              <div className="dakk-user-register__otp-field">
                <Textfield
                  type="outlined"
                  variant="otp"
                  size="normal"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  aria-label="One-time code"
                />
              </div>
            </div>
          ) : (
            <div className="dakk-user-register__fields">
            <div className="dakk-user-register__row">
              <Textfield
                type="outlined"
                size="normal"
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Textfield
                type="outlined"
                size="normal"
                label="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="dakk-user-register__row">
              <Textfield
                type="outlined"
                size="normal"
                placeholder="Date of birth (DD/MM/YY)"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                endAdornment={
                  <span className="dakk-user-register__cal-icon">{calendarIcon}</span>
                }
                className="dakk-user-register__dob"
              />
              <Textfield
                type="outlined"
                size="normal"
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="dakk-user-register__row">
              <div className="dakk-country-field">
                <span className="dakk-country-field__label">Add Phone</span>
                <div className="dakk-country-field__shell">
                  <label className="dakk-country-field__flag-picker" aria-label="Country code">
                    <span className="dakk-country-field__flag">
                      {phoneCountryEntry.flag}
                    </span>
                    <span className="dakk-country-field__chevron-sm">{chevronDownIcon}</span>
                    <select
                      className="dakk-country-field__native-select"
                      value={phoneCountry}
                      onChange={(e) => setPhoneCountry(e.target.value)}
                    >
                      {COUNTRY_LIST.map((c) => (
                        <option key={c.value} value={c.value}>
                          {c.label} ({c.dialCode})
                        </option>
                      ))}
                    </select>
                  </label>
                  <span className="dakk-country-field__divider" aria-hidden="true" />
                  <input
                    type="tel"
                    className="dakk-country-field__input"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    aria-label="Phone number"
                  />
                  <span className="dakk-country-field__chevron-end" aria-hidden="true">
                    {chevronDownIcon}
                  </span>
                </div>
              </div>

              <div className="dakk-country-field">
                <span className="dakk-country-field__label">Choose Country</span>
                <div className="dakk-country-field__shell dakk-country-field__shell--select">
                  <span className="dakk-country-field__flag dakk-country-field__flag--lead">
                    {countryEntry.flag}
                  </span>
                  <span className="dakk-country-field__select-text">
                    {country ? countryEntry.label : 'Select'}
                  </span>
                  <span className="dakk-country-field__chevron-end" aria-hidden="true">
                    {chevronDownIcon}
                  </span>
                  <select
                    className="dakk-country-field__native-select dakk-country-field__native-select--full"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    aria-label="Country"
                  >
                    {COUNTRY_LIST.map((c) => (
                      <option key={c.value} value={c.value}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="dakk-user-register__row dakk-user-register__row--single">
              <Textfield
                type="outlined"
                size="normal"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
              />
            </div>

            <div className="dakk-user-register__row">
              <Textfield
                type="outlined"
                variant="password"
                size="normal"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Textfield
                type="outlined"
                variant="password"
                size="normal"
                label="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          )}
        </div>

        <div className="dakk-user-register__footer">
          <div className="dakk-user-register__actions">
            <Button
              type="button"
              style="outlined"
              variant="secondary"
              size="medium"
              className="dakk-user-register__action-btn"
              onClick={onCancel}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              style="filled"
              variant="primary"
              size="medium"
              className="dakk-user-register__action-btn"
            >
              {isOtp ? 'Verify' : 'Register'}
            </Button>
          </div>
          <p className="dakk-user-register__signin">
            Already have an account?{' '}
            <button
              type="button"
              className="dakk-user-register__signin-link"
              onClick={onSignIn}
            >
              SIGN IN
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

UserRegister.displayName = 'UserRegister';
