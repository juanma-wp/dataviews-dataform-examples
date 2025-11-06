import domReady from '@wordpress/dom-ready';
import { createRoot } from '@wordpress/element';
import App from './App';

domReady( () => {
	// Check for either root element
	const dataViewsRoot = document.getElementById( 'dataviews-examples-root' );
	const dataFormRoot = document.getElementById( 'dataform-examples-root' );

	const rootElement = dataViewsRoot || dataFormRoot;

	if ( rootElement ) {
		// Determine which page we're on
		const currentPage = dataViewsRoot ? 'dataviews' : 'dataform';

		const root = createRoot( rootElement );
		console.log( 'rootElement', rootElement );
		root.render( <App currentPage={ currentPage } /> );
	}
} );
