/**
 * WordPress dependencies
 */
import { useState, useCallback, useMemo } from '@wordpress/element';
// Note: @wordpress/dataviews is bundled in our build, not loaded as external
import { DataForm } from '@wordpress/dataviews/wp';
import { Button, __experimentalVStack as VStack } from '@wordpress/components';

import { useFormValidity } from './useFormValidity';
import { data as initialData } from './data';
import { fields } from './fields';

/**
 * Validation Example
 * Demonstrates DataForm with various validation rules
 */
const ValidationExample = () => {
	const [ post, setPost ] = useState( initialData );

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
						<p>
							<strong>Please fix the validation errors:</strong>
						</p>
						<ul style={ { marginTop: '8px', paddingLeft: '20px' } }>
							{ Object.entries( validity ).map(
								( [ fieldId, errors ] ) => {
									const field = fields.find(
										( f ) => f.id === fieldId
									);
									const errorMessages = [];
									if ( errors.required ) {
										errorMessages.push(
											errors.required.message
										);
									}
									if ( errors.custom ) {
										errorMessages.push(
											errors.custom.message
										);
									}
									return errorMessages.map( ( msg, idx ) => (
										<li key={ `${ fieldId }-${ idx }` }>
											<strong>{ field?.label }:</strong>{ ' ' }
											{ msg }
										</li>
									) );
								}
							) }
						</ul>
					</div>
				) }
			</VStack>
		</form>
	);
};

export default ValidationExample;
