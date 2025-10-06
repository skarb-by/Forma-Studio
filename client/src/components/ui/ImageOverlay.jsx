import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import './ImageOverlay.css'

const ImageOverlay = ({ src, onClose }) => {
	const [closing, setClosing] = useState(false)

	useEffect(() => {
		document.body.style.overflow = 'hidden'
		return () => (document.body.style.overflow = '')
	}, [])

	const handleClose = () => {
		setClosing(true)
		setTimeout(onClose, 300) // ⏳ подождать пока завершится анимация
	}

	return createPortal(
		<div
			className={`image-overlay ${closing ? 'closing' : ''}`}
			onClick={handleClose}
		>
			<img src={src} alt='' className='image-overlay__img' />
		</div>,
		document.body
	)
}

export default ImageOverlay
