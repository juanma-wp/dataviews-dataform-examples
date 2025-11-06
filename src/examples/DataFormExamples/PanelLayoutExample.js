/**
 * WordPress dependencies
 */
import { useState, useMemo } from '@wordpress/element';
// Note: @wordpress/dataviews is bundled in our build, not loaded as external
import { DataForm } from '@wordpress/dataviews/wp';

/**
 * Panel Layout Example
 * Demonstrates DataForm with panel layout and grouped fields
 */
const PanelLayoutExample = () => {
	const [ post, setPost ] = useState( {
		title: 'Hello, World!',
		order: 2,
		author: 1,
		status: 'draft',
		password: '',
		reviewer: 'john',
		date: '2021-01-01T12:00:00',
		filesize: 1024,
		dimensions: '1920x1080',
		tags: [ 'photography', 'travel' ],
		address1: '123 Main St',
		address2: 'Apt 4B',
		city: 'New York',
		comment_status: 'open',
		ping_status: true,
		origin: 'New York (JFK)',
		destination: 'Los Angeles (LAX)',
		flight_status: 'on-time',
		gate: 'A12',
		seat: '14F',
	} );

	const fields = [
		{
			id: 'title',
			label: 'Title',
			type: 'text',
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
			id: 'password',
			label: 'Password',
			type: 'text',
			isVisible: ( item ) => item.status !== 'private',
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
			label: 'Date',
			type: 'datetime',
		},
		{
			id: 'filesize',
			label: 'File Size',
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
			id: 'tags',
			label: 'Tags',
			type: 'array',
			placeholder: 'Enter comma-separated tags',
			elements: [
				{ value: 'astronomy', label: 'Astronomy' },
				{ value: 'book-review', label: 'Book review' },
				{ value: 'event', label: 'Event' },
				{ value: 'photography', label: 'Photography' },
				{ value: 'travel', label: 'Travel' },
			],
		},
		{
			id: 'address1',
			label: 'Address 1',
			type: 'text',
		},
		{
			id: 'address2',
			label: 'Address 2',
			type: 'text',
		},
		{
			id: 'city',
			label: 'City',
			type: 'text',
		},
		{
			id: 'comment_status',
			label: 'Comment Status',
			type: 'text',
			Edit: 'radio',
			elements: [
				{ value: 'open', label: 'Allow comments' },
				{ value: 'closed', label: 'Comments closed' },
			],
		},
		{
			id: 'ping_status',
			label: 'Allow Pings/Trackbacks',
			type: 'boolean',
		},
		{
			id: 'origin',
			label: 'Origin',
			type: 'text',
		},
		{
			id: 'destination',
			label: 'Destination',
			type: 'text',
		},
		{
			id: 'flight_status',
			label: 'Flight Status',
			type: 'text',
			Edit: 'radio',
			elements: [
				{ value: 'on-time', label: 'On Time' },
				{ value: 'delayed', label: 'Delayed' },
				{ value: 'cancelled', label: 'Cancelled' },
			],
		},
		{
			id: 'gate',
			label: 'Gate',
			type: 'text',
		},
		{
			id: 'seat',
			label: 'Seat',
			type: 'text',
		},
	];

	const form = useMemo( () => {
		return {
			layout: {
				type: 'panel',
			},
			fields: [
				'title',
				{
					id: 'status',
					label: 'Status & Visibility',
					children: [ 'status', 'password' ],
				},
				'order',
				'author',
				'filesize',
				'dimensions',
				'tags',
				{
					id: 'discussion',
					label: 'Discussion',
					children: [ 'comment_status', 'ping_status' ],
				},
				{
					id: 'address',
					label: 'Address',
					children: [ 'address1', 'address2', 'city' ],
				},
				{
					id: 'flight_info',
					label: 'Flight Information',
					children: [
						'origin',
						'destination',
						'flight_status',
						'gate',
					],
					layout: {
						type: 'panel',
						summary: [ 'origin', 'destination', 'flight_status' ],
					},
				},
				{
					id: 'passenger_details',
					label: 'Passenger Details',
					children: [ 'author', 'seat' ],
					layout: {
						type: 'panel',
						summary: [ 'author', 'seat' ],
					},
				},
			],
		};
	}, [] );

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

export default PanelLayoutExample;