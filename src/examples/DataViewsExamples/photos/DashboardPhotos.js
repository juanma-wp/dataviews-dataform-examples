import { DataViews, filterSortAndPaginate } from '@wordpress/dataviews';
import { useState, useMemo } from '@wordpress/element';
import { Spinner, withNotices } from '@wordpress/components';

import '@/style.scss';

// source "data" definition
import { dataPhotos } from '@/data/dataPhotos';
import fields from '@/fields/fieldsPhotos';
import createActions from './actionsPhotos';

// "defaultLayouts" definition
const primaryField = 'id';
const mediaField = 'img_src';

const defaultLayouts = {
	table: {
		layout: {
			primaryField,
		},
	},
	grid: {
		layout: {
			primaryField,
			mediaField,
		},
	},
};

const App = withNotices( ( { noticeOperations, noticeUI } ) => {
	const { createNotice } = noticeOperations;

	const [ isUploadingItems, setIsUploadingItems ] = useState( [] );

	// "actions" definition
	const actions = createActions( setIsUploadingItems, createNotice );

	// "view" and "setView" definition
	const [ view, setView ] = useState( {
		type: 'table',
		perPage: 10,
		layout: defaultLayouts.table.layout,
		titleField: 'id',
		descriptionField: 'alt_description',
		mediaField: 'img_src',
		fields: [
			// 'img_src',
			// 'id',
			// 'alt_description',
			'author',
			'topics',
			'width',
			'height',
		],
	} );

	// "processedData" and "paginationInfo" definition
	const { data: processedData, paginationInfo } = useMemo( () => {
		return filterSortAndPaginate( dataPhotos, view, fields );
	}, [ view ] );

	return (
		<>
			{ !! isUploadingItems.length && <Spinner /> }
			{ noticeUI }
			<DataViews
				data={ processedData }
				fields={ fields }
				view={ view }
				onChangeView={ setView }
				defaultLayouts={ defaultLayouts }
				actions={ actions }
				paginationInfo={ paginationInfo }
				config={ {
					perPageSizes: [ 10, 25, 50, 100 ],
				} }
			/>
		</>
	);
} );

export default App;
