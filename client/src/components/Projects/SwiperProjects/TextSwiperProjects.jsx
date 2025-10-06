import { memo } from 'react'

const TextSwiperProjects = ({ text }) => {
	return <p className='projects__item-text'>{text}</p>
}

export default memo(TextSwiperProjects)
