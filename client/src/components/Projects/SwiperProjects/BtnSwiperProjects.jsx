import { memo } from 'react'

const BtnSwiperProjects = ({ href, text }) => {
	return (
		<a className='projects__item-link' href={href}>
			{text}
		</a>
	)
}

export default memo(BtnSwiperProjects)
