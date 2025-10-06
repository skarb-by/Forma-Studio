import { memo, useMemo, useState } from 'react'
import './GalleryCatalog.css'
import ImageOverlay from '../../ui/ImageOverlay' // путь проверь по структуре
import Rectangle1 from '../../../assets/images/catalog/1.jpg'
import Rectangle2 from '../../../assets/images/catalog/2.jpg'
import Rectangle3 from '../../../assets/images/catalog/3.jpg'
import Rectangle4 from '../../../assets/images/catalog/4.jpg'
import Rectangle5 from '../../../assets/images/catalog/5.jpg'
import Rectangle6 from '../../../assets/images/catalog/6.jpg'
import Rectangle7 from '../../../assets/images/catalog/7.jpg'
import Rectangle8 from '../../../assets/images/catalog/8.jpg'

const GalleryCatalog = () => {
	const [activeImage, setActiveImage] = useState(null)
	const items = useMemo(
		() => [
			{
				img: Rectangle1,
				itemTitle: 'Rectangle1',
			},
			{
				img: Rectangle2,
				itemTitle: 'Rectangle2',
			},
			{
				img: Rectangle3,
				itemTitle: 'Rectangle3',
			},
			{
				img: Rectangle4,
				itemTitle: 'Rectangle4',
			},
			{
				img: Rectangle5,
				itemTitle: 'Rectangle5',
			},
			{
				img: Rectangle6,
				itemTitle: 'Rectangle6',
			},
			{
				img: Rectangle7,
				itemTitle: 'Rectangle7',
			},
			{
				img: Rectangle8,
				itemTitle: 'Rectangle8',
			},
		],
		[]
	)

	return (
		<div className='gallery' id='gallery'>
			{items.map((item, index) => (
				<img
					key={index}
					src={item.img}
					alt={item.itemTitle}
					onClick={() => setActiveImage(item.img)}
				/>
			))}
			{activeImage && (
				<ImageOverlay src={activeImage} onClose={() => setActiveImage(null)} />
			)}
		</div>
	)
}

export default memo(GalleryCatalog)
