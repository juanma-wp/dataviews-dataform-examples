import {
	customTextRule,
	customSelectRule,
	customEmailRule,
	customTelephoneRule,
	customUrlRule,
	customColorRule,
	customIntegerRule,
	customPasswordRule,
	customDateRule,
	asyncValidateTitle,
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
			elements: true,
			custom: customTextRule,
		},
	},
	{
		id: 'select',
		type: 'text',
		label: 'Select',
		placeholder: 'Select an option',
		description: 'Must be Option 1',
		elements: [
			{ value: 'option1', label: 'Option 1' },
			{ value: 'option2', label: 'Option 2' },
		],
		isValid: {
			required: true,
			elements: true,
			custom: customSelectRule,
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
			elements: true,
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
			elements: true,
			custom: customTelephoneRule,
		},
	},
	{
		id: 'url',
		type: 'url',
		label: 'URL',
		placeholder: 'https://example.com',
		description: 'Must be exactly https://example.com',
		isValid: {
			required: true,
			elements: true,
			custom: customUrlRule,
		},
	},
	{
		id: 'color',
		type: 'color',
		label: 'Color',
		description: 'Must not be red (#ff0000)',
		isValid: {
			required: true,
			elements: true,
			custom: customColorRule,
		},
	},
	{
		id: 'integer',
		type: 'integer',
		label: 'Integer (Even Number)',
		description: 'Must be an even number',
		isValid: {
			required: true,
			elements: true,
			custom: customIntegerRule,
		},
	},
	{
		id: 'number',
		type: 'number',
		label: 'Number',
		isValid: {
			required: true,
			elements: true,
		},
	},
	{
		id: 'boolean',
		type: 'boolean',
		label: 'Boolean (Must be checked)',
		isValid: {
			required: true,
			elements: true,
		},
	},
	{
		id: 'date',
		type: 'date',
		label: 'Date',
		description: 'Cannot be in the past',
		isValid: {
			required: true,
			elements: true,
			custom: customDateRule,
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
			elements: true,
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
			elements: true,
			custom: customPasswordRule,
		},
	},
	// Async validation example
	{
		id: 'title',
		type: 'text',
		label: 'Title (Async)',
		placeholder: 'Enter a unique title',
		description: 'Title must be unique (simulated async check)',
		isValid: {
			required: true,
			custom: asyncValidateTitle,
		},
	},
];
