import './TextServices.css'
import { memo, useMemo } from 'react'

const TextServices = () => {
	const text = useMemo(
		() => [
			{
				itemTitle: 'Architectural Design',
				itemText:
					'We will design your home personally for you, combining ergonomics and beauty, guided by a designer’s vision of space.',
			},
			{
				itemTitle: 'Interior Design',
				itemText:
					'We will design an exclusive interior design taking into account your wishes and our tasks.',
			},
			{
				itemTitle: 'Architectural supervision',
				itemText:
					'We oversee the implementation of our projects from concept to realization',
			},
			{
				itemTitle: 'Turnkey Projects',
				itemText:
					'We handle everything from concept development to project completion, so you don’t have to worry about a thing.',
			},
		],
		[]
	)

	return (
		<ul className='services__list'>
			{text.map((item, index) => (
				<li className='services__item' key={index}>
					<p className='services__item-title'>{item.itemTitle}</p>
					<p className='services__item-text'>{item.itemText}</p>
				</li>
			))}
		</ul>
	)
}

export default memo(TextServices)
