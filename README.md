# Airaa Design System

A comprehensive, production-ready design system built with Atomic Design principles. This library provides a complete set of reusable UI components, design tokens, and documentation for building consistent user interfaces.

## Features

- 🎨 **Design Tokens** - Standardized colors, typography, spacing, and more
- 🧩 **Atomic Design** - Components organized by atoms, molecules, and organisms
- ⚛️ **React + TypeScript** - Type-safe components with full TypeScript support
- 📚 **Storybook** - Interactive component documentation
- 🎯 **Accessibility** - WCAG compliant components
- 🚀 **Tree-shakeable** - Import only what you need
- 💅 **CSS Variables** - Easy theming and customization

## Installation

```bash
npm install airaa-design-system
```

## Quick Start

```tsx
import { Button, Input, Card } from 'airaa-design-system';
import 'airaa-design-system/tokens/index.css';

function App() {
  return (
    <Card variant="elevated" padding="lg">
      <Input label="Email" type="email" />
      <Button variant="primary" size="md">
        Submit
      </Button>
    </Card>
  );
}
```

## Available Components

### Atoms (Basic Building Blocks)
- **Button** - Multiple variants (primary, secondary, outline, ghost) and sizes
- **Input** - Text input with label, error states, and helper text
- **Card** - Container component with elevation and padding options

### Design Tokens

All design tokens are available as CSS custom properties:

```css
/* Colors */
--color-primary-500
--color-neutral-500
--color-success-500
--color-warning-500
--color-error-500

/* Typography */
--font-family-sans
--font-size-base
--font-weight-medium
--line-height-normal

/* Spacing */
--spacing-4
--spacing-6
--spacing-8

/* Border Radius */
--border-radius-md
--border-radius-lg
```

## Development

### Setup

```bash
# Install dependencies
npm install

# Build tokens
npm run build:tokens

# Build components
npm run build

# Run Storybook
npm run storybook

# Run tests
npm test
```

### Project Structure

```
airaa-design-system/
├── components/           # React components
│   ├── atoms/           # Basic components
│   ├── molecules/       # Composite components
│   └── organisms/       # Complex components
├── tokens/              # Design tokens (JSON & CSS)
│   ├── colors.json
│   ├── typography.json
│   ├── spacing.json
│   └── index.css
├── docs/                # Documentation
├── examples/            # Usage examples
└── scripts/             # Build scripts
```

## Design Tokens

Design tokens are defined in JSON format following the [W3C Design Tokens Community Group](https://design-tokens.github.io/community-group/format/) specification. They're automatically converted to CSS custom properties during build.

### Customizing Tokens

You can override any token by updating the JSON files in the `tokens/` directory:

```json
{
  "colors": {
    "primary": {
      "500": { "value": "#your-color", "type": "color" }
    }
  }
}
```

Then run `npm run build:tokens` to regenerate the CSS.

## Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

## License

MIT License - see [LICENSE](./LICENSE) for details.

## Links

- [Figma Design System](https://www.figma.com/design/u5IZqIkHYdnKlrCnoYvmIs/Airaa-Design-System---Atomic-Design---UI-Kit-Library)
- [Documentation](./docs/)
- [Storybook](./storybook-static/)
