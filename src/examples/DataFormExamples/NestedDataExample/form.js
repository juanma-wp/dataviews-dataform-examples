export const form = {
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
