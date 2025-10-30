import { useState, useMemo } from '@wordpress/element';
import { DataViewsPicker, filterSortAndPaginate } from '@wordpress/dataviews';

// Import centralized data and fields
import { data as allPlanetsData } from '@/data/dataPlanets';
import fieldsFromPlanets from '@/fields/fieldsPlanets';

// Use a subset of data for the picker example (first 10 items)
const data = allPlanetsData.slice( 0, 10 );

// Use the same fields structure from fieldsPlanets
const fields = fieldsFromPlanets;

const DataViewsPickerExample = () => {
	const [ view, setView ] = useState( {
		fields: [],
		filters: [],
		groupByField: undefined,
		infiniteScrollEnabled: undefined,
		mediaField: 'image',
		page: 1,
		perPage: 10,
		search: '',
		titleField: 'name.title',
		descriptionField: 'name.description',
		type: 'pickerGrid',
	} );

	const [ selection, setSelection ] = useState( [] );

	const { data: processedData, paginationInfo } = useMemo( () => {
		return filterSortAndPaginate( data, view, fields );
	}, [ view ] );

	const actions = [
		{
			callback: () => {
				console.log( 'Cancel clicked' );
				setSelection( [] );
			},
			id: 'cancel',
			label: 'Cancel',
			supportsBulk: false,
		},
		{
			callback: ( items ) => {
				const selectedItems = Array.isArray( items )
					? items
					: [ items ];
				console.log( 'Confirm clicked:', selectedItems );
			},
			id: 'confirm',
			isPrimary: true,
			label: 'Confirm',
			supportsBulk: false,
		},
	];

	// Debug logging
	console.log( 'DataViewsPickerExample rendering', {
		dataLength: processedData?.length,
		paginationInfo,
		view,
		DataViewsPicker: typeof DataViewsPicker,
	} );

	if ( ! DataViewsPicker ) {
		return (
			<div style={ { padding: '20px' } }>
				Error: DataViewsPicker component not available. Please check if
				@wordpress/dataviews is properly installed.
			</div>
		);
	}

	return (
		<div style={ { padding: '20px' } }>
			<DataViewsPicker
				actions={ actions }
				config={ {
					perPageSizes: [ 10, 25, 50, 100 ],
				} }
				data={ processedData }
				defaultLayouts={ {
					pickerGrid: {},
				} }
				fields={ fields }
				getItemId={ ( item ) => item.id.toString() }
				itemListLabel="Galactic Bodies"
				onChangeSelection={ setSelection }
				onChangeView={ setView }
				paginationInfo={ paginationInfo }
				selection={ selection }
				view={ view }
			/>
		</div>
	);
};

export default DataViewsPickerExample;
