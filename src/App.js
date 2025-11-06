// Import page components
import DataViewsDashboardManager from '@/examples/DataViewsExamples';
import DataFormDashboardManager from '@/examples/DataFormExamples';

const App = ( { currentPage = 'dataviews' } ) => {
	// Render the appropriate component based on the current page
	switch ( currentPage ) {
		case 'dataform':
			return <DataFormDashboardManager />;
		case 'dataviews':
		default:
			return <DataViewsDashboardManager />;
	}
};

export default App;
