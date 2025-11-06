/**
 * WordPress dependencies
 */
import { useState } from '@wordpress/element';
// Note: @wordpress/dataviews is bundled in our build, not loaded as external
import { DataForm } from '@wordpress/dataviews/wp';

/**
 * Basic DataForm Example
 * Demonstrates simple form with basic field types
 */
const BasicFormExample = () => {
	const [ data, setData ] = useState( {
		title: 'Hello, World!',
		order: 2,
		author: 1,
		status: 'draft',
		reviewer: 'john',
		email: 'hello@wordpress.org',
		date: '2021-01-01T12:00:00',
		sticky: false,
		can_comment: false,
		description: 'This is a sample description.',
	} );

	const fields = [
		{
			id: 'title',
			label: 'Title',
			type: 'text',
			placeholder: 'Enter title',
		},
		{
			id: 'order',
			label: 'Order',
			type: 'integer',
		},
		{
			id: 'author',
			label: 'Author',
			type: 'integer',
			elements: [
				{ value: 1, label: 'Jane' },
				{ value: 2, label: 'John' },
				{ value: 3, label: 'Alice' },
				{ value: 4, label: 'Bob' },
			],
		},
		{
			id: 'reviewer',
			label: 'Reviewer',
			type: 'text',
			Edit: 'radio',
			elements: [
				{ value: 'jane', label: 'Jane' },
				{ value: 'john', label: 'John' },
				{ value: 'alice', label: 'Alice' },
				{ value: 'bob', label: 'Bob' },
			],
		},
		{
			id: 'status',
			label: 'Status',
			type: 'text',
			Edit: 'toggleGroup',
			elements: [
				{ value: 'draft', label: 'Draft' },
				{ value: 'published', label: 'Published' },
				{ value: 'private', label: 'Private' },
			],
		},
		{
			id: 'email',
			label: 'Email',
			type: 'email',
		},
		{
			id: 'date',
			label: 'Date',
			type: 'datetime',
		},
		{
			id: 'sticky',
			label: 'Sticky',
			type: 'boolean',
		},
		{
			id: 'can_comment',
			label: 'Allow comments',
			type: 'boolean',
			Edit: 'checkbox',
		},
		{
			id: 'description',
			label: 'Description',
			type: 'text',
			Edit: 'textarea',
		},
	];

	const form = {
		layout: {
			type: 'regular',
		},
		fields: [
			'title',
			'order',
			'author',
			'status',
			'reviewer',
			'email',
			'date',
			'sticky',
			'can_comment',
			'description',
		],
	};

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
