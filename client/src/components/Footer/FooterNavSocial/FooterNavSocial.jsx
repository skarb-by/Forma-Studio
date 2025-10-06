import './FooterNavSocial.css'
import { memo, useMemo } from 'react'
import email from '../../../assets/images/footer/email.svg'
import instagram from '../../../assets/images/footer/instagram.svg'
import facebook from '../../../assets/images/footer/facebook.svg'
import telegram from '../../../assets/images/footer/telegram.svg'
import pinterest from '../../../assets/images/footer/pinterest.svg'

const FooterNavSocial = () => {
	const links = useMemo(
		() => [
			{
				href: 'mailto:formastudio@gmail.com',
				label: 'formastudio@gmail.com',
				img: email,
			},
			{
				href: 'https://instagram.com/formastudio',
				label: 'formastudio',
				img: instagram,
			},
			{
				href: 'https://facebook.com/forma.studio',
				label: 'forma.studio',
				img: facebook,
			},
			{
				href: 'https://t.me/forma.studio',
				label: '@forma.studio',
				img: telegram,
			},
			{
				href: 'https://pinterest.com/forma.studio',
				label: 'forma.studio',
				img: pinterest,
			},
		],
		[]
	)
	return (
		<ul className='footer__social'>
			{links.map((link, index) => (
				<li className='footer__social-item' key={index}>
					<a
						className='footer__social-link'
						href={link.href}
						target='_blank'
						rel='noopener noreferrer'
					>
						<img src={link.img} alt={link.label} />
						<span>{link.label}</span>
					</a>
				</li>
			))}
		</ul>
	)
}

export default memo(FooterNavSocial)
