# DataViews & DataForm Examples Plugin

[![](https://img.shields.io/badge/playground-live%20preview-blue?logo=wordpress)](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/wptrainingteam/devblog-dataviews-plugin/main/_playground/blueprint.json)

A WordPress plugin showcasing multiple examples of DataViews and DataForm components for displaying and interacting with data.

## Features

- **Multiple Dashboard Examples**: Switch between different data visualization dashboards
- **Photos Dashboard**: Browse and manage a collection of images from Unsplash API with topics and authors
- **Planets Dashboard**: Explore solar system planets and celestial objects data
- **Demo Dashboard 2**: Additional DataViews implementation example

## Project Structure

```
src/
├── dashboards/          # Dashboard components
│   ├── PhotosDashboard.js
│   ├── DemoDataViews1.js
│   └── DemoDataViews2.js
├── data/               # Data sources
│   ├── photos.js       # Unsplash photos dataset
│   └── planets.js      # Solar system planets dataset
├── DashboardManager.js # Main dashboard switcher component
├── index.js           # Entry point
├── utils.js          # Utility functions
└── style.scss        # Styles
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

Once activated, the plugin adds a new top-level menu item "DataViews & DataForm Examples" in the WordPress admin sidebar. Click on it to access the dashboard manager where you can switch between different DataViews examples.

## Available Scripts

- `npm run build` - Build the plugin for production
- `npm run start` - Start development mode with file watching

## Dependencies

- `@wordpress/dataviews` - Core DataViews component
- `@wordpress/scripts` - WordPress build tools
- `@wordpress/icons` - Icon library
