export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  warnHtmlMessage: false,
  messages: {
    en: {
      me: {
        name: 'Eugene',
        surname: 'Vinokurov'
      },
      header: {
        welcome: 'welcome',
        skills: 'skills',
        projects: 'projects',
        contacts: 'contacts'
      },
      chat: [
        '- Who are you?',
        `- I'm a <span class="important">Frontend Developer</span>. Currently working with <span class="important">Vue 3.0</span> & <span class="important">TypeScript</span> projects.`,
        `- Okey, i get it. But <span class="important">WHO ARE YOU</span>?`,
        `- Hm... I started to be <span class="important">interested in computers and technology</span> at the <span class="important">age of 7</span> when I first got into a computer store with my father. I saw a bunch of randomly placed...`,
        `- Wait, <span class="important">you're actually interested in reading this</span>? Seriously? If so, you better contact me on Telegram - i have a lot of stories from my life. But if you're HR (I'm not implying anything, but <span class="important">you're probably HR</span>), click on the button below - <span class="important">i've already made everything</span> for you in one PDF file.`,
        `- Oh... Appreciate that. But im not a HR (<span class="important">LIAR</span>) and you don't pinned CV link!`,
        `- Sorry! I pinned it here. Anyway - if you further want to read on and find out how <span class="important">I'm going to flex next</span>, you're welcome - <span class="important">just scroll down</span>!`,
        '- Scroll? What a f...'
      ],
      downloadCV: 'Download CV',
      copy: 'Copy',
      copied: 'Copied',
      notFound: {
        title: 'Page not found',
        description: 'Looks like you\'re lost. Do you want to go back to the main page or do you want to sit here?',
        back: 'Back to Homepage'
      },
      skills: {
        description: `Yeah, that's it. <span class="important">I'm not a Backend Developer</span>, but sometimes (for my pet projects or important work projects) I have to use "backend stuff". That's why <span class="important">i didn't list Docker, Express and other thugs</span> here.`,
        additional: '*I am also <span class="important">learning Rust for myself</span>, so that someday I can write something really cool on it.',
        js: {
          title: 'JavaScript',
          description: 'JavaScript is a multi-paradigm programming language. Supports object-oriented, imperative and functional styles. The only language at the moment in which the front-end part of applications in the browser is written (and not only).',
        },
        ts: {
          title: 'TypeScript',
          description: `TypeScript is a strongly typed programming language based on JavaScript (like a superset for JS). He is cool? Yes, he's cool. I love TypeScript - it's wonderful.`,
        },
        vue: {
          title: 'Vue',
          description: 'Vue.js is an open source JavaScript framework for creating user interfaces. Easily integrates into projects using other JavaScript libraries. Can function as a web framework for developing single page applications in a reactive style.',
        },
        base: {
          title: 'HTML5 & CSS3',
          description: 'HTML is a markup language used to create static web pages and web applications. CSS is a style sheet language responsible for the presentation of documents written in a markup language.',
        },
        rust: {
          title: 'Rust',
          description: 'Rust is another language that complements JavaScript and TypeScript that I use in my home development. This is an excellent tool that allows you to write truly productive desktop and server applications.',
        },
      },
      projects: {
        description: 'Some of my projects, that <span class="important">i can show to you</span>, hermano:',
        details: 'Show details',
        to: 'To project',
        nowadays: 'nowadays',
        more: 'Load more',
        responsibilities: 'Which I participated in',
        pp: {
          title: 'Program Product',
          description: 'The first six months I was engaged in the development of a highly loaded "Frontend as API" system, after the removal of important tasks on the project was transferred to the backend development department on ExpressJS/Nest.js.',
          details: `Development of systems for user authorization with a system of roles, a large number of queries to the database through the UUID.**Improved project code style, utilizing new techniques and implementing productivity approaches in frontend-server development.**Writing WebAPI for multi-level data reconciliation, recalculations and working with map data.`
        },
        platinum: {
          title: 'Platinum LTD',
          description: 'I spent the first two months doing "standard frontend", then moved to the SidusHeroes team and developed multiplayer blockchain games using WebGL.',
          details: `Writing frontend using Vue3 with Composition API, TypeScript and Pinia.**Work with difficult Canvas and WebGL engines. Describing types for game entities.**Work with blockchain arhitecture, making request and logic for "backendless" applications.**Error handling caused by game engine, fix bugs, adding new and refactor old functional features.`
        },
        travelask: {
          title: 'Travelask',
          description: 'Worked on improving site health, search engine optimization, and performance troubleshooting (problems related to long drags and main thread locking up for a few seconds).',
          details: `Migration of existing functionality from VueJS to native class EcmaScript 6+.**Optimizing already written code.`
        },
        r52: {
          title: 'R52.ru',
          description: 'R52.RU is a multi-service agency with 20 years of experience. They\'re design and provide effective presence, support and successful development of online business.',
          details: `Layout of commercial projects.**Edits on existing sites & fixing bugs.**Working with Vue.js projects using VueX and VueRouter.`
        },
        olumni: {
          title: 'Olumni Chat',
          description: 'Olumni Chat is a UI-simple web application that allows you to connect two or more people in audio calls via WebRTC technology',
          details: `Development of the frontend part of the application: flow control, audio processing via AudioContext, etc.**Development of backend part for interactive chat and initial negotiation.**Packaging the application in Docker and CI/CD setup.`
        },
        sms: {
          title: 'Show Me Some',
          description: 'Show Me Some is my author\'s project together with my wife, where I am the main Backend and Frontend developer. The project is a visual novel with a lot of ramifications in a gloomy setting of an alternative Middle Ages.',
          details: `Develop backend for game engine in Rust.**Writing a branched script.**Writing frontend using canvas.`
        },
        freelance: {
          title: 'Freelance',
          description: 'As a freelancer, I have worked extensively with technologies such as Vue.js, JWT, JSON handling, WebSocket, WebRTC, Express, Bootstrap and more other technologies/frameworks.',
          details: `Engaged in the development and support of the client part of WEB-applications.**Part-time set up Nginx HTTP servers and simple servers on Linux.**Wrote small chat applications and parsers, also worked with the WebSocket API.**Participated in the development of Stores and Gaming Sites using the Vue.js framework.**Worked with Vue.js, VueRouter and VueX.`
        }
      },
      contacts: {
        description: 'Do you want me? Do you? Ahem... Well, you can find me on telegram & email:'
      },
      footer: {
        top: '© All rights reserved 2024',
        bottom: 'Made with 💝 by <span class="important">Eugene Vinokurov</span>'
      }
    },
    ru: {
      me: {
        name: 'Евгений',
        surname: 'Винокуров'
      },
      header: {
        welcome: 'привет',
        skills: 'скиллы',
        projects: 'проекты',
        contacts: 'контакты'
      },
      chat: [
        '- Кто ты?',
        `- Я <span class="important">Фронтенд Разработчик</span>. Сейчас работаю с проектами на <span class="important">Vue 3.0</span> & <span class="important">TypeScript</span>.`,
        `- Хорошо, это я понял. Но <span class="important">КТО ТЫ</span>?`,
        `- А... Ну, я начал <span class="important">интересоваться компьютерами и технологиями</span> в <span class="important">7 лет</span>, когда я впервые пришел в компьютерный магазин с своим папой. Я увидел кучу рандомно разбросанных...`,
        `- Стоп, <span class="important">тебе реально нравится читать это</span>? Серьезно? Если так, то можешь написать мне в Telegram - у меня для тебя есть много историй из жизни. Но если ты HR (ни на что не намекаю, но <span class="important">ты, скорее всего, HR</span>), кликай по кнопке ниже - <span class="important">я уже сделал для тебя все</span> в одном PDF файле.`,
        `- Оу... Cпасибо. Но я не HR (<span class="important">ЛЖЕЦ</span>) и ты не прикрепил ссылку на резюме!`,
        `- Сорян! Прикреплю тут. В любом случае - если хочешь почитать дальше и узнать <span class="important">как я буду флексить дальше</span>, без проблем - <span class="important">просто скроль вниз</span>!`,
        '- Скролить? Что за х...'
      ],
      downloadCV: 'Скачать Резюме',
      copy: 'Скопировать',
      copied: 'Скопировано',
      notFound: {
        title: 'Страница не найдена',
        description: 'Похоже ты потерялся. Хочешь вернуться на главную страницу или тут посидишь?',
        back: 'Назад на Главную'
      },
      skills: {
        description: `Да. это все. <span class="important">Я не Бэкенд Разработчик</span>, но иногда (для пет проектов или важных рабочих проектов) мне нужен "бэкенд стафчик". Вот почему <span class="important">я не упомянул Docker, Express и других чебупелей</span> в списке.`,
        additional: '*Также я <span class="important">изучаю Rust для себя</span> и, надеюсь, когда-нибудь напишу что-то поистине кайфовое на нем.',
        js: {
          title: 'JavaScript',
          description: 'JavaScript — это мультипарадигмальный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Единственный на данный момент язык, на котором пишут фронтенд-часть приложений в браузере (и не только).'
        },
        ts: {
          title: 'TypeScript',
          description: 'TypeScript — это строго типизированный язык программирования, основанный на JavaScript (как суперсет для JS). Он классный? Да, он классный. Я люблю TypeScript - он прекрасен.'
        },
        vue: {
          title: 'Vue',
          description: 'Vue.js — это JavaScript-фреймворк с открытым исходным кодом для создания пользовательских интерфейсов. Легко интегрируется в проекты, использующие другие библиотеки JavaScript. Может функционировать как веб-фреймворк для разработки одностраничных приложений в реактивном стиле.'
        },
        base: {
          title: 'HTML5 & CSS3',
          description: 'HTML — это язык разметки, используемый для создания статических веб-страниц и веб-приложений. CSS — это язык таблиц стилей, отвечающий за представление документов, написанных на языке разметки.'
        },
        rust: {
          title: 'Rust',
          description: 'Rust — еще один язык, дополнение к JavaScript и TypeScript, который я использую при моей домашней разработке. Это прекрасный инструмент, который позволяет писать по-настоящему производительные десктопные, серверные приложения (кстати, бэкенд для формы связи на этом сайте написан на Rust).'
        },
      },
      projects: {
        description: 'Парочка проектов, которые <span class="important">я могу показать тебе</span>, крендель:',
        details: 'Показать детали',
        to: 'Перейти к проекту',
        nowadays: 'по текущий день',
        more: 'Загрузить еще',
        responsibilities: 'Что я делал',
        pp: {
          title: 'Программный Продукт',
          description: 'Первые полгода занимался разработкой высоконагруженной "Frontend as API" системы, после снятия важных задач по проекту был переведен в отдел бэкенд разработки на ExpressJS/Nest.js.',
          details: `Разработка систем для авторизации пользователей с системой ролей, большим количеством запросов к бд через UUID.**Улучшение кодового стиля проекта, использование новых методик и внедрение производительных подходов в фронтенд-серверную разработку.**Написание WebAPI для многоуровневой сверки данных, перерасчетов и работы с картографическими данными.`
        },
        platinum: {
          title: 'Platinum LTD',
          description: 'Первые два месяца занимался "стандартным фронтендом", потом перешел в команду SidusHeroes и разрабатывал мультиплеерные блокчейн игры с использованием WebGL.',
          details: `Написание фронтенда на Vue3 с Composition API, TypeScript и Pinia.**Работа с сложными Canvas и WebGL движками. Описание типов для игровых сущностей.**Работа с блокчейн архитектурой, формирование работы и написание логики для "backendless" приложений.**Обработка ошибок игровых движков, фикс багов, добавление нового и рефактор старого функционала.`
        },
        travelask: {
          title: 'Travelask',
          description: 'Работал над улучшением состояния сайта, производил работы по оптимизации поисковых запросов и устранял производительность (проблемы связанные с длинными тасками и блокировкой main thread на несколько секунд).',
          details: 'Перенос существующего функционала с VueJS на нативный классовый EcmaScript 6+.**Оптимизация уже написанного кода.'
        },
        r52: {
          title: 'R52.ru',
          description: 'R52.RU — мультисервисное агентство с 20-летним опытом. Они проектируют и обеспечивают эффективное присутствие, поддержку и успешное развитие онлайн-бизнеса.',
          details: 'Верстка и основная фронтендная часть коммерческих проектов.**Правки на уже существующих сайтах & фикс багов.**Работа с проектами на Vue.js, используя VueX и VueRouter.'
        },
        olumni: {
          title: 'Olumni Chat',
          description: 'Olumni Чат - это простое с точки зрения UI веб приложение, которое позволяет связывать двух и более людей в аудиозвонках посредством WebRTC технологии.',
          details: 'Разработка фронтенд части приложения: управление потоками, обработка звука через AudioContext и так далее.**Разработка бэкенд части для интерактивного чата и первоначального negotiation.**Упаковка приложения в Docker и настройка CI/CD.'
        },
        sms: {
          title: 'Show Me Some',
          description: 'Show Me Some - мой авторский проект совместно с моей женой, где я выступаю основным разработчиком Backend и Frontend. Проект представляет из себя визуальную новеллу с большим количеством разветвлений в мрачном сеттинге альтернативного средневековья.',
          details: 'Разработка игровой бэкенд части движка на языке Rust.**Написание разветвленного сценария.**Написание фронтенда с использованием canvas.'
        },
        freelance: {
          title: 'Фриланс',
          description: 'Как фрилансер, я много работал с такими технологиями, как Vue.js, JWT, обработка JSON, WebSocket, WebRTC, Express, Bootstrap и многими другими технологиями/фреймворками.',
          details: 'Занимался разработкой и поддержкой клиентской части WEB-приложений.**Частичная настройка HTTP-серверов Nginx и простых серверов на Linux.**Писал небольшие чат-приложения и парсеры, а также работал с WebSocket API.**Участвовал в разработке магазинов и игровых сайтов с использованием фреймворка Vue.js.**Работал с Vue.js, VueRouter и VueX.'
        }
      },
      contacts: {
        description: 'Хочешь меня? Да? Кхм... Хорошо, ты можешь найти меня в телеграме & по имейл:'
      },
      footer: {
        top: '© Все права защищены 2024',
        bottom: 'Сделано с 💝 <span class="important">Женькой Винокуровым</span>'
      }
    }
  }
}))