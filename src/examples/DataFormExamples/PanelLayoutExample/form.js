export const form = {
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
			children: [ 'origin', 'destination', 'flight_status', 'gate' ],
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
