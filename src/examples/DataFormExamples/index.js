import { useState } from '@wordpress/element';
// import {
// 	__experimentalVStack as VStack,
// 	__experimentalHStack as HStack,
// 	SelectControl,
// 	__experimentalText as Text,
// } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { DataForm } from '@wordpress/dataviews';

// Import all example components
//import BasicFormExample from './BasicFormExample';
// import PanelLayoutExample from './PanelLayoutExample';
// import CardLayoutExample from './CardLayoutExample';
// import RowLayoutExample from './RowLayoutExample';
// import ValidationExample from './ValidationExample';
// import ConditionalFieldsExample from './ConditionalFieldsExample';
// import NestedDataExample from './NestedDataExample';
// import MixedLayoutExample from './MixedLayoutExample';

// DataForm examples configuration
// const dataFormExamples = [
// 	{
// 		id: 'basic-form',
// 		label: __( 'Basic Form' ),
// 		description: __(
// 			'Simple form with basic field types and regular layout'
// 		),
// 		Component: BasicFormExample,
// 	},
// 	// {
// 	// 	id: 'panel-layout',
// 	// 	label: __( 'Panel Layout' ),
// 	// 	description: __( 'Form with panel layout and grouped fields' ),
// 	// 	Component: PanelLayoutExample,
// 	// },
// 	// {
// 	// 	id: 'card-layout',
// 	// 	label: __( 'Card Layout' ),
// 	// 	description: __(
// 	// 		'Form with card layout, collapsible sections, and nested structure'
// 	// 	),
// 	// 	Component: CardLayoutExample,
// 	// },
// 	// {
// 	// 	id: 'row-layout',
// 	// 	label: __( 'Row Layout' ),
// 	// 	description: __(
// 	// 		'Form with row layout for horizontal field arrangement'
// 	// 	),
// 	// 	Component: RowLayoutExample,
// 	// },
// 	// {
// 	// 	id: 'mixed-layout',
// 	// 	label: __( 'Mixed Layouts' ),
// 	// 	description: __(
// 	// 		'Form combining multiple layout types (card, panel, row)'
// 	// 	),
// 	// 	Component: MixedLayoutExample,
// 	// },
// 	// {
// 	// 	id: 'validation-form',
// 	// 	label: __( 'Form Validation' ),
// 	// 	description: __(
// 	// 		'Form with various validation rules (required, custom, async)'
// 	// 	),
// 	// 	Component: ValidationExample,
// 	// },
// 	// {
// 	// 	id: 'conditional-fields',
// 	// 	label: __( 'Conditional Fields' ),
// 	// 	description: __(
// 	// 		'Form with fields that show/hide based on other field values'
// 	// 	),
// 	// 	Component: ConditionalFieldsExample,
// 	// },
// 	// {
// 	// 	id: 'nested-data',
// 	// 	label: __( 'Nested Data' ),
// 	// 	description: __(
// 	// 		'Form handling nested data structures and derived calculations'
// 	// 	),
// 	// 	Component: NestedDataExample,
// 	// },
// ];

// const DataFormExamples = () => {
// 	const [ selectedExample, setSelectedExample ] = useState(
// 		dataFormExamples[ 0 ].id
// 	);

// 	const currentExample = dataFormExamples.find(
// 		( e ) => e.id === selectedExample
// 	);
// 	const CurrentComponent = currentExample?.Component;

// 	return (
// 		<VStack spacing={ 5 } className="dataform-manager">
// 			<VStack spacing={ 3 } className="dataform-header">
// 				<HStack spacing={ 4 } alignment="left">
// 					<SelectControl
// 						label={ __( 'Select DataForm Example' ) }
// 						value={ selectedExample }
// 						options={ [
// 							...dataFormExamples.map( ( e ) => ( {
// 								label: e.label,
// 								value: e.id,
// 							} ) ),
// 						] }
// 						onChange={ setSelectedExample }
// 						__nextHasNoMarginBottom
// 					/>
// 					{ currentExample && (
// 						<Text className="example-description">
// 							{ currentExample.description }
// 						</Text>
// 					) }
// 				</HStack>
// 			</VStack>

// 			<div className="dataform-content">
// 				{ CurrentComponent && <CurrentComponent /> }
// 			</div>
// 		</VStack>
// 	);
// };

const SimpleDataForm = () => {
	const [ data, setData ] = useState( {
		name: 'Test Name',
		email: 'test@example.com',
	} );

	const fields = [
		{
			id: 'name',
			label: 'Name',
			type: 'text',
		},
		{
			id: 'email',
			label: 'Email',
			type: 'text',
		},
	];

	const form = {
		fields: [ 'name', 'email' ],
	};

	return (
		<div style={ { padding: '20px' } }>
			<h2>Simple DataForm Test</h2>
			<DataForm
				data={ data }
				fields={ fields }
				form={ form }
				onChange={ ( edits ) => {
					console.log( 'Changes:', edits );
					setData( { ...data, ...edits } );
				} }
			/>
			<div
				style={ {
					marginTop: '20px',
					padding: '10px',
					background: '#f0f0f0',
				} }
			>
				<h3>Current Data:</h3>
				<pre>{ JSON.stringify( data, null, 2 ) }</pre>
			</div>
		</div>
	);
};

const DataFormExamplesSimple = () => {
	return <SimpleDataForm />;
};

export default DataFormExamplesSimple;
