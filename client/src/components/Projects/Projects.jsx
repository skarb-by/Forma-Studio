import './Projects.css'
import TitleProjects from '../Projects/TitleProjects/TitleProjects.jsx'
import SwiperProjects from '../Projects/SwiperProjects/SwiperProjects.jsx'
const Projects = () => {
	return (
		<div className='projects' id='projects'>
			<div className='container'>
				<TitleProjects />
				<SwiperProjects />
			</div>
		</div>
	)
}

export default Projects
