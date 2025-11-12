import { ColorPalette } from '@wordpress/components';
import { useState } from '@wordpress/element';

export const fields = [
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
	{
		id: 'time',
		label: 'Time',
		type: 'text',
		Edit: ( { data, field, onChange, hideLabelFromVision } ) => {
			const [ value, setValue ] = useState(
				field.getValue( { item: data } )
			);
			return (
				<ColorPalette
					value={ value }
					onChange={ setValue }
					hideLabelFromVision
				/>
			);
		},
	},
];
