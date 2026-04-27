import type { Meta, StoryObj } from '@storybook/react';
import { Textfield } from './Textfield';

const meta = {
  title: 'Atoms/Textfield',
  component: Textfield,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['outlined', 'filled', 'standard'],
      description: 'Visual style type of the textfield',
    },
    variant: {
      control: 'select',
      options: ['textfield', 'password', 'search', 'number', 'otp', 'multiline'],
      description: 'Functional variant of the textfield',
    },
    size: {
      control: 'select',
      options: ['normal', 'small'],
      description: 'Size of the textfield',
    },
    label: {
      control: 'text',
      description: 'Label text displayed for the input',
    },
    helperText: {
      control: 'text',
      description: 'Helper text displayed below input',
    },
    error: {
      control: 'boolean',
      description: 'Error state',
    },
    errorText: {
      control: 'text',
      description: 'Error message to display',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the textfield',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Makes textfield full width of container',
    },
  },
} satisfies Meta<typeof Textfield>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Textfield Stories
export const OutlinedDefault: Story = {
  args: {
    type: 'outlined',
    variant: 'textfield',
    size: 'normal',
    label: 'Label',
    placeholder: 'Placeholder',
  },
};

export const OutlinedSmall: Story = {
  args: {
    type: 'outlined',
    variant: 'textfield',
    size: 'small',
    label: 'Label',
    placeholder: 'Placeholder',
  },
};

export const FilledDefault: Story = {
  args: {
    type: 'filled',
    variant: 'textfield',
    size: 'normal',
    label: 'Label',
    placeholder: 'Placeholder',
  },
};

export const FilledSmall: Story = {
  args: {
    type: 'filled',
    variant: 'textfield',
    size: 'small',
    label: 'Label',
    placeholder: 'Placeholder',
  },
};

export const StandardDefault: Story = {
  args: {
    type: 'standard',
    variant: 'textfield',
    size: 'normal',
    label: 'Label',
    placeholder: 'Placeholder',
  },
};

export const StandardSmall: Story = {
  args: {
    type: 'standard',
    variant: 'textfield',
    size: 'small',
    label: 'Label',
    placeholder: 'Placeholder',
  },
};

// Password Variant Stories
export const OutlinedPassword: Story = {
  args: {
    type: 'outlined',
    variant: 'password',
    size: 'normal',
    label: 'Password',
    placeholder: 'Enter password',
  },
};

export const FilledPassword: Story = {
  args: {
    type: 'filled',
    variant: 'password',
    size: 'normal',
    label: 'Password',
    placeholder: 'Enter password',
  },
};

export const StandardPassword: Story = {
  args: {
    type: 'standard',
    variant: 'password',
    size: 'normal',
    label: 'Password',
    placeholder: 'Enter password',
  },
};

// Search Variant Stories
export const OutlinedSearch: Story = {
  args: {
    type: 'outlined',
    variant: 'search',
    size: 'normal',
    label: 'Search',
    placeholder: 'Search...',
  },
};

export const FilledSearch: Story = {
  args: {
    type: 'filled',
    variant: 'search',
    size: 'normal',
    label: 'Search',
    placeholder: 'Search...',
  },
};

export const StandardSearch: Story = {
  args: {
    type: 'standard',
    variant: 'search',
    size: 'normal',
    label: 'Search',
    placeholder: 'Search...',
  },
};

// Number Variant Stories
export const OutlinedNumber: Story = {
  args: {
    type: 'outlined',
    variant: 'number',
    size: 'normal',
    label: 'Amount',
    placeholder: '0',
  },
};

export const FilledNumber: Story = {
  args: {
    type: 'filled',
    variant: 'number',
    size: 'normal',
    label: 'Amount',
    placeholder: '0',
  },
};

export const StandardNumber: Story = {
  args: {
    type: 'standard',
    variant: 'number',
    size: 'normal',
    label: 'Amount',
    placeholder: '0',
  },
};

// OTP Variant Stories
export const OutlinedOTP: Story = {
  args: {
    type: 'outlined',
    variant: 'otp',
    size: 'normal',
    label: 'Enter OTP',
    placeholder: '000000',
    maxLength: 6,
  },
};

