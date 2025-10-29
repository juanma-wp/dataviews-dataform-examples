import domReady from '@wordpress/dom-ready';
import { createRoot } from '@wordpress/element';
import App from './App';

domReady( () => {
	const rootElement = document.getElementById( 'dataviews-examples-root' );
	if ( rootElement ) {
		const root = createRoot( rootElement );
		root.render( <App /> );
	}
} );
