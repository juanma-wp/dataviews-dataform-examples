import { DataViews, filterSortAndPaginate } from '@wordpress/dataviews';
import { data as dataPlanets } from '@/data/dataPlanets';
import { SVG, Path } from '@wordpress/primitives';
import { useState, useMemo } from '@wordpress/element';
import fields from '@/fields/fieldsPlanets';

const actions = [
	{
		RenderModal: () => {},

		icon: (
			<SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<Path
					clipRule="evenodd"
					d="M12 5.5A2.25 2.25 0 0 0 9.878 7h4.244A2.251 2.251 0 0 0 12 5.5ZM12 4a3.751 3.751 0 0 0-3.675 3H5v1.5h1.27l.818 8.997a2.75 2.75 0 0 0 2.739 2.501h4.347a2.75 2.75 0 0 0 2.738-2.5L17.73 8.5H19V7h-3.325A3.751 3.751 0 0 0 12 4Zm4.224 4.5H7.776l.806 8.861a1.25 1.25 0 0 0 1.245 1.137h4.347a1.25 1.25 0 0 0 1.245-1.137l.805-8.861Z"
					fillRule="evenodd"
				/>
			</SVG>
		),

		id: 'delete',
		isPrimary: true,
		label: 'Delete item',
		modalFocusOnMount: 'firstContentElement',
		modalHeader: () => {},
		supportsBulk: true,
	},
	{
		callback: () => {},
		id: 'secondary',
		label: 'Secondary action',
	},
];

const DashboardDefault = () => {
	// "view" and "setView" definition
	const [ view, setView ] = useState( {
		fields: [ 'categories' ],
		filters: [],
		layout: {
			styles: {
				satellites: {
					align: 'end',
				},
			},
		},
		descriptionField: 'name.description',
		titleField: 'name.title',
		mediaField: 'image',
		page: 1,
		perPage: 5,
		search: '',
		type: 'table',
	} );

	// "processedData" and "paginationInfo" definition
	const { data: processedData, paginationInfo } = useMemo( () => {
		return filterSortAndPaginate( dataPlanets, view, fields );
	}, [ view ] );

	return (
		<DataViews
			actions={ actions }
			config={ {
				perPageSizes: [ 10, 25, 50, 100 ],
			} }
			defaultLayouts={ {
				grid: {},
				list: {},
				table: {},
			} }
			fields={ fields }
			paginationInfo={ paginationInfo }
			data={ processedData }
			view={ view }
			onChangeView={ setView }
			empty={ <p>{ view.search ? 'No planets found' : 'No planets' }</p> }
		/>
	);
};

export default DashboardDefault;