export const FilledOTP: Story = {
  args: {
    type: 'filled',
    variant: 'otp',
    size: 'normal',
    label: 'Enter OTP',
    placeholder: '000000',
    maxLength: 6,
  },
};

export const StandardOTP: Story = {
  args: {
    type: 'standard',
    variant: 'otp',
    size: 'normal',
    label: 'Enter OTP',
    placeholder: '000000',
    maxLength: 6,
  },
};

// Multiline Variant Stories
export const OutlinedMultiline: Story = {
  args: {
    type: 'outlined',
    variant: 'multiline',
    size: 'normal',
    label: 'Description',
    placeholder: 'Enter your message...',
    rows: 4,
  },
};

export const FilledMultiline: Story = {
  args: {
    type: 'filled',
    variant: 'multiline',
    size: 'normal',
    label: 'Description',
    placeholder: 'Enter your message...',
    rows: 4,
  },
};

export const StandardMultiline: Story = {
  args: {
    type: 'standard',
    variant: 'multiline',
    size: 'normal',
    label: 'Description',
    placeholder: 'Enter your message...',
    rows: 4,
  },
};

// State Stories
export const WithHelperText: Story = {
  args: {
    type: 'outlined',
    variant: 'textfield',
    size: 'normal',
    label: 'Email',
    placeholder: 'you@example.com',
    helperText: 'We will never share your email',
  },
};

export const WithError: Story = {
  args: {
    type: 'outlined',
    variant: 'textfield',
    size: 'normal',
    label: 'Email',
    placeholder: 'you@example.com',
    error: true,
    errorText: 'Invalid email address',
    defaultValue: 'invalid-email',
  },
};

export const Disabled: Story = {
  args: {
    type: 'outlined',
    variant: 'textfield',
    size: 'normal',
    label: 'Disabled',
    placeholder: 'Cannot edit',
    disabled: true,
    defaultValue: 'Disabled value',
  },
};

export const Filled: Story = {
  args: {
    type: 'outlined',
    variant: 'textfield',
    size: 'normal',
    label: 'Email',
    defaultValue: 'user@example.com',
  },
};

export const FullWidth: Story = {
  args: {
    type: 'outlined',
    variant: 'textfield',
    size: 'normal',
    label: 'Full Width',
    placeholder: 'This spans the full width',
    fullWidth: true,
  },
};

