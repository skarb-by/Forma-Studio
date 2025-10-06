import './FooterLogo.css'
import { memo } from 'react'
import footerLogo from '../../../assets/images/footer/footer-logo.svg'
import { useSmoothScroll } from '../../../hooks/useSmoothScroll'
const FooterLogo = () => {
	const scrollTo = useSmoothScroll()
	return (
		<a
			className='footer__logo'
			href='#home'
			onClick={e => {
				e.preventDefault()
				scrollTo('#home')
			}}
		>
			<img src={footerLogo} alt='FormaStudio' />
		</a>
	)
}

export default memo(FooterLogo)
