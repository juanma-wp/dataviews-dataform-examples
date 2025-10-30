import { __experimentalHStack as HStack, Icon } from '@wordpress/components';
import { SVG, Path } from '@wordpress/primitives';

// Simplified fields for free composition dashboard
const fields = [
	{
		id: 'image',
		label: 'Image',
		header: (
			<HStack justify="start" spacing={ 1 }>
				<Icon
					icon={
						<SVG
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<Path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v8.4l-3-2.9c-.3-.3-.8-.3-1 0L11.9 14 9 12c-.3-.2-.6-.2-.8 0l-3.6 2.6V5c-.1-.3.1-.5.4-.5zm14 15H5c-.3 0-.5-.2-.5-.5v-2.4l4.1-3 3 1.9c.3.2.7.2.9-.1L16 12l3.5 3.4V19c0 .3-.2.5-.5.5z" />
						</SVG>
					}
				/>
				<span>Image</span>
			</HStack>
		),
		render: ( { item } ) => (
			<img src={ item.image } alt={ item.name?.title || item.title } />
		),
		type: 'media',
	},
	{
		id: 'title',
		label: 'Title',
		getValue: ( { item } ) => item.name?.title || item.title || '',
		enableGlobalSearch: true,
		type: 'text',
	},
	{
		id: 'description',
		label: 'Description',
		getValue: ( { item } ) =>
			item.name?.description || item.description || '',
		enableGlobalSearch: true,
		type: 'text',
	},
	{
		id: 'categories',
		label: 'Categories',
		elements: [
			{
				label: 'Solar system',
				value: 'Solar system',
			},
			{
				label: 'Satellite',
				value: 'Satellite',
			},
			{
				label: 'Moon',
				value: 'Moon',
			},
			{
				label: 'Earth',
				value: 'Earth',
			},
			{
				label: 'Jupiter',
				value: 'Jupiter',
			},
			{
				label: 'Planet',
				value: 'Planet',
			},
			{
				label: 'Ice giant',
				value: 'Ice giant',
			},
			{
				label: 'Terrestrial',
				value: 'Terrestrial',
			},
			{
				label: 'Gas giant',
				value: 'Gas giant',
			},
		],
		enableGlobalSearch: true,
		header: (
			<HStack justify="start" spacing={ 1 }>
				<Icon
					icon={
						<SVG
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<Path
								clipRule="evenodd"
								d="M6 5.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM4 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm11-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM13 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2V6zm5 8.5h-3a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zM15 13a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2v-3a2 2 0 00-2-2h-3zm-9 1.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zM4 15a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3z"
								fillRule="evenodd"
							/>
						</SVG>
					}
				/>
				<span>Categories</span>
			</HStack>
		),
		type: 'array',
		filterBy: {
			operators: [ 'isAny', 'isNone' ],
		},
	},
	{
		id: 'type',
		label: 'Type',
		elements: [
			{
				label: 'Satellite',
				value: 'Satellite',
			},
			{
				label: 'Ice giant',
				value: 'Ice giant',
			},
			{
				label: 'Terrestrial',
				value: 'Terrestrial',
			},
			{
				label: 'Gas giant',
				value: 'Gas giant',
			},
			{
				label: 'Dwarf planet',
				value: 'Dwarf planet',
			},
		],
		type: 'text',
		filterBy: {
			operators: [ 'is', 'isNot' ],
		},
	},
];

export default fields;
