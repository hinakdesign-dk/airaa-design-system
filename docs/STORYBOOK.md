# Storybook Documentation

This design system uses Storybook for interactive component documentation and development.

## Running Storybook

To start Storybook locally:

```bash
npm run storybook
```

This will start the Storybook development server at [http://localhost:6006](http://localhost:6006)

## Building Storybook

To build a static version of Storybook:

```bash
npm run build-storybook
```

The static build will be created in the `storybook-static/` directory.

## What's in Storybook

### Component Stories

Each component has interactive stories that demonstrate:
- All available variants and props
- Different states (loading, disabled, error, etc.)
- Usage examples
- Accessibility features

### Current Components

#### Atoms (Basic Building Blocks)
- **Button** - Multiple variants (primary, secondary, outline, ghost) and sizes
- **Input** - Text inputs with labels, validation, and helper text
- **Card** - Container components with different elevations

### Design Tokens Documentation

Storybook includes visual documentation for all design tokens:
- Color palettes with hex values
- Typography scale
- Spacing scale
- Border radius options

## Using Storybook for Development

### Testing Components

1. **Visual Testing**: Use Storybook to visually test components in isolation
2. **Props Playground**: Use the Controls addon to test different prop combinations
3. **Accessibility**: The A11y addon automatically checks for accessibility issues
4. **Responsive Testing**: Change viewport sizes to test responsive behavior

### Adding New Stories

When you create a new component, add a corresponding `.stories.tsx` file:

```tsx
// components/atoms/YourComponent/YourComponent.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { YourComponent } from './YourComponent';

const meta = {
  title: 'Atoms/YourComponent',
  component: YourComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof YourComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Your default props
  },
};
```

## Storybook Addons

This setup includes the following addons:

- **Essentials** - Core Storybook functionality (controls, actions, viewport, backgrounds, etc.)
- **A11y** - Accessibility testing and validation
- **Links** - Link between stories
- **Interactions** - Test user interactions

## Keyboard Shortcuts

- `S` - Show/hide sidebar
- `A` - Show/hide addons panel
- `D` - Toggle dark mode
- `F` - Toggle fullscreen
- `/` - Search stories

## Configuration Files

- `.storybook/main.ts` - Main Storybook configuration
- `.storybook/preview.ts` - Global decorators and parameters
- `*.stories.tsx` - Individual component stories

## Tips

1. **Use Stories as Documentation**: Stories serve as living documentation for your components
2. **Test Edge Cases**: Create stories for edge cases (empty states, long text, etc.)
3. **Organize Stories**: Use clear naming and categorization (Atoms, Molecules, Organisms)
4. **Keep Stories Simple**: Each story should demonstrate one specific use case
5. **Document Props**: Use JSDoc comments on component props for better autodocs

## Troubleshooting

### Storybook won't start

```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
```

### Stories not appearing

Make sure your story files follow the pattern: `*.stories.tsx` and are inside the `components/` directory.

### CSS not loading

Check that `tokens/index.css` is imported in `.storybook/preview.ts`.

## Resources

- [Storybook Documentation](https://storybook.js.org/docs)
- [Writing Stories](https://storybook.js.org/docs/react/writing-stories/introduction)
- [Component Story Format (CSF)](https://storybook.js.org/docs/react/api/csf)
