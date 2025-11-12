export const fields = [
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
		setValue: ( { value } ) => ( {
			author: Number( value ),
		} ),
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
