import { memo } from 'react'

const TextListSteps = ({ text }) => {
	return <p className='steps__item-text'>{text}</p>
}

export default memo(TextListSteps)
