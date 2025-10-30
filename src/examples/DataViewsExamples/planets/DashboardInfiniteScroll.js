import { DataViews, filterSortAndPaginate } from '@wordpress/dataviews';
import { data as dataPlanets } from '../../../data/dataPlanets';
import { useState, useMemo, useCallback, useEffect } from '@wordpress/element';
import { __experimentalText as Text } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import fields from '../../../fields/fieldsPlanets';
import actions from './actionsFree';

const LAYOUT_GRID = 'grid';
const LAYOUT_LIST = 'list';
const LAYOUT_TABLE = 'table';

/**
 * Dashboard demonstrating infinite scroll functionality
 * Items are loaded progressively as the user scrolls
 */
const DashboardInfiniteScroll = () => {
	const [ view, setView ] = useState( {
		type: LAYOUT_GRID,
		search: '',
		page: 1,
		perPage: 6, // Start with a small number to demonstrate pagination
		filters: [],
		fields: [ 'satellites' ],
		titleField: 'name.title',
		descriptionField: 'name.description',
		mediaField: 'image',
		infiniteScrollEnabled: true, // Enable infinite scroll by default
	} );

	const { data: shownData } = useMemo( () => {
		// Map the data to ensure title/description fields are at root level
		const mappedData = dataPlanets.map( ( item ) => ( {
			...item,
			title: item.name?.title || item.title || '',
			description: item.name?.description || item.description || '',
		} ) );
		return filterSortAndPaginate( mappedData, view, fields );
	}, [ view ] );

	// Custom pagination handler that simulates server-side pagination
	const [ allLoadedRecords, setAllLoadedRecords ] = useState( [] );
	const [ isLoadingMore, setIsLoadingMore ] = useState( false );

	const totalItems = dataPlanets.length;
	const totalPages = Math.ceil( totalItems / 6 ); // perPage is 6
	const currentPage = view.page || 1;
	const hasMoreData = currentPage < totalPages;

	const getItemId = ( item ) => item.id.toString();

	const infiniteScrollHandler = useCallback( () => {
		if ( isLoadingMore || currentPage >= totalPages ) {
			return;
		}

		setIsLoadingMore( true );

		setView( {
			...view,
			page: currentPage + 1,
		} );
	}, [ isLoadingMore, currentPage, totalPages, view ] );

	// Initialize data on first load or when view changes significantly
	useEffect( () => {
		if ( currentPage === 1 || ! view.infiniteScrollEnabled ) {
			// First page - replace all data
			setAllLoadedRecords( shownData );
		} else {
			// Subsequent pages - append to existing data
			setAllLoadedRecords( ( prev ) => {
				const existingIds = new Set( prev.map( getItemId ) );
				const newRecords = shownData.filter(
					( record ) => ! existingIds.has( getItemId( record ) )
				);
				return [ ...prev, ...newRecords ];
			} );
		}
		setIsLoadingMore( false );
	}, [
		view.search,
		view.filters,
		view.perPage,
		currentPage,
		view.infiniteScrollEnabled,
		shownData,
	] );

	const paginationInfo = {
		totalItems,
		totalPages,
		infiniteScrollHandler,
	};

	return (
		<>
			<style>{ `
				.dataviews-wrapper {
					height: 600px;
					overflow: auto;
				}
			` }</style>
			<Text
				style={ {
					marginBottom: '16px',
					padding: '8px',
					background: '#f0f0f0',
					borderRadius: '4px',
					display: 'block',
				} }
			>
				{ __( 'Infinite Scroll Demo' ) }: { allLoadedRecords.length } of{ ' ' }
				{ totalItems } items loaded.
				{ isLoadingMore && ' ' + __( 'Loading more…' ) }
				{ ! hasMoreData && ' ' + __( 'All items loaded!' ) }
			</Text>
			<DataViews
				getItemId={ ( item ) => item.id.toString() }
				paginationInfo={ paginationInfo }
				data={ allLoadedRecords }
				view={ view }
				fields={ fields }
				onChangeView={ setView }
				actions={ actions }
				isLoading={ isLoadingMore }
				defaultLayouts={ {
					[ LAYOUT_GRID ]: {},
					[ LAYOUT_LIST ]: {},
					[ LAYOUT_TABLE ]: {},
				} }
			/>
		</>
	);
};

export default DashboardInfiniteScroll;
