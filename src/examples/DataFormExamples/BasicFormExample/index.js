/**
 * WordPress dependencies
 */
import { useState } from '@wordpress/element';
// Note: @wordpress/dataviews is bundled in our build, not loaded as external
import { DataForm } from '@wordpress/dataviews/wp';

import { data as initialData } from './data';
import { fields } from './fields';
import { form } from './form';

/**
 * Basic DataForm Example
 * Demonstrates simple form with basic field types
 */
const BasicFormExample = () => {
	const [ data, setData ] = useState( initialData );

	return (
		<DataForm
			data={ data }
			fields={ fields }
			form={ form }
			onChange={ ( edits ) => {
				const newData = { ...data, ...edits };
				console.log( 'newData', newData );
				setData( newData );
			} }
		/>
	);
};

export default BasicFormExample;
