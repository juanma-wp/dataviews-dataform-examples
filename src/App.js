// Import page components
import DashboardManager from '@/examples/DataViewsExamples';
//import DataFormExamples from '@/examples/DataFormExamples';
import { SimpleDataFormExample } from '@/examples/DataFormExamples/SimpleDataForm';

const App = ( { currentPage = 'dataviews' } ) => {
	console.log( 'App component rendered with currentPage:', currentPage );
	// Render the appropriate component based on the current page
	switch ( currentPage ) {
		case 'dataform':
			return <SimpleDataFormExample />;
		case 'dataviews':
		default:
			return <DashboardManager />;
	}
};

export default App;
