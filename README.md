### Deployment here - https://covid-stats-react-seven.vercel.app/

This app uses the data received from the https://covid-api.com/api/ and displays COVID19 statistics on the chart.
Technology used - React, Typescript, MUI, Recharts.

### Setup

- Clone the repository using the following command: `git clone https://github.com/thekolesnikov/covid-stats-react.git`

### Install

Have NodeJS installed and follow the next steps
- `npm i` for installing dev dependecies

### Usage
- `npm start` to see the project

---

# Тестовое задание

Створити додаток (spa) для відображення статистик захворювань COVID19.
Публічна api для додатку https://covid-api.com/api/

Додаток має складатися з 2 сторінок:

- Глобальная статистика і статистика по країнам.
    - Повинна бути можливість обрати фільтри date_from, date_to, country, case (confirmed, death, recovered).
    - Отримані дані відображаються на графіку. (графік відображає зміну case у часі).
    - p. s запити робляться по конкретній даті. Тобто чим більше запитів тим точніший буде графік.
- About.

Зовнішній вигляд програми повинен складатися із cайдбару та області перегляду.

Важливо:

- Вибрані фільтри повинні відображатися в параметрах GET. Після копіювання лінки і відкритяя данної лінки у іншій вкладці або іншому браузері фільтри сетятся з GET  параметрів.
- README для інструкцією запуску.

Бібліотеки та пакети:

- react
- react-router
- material-ui
- будь-яка бібліотека для відображення графіків  (наприклад http://recharts.org/en-US/)

Буде плюсом використання:

- Typescript
