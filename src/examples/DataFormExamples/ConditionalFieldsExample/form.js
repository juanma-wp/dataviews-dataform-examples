export const form = {
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
			children: [
				'subscriptionType',
				'paymentMethod',
				'billingFrequency',
			],
		},
	],
};
