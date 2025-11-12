/**
 * WordPress dependencies
 */
import { useState, useCallback } from '@wordpress/element';
// Note: @wordpress/dataviews is bundled in our build, not loaded as external
import { DataForm } from '@wordpress/dataviews/wp';
import deepMerge from 'deepmerge';

import { data as initialData } from './data';
import { nestedFields } from './fields';
import { form } from './form';

/**
 * Nested Data Example
 * Demonstrates DataForm handling nested data structures and derived data
 */
const NestedDataExample = () => {
	const [ data, setData ] = useState( initialData );

	const handleChange = useCallback( ( edits ) => {
		// Deep merge to properly handle nested updates
		setData( ( prev ) => deepMerge( prev, edits ) );
	}, [] );

	return (
		<div>
			<DataForm
				data={ data }
				fields={ nestedFields }
				form={ form }
				onChange={ handleChange }
			/>
			<div
				style={ {
					marginTop: '20px',
					padding: '10px',
					background: '#f0f0f0',
				} }
			>
				<h4>Current Data Structure:</h4>
				<pre style={ { fontSize: '12px' } }>
					{ JSON.stringify( data, null, 2 ) }
				</pre>
			</div>
		</div>
	);
};

export default NestedDataExample;
