import { useState } from '@wordpress/element';
import {
	__experimentalHStack as HStack,
	__experimentalVStack as VStack,
	SelectControl,
	__experimentalText as Text,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

// Import dashboards
import PhotosDashboard from './dashboards/photos/DashboardPhotos';
import DashboardDefault from './dashboards/planets/DashboardDefault';
import DashboardMinimal from './dashboards/planets/DashboardMinimal';
import DashboardFree from './dashboards/planets/DashboardFree';
import DashboardGroupedByLayout from './dashboards/planets/DashboardGroupedByLayout';
import DashboardInfiniteScroll from './dashboards/planets/DashboardInfiniteScroll';

const dashboards = [
	{
		id: 'photos',
		label: __( 'Photos Dashboard' ),
		description: __(
			'View and manage photo collection with topics and authors'
		),
		Component: PhotosDashboard,
	},
	{
		id: 'planets',
		label: __( 'Planets Dashboard' ),
		description: __( 'Solar system planets and celestial objects' ),
		Component: DashboardDefault,
	},
	{
		id: 'minimal',
		label: __( 'Minimal Dashboard' ),
		description: __( 'Minimal dashboard with restricted features' ),
		Component: DashboardMinimal,
	},
	{
		id: 'free',
		label: __( 'Free Composition Dashboard' ),
		description: __( 'Free composition view with planet overview' ),
		Component: DashboardFree,
	},
	{
		id: 'grouped',
		label: __( 'Grouped By Layout' ),
		description: __( 'Items grouped by type with badge fields' ),
		Component: DashboardGroupedByLayout,
	},
	{
		id: 'infinite',
		label: __( 'Infinite Scroll' ),
		description: __( 'Progressive loading with infinite scroll' ),
		Component: DashboardInfiniteScroll,
	},
];

const DashboardManager = () => {
	const [ selectedDashboard, setSelectedDashboard ] = useState(
		dashboards[ 0 ].id
	);

	const currentDashboard = dashboards.find(
		( d ) => d.id === selectedDashboard
	);
	const CurrentComponent = currentDashboard?.Component;

	return (
		<VStack spacing={ 5 } className="dashboard-manager">
			<VStack spacing={ 3 } className="dashboard-header">
				<HStack spacing={ 4 } alignment="left">
					<SelectControl
						label={ __( 'Select Dashboard' ) }
						value={ selectedDashboard }
						options={ dashboards.map( ( d ) => ( {
							label: d.label,
							value: d.id,
						} ) ) }
						onChange={ setSelectedDashboard }
						__nextHasNoMarginBottom
					/>
					{ currentDashboard && (
						<Text className="dashboard-description">
							{ currentDashboard.description }
						</Text>
					) }
				</HStack>
			</VStack>

			<div className="dashboard-content">
				{ CurrentComponent && <CurrentComponent /> }
			</div>
		</VStack>
	);
};

export default DashboardManager;
