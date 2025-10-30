import { __experimentalHStack as HStack, Icon } from '@wordpress/components';
import { image, category, postAuthor } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import { getTopicsElementsFormat } from '@/utils/photosUtils';
import { dataPhotos } from '@/data/dataPhotos';

// "fields" definition
const fields = [
	{
		id: 'img_src',
		label: __( 'Image' ),
		header: (
			<HStack spacing={ 1 } justify="start">
				<Icon icon={ image } />
				<span>{ __( 'Image' ) }</span>
			</HStack>
		),
		type: 'media',
		render: ( { item } ) => (
			<img alt={ item.alt_description } src={ item.urls.thumb } />
		),
		enableSorting: false,
	},
	{
		id: 'id',
		label: __( 'Item' ),
		type: 'text',
		enableGlobalSearch: true,
		filterBy: false,
	},
	{
		id: 'author',
		label: __( 'Author' ),
		header: (
			<HStack spacing={ 1 } justify="start">
				<Icon icon={ postAuthor } />
				<span>{ __( 'Author' ) }</span>
			</HStack>
		),
		type: 'text',
		getValue: ( { item } ) =>
			`${ item.user.first_name } ${ item.user.last_name }`,
		render: ( { item } ) => (
			<a target="_blank" href={ item.user.url } rel="noreferrer">
				{ item.user.first_name } { item.user.last_name }
			</a>
		),
		enableGlobalSearch: true,
		filterBy: false,
	},
	{
		id: 'alt_description',
		label: __( 'Description' ),
		enableGlobalSearch: true,
	},
	{
		id: 'topics',
		label: __( 'Topics' ),
		header: (
			<HStack spacing={ 1 } justify="start">
				<Icon icon={ category } />
				<span>{ __( 'Topics' ) }</span>
			</HStack>
		),
		type: 'array',
		elements: getTopicsElementsFormat( dataPhotos ),
		render: ( { item } ) => {
			return (
				<div className="topic_photos">
					{ item.topics.map( ( topic ) => (
						<span key={ topic } className="topic_photo_item">
							{ topic.toUpperCase() }
						</span>
					) ) }
				</div>
			);
		},
		filterBy: {
			//operators: [ 'is', 'isNot' ],
			operators: [ 'isAny', 'isNone', 'isAll', 'isNotAll' ],
		},
		enableSorting: false,
	},
	{
		id: 'width',
		label: __( 'Width' ),
		type: 'integer',
		getValue: ( { item } ) => parseInt( item.width ),
		enableSorting: true,
		filterBy: false,
	},
	{
		id: 'height',
		label: __( 'Height' ),
		type: 'integer',
		getValue: ( { item } ) => parseInt( item.height ),
		enableSorting: true,
		filterBy: false,
	},
];

export default fields;
