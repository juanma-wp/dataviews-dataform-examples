/**
 * WordPress dependencies
 */
import { useState, useMemo } from '@wordpress/element';
// Note: @wordpress/dataviews is bundled in our build, not loaded as external
import { DataForm } from '@wordpress/dataviews/wp';

import { data as initialData } from './data';
import { fields as customerFields } from './fields';
import { form } from './form';

/**
 * Row Layout Example
 * Demonstrates DataForm with row layout for horizontal field arrangement
 */
const RowLayoutExample = () => {
	const [ customer, setCustomer ] = useState( initialData );

	return (
		<DataForm
			data={ customer }
			fields={ customerFields }
			form={ form }
			onChange={ ( edits ) =>
				setCustomer( ( prev ) => ( {
					...prev,
					...edits,
				} ) )
			}
		/>
	);
};

export default RowLayoutExample;
