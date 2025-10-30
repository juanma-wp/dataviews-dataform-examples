import { DataViews } from '@wordpress/dataviews';
import { data as dataPlanets } from '@/data/dataPlanets';
import fields from '@/fields/fieldsPlanetsMinimal';

const DashboardMinimal = () => {
	return (
		<DataViews
			data={ dataPlanets }
			defaultLayouts={ {
				table: {},
			} }
			fields={ fields }
			onChangeView={ () => {} }
			paginationInfo={ {
				totalItems: 10,
				totalPages: 1,
			} }
			view={ {
				mediaField: 'image',
				titleField: 'name.title',
				descriptionField: 'name.description',
				fields: [ 'categories' ],
				filters: [],
				layout: {
					enableMoving: false,
				},
				page: 1,
				perPage: 10,
				search: '',
				type: 'table',
			} }
		/>
	);
};

export default DashboardMinimal;
