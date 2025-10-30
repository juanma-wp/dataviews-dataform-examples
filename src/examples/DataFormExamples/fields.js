import { Badge } from '@wordpress/components';

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
		Edit: 'toggleGroup',
		elements: [
			{
				label: 'Basic',
				value: 'basic',
			},
			{
				label: 'Business',
				value: 'business',
			},
			{
				label: 'VIP',
				value: 'vip',
			},
		],
		id: 'plan',
		label: 'Plan',
		type: 'text',
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
		isVisible: ( item ) => item.displayPayments,
		label: 'Payments',
		readOnly: true,
		render: ( { item } ) => {
			return (
				<p>
					The customer has made a total of { item.totalOrders }{ ' ' }
					orders, amounting to { item.totalRevenue } dollars. The
					average order value is { item.averageOrderValue }{ ' ' }
					dollars.
				</p>
			);
		},
		type: 'text',
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
		render: ( { item } ) => {
			return <Badge>Due on: { item.dueDate }</Badge>;
		},
		type: 'text',
	},
	{
		id: 'plan-summary',
		readOnly: true,
		render: ( { item } ) => {
			return <Badge>{ item.plan }</Badge>;
		},
		type: 'text',
	},
];
