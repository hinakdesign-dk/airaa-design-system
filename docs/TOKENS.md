# Design Tokens

Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes.

## Token Structure

All tokens follow the [W3C Design Tokens Community Group](https://design-tokens.github.io/community-group/format/) specification and are stored in JSON format.

## Available Token Categories

### Colors

Colors are organized into semantic groups:

#### Primary
Main brand colors used for primary actions and emphasis.
- `--color-primary-50` to `--color-primary-900` (9 shades)

#### Neutral
Grayscale colors for text, backgrounds, and borders.
- `--color-neutral-50` to `--color-neutral-900` (9 shades)

#### Semantic Colors
- **Success**: `--color-success-500`, `--color-success-600`
- **Warning**: `--color-warning-500`, `--color-warning-600`
- **Error**: `--color-error-500`, `--color-error-600`

### Typography

#### Font Families
- `--font-family-sans`: Inter, system fonts
- `--font-family-mono`: Fira Code, monospace

#### Font Sizes
- `--font-size-xs`: 0.75rem (12px)
- `--font-size-sm`: 0.875rem (14px)
- `--font-size-base`: 1rem (16px)
- `--font-size-lg`: 1.125rem (18px)
- `--font-size-xl`: 1.25rem (20px)
- `--font-size-2xl`: 1.5rem (24px)
- `--font-size-3xl`: 1.875rem (30px)
- `--font-size-4xl`: 2.25rem (36px)
- `--font-size-5xl`: 3rem (48px)

#### Font Weights
- `--font-weight-normal`: 400
- `--font-weight-medium`: 500
- `--font-weight-semibold`: 600
- `--font-weight-bold`: 700

#### Line Heights
- `--line-height-tight`: 1.25
- `--line-height-normal`: 1.5
- `--line-height-relaxed`: 1.75

### Spacing

Based on a 4px base unit (0.25rem):

- `--spacing-0`: 0
- `--spacing-1`: 0.25rem (4px)
- `--spacing-2`: 0.5rem (8px)
- `--spacing-3`: 0.75rem (12px)
- `--spacing-4`: 1rem (16px)
- `--spacing-5`: 1.25rem (20px)
- `--spacing-6`: 1.5rem (24px)
- `--spacing-8`: 2rem (32px)
- `--spacing-10`: 2.5rem (40px)
- `--spacing-12`: 3rem (48px)
- `--spacing-16`: 4rem (64px)
- `--spacing-20`: 5rem (80px)
- `--spacing-24`: 6rem (96px)

### Border Radius

- `--border-radius-none`: 0
- `--border-radius-sm`: 0.125rem (2px)
- `--border-radius-base`: 0.25rem (4px)
- `--border-radius-md`: 0.375rem (6px)
- `--border-radius-lg`: 0.5rem (8px)
- `--border-radius-xl`: 0.75rem (12px)
- `--border-radius-2xl`: 1rem (16px)
- `--border-radius-full`: 9999px (pill shape)

## Using Tokens

### In CSS

```css
.my-component {
  background-color: var(--color-primary-500);
  color: var(--color-neutral-50);
  padding: var(--spacing-4) var(--spacing-6);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
}
```

### In JavaScript/TypeScript

```tsx
const styles = {
  backgroundColor: 'var(--color-primary-500)',
  padding: 'var(--spacing-4)',
  borderRadius: 'var(--border-radius-md)',
};

<div style={styles}>Content</div>
```

## Customizing Tokens

### Override via CSS

Create a custom stylesheet that overrides specific tokens:

```css
/* theme.css */
:root {
  --color-primary-500: #your-brand-color;
  --color-primary-600: #your-brand-color-dark;
  --font-family-sans: 'Your Custom Font', sans-serif;
}
```

### Modify Source Tokens

Edit the JSON files in the `tokens/` directory:

```json
// tokens/colors.json
{
  "colors": {
    "primary": {
      "500": { "value": "#your-color", "type": "color" }
    }
  }
}
```

Then rebuild:
```bash
npm run build:tokens
```

## Token Naming Convention

Tokens follow this pattern:

```
--{category}-{name}-{variant}
```

Examples:
- `--color-primary-500`
- `--spacing-4`
- `--font-size-lg`
- `--border-radius-md`

## Best Practices

1. **Always use tokens** instead of hardcoded values
2. **Use semantic names** (primary, neutral) rather than color names (blue, gray)
3. **Maintain consistency** across components by reusing tokens
4. **Test dark mode** when overriding color tokens
5. **Document custom tokens** if adding new ones to your project

## Token Reference

For the complete list of available tokens, see the token definition files:
- [Colors](../tokens/colors.json)
- [Typography](../tokens/typography.json)
- [Spacing](../tokens/spacing.json)
