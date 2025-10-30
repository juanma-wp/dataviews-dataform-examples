// Import page components
import DashboardManager from '@/examples/DataViewsExamples/DashboardManager';
import DataFormExamples from '@/examples/DataFormExamples/DataFormExamples';

const App = () => {
	// Get the root element to determine which page we're on
	const rootElement = document.getElementById( 'dataviews-examples-root' );
	const currentPage = rootElement?.getAttribute( 'data-page' ) || 'dataviews';

	// Render the appropriate component based on the current page
	switch ( currentPage ) {
		case 'dataviews':
			return <DashboardManager />;
		case 'dataform':
			return <DataFormExamples />;
		default:
			return <DashboardManager />;
	}
};

export default App;