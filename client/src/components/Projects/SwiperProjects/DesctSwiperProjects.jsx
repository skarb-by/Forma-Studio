import { memo } from 'react'

const DesctSwiperProjects = ({ desct }) => {
	return <p className='projects__item-desct'>{desct}</p>
}

export default memo(DesctSwiperProjects)
