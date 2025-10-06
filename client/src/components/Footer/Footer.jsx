import './Footer.css'

import FooterLogo from './FooterLogo/FooterLogo.jsx'
import FooterCopy from './FooterCopy/FooterCopy.jsx'
import FooterNav from './FooterNav/FooterNav.jsx'
import FooterNavAuthor from './FooterNavAuthor/FooterNavAuthor.jsx'
import FooterNavSocial from './FooterNavSocial/FooterNavSocial.jsx'
import FooterNavContacts from './FooterNavContacts/FooterNavContacts.jsx'

const Footer = () => {
	return (
		<footer className='footer' id='contact'>
			<div className='container'>
				<div className='footer__inner'>
					<FooterLogo />
					<FooterNav />
					<FooterNavAuthor />
					<FooterNavSocial />
					<FooterNavContacts />
				</div>
				<FooterCopy />
			</div>
		</footer>
	)
}

export default Footer
