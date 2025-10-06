import './FooterNavAuthor.css'
import { memo, useMemo } from 'react'
import { useSmoothScroll } from '../../../hooks/useSmoothScroll'
const FooterNavAuthor = () => {
	const scrollTo = useSmoothScroll()
	const links = useMemo(
		() => [
			{ href: '#idesign', label: 'Interior Design' },
			{ href: '#adesign', label: 'Architectural Design' },
			{ href: '#author', label: 'Author’s Supervision' },
			{ href: '#tprojects', label: 'Turnkey Projects' },
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
							scrollTo('#gallery')
						}}
					>
						{link.label}
					</a>
				</li>
			))}
		</ul>
	)
}

export default memo(FooterNavAuthor)
