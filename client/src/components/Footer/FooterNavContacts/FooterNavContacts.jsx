import './FooterNavContacts.css'
import { memo, useMemo } from 'react'
import map from '../../../assets/images/footer/map.svg'
import phone from '../../../assets/images/footer/phone.svg'

const FooterNavContacts = () => {
	const links = useMemo(
		() => [
			{
				href: '#map',
				label: 'Kyiv, 14',
				street: 'Teatralna Street',
				img: map,
				class: 'footer__contacts-map',
			},
			{
				href: 'tel:+380682554585',
				label: '+38 (068) 255 45 85',
				img: phone,
				class: 'footer__contacts-phone',
			},
		],
		[]
	)
	return (
		<ul className='footer__contacts'>
			{links.map((link, index) => (
				<li className='footer__contacts-item' key={index}>
					<a className='footer__contacts-link' href={link.href}>
						<img className={link.class} src={link.img} alt={link.label} />
						<span>
							{link.label} <br /> {link.street}
						</span>
					</a>
				</li>
			))}
			<li className='footer__contacts-time'>
				Working hours: <br />
				Mon–Fri <br />
				from 9:00 до 17:00
			</li>
		</ul>
	)
}

export default memo(FooterNavContacts)
