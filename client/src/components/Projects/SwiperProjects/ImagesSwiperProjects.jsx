import { memo } from 'react'

const ImagesSwiperProjects = ({ src, alt }) => {
	return <img src={src} alt={alt} />
}

export default memo(ImagesSwiperProjects)
