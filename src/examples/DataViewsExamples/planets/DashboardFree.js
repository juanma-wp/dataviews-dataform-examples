import { DataViews, filterSortAndPaginate } from '@wordpress/dataviews';
import { data as dataPlanets } from '../../../data/dataPlanets';
import {
	useState,
	useMemo,
	createInterpolateElement,
} from '@wordpress/element';
import {
	Button,
	__experimentalText as Text,
	__experimentalVStack as VStack,
	__experimentalHStack as HStack,
	__experimentalHeading as Heading,
	__experimentalGrid as Grid,
	Card,
	CardBody,
} from '@wordpress/components';
import { __, _n } from '@wordpress/i18n';
import fields from '../../../fields/fieldsFree';
import actions from './actionsFree';

/**
 * Custom composition example
 * @param root0
 * @param root0.planets
 */
const PlanetOverview = ( { planets } ) => {
	const moons = planets.reduce(
		( sum, item ) => sum + ( item.satellites || 0 ),
		0
	);

	return (
		<>
			<Heading className="free-composition-heading" level={ 2 }>
				{ __( 'Solar System numbers' ) }
			</Heading>
			<Grid
				templateColumns="repeat(auto-fit, minmax(330px, 1fr))"
				align="flex-start"
				className="free-composition-header"
			>
				<Card variant="secondary">
					<CardBody>
						<VStack>
							<Text size={ 18 } as="p">
								{ createInterpolateElement(
									_n(
										'<PlanetsNumber /> planet',
										'<PlanetsNumber /> planets',
										planets.length
									),
									{
										PlanetsNumber: (
											<strong>{ planets.length } </strong>
										),
									}
								) }
							</Text>

							<Text size={ 18 } as="p">
								{ createInterpolateElement(
									_n(
										'<SatellitesNumber /> moon',
										'<SatellitesNumber /> moons',
										moons
									),
									{
										SatellitesNumber: (
											<strong>{ moons } </strong>
										),
									}
								) }
							</Text>
						</VStack>
					</CardBody>
				</Card>

				<VStack>
					<HStack justify="start">
						<DataViews.FiltersToggle />
						<DataViews.Search label={ __( 'moons by planet' ) } />
					</HStack>
					<DataViews.FiltersToggled />
				</VStack>

				<VStack>
					<HStack justify="end">
						<DataViews.Pagination />
						<DataViews.ViewConfig />
						<DataViews.LayoutSwitcher />
					</HStack>

					<DataViews.BulkActionToolbar />
				</VStack>
			</Grid>

			<DataViews.Layout className="free-composition-dataviews-layout" />
		</>
	);
};

/**
 * This is a basic example of using the DataViews component in
 * a free composition mode.
 *
 * Unlike the default usage where DataViews renders its own UI,
 * here we use it purely to provide context and handle data-related logic.
 *
 * The UI is fully custom and composed externally via the
 * `PlanetOverview` component.
 *
 * In future iterations, this story will showcase more advanced compositions
 * using built-in subcomponents like <Search />, filters,
 * or pagination controls.
 */
const DashboardFree = () => {
	// Default view configuration
	const DEFAULT_VIEW = {
		type: 'table',
		perPage: 10,
		page: 1,
		search: '',
		filters: [],
		sort: {
			field: 'title',
			direction: 'asc',
		},
	};

	// View state
	const [ view, setView ] = useState( {
		...DEFAULT_VIEW,
		fields: [ 'categories' ],
		titleField: 'title',
		descriptionField: 'description',
		mediaField: 'image',
	} );

	// Process and filter data
	const { data: processedData, paginationInfo } = useMemo( () => {
		return filterSortAndPaginate( dataPlanets, view, fields );
	}, [ view ] );

	// Filter planets from the processed data
	const planets = processedData.filter(
		( item ) => item.categories && item.categories.includes( 'Planet' )
	);

	return (
		<div className="free-composition">
			<DataViews
				getItemId={ ( item ) => item.id.toString() }
				paginationInfo={ paginationInfo }
				data={ processedData }
				view={ view }
				fields={ fields }
				actions={ actions }
				onChangeView={ setView }
				defaultLayouts={ {
					table: {},
					grid: {},
				} }
				empty={
					<VStack
						justify="space-around"
						alignment="center"
						className="free-composition-dataviews-empty"
					>
						<Text size={ 18 } as="p">
							No planets
						</Text>
						<Text variant="muted">
							{ `Try a different search because "${ view.search }" returned no results.` }
						</Text>
						<Button variant="secondary">Create new planet</Button>
					</VStack>
				}
			>
				<PlanetOverview planets={ planets } />
			</DataViews>
		</div>
	);
};

export default DashboardFree;
