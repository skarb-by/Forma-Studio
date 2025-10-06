import './BtnHeader.css'
import { memo } from 'react'
import { useSmoothScroll } from '../../../hooks/useSmoothScroll'

const BtnHeader = () => {
	const scrollTo = useSmoothScroll()

	return (
		<a
			className='header__btn'
			href='#form'
			onClick={e => {
				e.preventDefault()
				scrollTo('#form')
			}}
		>
			Submit a request
		</a>
	)
}

export default memo(BtnHeader)
