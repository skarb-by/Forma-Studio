import './LogoHeader.css'
import logo from '../../../assets/images/logo.svg'
import { memo } from 'react'
import { useSmoothScroll } from '../../../hooks/useSmoothScroll'
const LogoHeader = () => {
	const scrollTo = useSmoothScroll()
	return (
		<a
			className='logo'
			href='home'
			onClick={e => {
				e.preventDefault()
				scrollTo('#home')
			}}
		>
			<img src={logo} alt='FORMA STUDIO' />
		</a>
	)
}

export default memo(LogoHeader)
