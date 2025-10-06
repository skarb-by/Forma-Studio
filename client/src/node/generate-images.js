import fs from "fs"
import path from "path"
import sharp from "sharp"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const projectRoot = path.resolve(__dirname, "../..")

const inputDir = path.resolve(projectRoot, "src/assets/images/catalog/catalogBaner")
const outputDir = path.resolve(projectRoot, "public/images/catalog")

const sizes = [480, 768, 1280]
const formats = ["avif", "webp", "jpg"]

if (!fs.existsSync(outputDir)) {
	fs.mkdirSync(outputDir, { recursive: true })
}

async function processImage(file) {
	const inputPath = path.join(inputDir, file)
	const basename = path.parse(file).name

	for (const size of sizes) {
		for (const format of formats) {
			const outputPath = path.join(outputDir, `${basename}-${size}.${format}`)

			await sharp(inputPath)
				.resize(size)
				.toFormat(format, { quality: 80 })
				.toFile(outputPath)

			console.log(`✅ ${outputPath}`)
		}
	}

	// готовим JSX-код для вставки
	const jsx = `
<picture>
  <source
    srcSet="/images/catalog/${basename}-480.avif 480w, /images/catalog/${basename}-768.avif 768w, /images/catalog/${basename}-1280.avif 1280w"
    sizes="(max-width: 768px) 100vw, 768px"
    type="image/avif"
  />
  <source
    srcSet="/images/catalog/${basename}-480.webp 480w, /images/catalog/${basename}-768.webp 768w, /images/catalog/${basename}-1280.webp 1280w"
    sizes="(max-width: 768px) 100vw, 768px"
    type="image/webp"
  />
  <img
    src="/images/catalog/${basename}-768.jpg"
    srcSet="/images/catalog/${basename}-480.jpg 480w, /images/catalog/${basename}-768.jpg 768w, /images/catalog/${basename}-1280.jpg 1280w"
    sizes="(max-width: 768px) 100vw, 768px"
    alt="${basename}"
    loading="lazy"
    decoding="async"
  />
</picture>
`

	console.log("\n⚡ JSX для вставки:\n", jsx)
}

async function run() {
	if (!fs.existsSync(inputDir)) {
		console.error("❌ Папка с исходными картинками не найдена:", inputDir)
		return
	}

	const files = fs.readdirSync(inputDir).filter(f =>
		/\.(jpg|jpeg|png)$/i.test(f)
	)

	if (!files.length) {
		console.log("⚠️ Нет картинок в:", inputDir)
		return
	}

	for (const file of files) {
		await processImage(file)
	}

	console.log("🎉 Все картинки обработаны!")
}

run()
