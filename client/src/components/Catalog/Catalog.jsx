import './Catalog.css'
import TitleCatalog from '../Catalog/TitleCatalog/TitleCatalog.jsx'
import ContentCatalog from '../Catalog/ContentCatalog/ContentCatalog.jsx'
import GalleryCatalog from '../Catalog/GalleryCatalog/GalleryCatalog.jsx'

const Catalog = () => {
	return (
		<section className='catalog' id='prices'>
			<div className='container'>
				<TitleCatalog />
				<ContentCatalog />
				<GalleryCatalog />
			</div>
		</section>
	)
}

export default Catalog
