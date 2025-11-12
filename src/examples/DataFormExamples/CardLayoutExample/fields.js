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
		id: 'shippingAddress',
		label: 'Shipping Address',
		type: 'text',
	},
	{
		id: 'billingAddress',
		label: 'Billing Address',
		type: 'text',
	},
	{
		id: 'displayPayments',
		label: 'Display Payments?',
		type: 'boolean',
	},
	{
		id: 'payments',
		label: 'Payments',
		type: 'text',
		readOnly: true,
		isVisible: ( item ) => item.displayPayments,
		render: ( { item } ) => {
			return (
				<p>
					The customer has made a total of { item.totalOrders }{ ' ' }
					orders, amounting to { item.totalRevenue } dollars. The
					average order value is { item.averageOrderValue } dollars.
				</p>
			);
		},
	},
	{
		id: 'vat',
		label: 'VAT',
		type: 'integer',
	},
	{
		id: 'commission',
		label: 'Commission',
		type: 'integer',
	},
	{
		id: 'dueDate',
		label: 'Due Date',
		type: 'text',
		render: ( { item } ) => {
			return (
				<p style={ { fontWeight: 'bold' } }>Due on: { item.dueDate }</p>
			);
		},
	},
	{
		id: 'plan-summary',
		type: 'text',
		readOnly: true,
		render: ( { item } ) => {
			return <p style={ { fontWeight: 'bold' } }>{ item.plan }</p>;
		},
	},
];
