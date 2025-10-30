/**
 * WordPress dependencies
 */
import { useState, useCallback } from '@wordpress/element';
// Note: @wordpress/dataviews is bundled in our build, not loaded as external
import { DataForm } from '@wordpress/dataviews';
import deepMerge from 'deepmerge';

/**
 * Nested Data Example
 * Demonstrates DataForm handling nested data structures and derived data
 */
const NestedDataExample = () => {
	const [ data, setData ] = useState( {
		user: {
			profile: {
				name: 'John Doe',
				email: 'john@example.com',
				avatar: 'https://example.com/avatar.jpg',
			},
			preferences: {
				notifications: true,
				theme: 'dark',
				language: 'en',
			},
			address: {
				street: '123 Main St',
				city: 'New York',
				state: 'NY',
				zip: '10001',
			},
		},
		revenue: {
			total: 30,
			units: 10,
			pricePerUnit: 3,
			tax: 0.08,
			subtotal: 30,
			grandTotal: 32.4,
		},
		settings: {
			general: {
				siteName: 'My Website',
				tagline: 'Just another WordPress site',
			},
			seo: {
				metaTitle: 'Welcome to My Website',
				metaDescription: 'This is the best website ever',
			},
		},
	} );

	const nestedFields = [
		// User profile fields
		{
			id: 'user.profile.name',
			label: 'User Name',
			type: 'text',
		},
		{
			id: 'user.profile.email',
			label: 'User Email',
			type: 'email',
		},
		{
			id: 'user.profile.avatar',
			label: 'Avatar URL',
			type: 'url',
		},
		// User preferences with custom getValue/setValue
		{
			id: 'user.preferences.notifications',
			label: 'Notifications',
			type: 'boolean',
			Edit: 'radio',
			elements: [
				{ label: 'Enabled', value: 'enabled' },
				{ label: 'Disabled', value: 'disabled' },
			],
			getValue: ( { item } ) =>
				item.user.preferences.notifications === true
					? 'enabled'
					: 'disabled',
			setValue: ( { value } ) => ( {
				user: {
					preferences: { notifications: value === 'enabled' },
				},
			} ),
		},
		{
			id: 'user.preferences.theme',
			label: 'Theme',
			type: 'text',
			Edit: 'toggleGroup',
			elements: [
				{ value: 'light', label: 'Light' },
				{ value: 'dark', label: 'Dark' },
				{ value: 'auto', label: 'Auto' },
			],
		},
		{
			id: 'user.preferences.language',
			label: 'Language',
			type: 'text',
			elements: [
				{ value: 'en', label: 'English' },
				{ value: 'es', label: 'Spanish' },
				{ value: 'fr', label: 'French' },
				{ value: 'de', label: 'German' },
			],
		},
		// Address fields
		{
			id: 'user.address.street',
			label: 'Street Address',
			type: 'text',
		},
		{
			id: 'user.address.city',
			label: 'City',
			type: 'text',
		},
		{
			id: 'user.address.state',
			label: 'State',
			type: 'text',
		},
		{
			id: 'user.address.zip',
			label: 'ZIP Code',
			type: 'text',
		},
		// Revenue fields with derived calculations
		{
			id: 'revenue.total',
			label: 'Subtotal',
			type: 'integer',
			readOnly: true,
		},
		{
			id: 'revenue.pricePerUnit',
			label: 'Price Per Unit',
			type: 'integer',
			setValue: ( { item, value } ) => {
				const newTotal = value * item.revenue.units;
				const taxAmount = newTotal * item.revenue.tax;
				return {
					revenue: {
						total: newTotal,
						pricePerUnit: value,
						subtotal: newTotal,
						grandTotal: newTotal + taxAmount,
					},
				};
			},
		},
		{
			id: 'revenue.units',
			label: 'Units',
			type: 'integer',
			setValue: ( { item, value } ) => {
				const newTotal = item.revenue.pricePerUnit * value;
				const taxAmount = newTotal * item.revenue.tax;
				return {
					revenue: {
						total: newTotal,
						units: value,
						subtotal: newTotal,
						grandTotal: newTotal + taxAmount,
					},
				};
			},
		},
		{
			id: 'revenue.tax',
			label: 'Tax Rate',
			type: 'number',
			setValue: ( { item, value } ) => {
				const taxAmount = item.revenue.total * value;
				return {
					revenue: {
						tax: value,
						grandTotal: item.revenue.total + taxAmount,
					},
				};
			},
		},
		{
			id: 'revenue.grandTotal',
			label: 'Grand Total (with tax)',
			type: 'number',
			readOnly: true,
		},
		// Settings fields
		{
			id: 'settings.general.siteName',
			label: 'Site Name',
			type: 'text',
		},
		{
			id: 'settings.general.tagline',
			label: 'Tagline',
			type: 'text',
			Edit: 'textarea',
		},
		{
			id: 'settings.seo.metaTitle',
			label: 'Meta Title',
			type: 'text',
		},
		{
			id: 'settings.seo.metaDescription',
			label: 'Meta Description',
			type: 'text',
			Edit: {
				control: 'textarea',
				rows: 3,
			},
		},
	];

	const handleChange = useCallback( ( edits ) => {
		// Deep merge to properly handle nested updates
		setData( ( prev ) => deepMerge( prev, edits ) );
	}, [] );

	const form = {
		layout: {
			type: 'panel',
			labelPosition: 'top',
		},
		fields: [
			{
				id: 'userProfile',
				label: 'User Profile',
				children: [
					'user.profile.name',
					'user.profile.email',
					'user.profile.avatar',
				],
			},
			{
				id: 'userPreferences',
				label: 'User Preferences',
				children: [
					'user.preferences.notifications',
					'user.preferences.theme',
					'user.preferences.language',
				],
			},
			{
				id: 'address',
				label: 'Address Information',
				children: [
					'user.address.street',
					'user.address.city',
					'user.address.state',
					'user.address.zip',
				],
			},
			{
				id: 'revenue',
				label: 'Revenue Calculation',
				children: [
					'revenue.pricePerUnit',
					'revenue.units',
					'revenue.total',
					'revenue.tax',
					'revenue.grandTotal',
				],
			},
			{
				id: 'generalSettings',
				label: 'General Settings',
				children: [
					'settings.general.siteName',
					'settings.general.tagline',
				],
			},
			{
				id: 'seoSettings',
				label: 'SEO Settings',
				children: [
					'settings.seo.metaTitle',
					'settings.seo.metaDescription',
				],
			},
		],
	};

	return (
		<div>
			<DataForm
				data={ data }
				fields={ nestedFields }
				form={ form }
				onChange={ handleChange }
			/>
			<div style={ { marginTop: '20px', padding: '10px', background: '#f0f0f0' } }>
				<h4>Current Data Structure:</h4>
				<pre style={ { fontSize: '12px' } }>
					{ JSON.stringify( data, null, 2 ) }
				</pre>
			</div>
		</div>
	);
};

export default NestedDataExample;