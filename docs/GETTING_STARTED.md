# Getting Started

This guide will help you get up and running with the Airaa Design System.

## Installation

Install the package via npm:

```bash
npm install airaa-design-system
```

Or with yarn:

```bash
yarn add airaa-design-system
```

## Basic Setup

### 1. Import the Design Tokens

First, import the design tokens CSS file in your main application file:

```tsx
// src/index.tsx or src/App.tsx
import 'airaa-design-system/tokens/index.css';
```

This will make all design tokens available as CSS custom properties throughout your application.

### 2. Import Components

Import the components you need:

```tsx
import { Button, Input, Card } from 'airaa-design-system';

function MyComponent() {
  return (
    <Card variant="elevated" padding="md">
      <h2>Welcome</h2>
      <Input label="Your Name" placeholder="Enter your name" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}
```

## Using Design Tokens

### In CSS

You can use design tokens directly in your CSS files:

```css
.my-component {
  color: var(--color-primary-500);
  padding: var(--spacing-4);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-base);
}
```

### In Styled Components

```tsx
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: var(--color-neutral-50);
  padding: var(--spacing-6);
  border-radius: var(--border-radius-lg);
`;
```

### In Inline Styles

```tsx
<div style={{
  color: 'var(--color-primary-500)',
  padding: 'var(--spacing-4)',
  borderRadius: 'var(--border-radius-md)'
}}>
  Content
</div>
```

## Component Examples

### Button

```tsx
import { Button } from 'airaa-design-system';

// Primary button
<Button variant="primary" size="md">
  Click Me
</Button>

// Secondary button
<Button variant="secondary" size="lg">
  Cancel
</Button>

// Loading state
<Button variant="primary" loading>
  Saving...
</Button>

// Full width
<Button variant="primary" fullWidth>
  Full Width Button
</Button>
```

### Input

```tsx
import { Input } from 'airaa-design-system';

// Basic input
<Input label="Email" type="email" placeholder="you@example.com" />

// With helper text
<Input 
  label="Password" 
  type="password"
  helperText="Must be at least 8 characters"
/>

// With error
<Input 
  label="Username" 
  error="This username is already taken"
/>

// Full width
<Input label="Full Name" fullWidth />
```

### Card

```tsx
import { Card } from 'airaa-design-system';

// Elevated card
<Card variant="elevated" padding="md">
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>

// Outlined card
<Card variant="outlined" padding="lg">
  <h3>Outlined Card</h3>
</Card>

// No padding (for custom layouts)
<Card variant="elevated" padding="none">
  <img src="image.jpg" alt="..." />
  <div style={{ padding: 'var(--spacing-4)' }}>
    Content with custom padding
  </div>
</Card>
```

## TypeScript Support

All components are fully typed with TypeScript. You'll get full IntelliSense support in your editor:

```tsx
import { ButtonProps, InputProps, CardProps } from 'airaa-design-system';

// Extend component props
interface MyButtonProps extends ButtonProps {
  customProp?: string;
}

const MyButton: React.FC<MyButtonProps> = ({ customProp, ...props }) => {
  return <Button {...props} />;
};
```

## Theming

You can override design tokens by defining your own CSS custom properties:

```css
:root {
  --color-primary-500: #your-brand-color;
  --font-family-sans: 'Your Font', sans-serif;
  --border-radius-md: 8px;
}
```

## Next Steps

- Explore the [Component Documentation](./COMPONENTS.md)
- Learn about [Design Tokens](./TOKENS.md)
- Check out [Examples](../examples/)
- View the [Storybook](../storybook-static/)
