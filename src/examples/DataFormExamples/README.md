# DataForm Examples

This directory contains comprehensive examples demonstrating the DataForm component from WordPress DataViews.

## Examples Overview

### 1. Basic Form Example (`BasicFormExample.js`)
- Simple form with basic field types (text, email, integer, boolean, datetime)
- Regular layout
- Select dropdowns, radio buttons, and toggle groups
- Text areas for longer content

### 2. Panel Layout Example (`PanelLayoutExample.js`)
- Panel layout with collapsible sections
- Grouped fields for better organization
- Nested panels with summary views
- Conditional field visibility based on status

### 3. Card Layout Example (`CardLayoutExample.js`)
- Card layout with headers and descriptions
- Collapsible card sections
- Nested layouts (panels within cards)
- Custom field renderers with Badges
- Payment and tax configuration examples

### 4. Row Layout Example (`RowLayoutExample.js`)
- Horizontal field arrangement
- Different alignment options (start, center, end)
- Field width customization using flex styles
- Grouped billing and shipping addresses
- Product calculation with derived values

### 5. Mixed Layout Example (`MixedLayoutExample.js`)
- Combination of card, panel, and row layouts
- Complex nested structures
- Discussion settings with visibility controls
- Post metadata management

### 6. Form Validation Example (`ValidationExample.js`)
- Required field validation
- Custom validation rules (sync and async)
- Email, URL, telephone format validation
- Password strength requirements
- Form submission handling with validation state

### 7. Conditional Fields Example (`ConditionalFieldsExample.js`)
- Dynamic field visibility based on other field values
- Module activation toggles
- User type dependent fields
- Subscription-based payment options
- Advanced options toggle

### 8. Nested Data Example (`NestedDataExample.js`)
- Handling deeply nested data structures
- Custom getValue/setValue for data transformation
- Derived calculations (revenue, tax, totals)
- Real-time data structure preview
- Complex state management with deepMerge

## Field Types Demonstrated

- **Text fields**: Basic text, email, URL, telephone, password
- **Number fields**: Integer and decimal numbers
- **Boolean fields**: Checkboxes, toggles, switches
- **Selection fields**: Select dropdowns, radio buttons, toggle groups
- **Array fields**: Multi-select with tags
- **Date/Time fields**: Date pickers, datetime selectors
- **Custom fields**: Custom edit controls and renderers

## Layout Types

1. **Regular Layout**: Simple vertical field arrangement
2. **Panel Layout**: Collapsible sections with optional dropdowns/modals
3. **Card Layout**: Card containers with headers and summaries
4. **Row Layout**: Horizontal field arrangement with alignment control

## Key Features

- **Validation**: Built-in and custom validation rules
- **Conditional Logic**: Show/hide fields based on conditions
- **Nested Data**: Support for complex data structures
- **Derived Data**: Automatic calculations and field dependencies
- **Custom Controls**: Ability to use custom edit components
- **Custom Renderers**: Display fields with custom formatting
- **Responsive Design**: All layouts are mobile-friendly

## Usage

Each example component is self-contained and demonstrates specific DataForm features. They can be used as references for implementing similar functionality in your own projects.

To use an example:

```javascript
import { BasicFormExample } from './examples';

// Use in your component
<BasicFormExample />
```

## Dependencies

All examples use:
- `@wordpress/element` for React hooks
- `@wordpress/dataviews` for the DataForm component
- `@wordpress/components` for UI components
- `deepmerge` for nested data handling (NestedDataExample only)