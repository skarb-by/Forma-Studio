import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { Resend } from 'resend'

dotenv.config()
const app = express()

// Разрешаем запросы с твоего фронтенда
app.use(cors({
	origin: 'https://forma-studio-six.vercel.app',
}))

app.use(express.json())

// Инициализация Resend API
const resend = new Resend(process.env.RESEND_API_KEY)

// Функция отправки письма
const sendMail = async ({ subject, text }) => {
	return resend.emails.send({
		from: 'Forma Studio <noreply@formastudio.com>', // можно указать своё доменное имя
		to: process.env.MAIL_TO, // получатель (твоя почта)
		subject,
		text,
	})
}

// Endpoint: обычная заявка
app.post('/send-email', async (req, res) => {
	const { email } = req.body
	if (!email) return res.status(400).json({ success: false, error: 'Email обязателен' })

	try {
		await sendMail({
			subject: 'Новая заявка с сайта',
			text: `Новый подписчик: ${email}`,
		})
		res.status(200).json({ success: true })
	} catch (err) {
		console.error('Ошибка при отправке /send-email:', err)
		res.status(500).json({ success: false, error: err.message })
	}
})

// Endpoint: запрос на каталог
app.post('/send-email-catalog', async (req, res) => {
	const { email } = req.body
	if (!email) return res.status(400).json({ success: false, error: 'Email обязателен' })

	try {
		await sendMail({
			subject: 'Новый запрос на каталог',
			text: `Новый запрос на каталог: ${email}`,
		})
		res.status(200).json({ success: true })
	} catch (err) {
		console.error('Ошибка при отправке /send-email-catalog:', err)
		res.status(500).json({ success: false, error: err.message })
	}
})

// Запуск сервера
const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`✅ Сервер запущен на http://localhost:${PORT}`))
