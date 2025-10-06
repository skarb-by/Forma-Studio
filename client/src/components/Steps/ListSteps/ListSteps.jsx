import './ListSteps.css'
import { memo, useMemo } from 'react'
import TitleListSteps from './TitleListSteps.jsx'
import TextListSteps from './TextListSteps.jsx'
const ListSteps = () => {
	const items = useMemo(
		() => [
			{
				itemTitle: 'We receive your request',
				itemText: 'Call us or send a message through the website.',
			},
			{
				itemTitle: 'Let’s get acquainted',
				itemText:
					'During the first meeting, we will discuss all the details of your project.',
			},
			{
				itemTitle: 'We visit the site',
				itemText:
					'We meet on-site to take necessary measurements, conduct a photo survey, and complete a detailed technical brief.',
			},
			{
				itemTitle: 'We discuss and agree on the overall project budget.',
				itemText:
					'Costs for interior elements, finishing materials, furniture, and equipment.',
			},
			{
				itemTitle: 'We define the layout solution.',
				itemText:
					'At this stage, we offer several options for zoning, furniture placement, and equipment layout.',
			},
			{
				itemTitle: 'We develop the design concept.',
				itemText:
					'Based on your tastes and taking into account current trends and directions, we define the style of your future interior.',
			},
			{
				itemTitle: 'We prepare the working documentation.',
				itemText:
					'At the next stage, we prepare all the necessary working drawings.',
			},
			{
				itemTitle: 'Project outfitting',
				itemText:
					'At the final outfitting stage, we compile specifications for furniture, lighting, and interior items.',
			},
		],
		[]
	)

	return (
		<ol className='steps__list'>
			{items.map((item, index) => (
				<li className='steps__item' key={index}>
					<TitleListSteps title={item.itemTitle} />
					<TextListSteps text={item.itemText} />
				</li>
			))}
		</ol>
	)
}

export default memo(ListSteps)
