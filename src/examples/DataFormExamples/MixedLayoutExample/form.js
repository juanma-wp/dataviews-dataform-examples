export const form = {
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
			children: [ 'author', 'reviewer', 'date', 'birthdate' ],
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
