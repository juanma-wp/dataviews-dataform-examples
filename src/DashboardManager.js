import { useState } from '@wordpress/element';
import {
	__experimentalHStack as HStack,
	__experimentalVStack as VStack,
	SelectControl,
	__experimentalText as Text,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

// Import dashboards
import PhotosDashboard from './dashboards/PhotosDashboard';
import DemoDataViews1 from './dashboards/DemoDataViews1';
import DemoDataViews2 from './dashboards/DemoDataViews2';

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
		Component: DemoDataViews1,
	},
	{
		id: 'demo2',
		label: __( 'Demo Dashboard 2' ),
		description: __( 'Additional demo dashboard' ),
		Component: DemoDataViews2,
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
