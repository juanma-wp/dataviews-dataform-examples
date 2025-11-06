/**
 * WordPress dependencies
 */
import { useState, useMemo } from '@wordpress/element';
// Note: @wordpress/dataviews is bundled in our build, not loaded as external
import { DataForm } from '@wordpress/dataviews/wp';

/**
 * Card Layout Example
 * Demonstrates DataForm with card layout and nested sections
 */
const CardLayoutExample = () => {
	const [ customer, setCustomer ] = useState( {
		name: 'Danyka Romaguera',
		email: 'aromaguera@example.org',
		phone: '1-828-352-1250',
		plan: 'Business',
		shippingAddress: 'N/A',
		billingAddress: 'Danyka Romaguera, West Myrtiehaven, 80240-4282, BI',
		displayPayments: true,
		totalOrders: 2,
		totalRevenue: 1430,
		averageOrderValue: 715,
		hasVat: true,
		vat: 10,
		commission: 5,
		dueDate: 'March 1st, 2028',
	} );

	const customerFields = [
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
						average order value is { item.averageOrderValue }{ ' ' }
						dollars.
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
				return <p style={{ fontWeight: 'bold' }}>Due on: { item.dueDate }</p>;
			},
		},
		{
			id: 'plan-summary',
			type: 'text',
			readOnly: true,
			render: ( { item } ) => {
				return <p style={{ fontWeight: 'bold' }}>{ item.plan }</p>;
			},
		},
	];

	const form = useMemo(
		() => ( {
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
		} ),
		[]
	);

	return (
		<DataForm
			data={ customer }
			fields={ customerFields }
			form={ form }
			onChange={ ( edits ) =>
				setCustomer( ( prev ) => ( {
					...prev,
					...edits,
				} ) )
			}
		/>
	);
};

export default CardLayoutExample;
