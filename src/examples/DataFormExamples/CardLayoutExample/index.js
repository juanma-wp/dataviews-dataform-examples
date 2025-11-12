/**
 * WordPress dependencies
 */
import { useState, useMemo } from '@wordpress/element';
// Note: @wordpress/dataviews is bundled in our build, not loaded as external
import { DataForm } from '@wordpress/dataviews/wp';

import { fields } from './fields';
import { data } from './data';
import { form } from './form';
/**
 * Card Layout Example
 * Demonstrates DataForm with card layout and nested sections
 */
const CardLayoutExample = () => {
	const [ customer, setCustomer ] = useState( data );
	return (
		<DataForm
			data={ customer }
			fields={ fields }
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

export default CardLayoutExample;
