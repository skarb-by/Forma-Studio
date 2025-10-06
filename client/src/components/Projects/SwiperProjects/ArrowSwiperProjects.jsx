import { memo } from 'react'

const ArrowSwiperProjects = () => {
	return (
		<>
			<div className='projects__arrow projects__arrow-prev'>
				<svg
					className='swiper-navigation-icon'
					width='61'
					height='9'
					viewBox='0 0 61 9'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M0.646442 5.01371C0.45118 4.81845 0.45118 4.50186 0.646442 4.3066L3.82842 1.12462C4.02369 0.92936 4.34027 0.92936 4.53553 1.12462C4.73079 1.31988 4.73079 1.63647 4.53553 1.83173L1.7071 4.66016L4.53553 7.48858C4.73079 7.68385 4.73079 8.00043 4.53553 8.19569C4.34027 8.39095 4.02369 8.39095 3.82842 8.19569L0.646442 5.01371ZM61 4.66016V5.16016H0.999996V4.66016V4.16016H61V4.66016Z'
						fill='black'
					/>
				</svg>
			</div>
			<div className='projects__arrow projects__arrow-next'>
				<svg
					className='swiper-navigation-icon'
					width='61'
					height='9'
					viewBox='0 0 61 9'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M60.3536 5.01371C60.5488 4.81845 60.5488 4.50186 60.3536 4.3066L57.1716 1.12462C56.9763 0.92936 56.6597 0.92936 56.4645 1.12462C56.2692 1.31988 56.2692 1.63647 56.4645 1.83173L59.2929 4.66016L56.4645 7.48858C56.2692 7.68385 56.2692 8.00043 56.4645 8.19569C56.6597 8.39095 56.9763 8.39095 57.1716 8.19569L60.3536 5.01371ZM0 4.66016V5.16016H60V4.66016V4.16016H0V4.66016Z'
						fill='black'
					/>
				</svg>
			</div>
		</>
	)
}

export default memo(ArrowSwiperProjects)
