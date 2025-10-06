import './PhoneHeader.css'
import phone from '../../../assets/images/phone.svg'
import { memo } from 'react'

const PhoneHeader = () => {
	return (
		<a className='header__phone' href='tel:+38068254585'>
			<img className='header__img' src={phone} alt='phone' />
			<span>+38 (068) 255 45 85</span>
		</a>
	)
}

export default memo(PhoneHeader)
