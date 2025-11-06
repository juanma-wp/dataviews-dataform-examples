# DataViews & DataForm Examples Plugin

[![](https://img.shields.io/badge/playground-live%20preview-blue?logo=wordpress)](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/juanma-wp/dataviews-dataform-examples/refs/heads/main/_playground/blueprint.json)

A comprehensive WordPress plugin showcasing multiple examples of DataViews and DataForm components for displaying, managing, and interacting with data in modern WordPress development.

## Features

### DataViews Examples
- **Photos Dashboard**: Browse and manage a collection of images from Unsplash API with topics and authors
- **Planets Dashboard**: Explore solar system planets and celestial objects data with filtering and sorting
- **Demo Dashboards**: Additional DataViews implementation examples showcasing different layouts and configurations

### DataForm Examples
- **Simple Form**: Basic form implementation with text inputs and validation
- **Advanced Form**: Complex form with multiple field types, conditional logic, and custom validation
- **Nested Fields**: Form with nested data structures and array field handling
- **Custom Validation**: Form with comprehensive validation patterns and error handling
- **Dynamic Form**: Form with dynamic field generation and real-time updates

## Project Structure

```
src/
├── examples/
│   ├── DataFormExamples/     # Form components showcasing different layouts and features
│       ├── data/             # dataset
│       ├── fields/         # Field configuration
│   └── DataViewsExamples/    # Data table implementations with various configurations
│       ├── DashboardPhotos/  # Photo gallery with Unsplash data
│       ├── DashboardsPlanets/ # Solar system data with multiple view types
│       ├── data/             # Shared datasets
│       └── fields/           # Field configurations
├── utils/                    # Shared utility functions
├── App.js                    # Main application with navigation
├── index.js                  # WordPress admin integration
└── style.scss               # Global styles
```

## Related Articles

The development process is documented in the [WordPress Developer Blog](https://developer.wordpress.org/news/):
- [Using Data Views to display and interact with data in plugins](https://developer.wordpress.org/news/2024/08/27/using-data-views-to-display-and-interact-with-data-in-plugins/)
- [Actions from Data Views: Adding images to the Media Library](https://developer.wordpress.org/news/2024/09/23/actions-from-data-views-adding-images-to-the-media-library/)


## Installation & Development

### Prerequisites
- WordPress 6.1 or higher
- PHP 7.4 or higher
- Node.js and npm

### Setup Instructions

1. Set up a local WordPress development environment
2. Clone/download this repository into the `wp-content/plugins` folder:
   ```bash
   cd wp-content/plugins
   git clone [repository-url] dataviews-dataform-examples
   ```
3. Navigate to the plugin folder:
   ```bash
   cd dataviews-dataform-examples
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Build the plugin:
   ```bash
   npm run build
   ```
   Or for development with hot reload:
   ```bash
   npm run start
   ```
6. Activate the plugin in WordPress Admin → Plugins

## Usage

Once activated, the plugin adds a new top-level menu item "DataViews & DataForm Examples" in the WordPress admin sidebar. Navigate through the interface to explore:

- **DataViews Examples**: Interactive data tables with filtering, sorting, and bulk actions
- **DataForm Examples**: Various form implementations demonstrating different field types, validation patterns, and data handling approaches

Each example includes live data interaction and demonstrates best practices for implementing these components in WordPress plugins.

## Available Scripts

- `npm run build` - Build the plugin for production
- `npm run start` - Start development mode with file watching

## Dependencies

- `@wordpress/dataviews` - Core DataViews component
- `@wordpress/scripts` - WordPress build tools
- `@wordpress/icons` - Icon library
