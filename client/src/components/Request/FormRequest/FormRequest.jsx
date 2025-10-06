import './FormRequest.css'
import { memo, useState } from 'react'

const FormRequest = () => {
	const [email, setEmail] = useState('')
	const [loading, setLoading] = useState(false)
	const API_URL = import.meta.env.VITE_API_URL
	const sendEmail = async e => {
		e.preventDefault()
		setLoading(true)

		try {
			const res = await fetch(`${API_URL}/send-email`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email }),
			})

			const data = await res.json()

			if (data.success) {
				setEmail('') // очищаем поле после успешной отправки
			}
			// при ошибке ничего не показываем
		} catch (err) {
			console.error(err)
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className='request__inner-form' id='form'>
			<h2 className='request__title'>Submit your email to receive updates</h2>
			<form className='request__form' onSubmit={sendEmail}>
				<input
					className='request__form-input'
					type='email'
					placeholder='Enter your email'
					value={email}
					onChange={e => setEmail(e.target.value)}
					required
				/>
				<button className='request__form-btn' type='submit' disabled={loading}>
					{loading ? 'Sending...' : 'Submit'}
				</button>
			</form>
		</div>
	)
}

export default memo(FormRequest)
