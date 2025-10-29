import { useState } from '@wordpress/element';
import {
	SelectControl,
	Button,
	__experimentalText as Text,
	__experimentalHStack as HStack,
	__experimentalVStack as VStack,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';

// "actions" definition
const createActions = ( setIsUploadingItems, createNotice ) => {
	const onSuccessMediaUpload = ( oImageUploaded ) => {
		const title = oImageUploaded.title.rendered;
		setIsUploadingItems( ( prevIsUploadingItems ) =>
			prevIsUploadingItems.filter(
				( slugLoading ) => slugLoading !== title
			)
		);

		createNotice( {
			status: 'success',
			// translators: %s is the image title
			content:
				`${ title }.jpg ` +
				__( 'succesfully uploaded to Media Library' ),
			isDismissible: true,
		} );
	};

	const onErrorMediaUpload = ( error ) => {
		setIsUploadingItems( [] );
		console.log( error );
		createNotice( {
			status: 'error',
			content: __( 'An error occurred!' ),
			isDismissible: true,
		} );
	};

	return [
		{
			id: 'upload-media',
			label: __( 'Upload Media' ),
			isPrimary: true,
			icon: 'upload',
			supportsBulk: true,
			callback: ( images ) => {
				window.scrollTo( 0, 0 );
				images.forEach( async ( image ) => {
					setIsUploadingItems( ( prevIsUploadingItems ) => [
						...prevIsUploadingItems,
						image.slug,
					] );

					// 1- Download the image and convert it to a blob
					const responseRequestImage = await fetch( image.urls.raw );
					const blobImage = await responseRequestImage.blob();

					// 2- Create FormData with the image blob
					const formDataWithImage = new FormData();
					formDataWithImage.append(
						'file',
						blobImage,
						`${ image.slug }.jpg`
					);

					// 3- Send the request to the WP REST API with apiFetch
					await apiFetch( {
						path: '/wp/v2/media',
						method: 'POST',
						body: formDataWithImage,
					} )
						.then( onSuccessMediaUpload )
						.catch( onErrorMediaUpload );
				} );
			},
		},
		{
			id: 'see-original',
			label: __( 'See Original' ),
			modalHeader: __( 'See Original Image', 'action label' ),
			RenderModal: ( { items: [ item ], closeModal } ) => {
				const [ size, setSize ] = useState( 'raw' );
				return (
					<VStack spacing="5">
						<Text>
							{ `Select the size you want to open for "${ item.slug }"` }
						</Text>
						<HStack justify="left">
							<SelectControl
								__nextHasNoMarginBottom
								label="Size"
								value={ size }
								options={ Object.keys( item.urls )
									.filter( ( url ) => url !== 'small_s3' )
									.map( ( url ) => ( {
										label: url,
										value: url,
									} ) ) }
								onChange={ setSize }
							/>
						</HStack>
						<HStack justify="right">
							<Button
								__next40pxDefaultSize
								variant="primary"
								onClick={ () => {
									closeModal();
									window.open( item.urls[ size ], '_blank' );
								} }
							>
								Open image from original location
							</Button>
						</HStack>
					</VStack>
				);
			},
		},
	];
};

export default createActions;