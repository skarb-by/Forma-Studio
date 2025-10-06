import { memo } from 'react'

const TitleSwiperProjects = ({ title }) => {
	return <h3 className='projects__item-title'>{title}</h3>
}

export default memo(TitleSwiperProjects)
