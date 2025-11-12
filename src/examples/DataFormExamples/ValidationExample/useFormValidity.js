import { useMemo, useState, useEffect } from '@wordpress/element';

export const useFormValidity = ( data, fields, form ) => {
	const [ asyncErrors, setAsyncErrors ] = useState( {} );
	const [ isValidating, setIsValidating ] = useState( false );

	// Handle async validation
	useEffect( () => {
		const validateAsync = async () => {
			const newAsyncErrors = {};
			setIsValidating( true );

			for ( const field of fields ) {
				if ( field.isValid?.custom && typeof field.isValid.custom === 'function' ) {
					const value = data[ field.id ];
					if ( value ) {
						try {
							// Check if the function is async
							const result = field.isValid.custom( data );
							if ( result && typeof result.then === 'function' ) {
								const error = await result;
								if ( error ) {
									newAsyncErrors[ field.id ] = {
										custom: { message: error },
									};
								}
							}
						} catch ( err ) {
							// Handle any errors in validation
							console.error( 'Async validation error:', err );
						}
					}
				}
			}

			setAsyncErrors( newAsyncErrors );
			setIsValidating( false );
		};

		validateAsync();
	}, [ data, fields ] );

	const validity = useMemo( () => {
		const errors = {};

		// Simple validation logic
		fields.forEach( ( field ) => {
			const value = data[ field.id ];

			// Required validation
			if ( field.isValid?.required ) {
				if (
					! value ||
					value === '' ||
					( Array.isArray( value ) && value.length === 0 ) ||
					( field.type === 'boolean' && value !== true )
				) {
					errors[ field.id ] = {
						required: { message: `${ field.label } is required` },
					};
				}
			}

			// Custom sync validation
			if ( field.isValid?.custom && value && typeof field.isValid.custom === 'function' ) {
				const result = field.isValid.custom( data );
				// Only handle sync validation here
				if ( result && typeof result.then !== 'function' ) {
					if ( result ) {
						errors[ field.id ] = {
							...errors[ field.id ],
							custom: { message: result },
						};
					}
				}
			}
		} );

		// Merge async errors
		Object.keys( asyncErrors ).forEach( ( fieldId ) => {
			errors[ fieldId ] = {
				...errors[ fieldId ],
				...asyncErrors[ fieldId ],
			};
		} );

		return errors;
	}, [ data, fields, asyncErrors ] );

	const isValid = Object.keys( validity ).length === 0 && ! isValidating;

	return { validity, isValid, isValidating };
};
