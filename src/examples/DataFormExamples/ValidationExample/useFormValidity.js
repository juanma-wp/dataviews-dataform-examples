import { useMemo } from '@wordpress/element';

export const useFormValidity = ( data, fields, form ) => {
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
					( Array.isArray( value ) && value.length === 0 )
				) {
					errors[ field.id ] = {
						required: { message: `${ field.label } is required` },
					};
				}
			}

			// Custom validation
			if ( field.isValid?.custom && value ) {
				const customError =
					typeof field.isValid.custom === 'function'
						? field.isValid.custom( data )
						: null;

				if ( customError ) {
					errors[ field.id ] = {
						...errors[ field.id ],
						custom: { message: customError },
					};
				}
			}
		} );

		return errors;
	}, [ data, fields ] );

	const isValid = Object.keys( validity ).length === 0;

	return { validity, isValid };
};
