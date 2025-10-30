/**
 * WordPress dependencies
 */
import { useState } from '@wordpress/element';
// Note: @wordpress/dataviews is bundled in our build, not loaded as external
import { DataForm } from '@wordpress/dataviews';

// Import data and fields from external files
import { data as initialData } from './data';
import { fields } from './fields';

/**
 * Basic DataForm Example
 * Demonstrates form with card layout and customer data from external files
 */
const BasicFormExample = () => {
	const [ data, setData ] = useState( initialData );

	const form = {
		layout: {
			type: 'card',
			withHeader: true,
		},
		fields: [
			{
				id: 'customerCard',
				label: 'Customer',
				description:
					'Enter your contact details, plan type, and addresses to complete your customer information.',
				layout: {
					type: 'card',
					isCollapsible: true,
					summary: 'plan-summary',
				},
				// children: [
				// 	{
				// 		id: 'customerContact',
				// 		label: 'Contact',
				// 		layout: {
				// 			type: 'panel',
				// 			labelPosition: 'top',
				// 		},
				// 		children: [
				// 			{
				// 				id: 'name',
				// 				layout: {
				// 					type: 'regular',
				// 					labelPosition: 'top',
				// 				},
				// 			},
				// 			{
				// 				id: 'phone',
				// 				layout: {
				// 					type: 'regular',
				// 					labelPosition: 'top',
				// 				},
				// 			},
				// 			{
				// 				id: 'email',
				// 				layout: {
				// 					type: 'regular',
				// 					labelPosition: 'top',
				// 				},
				// 			},
				// 		],
				// 	},
				// 	{
				// 		id: 'plan',
				// 		layout: {
				// 			type: 'panel',
				// 			labelPosition: 'top',
				// 		},
				// 	},
				// 	{
				// 		id: 'shippingAddress',
				// 		layout: {
				// 			type: 'panel',
				// 			labelPosition: 'top',
				// 		},
				// 	},
				// 	{
				// 		id: 'billingAddress',
				// 		layout: {
				// 			type: 'panel',
				// 			labelPosition: 'top',
				// 		},
				// 	},
				// 	'displayPayments',
				// ],
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
					isCollapsible: true,
					isOpened: false,
					summary: [
						{
							id: 'dueDate',
							visibility: 'always',
						},
					],
				},
				children: [ 'vat', 'commission' ],
			},
		],
	};

	return (
		<DataForm
			data={ data }
			fields={ fields }
			form={ form }
			onChange={ ( edits ) =>
				setData( ( prev ) => ( {
					...prev,
					...edits,
				} ) )
			}
		/>
	);
};

export default BasicFormExample;
