export const form = {
	fields: [
		{
			id: 'customer',
			label: 'Customer Information',
			layout: {
				type: 'row',
				alignment: 'center',
			},
			children: [ 'name', 'phone', 'email' ],
		},
		{
			id: 'addressRow',
			label: 'Billing & Shipping Addresses',
			layout: {
				type: 'row',
				alignment: 'start',
			},
			children: [
				{
					id: 'billingAddress',
					label: 'Billing',
					children: [
						'billingAddress',
						'billingCity',
						'billingPostalCode',
					],
				},
				{
					id: 'shippingAddress',
					label: 'Shipping',
					children: [
						'shippingAddress',
						'shippingCity',
						'shippingPostalCode',
						'shippingCountry',
					],
				},
			],
		},
		{
			id: 'payments-and-tax',
			label: 'Payments & Taxes',
			layout: {
				type: 'row',
				alignment: 'center',
			},
			children: [ 'vat', 'commission', 'hasDiscount' ],
		},
		{
			id: 'planRow',
			label: 'Subscription',
			layout: {
				type: 'row',
				alignment: 'center',
			},
			children: [ 'plan', 'renewal' ],
		},
		{
			id: 'product',
			label: 'Product Calculation',
			layout: {
				type: 'row',
				alignment: 'end',
				styles: {
					total: { flex: 1 },
					cost: { flex: 3 },
					quantity: { flex: 3 },
				},
			},
			children: [ 'total', 'cost', 'quantity' ],
		},
	],
};
