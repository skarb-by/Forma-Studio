import './FooterNav.css'
import { memo, useMemo } from 'react'
import { useSmoothScroll } from '../../../hooks/useSmoothScroll'
const FooterNav = () => {
	const scrollTo = useSmoothScroll()
	const links = useMemo(
		() => [
			{ href: '#home', label: 'ABOUT STUDIO' },
			{ href: '#prices', label: 'PRICES' },
			{ href: '#projects', label: 'PROJECTS' },
			{ href: '#contact', label: 'CONTACTS' },
		],
		[]
	)

	return (
		<ul className='footer__nav'>
			{links.map((link, index) => (
				<li className='footer_nav-item' key={index}>
					<a
						className='footer_nav-link'
						href={link.href}
						onClick={e => {
							e.preventDefault()
							scrollTo(link.href)
						}}
					>
						{link.label}
					</a>
				</li>
			))}
		</ul>
	)
}

export default memo(FooterNav)
