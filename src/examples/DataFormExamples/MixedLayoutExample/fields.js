export const fields = [
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
