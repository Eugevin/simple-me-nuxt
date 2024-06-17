<script setup lang="ts">
import Draft from './Draft.vue'

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
    image: '/images/draft-pp.webp'
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
    image: '/images/draft-platinum.webp'
  },
  {
    time: ['06.21', '10.21'],
    title: 'Travelask',
    description: 'Worked on improving site health, search engine optimization, and performance troubleshooting (problems related to long drags and main thread locking up for a few seconds).',
    details: [
      'Migration of existing functionality from VueJS to native class EcmaScript 6+.',
      'Optimizing already written code.'
    ],
    image: '/images/draft-travelask.webp'
  }
]
</script>

<template>
  <div class="projects">
    <Draft data-scroll v-for="draft in drafts" :key="draft.title" :data="draft" />
  </div>
</template>

<style scoped lang="scss">
.projects {
  padding: var(--big-gap) 0;
  display: flex;
  flex-direction: column;
  gap: var(--big-gap);
}
</style>