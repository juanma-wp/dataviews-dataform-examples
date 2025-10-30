import { SVG, Path } from '@wordpress/primitives';
import { Button } from '@wordpress/components';

const actions = [
	{
		id: 'view-details',
		label: 'View Details',
		isPrimary: true,
		icon: (
			<SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<Path d="M12 4.5C7.30558 4.5 3.26632 7.49624 2.03496 11.5C3.26632 15.5038 7.30558 18.5 12 18.5C16.6944 18.5 20.7337 15.5038 21.965 11.5C20.7337 7.49624 16.6944 4.5 12 4.5ZM12 6C15.8553 6 19.1066 8.31847 20.1547 11.5C19.1066 14.6815 15.8553 17 12 17C8.14472 17 4.89338 14.6815 3.84528 11.5C4.89338 8.31847 8.14472 6 12 6ZM12 8.5C10.3431 8.5 9 9.84315 9 11.5C9 13.1569 10.3431 14.5 12 14.5C13.6569 14.5 15 13.1569 15 11.5C15 9.84315 13.6569 8.5 12 8.5ZM12 10C12.8284 10 13.5 10.6716 13.5 11.5C13.5 12.3284 12.8284 13 12 13C11.1716 13 10.5 12.3284 10.5 11.5C10.5 10.6716 11.1716 10 12 10Z" />
			</SVG>
		),
		callback: ( items ) => {
			console.log( 'View details for:', items );
			// In a real app, this would open a details modal or navigate to a details page
		},
	},
	{
		id: 'edit',
		label: 'Edit',
		icon: (
			<SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<Path d="M20.1 5.1L18.9 3.9c-.8-.8-2-.8-2.8 0L4.2 15.8c-.1.1-.2.3-.2.4l-.9 3.5c-.1.3 0 .6.2.8.2.2.5.3.8.2l3.5-.9c.2 0 .3-.1.4-.2L19.9 7.7c.8-.8.8-2 .2-2.6zM7.2 18.3l-2.1.5.5-2.1L15.5 7l1.6 1.6-9.9 9.7zM18.5 7.1L17 8.6 15.4 7l1.5-1.5c.1-.1.3-.1.4 0l1.2 1.2c.1.1.1.3 0 .4z" />
			</SVG>
		),
		RenderModal: ( { items, closeModal } ) => {
			return (
				<div style={{ padding: '20px' }}>
					<h2>Edit { items[0].name?.title || items[0].title }</h2>
					<p>Edit functionality would go here.</p>
					<Button variant="primary" onClick={ closeModal }>
						Close
					</Button>
				</div>
			);
		},
	},
	{
		id: 'delete',
		label: 'Delete',
		icon: (
			<SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<Path
					clipRule="evenodd"
					d="M12 5.5A2.25 2.25 0 0 0 9.878 7h4.244A2.251 2.251 0 0 0 12 5.5ZM12 4a3.751 3.751 0 0 0-3.675 3H5v1.5h1.27l.818 8.997a2.75 2.75 0 0 0 2.739 2.501h4.347a2.75 2.75 0 0 0 2.738-2.5L17.73 8.5H19V7h-3.325A3.751 3.751 0 0 0 12 4Zm4.224 4.5H7.776l.806 8.861a1.25 1.25 0 0 0 1.245 1.137h4.347a1.25 1.25 0 0 0 1.245-1.137l.805-8.861Z"
					fillRule="evenodd"
				/>
			</SVG>
		),
		isDestructive: true,
		supportsBulk: true,
		RenderModal: ( { items, closeModal } ) => {
			return (
				<div style={{ padding: '20px' }}>
					<h2>Delete Confirmation</h2>
					<p>
						Are you sure you want to delete{' '}
						{ items.length === 1
							? items[0].name?.title || items[0].title
							: `${items.length} items` }
						?
					</p>
					<div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
						<Button variant="primary" isDestructive onClick={ () => {
							console.log( 'Deleting:', items );
							closeModal();
						} }>
							Delete
						</Button>
						<Button variant="secondary" onClick={ closeModal }>
							Cancel
						</Button>
					</div>
				</div>
			);
		},
	},
];

export default actions;