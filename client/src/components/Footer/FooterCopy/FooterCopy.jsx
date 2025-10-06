import './FooterCopy.css'
import { memo } from 'react'
import footertCopy from '../../../assets/images/footer/copy.svg'
const FooterCopy = () => {
	return (
		<p className='footer__copy'>
			<img src={footertCopy} alt='copy' />
			2010-2025 Bureau
		</p>
	)
}

export default memo(FooterCopy)
