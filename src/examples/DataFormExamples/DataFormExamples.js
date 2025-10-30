import { useState } from '@wordpress/element';
import {
	__experimentalVStack as VStack,
	__experimentalHStack as HStack,
	SelectControl,
	__experimentalText as Text,
	Card,
	CardBody,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

// Placeholder for DataForm examples
const dataFormExamples = [
	{
		id: 'basic-form',
		label: __( 'Basic DataForm' ),
		description: __( 'Simple form with basic field types' ),
		Component: () => (
			<Card>
				<CardBody>
					<Text>{ __( 'Basic DataForm example will be implemented here.' ) }</Text>
				</CardBody>
			</Card>
		),
	},
	{
		id: 'validation-form',
		label: __( 'Form with Validation' ),
		description: __( 'DataForm with field validation rules' ),
		Component: () => (
			<Card>
				<CardBody>
					<Text>{ __( 'DataForm with validation example coming soon.' ) }</Text>
				</CardBody>
			</Card>
		),
	},
	{
		id: 'dynamic-form',
		label: __( 'Dynamic DataForm' ),
		description: __( 'DataForm with dynamic fields and conditional logic' ),
		Component: () => (
			<Card>
				<CardBody>
					<Text>{ __( 'Dynamic DataForm example coming soon.' ) }</Text>
				</CardBody>
			</Card>
		),
	},
];

const DataFormExamples = () => {
	const [ selectedExample, setSelectedExample ] = useState(
		dataFormExamples[ 0 ].id
	);

	const currentExample = dataFormExamples.find(
		( e ) => e.id === selectedExample
	);
	const CurrentComponent = currentExample?.Component;

	return (
		<VStack spacing={ 5 } className="dataform-manager">
			<VStack spacing={ 3 } className="dataform-header">
				<HStack spacing={ 4 } alignment="left">
					<SelectControl
						label={ __( 'Select DataForm Example' ) }
						value={ selectedExample }
						options={ [
							...dataFormExamples.map( ( e ) => ( {
								label: e.label,
								value: e.id,
							} ) ),
						] }
						onChange={ setSelectedExample }
						__nextHasNoMarginBottom
					/>
					{ currentExample && (
						<Text className="example-description">
							{ currentExample.description }
						</Text>
					) }
				</HStack>
			</VStack>

			<div className="dataform-content">
				{ CurrentComponent && <CurrentComponent /> }
			</div>
		</VStack>
	);
};

export default DataFormExamples;