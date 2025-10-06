import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { memo, useMemo } from 'react'

import 'swiper/css'
import 'swiper/css/navigation'
import './SwiperProjects.css'

import ImagesSwiperProjects from './ImagesSwiperProjects.jsx'
import TitleSwiperProjects from './TitleSwiperProjects.jsx'
import DesctSwiperProjects from './DesctSwiperProjects.jsx'
import TextSwiperProjects from './TextSwiperProjects.jsx'
import BtnSwiperProjects from './BtnSwiperProjects.jsx'
import ArrowSwiperProjects from './ArrowSwiperProjects.jsx'

import Apartment from '../../../assets/images/projects/1.png'
import House from '../../../assets/images/projects/2.png'
import Country from '../../../assets/images/projects/3.png'

const SwiperProjects = () => {
	const items = useMemo(
		() => [
			{
				img: Apartment,
				itemTitle: 'Apartment 55.6 m²',
				itemDesct: 'For a young couple of lawyers',
				itemText:
					'The main idea of this interior is to create a bright, light, and cozy space. Warm colors and soft lines are used throughout the design to evoke a sense of calm and harmony.',
				itemBtn: 'more',
				href: '#more',
			},
			{
				img: House,
				itemTitle: 'The house',
				itemDesct: 'For a family of doctors',
				itemText:
					'A comfortable space for the homeowners is ensured through proper organization and planning of the house. The open terrace seamlessly connects the pool, kitchen, and living areas.',
				itemBtn: 'more',
				href: '#more',
			},
			{
				img: Country,
				itemTitle: 'Country House',
				itemDesct: 'For a family of entrepreneurs',
				itemText:
					'During the project development, a layout was created featuring an open kitchen-living area with a centrally placed fireplace that serves as a spatial divider.',
				itemBtn: 'more',
				href: '#more',
			},
			{
				img: Apartment,
				itemTitle: 'Apartment 55.6 m²',
				itemDesct: 'For a young couple of lawyers',
				itemText:
					'The main idea of this interior is to create a bright, light, and cozy space. Warm colors and soft lines are used throughout the design to evoke a sense of calm and harmony.',
				itemBtn: 'more',
				href: '#more',
			},
			{
				img: House,
				itemTitle: 'The house',
				itemDesct: 'For a family of doctors',
				itemText:
					'A comfortable space for the homeowners is ensured through proper organization and planning of the house. The open terrace seamlessly connects the pool, kitchen, and living areas.',
				itemBtn: 'more',
				href: '#more',
			},
			{
				img: Country,
				itemTitle: 'Country House',
				itemDesct: 'For a family of entrepreneurs',
				itemText:
					'During the project development, a layout was created featuring an open kitchen-living area with a centrally placed fireplace that serves as a spatial divider.',
				itemBtn: 'more',
				href: '#more',
			},
		],
		[]
	)

	return (
		<Swiper
			modules={[Navigation]}
			navigation={{
				nextEl: '.projects__arrow-next',
				prevEl: '.projects__arrow-prev',
			}}
			className='projects__slider'
			slidesPerView={1}
			spaceBetween={20}
			breakpoints={{
				640: { slidesPerView: 2 },
				1024: { slidesPerView: 3 },
			}}
		>
			{items.map((item, index) => (
				<SwiperSlide key={index}>
					<div className='projects__item'>
						<ImagesSwiperProjects src={item.img} alt={item.itemTitle} />
						<TitleSwiperProjects title={item.itemTitle} />
						<DesctSwiperProjects desct={item.itemDesct} />
						<TextSwiperProjects text={item.itemText} />
						<BtnSwiperProjects href={item.href} text={item.itemBtn} />
					</div>
				</SwiperSlide>
			))}
			<ArrowSwiperProjects />
		</Swiper>
	)
}

export default memo(SwiperProjects)
