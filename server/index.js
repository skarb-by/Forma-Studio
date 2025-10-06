// server/index.js
import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

// ================================
// Настройка CORS
// ================================
const allowedOrigins = ['https://forma-studio-mu.vercel.app'] // укажи фронтенд URL без слэша

app.use(cors({
	origin: function (origin, callback) {
		if (!origin) return callback(null, true) // для Postman или серверных запросов
		const cleanOrigin = origin.replace(/\/$/, '') // убираем слэш на конце
		if (allowedOrigins.includes(cleanOrigin)) {
			callback(null, true)
		} else {
			callback(new Error('CORS не разрешён для этого origin'))
		}
	},
	methods: ['GET', 'POST', 'OPTIONS'],
	allowedHeaders: ['Content-Type'],
	credentials: true
}))

// Обработка preflight-запросов
app.options('*', cors())

// ================================
// Парсер JSON
// ================================
app.use(express.json())

// ================================
// Настройка Nodemailer для Gmail
// ================================
const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.MAIL_USER, // твоя почта
		pass: process.env.MAIL_PASS, // app password
	},
})

// Общая функция отправки письма
const sendMail = async ({ to, subject, text }) => {
	return transporter.sendMail({
		from: `"Forma Studio" <${process.env.MAIL_USER}>`,
		to,
		subject,
		text,
	})
}

// ================================
// Endpoint: обычная заявка
// ================================
app.post('/send-email', async (req, res) => {
	const { email } = req.body
	if (!email) return res.status(400).json({ success: false, error: 'Email обязателен' })

	try {
		await sendMail({
			to: process.env.MAIL_USER,
			subject: 'Новая заявка с сайта',
			text: `Новый подписчик: ${email}`,
		})
		res.status(200).json({ success: true })
	} catch (err) {
		console.error('Ошибка при отправке /send-email:', err)
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
			to: process.env.MAIL_USER,
			subject: 'Новый запрос на каталог',
			text: `Новый запрос на каталог: ${email}`,
		})
		res.status(200).json({ success: true })
	} catch (err) {
		console.error('Ошибка при отправке /send-email-catalog:', err)
		res.status(500).json({ success: false, error: err.message })
	}
})

// ================================
// Запуск сервера
// ================================
const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`✅ Сервер запущен на http://localhost:${PORT}`))
