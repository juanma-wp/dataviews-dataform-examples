/**
 * WordPress dependencies
 */
import { useState } from '@wordpress/element';
import { DataForm } from '@wordpress/dataviews';

/**
 * Simple DataForm Example
 */
export const SimpleDataFormExample = () => {
	const [ data, setData ] = useState( {
		name: 'Test Name',
		email: 'test@example.com',
	} );

	const fields = [
		{
			id: 'name',
			label: 'Name',
			type: 'text',
		},
		{
			id: 'email',
			label: 'Email',
			type: 'text',
		},
	];

	const form = {
		fields: [ 'name', 'email' ],
	};

	return (
		<div style={ { padding: '20px' } }>
			<h2>Simple DataForm Test</h2>
			<DataForm
				data={ data }
				fields={ fields }
				form={ form }
				onChange={ ( edits ) => {
					setData( { ...data, ...edits } );
				} }
			/>
			<div
				style={ {
					marginTop: '20px',
					padding: '10px',
					background: '#f0f0f0',
				} }
			>
				<h3>Current Data:</h3>
				<pre>{ JSON.stringify( data, null, 2 ) }</pre>
			</div>
		</div>
	);
};
