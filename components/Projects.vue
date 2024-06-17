<script setup lang="ts">
import Draft from './Draft.vue'
import Input from './Input.vue';

import { type IDraft } from '~/types'

const drafts: Array<IDraft> = [
  {
    time: ['07.23', null],
    title: 'Program Product',
    description: 'The first six months I was engaged in the development of a highly loaded "Frontend as API" system, after the removal of important tasks on the project was transferred to the backend development department on ExpressJS/Nest.js.',
    details: [
      'Development of systems for user authorization with a system of roles, a large number of queries to the database through the UUID.',
      'Improved project code style, utilizing new techniques and implementing productivity approaches in frontend-server development.',
      'Writing WebAPI for multi-level data reconciliation, recalculations and working with map data.'
    ],
    image: '/images/draft-pp.webp',
    link: 'https://ppr.ru/'
  },
  {
    time: ['01.22', '06.23'],
    title: 'Platinum LTD',
    description: 'I spent the first two months doing "standard frontend", then moved to the SidusHeroes team and developed multiplayer blockchain games using WebGL.',
    details: [
      'Writing frontend using Vue3 with Composition API, TypeScript and Pinia.',
      'Work with difficult Canvas and WebGL engines. Describing types for game entities.',
      'Work with blockchain arhitecture, making request and logic for "backendless" applications.',
      'Error handling caused by game engine, fix bugs, adding new and refactor old functional features.'
    ],
    image: '/images/draft-platinum.webp',
    link: 'https://sidusheroes.com/'
  },
  {
    time: ['06.21', '10.21'],
    title: 'Travelask',
    description: 'Worked on improving site health, search engine optimization, and performance troubleshooting (problems related to long drags and main thread locking up for a few seconds).',
    details: [
      'Migration of existing functionality from VueJS to native class EcmaScript 6+.',
      'Optimizing already written code.'
    ],
    image: '/images/draft-travelask.webp',
    link: 'https://travelask.ru/'
  },
  {
    time: ['09.20', '06.21'],
    title: 'R52.ru',
    description: 'R52.RU is a multi-service agency with 20 years of experience. They\'re design and provide effective presence, support and successful development of online business.',
    details: [
      'Layout of commercial projects.',
      'Edits on existing sites & fixing bugs.',
      'Working with Vue.js projects using VueX and VueRouter.'
    ],
    image: '/images/draft-r52.webp',
    link: 'https://r52.ru/'
  },
  {
    time: ['05.24', null],
    title: 'Olumni Chat',
    description: 'Olumni Chat is a UI-simple web application that allows you to connect two or more people in audio calls via WebRTC technology',
    details: [
      'Development of the frontend part of the application: flow control, audio processing via AudioContext, etc.',
      'Development of backend part for interactive chat and initial negotiation.',
      'Packaging the application in Docker and CI/CD setup.'
    ],
    image: '/images/draft-olumni.webp',
    link: 'https://olumni.ru/'
  },
  {
    time: ['04.21', null],
    title: 'Show Me Some',
    description: 'Show Me Some is my author\'s project together with my wife, where I am the main Backend and Frontend developer. The project is a visual novel with a lot of ramifications in a gloomy setting of an alternative Middle Ages.',
    details: [
      'Develop backend for game engine in Rust.',
      'Writing a branched script.',
      'Writing frontend using canvas.'
    ],
    image: '/images/draft-sms.webp',
  },
  {
    time: ['01.18', '01.22'],
    title: 'Freelance',
    description: 'As a freelancer, I have worked extensively with technologies such as Vue.js, JWT, JSON handling, WebSocket, WebRTC, Express, Bootstrap and more other technologies/frameworks.',
    details: [
      'Engaged in the development and support of the client part of WEB-applications.',
      'Part-time set up Nginx HTTP servers and simple servers on Linux.',
      'Wrote small chat applications and parsers, also worked with the WebSocket API.',
      'Participated in the development of Stores and Gaming Sites using the Vue.js framework.',
      'Worked with Vue.js, VueRouter and VueX.'
    ],
    image: '/images/me.webp',
  },
]

const currentDrafts: Array<IDraft> = reactive([])
const canLoadMore = ref<boolean>(true)
const projectsEl = ref<HTMLElement>()

function loadMoreHandler() {
  const currentDraftsLength = currentDrafts.length
  const newDrafts = drafts.slice(currentDraftsLength, currentDraftsLength + 3)

  const currentContainerHeight = projectsEl.value!.clientHeight

  currentDrafts.push(...newDrafts)

  // BAD SHIT, BUT I'LL DO IT 💀
  projectsEl.value!.style.overflow = 'hidden'
  projectsEl.value!.style.height = `calc(${currentContainerHeight}px - var(--big-gap) * 2)`

  // BAD SHIT X2, BUT I'LL DO IT 💀
  setTimeout(() => {
    projectsEl.value!.style.height = `calc(${currentContainerHeight}px + var(--big-gap) * 4`

    setTimeout(() => {
      projectsEl.value!.removeAttribute('style')
    }, 1100)
  })

  if (currentDrafts.length === drafts.length) canLoadMore.value = false
}

onMounted(() => {
  currentDrafts.push(...drafts.slice(0, 3))
})
</script>

<template>
  <div ref="projectsEl" class="projects">
    <Draft data-scroll v-for="draft in currentDrafts" :key="draft.title" :data="draft" />
    <Transition mode="out-in">
      <Input v-if="canLoadMore" class="projects__load"type="button" @click="loadMoreHandler">Load more</Input>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.projects {
  padding: var(--big-gap) 0;
  display: flex;
  flex-direction: column;
  gap: var(--big-gap);
  transition: 1s ease-in-out;

  &__load {
    margin-right: auto;
  }
}
</style>