<script setup lang="ts">
import { type IDraftTarget } from './types'

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Loader from './components/Loader.vue'

useHead({
  title: 'Frontend Developer - Eugene Vinokurov',
  meta: [
    { name: 'description', content: 'I\'m frontend developer. Write code in TypeScript (JavaScript) and Vue.js 3.0.' },
  ],
  htmlAttrs: {
    lang: 'en',
  },
})

const drafts: Array<IDraftTarget> = [
  {
    target: 'pp',
    time: ['07.23', null],
    image: '/images/draft-pp.webp',
    link: 'https://ppr.ru/',
  },
  {
    target: 'platinum',
    time: ['01.22', '06.23'],
    image: '/images/draft-platinum.webp',
    link: 'https://sidusheroes.com/',
  },
  {
    target: 'travelask',
    time: ['06.21', '10.21'],
    image: '/images/draft-travelask.webp',
    link: 'https://travelask.ru/',
  },
  {
    target: 'r52',
    time: ['09.20', '06.21'],
    image: '/images/draft-r52.webp',
    link: 'https://r52.ru/',
  },
  {
    target: 'olumni',
    time: ['05.24', null],
    image: '/images/draft-olumni.webp',
    link: 'https://olumni.ru/',
  },
  {
    target: 'sms',
    time: ['04.21', null],
    image: '/images/draft-sms.webp',
  },
  {
    target: 'freelance',
    time: ['01.18', '01.22'],
    image: '/images/me.webp',
  },
]

const preloadComplete = ref<boolean>(false)

// SHARED DATA

const overflow = ref<boolean>(true)

provide('overflow', overflow)
provide('drafts', drafts)

// OVERFLOW

const mainEl = ref<HTMLElement>()

watchEffect(() => {
  if (mainEl.value) {
    mainEl.value.style.overflowY = overflow.value ? 'auto' : 'hidden'
  }
})
</script>

<template>
  <Transition>
    <Loader
      v-if="!preloadComplete"
      @loaded="preloadComplete = true"
    />
  </Transition>
  <main
    ref="mainEl"
  >
    <Header />
    <NuxtPage />
    <Footer />
  </main>
</template>

<style lang="scss">
main {
  position: fixed;
  top: var(--gap);
  left: var(--gap);
  width: calc(100% - var(--gap) * 2);
  height: calc(100vh - var(--gap) * 2);
  overflow-x: hidden;

  padding: var(--gap);
  box-shadow: 0 0 10rem var(--black-color);
  border-radius: var(--border-radius) 0 0 var(--border-radius);
  background-color: var(--black-color);

  > div {
    min-height: calc(100vh - var(--gap) * 2);
  }

  @include scrollbar;

  @include screen-phone {
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    padding: var(--gap) 0;
    border-radius: 0;
  }
}

.v-enter-active,
.v-leave-active,
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to,
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
