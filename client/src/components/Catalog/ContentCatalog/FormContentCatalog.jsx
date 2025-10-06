import { memo, useState } from 'react'

const FormContentCatalog = () => {
	const [email, setEmail] = useState('')
	const [agree, setAgree] = useState(false)
	const [loading, setLoading] = useState(false)

	const sendEmail = async e => {
		e.preventDefault()
		setLoading(true)

		try {
			const res = await fetch('http://localhost:3001/send-email-catalog', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email }),
			})

			const data = await res.json()

			if (data.success) {
				setEmail('') // очистка поля после успешной отправки
				setAgree(false) // сброс чекбокса
			}
			// ошибки не показываем
		} catch (err) {
			console.error(err) // только в консоль
		} finally {
			setLoading(false)
		}
	}

	return (
		<form className='catalog__form' onSubmit={sendEmail}>
			<h3 className='catalog__form-title'>
				Leave your email to receive our project catalog
			</h3>
			<p className='catalog__form-text'>
				The catalog will help you choose a style and plan your layout.
			</p>
			<input
				className='catalog__form-input'
				type='email'
				placeholder='Enter your email'
				value={email}
				onChange={e => setEmail(e.target.value)}
				required
			/>
			<label className='catalog__form-label'>
				<input
					className='catalog__form-checkbox'
					type='checkbox'
					checked={agree}
					onChange={e => setAgree(e.target.checked)}
				/>{' '}
				I agree to the processing of personal data
			</label>
			<button
				className='catalog__form-btn'
				type='submit'
				disabled={loading || !agree} // кнопка заблокирована пока чекбокс не выбран
			>
				{loading ? 'Sending...' : 'Get the catalog'}
			</button>
		</form>
	)
}

export default memo(FormContentCatalog)
