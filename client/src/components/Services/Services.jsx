import './Services.css'
import TitleServices from '../Services/TitleServices/TitleServices.jsx'
import TextServices from '../Services/TextServices/TextServices.jsx'
const Services = () => {
	return (
		<div className='services'>
			<div className='container'>
				<TitleServices />
				<TextServices />
			</div>
		</div>
	)
}

export default Services
