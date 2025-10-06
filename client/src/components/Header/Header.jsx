import './Header.css'
import TopHeader from './TopHeader/TopHeader.jsx'
import TitleHeader from './TitleHeader/TitleHeader.jsx'
import BtnHeader from './BtnHeader/BtnHeader.jsx'
const Header = () => {
	return (
		<div className='header' id='home'>
			<div className='container'>
				<TopHeader />
				<TitleHeader />
				<BtnHeader />
			</div>
		</div>
	)
}

export default Header
