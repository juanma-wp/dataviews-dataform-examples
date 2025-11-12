/**
 * WordPress dependencies
 */
import { useState, useMemo } from '@wordpress/element';
// Note: @wordpress/dataviews is bundled in our build, not loaded as external
import { DataForm } from '@wordpress/dataviews/wp';

import { data as initialData } from './data';
import { fields } from './fields';
import { form } from './form';

/**
 * Panel Layout Example
 * Demonstrates DataForm with panel layout and grouped fields
 */
const PanelLayoutExample = () => {
	const [ post, setPost ] = useState( initialData );

	return (
		<DataForm
			data={ post }
			fields={ fields }
			form={ form }
			onChange={ ( edits ) => {
				const newData = { ...post, ...edits };
				console.log( 'newData', newData );
				setPost( newData );
			} }
		/>
	);
};

export default PanelLayoutExample;
