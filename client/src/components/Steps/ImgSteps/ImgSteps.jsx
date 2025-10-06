import './ImgSteps.css'
import { memo } from 'react'
import stepsImg from '../../../assets/images/steps.jpg'
const ImgSteps = () => {
	return (
		<div className='steps__img'>
			<img src={stepsImg} alt='steps' />
		</div>
	)
}

export default memo(ImgSteps)
