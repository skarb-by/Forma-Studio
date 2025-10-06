import './TopHeader.css'

import MenuHeader from '../MenuHeader/MenuHeader.jsx'

import LogoHeader from '../LogoHeader/LogoHeader.jsx'
import PhoneHeader from '../PhoneHeader/PhoneHeader.jsx'
const TopHeader = () => {
	return (
		<div className='header__top'>
			<MenuHeader />
			<LogoHeader />
			<PhoneHeader />
		</div>
	)
}

export default TopHeader
