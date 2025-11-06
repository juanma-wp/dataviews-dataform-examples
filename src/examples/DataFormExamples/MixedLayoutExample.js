/**
 * WordPress dependencies
 */
import { useState } from '@wordpress/element';
// Note: @wordpress/dataviews is bundled in our build, not loaded as external
import { DataForm } from '@wordpress/dataviews/wp';

/**
 * Mixed Layout Example
 * Demonstrates DataForm with mixed layout types (card, panel, row)
 */
const MixedLayoutExample = () => {
	const [ post, setPost ] = useState( {
		title: 'Hello, World!',
		order: 2,
		author: 1,
		status: 'draft',
		reviewer: 'john',
		date: '2021-01-01T12:00:00',
		birthdate: '1950-02-23T12:00:00',
		filesize: 1024,
		dimensions: '1920x1080',
		category: 'technology',
		tags: [ 'web', 'design' ],
		featured: true,
		visibility: 'public',
		commentStatus: 'open',
		pingStatus: true,
	} );

	const fields = [
		{
			id: 'title',
			label: 'Title',
			type: 'text',
			placeholder: 'Enter post title',
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
			id: 'date',
			label: 'Publish Date',
			type: 'datetime',
		},
		{
			id: 'birthdate',
			label: 'Creation Date',
			type: 'datetime',
			elements: [
				{ value: '', label: 'Select a date' },
				{ value: '1970-02-23T12:00:00', label: 'Template 1' },
				{ value: '1950-02-23T12:00:00', label: 'Template 2' },
			],
		},
		{
			id: 'filesize',
			label: 'File Size (KB)',
			type: 'integer',
			readOnly: true,
		},
		{
			id: 'dimensions',
			label: 'Dimensions',
			type: 'text',
			readOnly: true,
		},
		{
			id: 'category',
			label: 'Category',
			type: 'text',
			elements: [
				{ value: 'technology', label: 'Technology' },
				{ value: 'design', label: 'Design' },
				{ value: 'business', label: 'Business' },
				{ value: 'lifestyle', label: 'Lifestyle' },
			],
		},
		{
			id: 'tags',
			label: 'Tags',
			type: 'array',
			elements: [
				{ value: 'web', label: 'Web' },
				{ value: 'design', label: 'Design' },
				{ value: 'development', label: 'Development' },
				{ value: 'wordpress', label: 'WordPress' },
				{ value: 'javascript', label: 'JavaScript' },
			],
		},
		{
			id: 'featured',
			label: 'Featured Post',
			type: 'boolean',
		},
		{
			id: 'visibility',
			label: 'Visibility',
			type: 'text',
			Edit: 'radio',
			elements: [
				{ value: 'public', label: 'Public' },
				{ value: 'password', label: 'Password Protected' },
				{ value: 'private', label: 'Private' },
			],
		},
		{
			id: 'commentStatus',
			label: 'Comments',
			type: 'text',
			Edit: 'toggleGroup',
			elements: [
				{ value: 'open', label: 'Open' },
				{ value: 'closed', label: 'Closed' },
			],
		},
		{
			id: 'pingStatus',
			label: 'Allow Pingbacks',
			type: 'boolean',
			Edit: 'toggle',
		},
	];

	const form = {
		layout: { type: 'card' },
		fields: [
			// Row layout for title and status
			{
				id: 'title-and-status',
				children: [
					{
						id: 'title',
						layout: { type: 'panel', labelPosition: 'top' },
					},
					'status',
				],
				layout: {
					type: 'row',
					alignment: 'center',
				},
			},
			// Card layout for metadata
			{
				id: 'metadata',
				label: 'Post Metadata',
				layout: {
					type: 'card',
					isCollapsible: true,
				},
				children: [
					{
						id: 'order',
						layout: { type: 'panel' },
					},
					'category',
					'tags',
					'featured',
				],
			},
			// Panel layout for author and dates
			{
				id: 'authorDateCard',
				label: 'Author & Dates',
				layout: {
					type: 'panel',
					openAs: 'dropdown',
				},
				children: [
					'author',
					'reviewer',
					'date',
					'birthdate',
				],
			},
			// Row layout for file info
			{
				id: 'fileInfo',
				label: 'File Information',
				layout: {
					type: 'row',
				},
				children: [ 'filesize', 'dimensions' ],
			},
			// Card with nested panels for discussion settings
			{
				id: 'discussionSettings',
				label: 'Discussion Settings',
				layout: {
					type: 'card',
					isCollapsible: true,
					isOpened: false,
				},
				children: [
					{
						id: 'visibilitySettings',
						label: 'Visibility',
						layout: {
							type: 'panel',
						},
						children: [ 'visibility' ],
					},
					{
						id: 'commentSettings',
						label: 'Comments & Pingbacks',
						layout: {
							type: 'row',
							alignment: 'start',
						},
						children: [ 'commentStatus', 'pingStatus' ],
					},
				],
			},
		],
	};

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