import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { Resend } from 'resend'

dotenv.config()
const app = express()

// ================================
// CORS
// ================================
const allowedOrigins = ['https://forma-studio-mu.vercel.app']

app.use((req, res, next) => {
	const origin = req.headers.origin
	if (allowedOrigins.includes(origin)) {
		res.header('Access-Control-Allow-Origin', origin)
	}
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
	res.header('Access-Control-Allow-Credentials', 'true')

	if (req.method === 'OPTIONS') {
		return res.sendStatus(204)
	}
	next()
})

app.use(express.json())

// ================================
// Настройка Resend
// ================================
const resend = new Resend(process.env.RESEND_API_KEY)

// ================================
// Функция для отправки письма
// ================================
const sendMail = async ({ to, subject, html }) => {
	return resend.emails.send({
		from: 'Forma Studio <onboarding@resend.dev>', // рабочий тестовый адрес
		to,
		subject,
		html,
	})
}

// ================================
// Endpoint: обычная заявка
// ================================
app.post('/send-email', async (req, res) => {
	const { email } = req.body
	if (!email) return res.status(400).json({ success: false, error: 'Email обязателен' })

	try {
		console.log('📨 Отправляем письмо через Resend на', process.env.MAIL_TO)

		await sendMail({
			to: process.env.MAIL_TO || 'studiof334@gmail.com',
			subject: 'Новая заявка с сайта Forma Studio',
			html: `
        <h2>Новая заявка</h2>
        <p><strong>Email подписчика:</strong> ${email}</p>
      `,
		})

		res.status(200).json({ success: true })
	} catch (err) {
		console.error('❌ Ошибка при отправке /send-email:', err)
		res.status(500).json({ success: false, error: err.message })
	}
})

// ================================
// Endpoint: запрос на каталог
// ================================
app.post('/send-email-catalog', async (req, res) => {
	const { email } = req.body
	if (!email) return res.status(400).json({ success: false, error: 'Email обязателен' })

	try {
		await sendMail({
			to: process.env.MAIL_TO || 'studiof334@gmail.com',
			subject: 'Новый запрос на каталог Forma Studio',
			html: `
        <h2>Запрос на каталог</h2>
        <p><strong>Email:</strong> ${email}</p>
      `,
		})

		res.status(200).json({ success: true })
	} catch (err) {
		console.error('❌ Ошибка при отправке /send-email-catalog:', err)
		res.status(500).json({ success: false, error: err.message })
	}
})

// ================================
// Запуск сервера
// ================================
const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`✅ Сервер запущен на порт ${PORT}`))
