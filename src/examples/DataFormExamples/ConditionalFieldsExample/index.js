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
 * Conditional Fields Example
 * Demonstrates DataForm with fields that show/hide based on other field values
 */
const ConditionalFieldsExample = () => {
	const [ data, setData ] = useState( initialData );

	return (
		<DataForm
			data={ data }
			fields={ fields }
			form={ form }
			onChange={ ( edits ) =>
				setData( ( prev ) => ( {
					...prev,
					...edits,
				} ) )
			}
		/>
	);
};

export default ConditionalFieldsExample;
