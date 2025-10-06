import { useCallback } from 'react'

export const useSmoothScroll = () => {
	const scrollTo = useCallback(href => {
		const target = document.querySelector(href)
		if (!target) return

		const headerOffset = 80
		const targetPosition =
			target.getBoundingClientRect().top + window.pageYOffset - headerOffset
		const startPosition = window.pageYOffset
		const distance = targetPosition - startPosition
		const duration = 1500

		let start = null
		const easeInOutCubic = t =>
			t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

		const step = timestamp => {
			if (!start) start = timestamp
			const elapsed = timestamp - start
			const progress = Math.min(elapsed / duration, 1)
			const ease = easeInOutCubic(progress)
			window.scrollTo(0, startPosition + distance * ease)
			if (elapsed < duration) {
				window.requestAnimationFrame(step)
			}
		}

		window.requestAnimationFrame(step)
	}, [])

	return scrollTo
}
