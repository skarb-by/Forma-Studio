import { memo } from 'react'
import './ContentCatalog.css'
import FormContentCatalog from './FormContentCatalog'
import PictureContentCatalog from './PictureContentCatalog'

const ContentCatalog = () => {
	return (
		<div className='catalog__content'>
			<PictureContentCatalog />
			<FormContentCatalog />
		</div>
	)
}

export default memo(ContentCatalog)
