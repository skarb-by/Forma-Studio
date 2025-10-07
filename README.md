# 🏡 Forma-Studio

Fullstack-проект по продаже недвижимости с интерактивным React-фронтендом и Node.js сервером.

---

## 🖼️ Превью

<img
  src="https://raw.githubusercontent.com/skarb-by/images/refs/heads/main/help/FormaStudio/formastudio-1.png"
  alt=""
  title=""
  style="display: inline-block; margin: 0 auto; ">

<hr/>

<img
  src="https://raw.githubusercontent.com/skarb-by/images/refs/heads/main/help/FormaStudio/formastudio-2.png"
  alt=""
  title=""
  style="display: inline-block; margin: 0 auto; ">

<hr/>

<img
  src="https://raw.githubusercontent.com/skarb-by/images/refs/heads/main/help/FormaStudio/formastudio-3.png"
  alt=""
  title=""
  style="display: inline-block; margin: 0 auto; ">

<hr/>

<img
  src="https://raw.githubusercontent.com/skarb-by/images/refs/heads/main/help/FormaStudio/formastudio-4.png"
  alt=""
  title=""
  style="display: inline-block; margin: 0 auto; ">

<hr/>

<img
  src="https://raw.githubusercontent.com/skarb-by/images/refs/heads/main/help/FormaStudio/formastudio-5.png"
  alt=""
  title=""
  style="display: inline-block; margin: 0 auto; ">

## <hr/>

## ⚙️ Функциональность

- 📦 React-фронтенд с компонентной архитектурой
- 🖼️ Анимации и интерактивные элементы для галерей, слайдеров и форм
- 🔁 Плавная прокрутка и адаптивный дизайн
- 🛠️ Node.js сервер для обработки запросов и хранения данных
- 📱 Адаптивный интерфейс для всех устройств

---

## 📁 Структура проекта

Forma-Studio/
├── client/
│ ├── src/
│ │ ├── assets/
│ │ │ └── images/ # Изображения для каталога, проектов, футера и др.
│ │ ├── components/
│ │ │ ├── Catalog/
│ │ │ │ ├── ContentCatalog/
│ │ │ │ ├── GalleryCatalog/
│ │ │ │ ├── TitleCatalog/
│ │ │ │ ├── Catalog.jsx
│ │ │ │ └── Catalog.css
│ │ │ ├── Footer/
│ │ │ ├── Header/
│ │ │ ├── Loader/
│ │ │ ├── Projects/
│ │ │ ├── Request/
│ │ │ ├── Services/
│ │ │ ├── Steps/
│ │ │ └── ui/
│ │ ├── hooks/
│ │ │ └── useSmoothScroll.js
│ │ ├── node/
│ │ │ └── generate-images.js
│ │ ├── App.jsx
│ │ ├── App.css
│ │ └── main.jsx
│ └── package.json
├── server/
│ ├── .env
│ ├── index.js
│ └── package.json
└── README.md

---

## 🔗 Компоненты фронтенда

- Catalog – каталог объектов недвижимости с контентом, галереей и заголовками
- Header – шапка сайта с кнопками, логотипом, меню и телефоном
- Footer – футер с копирайтом, логотипом, навигацией, контактами и соцсетями
- Projects – секция проектов с слайдером и карточками
- Request – форма запроса на объект недвижимости
- Services – текстовые и заголовочные блоки с описанием услуг
- Steps – пошаговое руководство или процесс работы
- Loader – компонент загрузки для асинхронных действий
- ui – вспомогательные компоненты (например, ImageOverlay)

---

## 🚀 Установка и запуск

Сервер

```bash
cd server
npm install
npm run dev
```

Фронтенд

```bash
cd client
npm install
npm run dev
```

---

## 🛠️ Технологии

- React
- React.lazy / Suspense
- Vite
- CSS Modules / Animation / Media Queries
- useEffect, useState, useCallback, useMemo, memo
- Node.js
- Адаптивный дизайн, анимации и интерактивные элементы
- Кастомные хуки (useSmoothScroll)

---

## 📌 Планы на будущее

- [ ] Добавить автопрокрутку слайдов
- [ ] Подключение реального API для объектов недвижимости
- [ ] Тесты с использованием Jest / RTL

---

## 👨‍💻 Автор

[skarb-by](https://github.com/skarb-by)

---
