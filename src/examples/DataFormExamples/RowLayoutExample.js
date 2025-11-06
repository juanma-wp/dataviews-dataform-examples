/**
 * WordPress dependencies
 */
import { useState, useMemo } from '@wordpress/element';
// Note: @wordpress/dataviews is bundled in our build, not loaded as external
import { DataForm } from '@wordpress/dataviews/wp';

/**
 * Row Layout Example
 * Demonstrates DataForm with row layout for horizontal field arrangement
 */
const RowLayoutExample = () => {
	const [ customer, setCustomer ] = useState( {
		name: 'Danyka Romaguera',
		email: 'aromaguera@example.org',
		phone: '1-828-352-1250',
		plan: 'Business',
		renewal: 'monthly',
		shippingAddress: 'N/A',
		shippingCity: 'N/A',
		shippingPostalCode: 'N/A',
		shippingCountry: 'N/A',
		billingAddress: 'Danyka Romaguera, West Myrtiehaven',
		billingCity: 'West Myrtiehaven',
		billingPostalCode: '80240-4282',
		vat: 10,
		commission: 5,
		hasDiscount: true,
		cost: 100,
		quantity: 5,
		total: 500,
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

	const form = useMemo(
		() => ( {
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

export default RowLayoutExample;