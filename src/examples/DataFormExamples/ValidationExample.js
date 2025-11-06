/**
 * WordPress dependencies
 */
import { useState, useCallback, useMemo } from '@wordpress/element';
// Note: @wordpress/dataviews is bundled in our build, not loaded as external
import { DataForm } from '@wordpress/dataviews/wp';
import { Button, __experimentalVStack as VStack } from '@wordpress/components';

/**
 * Custom hook for form validation
 */
const useFormValidity = ( data, fields, form ) => {
	const validity = useMemo( () => {
		const errors = {};

		// Simple validation logic
		fields.forEach( ( field ) => {
			const value = data[ field.id ];

			// Required validation
			if ( field.isValid?.required ) {
				if ( !value || value === '' || ( Array.isArray( value ) && value.length === 0 ) ) {
					errors[ field.id ] = { required: { message: `${ field.label } is required` } };
				}
			}

			// Custom validation
			if ( field.isValid?.custom && value ) {
				const customError = typeof field.isValid.custom === 'function'
					? field.isValid.custom( data )
					: null;

				if ( customError ) {
					errors[ field.id ] = { ...errors[ field.id ], custom: { message: customError } };
				}
			}
		} );

		return errors;
	}, [ data, fields ] );

	const isValid = Object.keys( validity ).length === 0;

	return { validity, isValid };
};

/**
 * Validation Example
 * Demonstrates DataForm with various validation rules
 */
const ValidationExample = () => {
	const [ post, setPost ] = useState( {
		text: 'Can have letters and spaces',
		email: 'hi@example.com',
		telephone: '+306978241796',
		url: 'https://example.com',
		integer: 2,
		number: 3.14,
		boolean: true,
		password: 'secret',  // Too short, missing uppercase and number
		categories: [ 'astronomy' ],
	} );

	const customTextRule = ( value ) => {
		if ( ! /^[a-zA-Z ]+$/.test( value.text ) ) {
			return 'Value must only contain letters and spaces.';
		}
		return null;
	};

	const customEmailRule = ( value ) => {
		if ( ! /^[a-zA-Z0-9._%+-]+@example\.com$/.test( value.email ) ) {
			return 'Email address must be from @example.com domain.';
		}
		return null;
	};

	const customTelephoneRule = ( value ) => {
		if ( ! /^\+30\d{10}$/.test( value.telephone ) ) {
			return 'Telephone number must start with +30 and have 10 digits after.';
		}
		return null;
	};

	const customUrlRule = ( value ) => {
		if ( ! /^https:\/\/example\.com/.test( value.url ) ) {
			return 'URL must be from https://example.com domain.';
		}
		return null;
	};

	const customIntegerRule = ( value ) => {
		if ( value.integer % 2 !== 0 ) {
			return 'Integer must be an even number.';
		}
		return null;
	};

	const customPasswordRule = ( value ) => {
		if ( value.password.length < 8 ) {
			return 'Password must be at least 8 characters long.';
		}
		if ( ! /[A-Z]/.test( value.password ) ) {
			return 'Password must contain at least one uppercase letter.';
		}
		if ( ! /[0-9]/.test( value.password ) ) {
			return 'Password must contain at least one number.';
		}
		return null;
	};

	const fields = [
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
			description: 'Must be at least 8 characters with 1 uppercase letter and 1 number',
			isValid: {
				required: true,
				custom: customPasswordRule,
			},
		},
	];

	const form = {
		layout: { type: 'regular' },
		fields: [
			'text',
			'email',
			'telephone',
			'url',
			'integer',
			'number',
			'boolean',
			'categories',
			'password',
		],
	};

	const { validity, isValid } = useFormValidity( post, fields, form );

	const handleSubmit = useCallback( () => {
		if ( isValid ) {
			// eslint-disable-next-line no-alert
			alert( 'Form submitted successfully!' );
			// eslint-disable-next-line no-console
			console.log( 'Form data:', post );
		}
	}, [ isValid, post ] );

	return (
		<form onSubmit={ ( e ) => e.preventDefault() }>
			<VStack alignment="left" spacing={ 4 }>
				<DataForm
					data={ post }
					fields={ fields }
					form={ form }
					validity={ validity }
					onChange={ ( edits ) =>
						setPost( ( prev ) => ( {
							...prev,
							...edits,
						} ) )
					}
				/>
				<Button
					__next40pxDefaultSize
					accessibleWhenDisabled
					disabled={ ! isValid }
					variant="primary"
					onClick={ handleSubmit }
				>
					Submit
				</Button>
				{ ! isValid && (
					<div style={ { color: '#cc1818' } }>
						<p><strong>Please fix the validation errors:</strong></p>
						<ul style={ { marginTop: '8px', paddingLeft: '20px' } }>
							{ Object.entries( validity ).map( ( [ fieldId, errors ] ) => {
								const field = fields.find( f => f.id === fieldId );
								const errorMessages = [];
								if ( errors.required ) errorMessages.push( errors.required.message );
								if ( errors.custom ) errorMessages.push( errors.custom.message );
								return errorMessages.map( ( msg, idx ) => (
									<li key={ `${fieldId}-${idx}` }>
										<strong>{ field?.label }:</strong> { msg }
									</li>
								) );
							} ) }
						</ul>
					</div>
				) }
			</VStack>
		</form>
	);
};

export default ValidationExample;