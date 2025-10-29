import { DataViews, filterSortAndPaginate } from '@wordpress/dataviews';
import { data as dataPlanets } from '../../data/planets';
import { useState, useMemo } from '@wordpress/element';
import fieldsFree from './fieldsFree';
import actions from './actionsFree';

const LAYOUT_GRID = 'grid';

/**
 * Dashboard demonstrating the groupBy functionality
 * This allows items to be grouped by a specific field value (type)
 */
const DashboardGroupedByLayout = () => {
	const [ view, setView ] = useState( {
		type: LAYOUT_GRID,
		search: '',
		page: 1,
		perPage: 100, // Show all items to demonstrate grouping
		filters: [],
		fields: [ 'description', 'satellites' ], // Fields to display in the card
		titleField: 'title',
		descriptionField: 'satellites', // Show satellites count as secondary info
		mediaField: 'image',
		groupBy: 'type', // Group items by their type field
		layout: {
			groupBy: 'type', // Enable grouping in grid layout
		},
	} );

	const { data: shownData, paginationInfo } = useMemo( () => {
		// Map the data to ensure title/description fields are at root level
		const mappedData = dataPlanets.map( item => ({
			...item,
			title: item.name?.title || item.title || '',
			description: item.name?.description || item.description || ''
		}));
		return filterSortAndPaginate( mappedData, view, fieldsFree );
	}, [ view ] );

	return (
		<DataViews
			getItemId={ ( item ) => item.id.toString() }
			paginationInfo={ paginationInfo }
			data={ shownData }
			view={ view }
			fields={ fieldsFree }
			onChangeView={ setView }
			actions={ actions }
			defaultLayouts={ {
				[ LAYOUT_GRID ]: {
					groupBy: 'type', // Enable grouping by type in grid layout
				},
			} }
		/>
	);
};

export default DashboardGroupedByLayout;