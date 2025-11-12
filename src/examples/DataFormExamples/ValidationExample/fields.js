import {
	customTextRule,
	customEmailRule,
	customTelephoneRule,
	customUrlRule,
	customIntegerRule,
	customPasswordRule,
} from './customRules';

export const fields = [
	{
		id: 'text',
		type: 'text',
		label: 'Text',
		placeholder: 'Enter text with only letters and spaces',
		description: 'Must contain only letters and spaces',
		isValid: {
			required: true,
			custom: customTextRule,
		},
	},
	{
		id: 'email',
		type: 'email',
		label: 'Email',
		placeholder: 'email@example.com',
		description: 'Must be from @example.com domain',
		isValid: {
			required: true,
			custom: customEmailRule,
		},
	},
	{
		id: 'telephone',
		type: 'telephone',
		label: 'Telephone',
		placeholder: '+30XXXXXXXXXX',
		description: 'Must start with +30 followed by 10 digits',
		isValid: {
			required: true,
			custom: customTelephoneRule,
		},
	},
	{
		id: 'url',
		type: 'url',
		label: 'URL',
		placeholder: 'https://example.com/...',
		description: 'Must be from https://example.com domain',
		isValid: {
			required: true,
			custom: customUrlRule,
		},
	},
	{
		id: 'integer',
		type: 'integer',
		label: 'Integer (Even Number)',
		description: 'Must be an even number',
		isValid: {
			required: true,
			custom: customIntegerRule,
		},
	},
	{
		id: 'number',
		type: 'number',
		label: 'Number',
		isValid: {
			required: true,
		},
	},
	{
		id: 'boolean',
		type: 'boolean',
		label: 'Boolean (Must be checked)',
		isValid: {
			required: true,
		},
	},
	{
		id: 'categories',
		label: 'Categories',
		type: 'array',
		placeholder: 'Select categories',
		description: 'Select at least one category',
		isValid: {
			required: true,
		},
		elements: [
			{ value: 'astronomy', label: 'Astronomy' },
			{ value: 'book-review', label: 'Book review' },
			{ value: 'event', label: 'Event' },
			{ value: 'photography', label: 'Photography' },
			{ value: 'travel', label: 'Travel' },
		],
	},
	{
		id: 'password',
		type: 'password',
		label: 'Password',
		placeholder: 'Enter a strong password',
		description:
			'Must be at least 8 characters with 1 uppercase letter and 1 number',
		isValid: {
			required: true,
			custom: customPasswordRule,
		},
	},
];
