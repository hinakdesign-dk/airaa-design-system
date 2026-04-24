# Contributing to Airaa Design System

Thank you for your interest in contributing to the Airaa Design System! This document provides guidelines and instructions for contributing.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/airaa-design-system.git`
3. Install dependencies: `npm install`
4. Create a new branch: `git checkout -b feature/your-feature-name`

## Development Workflow

### Building the Project

```bash
# Build design tokens
npm run build:tokens

# Build components
npm run build

# Watch mode for development
npm run dev
```

### Running Storybook

```bash
npm run storybook
```

This will start Storybook at `http://localhost:6006` where you can see all components in action.

### Running Tests

```bash
npm test
```

### Linting and Formatting

```bash
# Lint code
npm run lint

# Format code
npm run format
```

## Adding New Components

### 1. Create Component Files

Follow the atomic design structure:

```
components/
├── atoms/          # Basic building blocks
├── molecules/      # Combinations of atoms
└── organisms/      # Complex UI components
```

### 2. Component Template

```tsx
// components/atoms/YourComponent/YourComponent.tsx
import React from 'react';
import clsx from 'clsx';
import './YourComponent.css';

export interface YourComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'alternative';
  size?: 'sm' | 'md' | 'lg';
}

export const YourComponent = React.forwardRef<HTMLDivElement, YourComponentProps>(
  ({ children, variant = 'default', size = 'md', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'airaa-your-component',
          `airaa-your-component--${variant}`,
          `airaa-your-component--${size}`,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

YourComponent.displayName = 'YourComponent';
```

### 3. Component Styles

```css
/* components/atoms/YourComponent/YourComponent.css */
.airaa-your-component {
  /* Use design tokens */
  padding: var(--spacing-4);
  border-radius: var(--border-radius-md);
  font-family: var(--font-family-sans);
}

.airaa-your-component--default {
  background-color: var(--color-neutral-100);
}

.airaa-your-component--alternative {
  background-color: var(--color-primary-100);
}
```

### 4. Export Component

Add your component to `components/index.ts`:

```tsx
export { YourComponent } from './atoms/YourComponent/YourComponent';
export type { YourComponentProps } from './atoms/YourComponent/YourComponent';
```

### 5. Add Documentation

Create a Storybook story (if Storybook is configured):

```tsx
// components/atoms/YourComponent/YourComponent.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { YourComponent } from './YourComponent';

const meta: Meta<typeof YourComponent> = {
  title: 'Atoms/YourComponent',
  component: YourComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof YourComponent>;

export const Default: Story = {
  args: {
    children: 'Your Component',
    variant: 'default',
    size: 'md',
  },
};
```

## Adding or Modifying Design Tokens

1. Edit the appropriate JSON file in `tokens/`:
   - `colors.json` for colors
   - `typography.json` for fonts and text styles
   - `spacing.json` for spacing and border radius

2. Follow the W3C Design Tokens format:

```json
{
  "tokenName": {
    "value": "token-value",
    "type": "color|dimension|fontFamily|number"
  }
}
```

3. Rebuild tokens:

```bash
npm run build:tokens
```

## Component Guidelines

### Accessibility

- Use semantic HTML elements
- Include ARIA attributes when needed
- Ensure keyboard navigation works
- Test with screen readers
- Maintain proper color contrast (WCAG AA minimum)

### TypeScript

- All components must have TypeScript types
- Extend appropriate HTML element props
- Export prop types for documentation

### CSS

- Use CSS custom properties (design tokens) instead of hardcoded values
- Follow BEM-like naming: `airaa-component__element--modifier`
- Keep styles scoped to component
- Support dark mode when applicable

### Testing

- Write unit tests for component logic
- Test accessibility with axe or similar tools
- Test different prop combinations
- Test edge cases and error states

## Commit Messages

Follow conventional commits format:

```
type(scope): subject

body (optional)

footer (optional)
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

Examples:
```
feat(button): add loading state
fix(input): correct error message positioning
docs(readme): update installation instructions
```

## Pull Request Process

1. Update documentation if needed
2. Add tests for new features
3. Ensure all tests pass: `npm test`
4. Format code: `npm run format`
5. Lint code: `npm run lint`
6. Update CHANGELOG.md
7. Submit PR with clear description

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Checklist
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] All tests passing
- [ ] Code linted and formatted
```

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on the code, not the person
- Help others learn and grow

## Questions?

If you have questions, please:
1. Check existing issues and discussions
2. Open a new issue with the question label
3. Join our community discussions

Thank you for contributing! 🎉
