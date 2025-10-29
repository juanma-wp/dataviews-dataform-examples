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

// Placeholder for DataViewsPicker examples
const pickerExamples = [
	{
		id: 'basic-picker',
		label: __( 'Basic Picker Example' ),
		description: __( 'Simple DataViewsPicker implementation' ),
		Component: () => (
			<Card>
				<CardBody>
					<Text>{ __( 'Basic DataViewsPicker example will be implemented here.' ) }</Text>
				</CardBody>
			</Card>
		),
	},
	{
		id: 'advanced-picker',
		label: __( 'Advanced Picker Example' ),
		description: __( 'Advanced DataViewsPicker with custom configurations' ),
		Component: () => (
			<Card>
				<CardBody>
					<Text>{ __( 'Advanced DataViewsPicker example coming soon.' ) }</Text>
				</CardBody>
			</Card>
		),
	},
];

const DataViewsPicker = () => {
	const [ selectedExample, setSelectedExample ] = useState(
		pickerExamples[ 0 ].id
	);

	const currentExample = pickerExamples.find(
		( e ) => e.id === selectedExample
	);
	const CurrentComponent = currentExample?.Component;

	return (
		<VStack spacing={ 5 } className="dataviews-picker-manager">
			<VStack spacing={ 3 } className="picker-header">
				<HStack spacing={ 4 } alignment="left">
					<SelectControl
						label={ __( 'Select DataViewsPicker Example' ) }
						value={ selectedExample }
						options={ [
							...pickerExamples.map( ( e ) => ( {
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

			<div className="picker-content">
				{ CurrentComponent && <CurrentComponent /> }
			</div>
		</VStack>
	);
};

export default DataViewsPicker;