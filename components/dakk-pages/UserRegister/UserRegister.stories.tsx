import type { Meta, StoryObj } from '@storybook/react';
import { UserRegister } from './UserRegister';

const meta = {
  title: 'DAKK Pages/User Register',
  component: UserRegister,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#000000' },
        { name: 'grey', value: '#141A21' },
      ],
    },
    docs: {
      description: {
        component:
          'DAKK User Register page. A 604×730 dark-theme dialog using the Airaa design system tokens (background/grey-800, primary/main #00A76F, custom/dialog effects). Built from existing atoms — Textfield, DatePicker, Autocomplete (phone & country) and Button.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof UserRegister>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'register',
    onCancel: () => console.log('Cancel clicked'),
    onRegister: (data) => console.log('Register submitted', data),
    onSignIn: () => console.log('Sign in clicked'),
  },
};

export const OTPVerify: Story = {
  name: 'OTP Verify',
  args: {
    variant: 'otp',
    email: 'hina.life@gmail.com',
    onCancel: () => console.log('Cancel clicked'),
    onVerify: (otp) => console.log('Verify submitted', otp),
    onBack: () => console.log('Back clicked'),
    onSignIn: () => console.log('Sign in clicked'),
  },
  parameters: {
    docs: {
      description: {
        story:
          'OTP Verify state of the User Register page. Reuses the same dialog shell as the Default story, replacing the form fields with a single 6-digit OTP textfield. Adds a back button to the left of the DAKK wordmark, and renames the primary footer button from "Register" to "Verify".',
      },
    },
  },
};

export const SuccessVerification: Story = {
  name: 'Success Verification',
  args: {
    variant: 'success',
    onCancel: () => console.log('Cancel clicked'),
    onGoToDashboard: (data) => console.log('Go To Dashboard submitted', data),
    onResetPassword: () => console.log('Reset password clicked'),
    onRegisterRedirect: () => console.log('Register link clicked'),
    onBack: () => console.log('Back clicked'),
  },
  parameters: {
    docs: {
      description: {
        story:
          'Success Verification state of the User Register page. Reuses the OTP variant\'s 604 × 730 card and back-button + DAKK header. Replaces the body with a login form (Email + Password) and a "Forgot Password or Username? CLICK TO RESET" link. Footer primary CTA becomes "Go To Dashboard" and the sign-in line becomes "Need a new account? REGISTER".',
      },
    },
  },
};

export const EmailBodyTemplate: Story = {
  name: 'Email Body Template',
  args: {
    variant: 'email-body',
    emailBodyCode: '123456',
    onCopyCode: (code) => console.log('Copy code clicked', code),
  },
  parameters: {
    docs: {
      description: {
        story:
          'Email Body Template variant of the DAKK User Register page — represents the visual contents of the verification email itself (no footer, no back button, no SIGN IN row). Reuses the 604 × 730 animated-gradient card shell and DAKK header from the other stories. Body layout (all centered): heading "Verify your Email" + description, 50 px gap, "Copy Code" text-button with copy icon, 16 px gap, 6 read-only OTP boxes pre-filled with the code (defaults to 1 2 3 4 5 6), 24 px gap, disclaimer body-2 paragraph in icon/grey-300.',
      },
    },
  },
};
