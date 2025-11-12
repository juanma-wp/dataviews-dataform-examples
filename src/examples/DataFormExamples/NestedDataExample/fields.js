export const nestedFields = [
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
