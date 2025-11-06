/**
 * WordPress dependencies
 */
import { useState } from '@wordpress/element';
import { DataForm } from '@wordpress/dataviews';

/**
 * Basic DataForm Example - Simplest possible implementation
 */
const BasicFormExample = () => {
	const [ data, setData ] = useState( {
		name: 'Test',
	} );

	const fields = [
		{
			id: 'name',
			label: 'Name',
			type: 'text',
		},
	];

	const form = {
		fields: [ 'name' ],
	};

	return <DataForm data={ data } fields={ fields } form={ form } />;
};

export default BasicFormExample;
