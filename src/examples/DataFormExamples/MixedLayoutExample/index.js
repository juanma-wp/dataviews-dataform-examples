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
 * Mixed Layout Example
 * Demonstrates DataForm with mixed layout types (card, panel, row)
 */
const MixedLayoutExample = () => {
	const [ post, setPost ] = useState( initialData );

	return (
		<DataForm
			data={ post }
			fields={ fields }
			form={ form }
			onChange={ ( edits ) =>
				setPost( ( prev ) => ( {
					...prev,
					...edits,
				} ) )
			}
		/>
	);
};

export default MixedLayoutExample;
