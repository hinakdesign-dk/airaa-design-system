import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    style: {
      control: 'select',
      options: ['filled', 'outlined', 'text'],
      description: 'Button style type',
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary'],
      description: 'Button color variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Button size',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Makes button full width of container',
    },
    loading: {
      control: 'boolean',
      description: 'Shows loading spinner and disables button',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FilledDefault: Story = {
  args: {
    children: 'Button',
    style: 'filled',
    variant: 'default',
    size: 'medium',
  },
};

export const FilledPrimary: Story = {
  args: {
    children: 'Button',
    style: 'filled',
    variant: 'primary',
    size: 'medium',
  },
};

export const FilledSecondary: Story = {
  args: {
    children: 'Button',
    style: 'filled',
    variant: 'secondary',
    size: 'medium',
  },
};

export const OutlinedDefault: Story = {
  args: {
    children: 'Button',
    style: 'outlined',
    variant: 'default',
    size: 'medium',
  },
};

export const OutlinedPrimary: Story = {
  args: {
    children: 'Button',
    style: 'outlined',
    variant: 'primary',
    size: 'medium',
  },
};

export const OutlinedSecondary: Story = {
  args: {
    children: 'Button',
    style: 'outlined',
    variant: 'secondary',
    size: 'medium',
  },
};

export const TextDefault: Story = {
  args: {
    children: 'Button',
    style: 'text',
    variant: 'default',
    size: 'medium',
  },
};

export const TextPrimary: Story = {
  args: {
    children: 'Button',
    style: 'text',
    variant: 'primary',
    size: 'medium',
  },
};

export const TextSecondary: Story = {
  args: {
    children: 'Button',
    style: 'text',
    variant: 'secondary',
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    children: 'Button',
    style: 'filled',
    variant: 'primary',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    children: 'Button',
    style: 'filled',
    variant: 'primary',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    children: 'Button',
    style: 'filled',
    variant: 'primary',
    size: 'large',
  },
};

export const Loading: Story = {
  args: {
    children: 'Button',
    style: 'filled',
    variant: 'primary',
    size: 'medium',
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Button',
    style: 'filled',
    variant: 'primary',
    size: 'medium',
    disabled: true,
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Button',
    style: 'filled',
    variant: 'primary',
    size: 'medium',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 0L10.5 5.5L16 6.5L12 10.5L13 16L8 13L3 16L4 10.5L0 6.5L5.5 5.5L8 0Z" />
      </svg>
    ),
  },
};

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    style: 'filled',
    variant: 'primary',
    size: 'medium',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '2rem',
      padding: '2rem',
      backgroundColor: '#f9fafb',
      borderRadius: '8px'
    }}>
      <div>
        <h3 style={{ marginBottom: '1rem', fontSize: '14px', fontWeight: 600, color: '#6b7280' }}>
          FILLED BUTTONS
        </h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button style="filled" variant="default">Default</Button>
          <Button style="filled" variant="primary">Primary</Button>
          <Button style="filled" variant="secondary">Secondary</Button>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem', fontSize: '14px', fontWeight: 600, color: '#6b7280' }}>
          OUTLINED BUTTONS
        </h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button style="outlined" variant="default">Default</Button>
          <Button style="outlined" variant="primary">Primary</Button>
          <Button style="outlined" variant="secondary">Secondary</Button>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem', fontSize: '14px', fontWeight: 600, color: '#6b7280' }}>
          TEXT BUTTONS
        </h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button style="text" variant="default">Default</Button>
          <Button style="text" variant="primary">Primary</Button>
          <Button style="text" variant="secondary">Secondary</Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '1rem', 
      alignItems: 'flex-start',
      padding: '2rem',
      backgroundColor: '#f9fafb',
      borderRadius: '8px'
    }}>
      <Button style="filled" variant="primary" size="large">Large Button</Button>
      <Button style="filled" variant="primary" size="medium">Medium Button</Button>
      <Button style="filled" variant="primary" size="small">Small Button</Button>
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '2rem',
      padding: '2rem',
      backgroundColor: '#f9fafb',
      borderRadius: '8px'
    }}>
      <div>
        <h3 style={{ marginBottom: '1rem', fontSize: '14px', fontWeight: 600, color: '#6b7280' }}>
          DEFAULT STATE
        </h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button style="filled" variant="primary">Button</Button>
          <Button style="outlined" variant="primary">Button</Button>
          <Button style="text" variant="primary">Button</Button>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem', fontSize: '14px', fontWeight: 600, color: '#6b7280' }}>
          LOADING STATE
        </h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button style="filled" variant="primary" loading>Button</Button>
          <Button style="outlined" variant="primary" loading>Button</Button>
          <Button style="text" variant="primary" loading>Button</Button>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem', fontSize: '14px', fontWeight: 600, color: '#6b7280' }}>
          DISABLED STATE
        </h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button style="filled" variant="primary" disabled>Button</Button>
          <Button style="outlined" variant="primary" disabled>Button</Button>
          <Button style="text" variant="primary" disabled>Button</Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const ComprehensiveShowcase: Story = {
  render: () => {
    const styles: Array<'filled' | 'outlined' | 'text'> = ['filled', 'outlined', 'text'];
    const variants: Array<'default' | 'primary' | 'secondary'> = ['default', 'primary', 'secondary'];
    const sizes: Array<'small' | 'medium' | 'large'> = ['large', 'medium', 'small'];

    return (
      <div style={{ 
        padding: '2rem',
        backgroundColor: '#ffffff',
      }}>
        <h2 style={{ 
          marginBottom: '1.5rem', 
          fontSize: '24px', 
          fontWeight: 700,
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
          Buttons
        </h2>
        
        <table style={{ 
          width: '100%', 
          borderCollapse: 'collapse',
          fontSize: '13px',
        }}>
          <thead>
            <tr>
              <th style={{ 
                textAlign: 'left', 
                padding: '0.75rem', 
                borderBottom: '1px solid #e5e7eb',
                fontWeight: 600,
                color: '#6b7280'
              }}>
                Var Style
              </th>
              <th style={{ 
                textAlign: 'center', 
                padding: '0.75rem', 
                borderBottom: '1px solid #e5e7eb',
                fontWeight: 600,
                color: '#6b7280'
              }}>
                Default
              </th>
              <th style={{ 
                textAlign: 'center', 
                padding: '0.75rem', 
                borderBottom: '1px solid #e5e7eb',
                fontWeight: 600,
                color: '#6b7280'
              }}>
                Hover
              </th>
              <th style={{ 
                textAlign: 'center', 
                padding: '0.75rem', 
                borderBottom: '1px solid #e5e7eb',
                fontWeight: 600,
                color: '#6b7280'
              }}>
                Loading
              </th>
              <th style={{ 
                textAlign: 'center', 
                padding: '0.75rem', 
                borderBottom: '1px solid #e5e7eb',
                fontWeight: 600,
                color: '#6b7280'
              }}>
                Disable
              </th>
            </tr>
          </thead>
          <tbody>
            {styles.map((styleType) => 
              variants.map((variant) => 
                sizes.map((size) => (
                  <tr key={`${styleType}-${variant}-${size}`}>
                    <td style={{ 
                      padding: '0.75rem',
                      borderBottom: '1px solid #f3f4f6',
                      fontSize: '12px',
                      color: '#6b7280'
                    }}>
                      button-{styleType}-{variant}-{size}
                    </td>
                    <td style={{ 
                      padding: '0.75rem', 
                      textAlign: 'center',
                      borderBottom: '1px solid #f3f4f6'
                    }}>
                      <Button style={styleType} variant={variant} size={size}>
                        Button
                      </Button>
                    </td>
                    <td style={{ 
                      padding: '0.75rem', 
                      textAlign: 'center',
                      borderBottom: '1px solid #f3f4f6'
                    }}>
                      <Button style={styleType} variant={variant} size={size}>
                        Button
                      </Button>
                    </td>
                    <td style={{ 
                      padding: '0.75rem', 
                      textAlign: 'center',
                      borderBottom: '1px solid #f3f4f6'
                    }}>
                      <Button style={styleType} variant={variant} size={size} loading>
                        Button
                      </Button>
                    </td>
                    <td style={{ 
                      padding: '0.75rem', 
                      textAlign: 'center',
                      borderBottom: '1px solid #f3f4f6'
                    }}>
                      <Button style={styleType} variant={variant} size={size} disabled>
                        Button
                      </Button>
                    </td>
                  </tr>
                ))
              )
            )}
          </tbody>
        </table>
      </div>
    );
  },
  parameters: {
    layout: 'fullscreen',
  },
};
