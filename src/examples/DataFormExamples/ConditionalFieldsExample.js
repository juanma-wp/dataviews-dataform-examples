/**
 * WordPress dependencies
 */
import { useState } from '@wordpress/element';
// Note: @wordpress/dataviews is bundled in our build, not loaded as external
import { DataForm } from '@wordpress/dataviews';

/**
 * Conditional Fields Example
 * Demonstrates DataForm with fields that show/hide based on other field values
 */
const ConditionalFieldsExample = () => {
	const [ data, setData ] = useState( {
		name: '',
		email: '',
		isActive: true,
		homepageDisplay: 'latest',
		staticHomepage: '',
		showAdvanced: false,
		advancedOption1: '',
		advancedOption2: '',
		userType: 'basic',
		companyName: '',
		taxId: '',
		subscriptionType: 'free',
		paymentMethod: '',
		billingFrequency: '',
	} );

	const fields = [
		{
			id: 'isActive',
			label: 'Is module active?',
			type: 'boolean',
			description: 'Enable or disable the module',
		},
		{
			id: 'name',
			label: 'Name',
			type: 'text',
			isVisible: ( post ) => post.isActive === true,
			placeholder: 'Enter your name',
		},
		{
			id: 'email',
			label: 'Email',
			type: 'email',
			isVisible: ( post ) => post.isActive === true,
			placeholder: 'Enter your email',
		},
		{
			id: 'homepageDisplay',
			label: 'Homepage display',
			elements: [
				{ value: 'latest', label: 'Latest posts' },
				{ value: 'static', label: 'Static page' },
				{ value: 'custom', label: 'Custom content' },
			],
		},
		{
			id: 'staticHomepage',
			label: 'Static homepage',
			elements: [
				{ value: 'welcome', label: 'Welcome to my website' },
				{ value: 'about', label: 'About' },
				{ value: 'services', label: 'Services' },
				{ value: 'contact', label: 'Contact' },
			],
			isVisible: ( post ) => post.homepageDisplay === 'static',
		},
		{
			id: 'showAdvanced',
			label: 'Show advanced options',
			type: 'boolean',
			Edit: 'toggle',
		},
		{
			id: 'advancedOption1',
			label: 'Advanced Option 1',
			type: 'text',
			isVisible: ( post ) => post.showAdvanced === true,
			placeholder: 'Configure advanced option 1',
		},
		{
			id: 'advancedOption2',
			label: 'Advanced Option 2',
			type: 'text',
			Edit: 'textarea',
			isVisible: ( post ) => post.showAdvanced === true,
			placeholder: 'Configure advanced option 2',
		},
		{
			id: 'userType',
			label: 'User Type',
			type: 'text',
			Edit: 'radio',
			elements: [
				{ value: 'basic', label: 'Individual' },
				{ value: 'business', label: 'Business' },
			],
		},
		{
			id: 'companyName',
			label: 'Company Name',
			type: 'text',
			isVisible: ( post ) => post.userType === 'business',
			placeholder: 'Enter company name',
		},
		{
			id: 'taxId',
			label: 'Tax ID',
			type: 'text',
			isVisible: ( post ) => post.userType === 'business',
			placeholder: 'Enter tax ID',
		},
		{
			id: 'subscriptionType',
			label: 'Subscription Type',
			type: 'text',
			Edit: 'toggleGroup',
			elements: [
				{ value: 'free', label: 'Free' },
				{ value: 'basic', label: 'Basic' },
				{ value: 'pro', label: 'Pro' },
				{ value: 'enterprise', label: 'Enterprise' },
			],
		},
		{
			id: 'paymentMethod',
			label: 'Payment Method',
			type: 'text',
			Edit: 'radio',
			elements: [
				{ value: 'card', label: 'Credit Card' },
				{ value: 'paypal', label: 'PayPal' },
				{ value: 'invoice', label: 'Invoice' },
			],
			isVisible: ( post ) => post.subscriptionType !== 'free',
		},
		{
			id: 'billingFrequency',
			label: 'Billing Frequency',
			type: 'text',
			elements: [
				{ value: 'monthly', label: 'Monthly' },
				{ value: 'yearly', label: 'Yearly (Save 20%)' },
			],
			isVisible: ( post ) => post.subscriptionType !== 'free',
		},
	];

	const form = {
		layout: { type: 'card' },
		fields: [
			{
				id: 'moduleSettings',
				label: 'Module Settings',
				children: [ 'isActive', 'name', 'email' ],
			},
			{
				id: 'homepageSettings',
				label: 'Homepage Configuration',
				children: [ 'homepageDisplay', 'staticHomepage' ],
			},
			{
				id: 'advancedSettings',
				label: 'Advanced Settings',
				children: [ 'showAdvanced', 'advancedOption1', 'advancedOption2' ],
			},
			{
				id: 'userInfo',
				label: 'User Information',
				children: [ 'userType', 'companyName', 'taxId' ],
			},
			{
				id: 'subscription',
				label: 'Subscription & Payment',
				children: [ 'subscriptionType', 'paymentMethod', 'billingFrequency' ],
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

export default ConditionalFieldsExample;