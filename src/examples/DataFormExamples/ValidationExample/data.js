export const data = {
	text: 'Can have letters and spaces',
	select: 'option2', // Invalid - should be option1
	email: 'hi@example.com',
	telephone: '+306978241796',
	url: 'https://example.com',
	color: '#ff0000', // Invalid - red is not allowed
	integer: 2,
	number: 3.14,
	boolean: true,
	date: new Date().toISOString().split( 'T' )[ 0 ], // Today's date is valid
	password: 'secret', // Too short, missing uppercase and number
	categories: [ 'astronomy' ],
	title: 'existing', // This will fail async validation
};
