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
    onCancel: () => console.log('Cancel clicked'),
    onRegister: (data) => console.log('Register submitted', data),
    onSignIn: () => console.log('Sign in clicked'),
  },
};
