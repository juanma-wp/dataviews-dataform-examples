export const form = {
	layout: {
		type: 'card',
		withHeader: true,
	},
	fields: [
		{
			id: 'customerCard',
			layout: {
				type: 'card',
				summary: 'plan-summary',
				isCollapsible: true,
			},
			label: 'Customer',
			description:
				'Enter your contact details, plan type, and addresses to complete your customer information.',
			children: [
				{
					id: 'customerContact',
					label: 'Contact',
					layout: {
						type: 'panel',
						labelPosition: 'top',
					},
					children: [
						{
							id: 'name',
							layout: {
								type: 'regular',
								labelPosition: 'top',
							},
						},
						{
							id: 'phone',
							layout: {
								type: 'regular',
								labelPosition: 'top',
							},
						},
						{
							id: 'email',
							layout: {
								type: 'regular',
								labelPosition: 'top',
							},
						},
					],
				},
				{
					id: 'plan',
					layout: { type: 'panel', labelPosition: 'top' },
				},
				{
					id: 'shippingAddress',
					layout: { type: 'panel', labelPosition: 'top' },
				},
				{
					id: 'billingAddress',
					layout: { type: 'panel', labelPosition: 'top' },
				},
				'displayPayments',
			],
		},
		{
			id: 'payments',
			layout: {
				type: 'card',
				withHeader: false,
			},
		},
		{
			id: 'taxConfiguration',
			label: 'Taxes',
			layout: {
				type: 'card',
				isOpened: false,
				summary: [ { id: 'dueDate', visibility: 'always' } ],
				isCollapsible: true,
			},
			children: [ 'vat', 'commission' ],
		},
	],
};
