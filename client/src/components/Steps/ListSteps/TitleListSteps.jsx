import { memo } from 'react'

const TitleListSteps = ({ title }) => {
	return <p className='steps__item-title'>{title}</p>
}

export default memo(TitleListSteps)
