import './MenuHeader.css'
import { useState, useCallback, useMemo, memo } from 'react'
import { useSmoothScroll } from '../../../hooks/useSmoothScroll'
const MenuHeader = () => {
	const [menuActive, setMenuActive] = useState(false)
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

	const toggleMenu = useCallback(() => {
		setMenuActive(prev => !prev)
	}, [])

	return (
		<nav className='menu'>
			<div
				className={`menu__toggle ${menuActive ? 'active' : ''}`}
				onClick={toggleMenu}
			></div>

			<ul className={`menu__list ${menuActive ? 'active' : ''}`}>
				{links.map((link, index) => (
					<li className='menu__item' key={index}>
						<a
							className='menu__link'
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
		</nav>
	)
}

export default memo(MenuHeader)
