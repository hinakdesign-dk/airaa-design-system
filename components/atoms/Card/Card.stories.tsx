import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta = {
  title: 'Atoms/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'outlined', 'filled'],
      description: 'Card visual style variant',
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Card padding size',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    padding: 'md',
    children: (
      <div>
        <h3 style={{ margin: '0 0 0.5rem 0' }}>Elevated Card</h3>
        <p style={{ margin: 0, color: 'var(--color-neutral-600)' }}>
          This card has a subtle shadow elevation effect.
        </p>
      </div>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    padding: 'md',
    children: (
      <div>
        <h3 style={{ margin: '0 0 0.5rem 0' }}>Outlined Card</h3>
        <p style={{ margin: 0, color: 'var(--color-neutral-600)' }}>
          This card has a border instead of a shadow.
        </p>
      </div>
    ),
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    padding: 'md',
    children: (
      <div>
        <h3 style={{ margin: '0 0 0.5rem 0' }}>Filled Card</h3>
        <p style={{ margin: 0, color: 'var(--color-neutral-600)' }}>
          This card has a filled background color.
        </p>
      </div>
    ),
  },
};

export const NoPadding: Story = {
  args: {
    variant: 'elevated',
    padding: 'none',
    children: (
      <div>
        <div
          style={{
            height: '120px',
            background: 'linear-gradient(135deg, var(--color-primary-400), var(--color-primary-600))',
          }}
        />
        <div style={{ padding: 'var(--spacing-4)' }}>
          <h3 style={{ margin: '0 0 0.5rem 0' }}>Card with Image</h3>
          <p style={{ margin: 0, color: 'var(--color-neutral-600)' }}>
            No padding allows for edge-to-edge content.
          </p>
        </div>
      </div>
    ),
  },
};

export const SmallPadding: Story = {
  args: {
    variant: 'elevated',
    padding: 'sm',
    children: (
      <div>
        <h4 style={{ margin: '0 0 0.25rem 0' }}>Small Padding</h4>
        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-neutral-600)' }}>
          Compact card with minimal padding.
        </p>
      </div>
    ),
  },
};

export const LargePadding: Story = {
  args: {
    variant: 'elevated',
    padding: 'lg',
    children: (
      <div>
        <h3 style={{ margin: '0 0 0.5rem 0' }}>Large Padding</h3>
        <p style={{ margin: 0, color: 'var(--color-neutral-600)' }}>
          Spacious card with generous padding.
        </p>
      </div>
    ),
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', maxWidth: '800px' }}>
      <Card variant="elevated" padding="md" style={{ flex: '1 1 250px' }}>
        <h4 style={{ margin: '0 0 0.5rem 0' }}>Elevated</h4>
        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-neutral-600)' }}>
          Shadow effect
        </p>
      </Card>
      <Card variant="outlined" padding="md" style={{ flex: '1 1 250px' }}>
        <h4 style={{ margin: '0 0 0.5rem 0' }}>Outlined</h4>
        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-neutral-600)' }}>
          Border style
        </p>
      </Card>
      <Card variant="filled" padding="md" style={{ flex: '1 1 250px' }}>
        <h4 style={{ margin: '0 0 0.5rem 0' }}>Filled</h4>
        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-neutral-600)' }}>
          Background color
        </p>
      </Card>
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
};

export const InteractiveCard: Story = {
  args: {
    variant: 'elevated',
    padding: 'lg',
    style: { width: '300px', cursor: 'pointer' },
    children: (
      <div>
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: 'var(--border-radius-full)',
            background: 'var(--color-primary-100)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 'var(--spacing-4)',
          }}
        >
          <span style={{ fontSize: '1.5rem' }}>📦</span>
        </div>
        <h3 style={{ margin: '0 0 0.5rem 0', fontSize: 'var(--font-size-xl)' }}>
          Feature Card
        </h3>
        <p style={{ margin: 0, color: 'var(--color-neutral-600)', lineHeight: '1.5' }}>
          Hover over this card to see the elevation effect. Perfect for clickable items.
        </p>
      </div>
    ),
  },
};

export const ProductCard: Story = {
  render: () => (
    <Card variant="elevated" padding="none" style={{ width: '280px' }}>
      <div
        style={{
          height: '200px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '3rem',
        }}
      >
        🎨
      </div>
      <div style={{ padding: 'var(--spacing-6)' }}>
        <h3 style={{ margin: '0 0 0.5rem 0' }}>Design System</h3>
        <p style={{ margin: '0 0 1rem 0', color: 'var(--color-neutral-600)' }}>
          A comprehensive UI kit with reusable components.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-primary-600)' }}>
            $49
          </span>
          <button
            style={{
              padding: '0.5rem 1rem',
              background: 'var(--color-primary-500)',
              color: 'white',
              border: 'none',
              borderRadius: 'var(--border-radius-md)',
              cursor: 'pointer',
              fontWeight: 500,
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </Card>
  ),
  parameters: {
    layout: 'centered',
  },
};
