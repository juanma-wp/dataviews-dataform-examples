export const fields = [
	{
		id: 'name',
		label: 'Customer Name',
		type: 'text',
	},
	{
		id: 'phone',
		label: 'Phone',
		type: 'text',
	},
	{
		id: 'email',
		label: 'Email',
		type: 'email',
	},
	{
		id: 'shippingAddress',
		label: 'Shipping Address',
		type: 'text',
	},
	{
		id: 'shippingCity',
		label: 'Shipping City',
		type: 'text',
	},
	{
		id: 'shippingPostalCode',
		label: 'Shipping Postal Code',
		type: 'text',
	},
	{
		id: 'shippingCountry',
		label: 'Shipping Country',
		type: 'text',
	},
	{
		id: 'billingAddress',
		label: 'Billing Address',
		type: 'text',
	},
	{
		id: 'billingCity',
		label: 'Billing City',
		type: 'text',
	},
	{
		id: 'billingPostalCode',
		label: 'Billing Postal Code',
		type: 'text',
	},
	{
		id: 'vat',
		label: 'VAT (%)',
		type: 'integer',
	},
	{
		id: 'commission',
		label: 'Commission (%)',
		type: 'integer',
	},
	{
		id: 'hasDiscount',
		label: 'Has Discount?',
		type: 'boolean',
	},
	{
		id: 'plan',
		label: 'Plan',
		type: 'text',
		Edit: 'toggleGroup',
		elements: [
			{ value: 'basic', label: 'Basic' },
			{ value: 'business', label: 'Business' },
			{ value: 'vip', label: 'VIP' },
		],
	},
	{
		id: 'renewal',
		label: 'Renewal',
		type: 'text',
		Edit: 'radio',
		elements: [
			{ value: 'weekly', label: 'Weekly' },
			{ value: 'monthly', label: 'Monthly' },
			{ value: 'yearly', label: 'Yearly' },
		],
	},
	{
		id: 'cost',
		label: 'Cost',
		type: 'integer',
		setValue: ( { item, value } ) => ( {
			cost: value,
			total: Number( value ) * item.quantity,
		} ),
	},
	{
		id: 'quantity',
		label: 'Quantity',
		type: 'integer',
		elements: [
			{ value: 1, label: '1' },
			{ value: 2, label: '2' },
			{ value: 3, label: '3' },
			{ value: 4, label: '4' },
			{ value: 5, label: '5' },
			{ value: 6, label: '6' },
			{ value: 7, label: '7' },
			{ value: 8, label: '8' },
			{ value: 9, label: '9' },
			{ value: 10, label: '10' },
		],
		setValue: ( { item, value } ) => ( {
			quantity: Number( value ),
			total: Number( value ) * item.cost,
		} ),
	},
	{
		id: 'total',
		label: 'Total',
		type: 'integer',
		readOnly: true,
	},
];
