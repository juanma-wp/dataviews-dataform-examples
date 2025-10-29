import { DataViews, filterSortAndPaginate } from '@wordpress/dataviews';
import { data } from '../../data/planets';
import { useState, useMemo } from '@wordpress/element';
import fields from './fieldsFree';
import actions from './actionsFree';

const LAYOUT_GRID = 'grid';
const LAYOUT_LIST = 'list';
const LAYOUT_TABLE = 'table';

/**
 * Dashboard demonstrating the groupBy functionality
 * This allows items to be grouped by a specific field value (type)
 */
const DashboardGroupedByLayout = () => {
	const [ view, setView ] = useState( {
		type: LAYOUT_GRID,
		search: '',
		page: 1,
		perPage: 20,
		filters: [],
		fields: [ 'satellites' ],
		titleField: 'title',
		descriptionField: 'description',
		mediaField: 'image',
		groupByField: 'type',
		layout: {
			badgeFields: [ 'satellites' ]
		}
	} );

	const { data: shownData, paginationInfo } = useMemo( () => {
		return filterSortAndPaginate( data, view, fields );
	}, [ view ] );

	return (
		<DataViews
			getItemId={ ( item ) => item.id.toString() }
			paginationInfo={ paginationInfo }
			data={ shownData }
			view={ view }
			fields={ fields }
			onChangeView={ setView }
			actions={ actions }
			defaultLayouts={ {
				[ LAYOUT_GRID ]: {},
				[ LAYOUT_LIST ]: {},
				[ LAYOUT_TABLE ]: {}
			} }
		/>
	);
};

export default DashboardGroupedByLayout;