import './App.css'
import { Suspense, lazy } from 'react'
import Loader from './components/Loader/Loader'

const Header = lazy(() => import('./components/Header/Header'))
const Services = lazy(() => import('./components/Services/Services'))
const Projects = lazy(() => import('./components/Projects/Projects'))
const Steps = lazy(() => import('./components/Steps/Steps'))
const Catalog = lazy(() => import('./components/Catalog/Catalog'))
const Request = lazy(() => import('./components/Request/Request'))
const Footer = lazy(() => import('./components/Footer/Footer'))

function App() {
	return (
		<>
			<Suspense fallback={<Loader />}>
				<div className='fade-in'>
					<Header />
				</div>
			</Suspense>

			<Suspense fallback={<Loader />}>
				<div className='fade-in'>
					<Services />
				</div>
			</Suspense>

			<Suspense fallback={<Loader />}>
				<div className='fade-in'>
					<Projects />
				</div>
			</Suspense>

			<Suspense fallback={<Loader />}>
				<div className='fade-in'>
					<Steps />
				</div>
			</Suspense>
			<Suspense fallback={<Loader />}>
				<div className='fade-in'>
					<Catalog />
				</div>
			</Suspense>
			<Suspense fallback={<Loader />}>
				<div className='fade-in'>
					<Request />
				</div>
			</Suspense>

			<Suspense fallback={<Loader />}>
				<div className='fade-in'>
					<Footer />
				</div>
			</Suspense>
		</>
	)
}

export default App
