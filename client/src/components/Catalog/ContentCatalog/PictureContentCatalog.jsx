import { memo } from 'react'

const PictureContentCatalog = () => {
	return (
		<picture>
			<source
				srcSet='/images/catalog/catalog-480.avif 480w, /images/catalog/catalog-768.avif 768w, /images/catalog/catalog-1280.avif 1280w'
				sizes='(max-width: 768px) 100vw, 768px'
				type='image/avif'
			/>
			<source
				srcSet='/images/catalog/catalog-480.webp 480w, /images/catalog/catalog-768.webp 768w, /images/catalog/catalog-1280.webp 1280w'
				sizes='(max-width: 768px) 100vw, 768px'
				type='image/webp'
			/>
			<img
				src='/images/catalog/catalog-768.jpg'
				srcSet='/images/catalog/catalog-480.jpg 480w, /images/catalog/catalog-768.jpg 768w, /images/catalog/catalog-1280.jpg 1280w'
				sizes='(max-width: 768px) 100vw, 768px'
				alt='catalog'
				loading='lazy'
				decoding='async'
			/>
		</picture>
	)
}

export default memo(PictureContentCatalog)
