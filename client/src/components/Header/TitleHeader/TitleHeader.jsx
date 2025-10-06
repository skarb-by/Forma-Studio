import './TitleHeader.css'
import { memo } from 'react'

const TitleHeader = () => {
	return (
		<>
			<h1 className='header__title'> Architecture that shapes space </h1>
			<p className='header__text'>
				We create innovative and aesthetically refined spaces where comfort and
				functionality merge with contemporary design.
			</p>
		</>
	)
}

export default memo(TitleHeader)
