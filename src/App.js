// Import page components
import DashboardManager from './DashboardManager';
import DataViewsPicker from './DataViewsPicker';
import DataFormExamples from './DataFormExamples';

const App = () => {
	// Get the root element to determine which page we're on
	const rootElement = document.getElementById( 'dataviews-examples-root' );
	const currentPage = rootElement?.getAttribute( 'data-page' ) || 'dataviews';

	// Render the appropriate component based on the current page
	switch ( currentPage ) {
		case 'dataviews':
			return <DashboardManager />;
		case 'dataviews-picker':
			return <DataViewsPicker />;
		case 'dataform':
			return <DataFormExamples />;
		default:
			return <DashboardManager />;
	}
};

export default App;