// Comprehensive Showcase
export const AllOutlinedVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '400px' }}>
      <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 600 }}>Outlined Type</h3>
      
      <div>
        <h4 style={{ margin: '0 0 1rem', fontSize: '1rem', fontWeight: 500 }}>Normal Size</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Textfield type="outlined" variant="textfield" size="normal" label="Textfield" placeholder="Default" />
          <Textfield type="outlined" variant="password" size="normal" label="Password" placeholder="Enter password" />
          <Textfield type="outlined" variant="search" size="normal" label="Search" placeholder="Search..." />
          <Textfield type="outlined" variant="number" size="normal" label="Number" placeholder="0" />
          <Textfield type="outlined" variant="otp" size="normal" label="OTP" placeholder="000000" maxLength={6} />
          <Textfield type="outlined" variant="multiline" size="normal" label="Multiline" placeholder="Enter text..." rows={3} />
        </div>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 1rem', fontSize: '1rem', fontWeight: 500 }}>Small Size</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Textfield type="outlined" variant="textfield" size="small" label="Textfield" placeholder="Default" />
          <Textfield type="outlined" variant="password" size="small" label="Password" placeholder="Enter password" />
          <Textfield type="outlined" variant="search" size="small" label="Search" placeholder="Search..." />
          <Textfield type="outlined" variant="number" size="small" label="Number" placeholder="0" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const AllFilledVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '400px' }}>
      <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 600 }}>Filled Type</h3>
      
      <div>
        <h4 style={{ margin: '0 0 1rem', fontSize: '1rem', fontWeight: 500 }}>Normal Size</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Textfield type="filled" variant="textfield" size="normal" label="Textfield" placeholder="Default" />
          <Textfield type="filled" variant="password" size="normal" label="Password" placeholder="Enter password" />
          <Textfield type="filled" variant="search" size="normal" label="Search" placeholder="Search..." />
          <Textfield type="filled" variant="number" size="normal" label="Number" placeholder="0" />
          <Textfield type="filled" variant="otp" size="normal" label="OTP" placeholder="000000" maxLength={6} />
          <Textfield type="filled" variant="multiline" size="normal" label="Multiline" placeholder="Enter text..." rows={3} />
        </div>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 1rem', fontSize: '1rem', fontWeight: 500 }}>Small Size</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Textfield type="filled" variant="textfield" size="small" label="Textfield" placeholder="Default" />
          <Textfield type="filled" variant="password" size="small" label="Password" placeholder="Enter password" />
          <Textfield type="filled" variant="search" size="small" label="Search" placeholder="Search..." />
          <Textfield type="filled" variant="number" size="small" label="Number" placeholder="0" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const AllStandardVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '400px' }}>
      <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 600 }}>Standard Type</h3>
      
      <div>
        <h4 style={{ margin: '0 0 1rem', fontSize: '1rem', fontWeight: 500 }}>Normal Size</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Textfield type="standard" variant="textfield" size="normal" label="Textfield" placeholder="Default" />
          <Textfield type="standard" variant="password" size="normal" label="Password" placeholder="Enter password" />
          <Textfield type="standard" variant="search" size="normal" label="Search" placeholder="Search..." />
          <Textfield type="standard" variant="number" size="normal" label="Number" placeholder="0" />
          <Textfield type="standard" variant="otp" size="normal" label="OTP" placeholder="000000" maxLength={6} />
          <Textfield type="standard" variant="multiline" size="normal" label="Multiline" placeholder="Enter text..." rows={3} />
        </div>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 1rem', fontSize: '1rem', fontWeight: 500 }}>Small Size</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Textfield type="standard" variant="textfield" size="small" label="Textfield" placeholder="Default" />
          <Textfield type="standard" variant="password" size="small" label="Password" placeholder="Enter password" />
          <Textfield type="standard" variant="search" size="small" label="Search" placeholder="Search..." />
          <Textfield type="standard" variant="number" size="small" label="Number" placeholder="0" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '400px' }}>
      <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 600 }}>All States</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Textfield 
          type="outlined" 
          variant="textfield" 
          size="normal" 
          label="Default" 
          placeholder="Empty field" 
        />
        <Textfield 
          type="outlined" 
          variant="textfield" 
          size="normal" 
          label="Filled" 
          defaultValue="Some text" 
        />
        <Textfield 
          type="outlined" 
          variant="textfield" 
          size="normal" 
          label="With Helper Text" 
          placeholder="Enter text"
          helperText="This is helper text" 
        />
        <Textfield 
          type="outlined" 
          variant="textfield" 
          size="normal" 
          label="Error State" 
          defaultValue="Invalid"
          error
          errorText="This field has an error" 
        />
        <Textfield 
          type="outlined" 
          variant="textfield" 
          size="normal" 
          label="Disabled" 
          defaultValue="Disabled value"
          disabled 
        />
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// Form Example
export const FormExample: Story = {
  render: () => (
    <div style={{ maxWidth: '500px' }}>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600 }}>Sign Up Form</h3>
        
        <Textfield
          type="outlined"
          variant="textfield"
          size="normal"
          label="Full Name"
          placeholder="John Doe"
          fullWidth
        />
        
        <Textfield
          type="outlined"
          variant="textfield"
          size="normal"
          label="Email"
          placeholder="you@example.com"
          helperText="We'll never share your email"
          fullWidth
        />
        
        <Textfield
          type="outlined"
          variant="password"
          size="normal"
          label="Password"
          placeholder="Enter password"
          helperText="Must be at least 8 characters"
          fullWidth
        />
        
        <Textfield
          type="outlined"
          variant="password"
          size="normal"
          label="Confirm Password"
          placeholder="Re-enter password"
          error
          errorText="Passwords do not match"
          fullWidth
        />
        
        <Textfield
          type="outlined"
          variant="number"
          size="normal"
          label="Age"
          placeholder="18"
          fullWidth
        />
        
        <Textfield
          type="outlined"
          variant="multiline"
          size="normal"
          label="Bio"
          placeholder="Tell us about yourself..."
          rows={4}
          fullWidth
        />
      </form>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};
