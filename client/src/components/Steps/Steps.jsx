import './Steps.css'
import TitleSteps from '../Steps/TitleSteps/TitleSteps.jsx'
import ListSteps from '../Steps/ListSteps/ListSteps.jsx'
import ImgSteps from '../Steps/ImgSteps/ImgSteps.jsx'
const Steps = () => {
	return (
		<section className='steps'>
			<div className='container'>
				<TitleSteps />
				<ListSteps />
			</div>
			<ImgSteps />
		</section>
	)
}

export default Steps
