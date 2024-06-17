<script setup lang="ts">
import { animate, timeline, type TimelineDefinition } from 'motion';

interface ISkill {
  title: string
  description: string
  image: string
  video: string
}

const skills: Array<ISkill> = [
  {
    title: 'JavaScript',
    description: 'JavaScript is a multi-paradigm programming language. Supports object-oriented, imperative and functional styles. The only language at the moment in which the front-end part of applications in the browser is written (and not only).',
    image: '/images/skills-js.webp',
    video: '/videos/js.mp4'
  },
  {
    title: 'TypeScript',
    description: `TypeScript is a strongly typed programming language based on JavaScript (like a superset for JS). He is cool? Yes, he's cool. I love TypeScript - it's wonderful.`,
    image: '/images/skills-ts.webp',
    video: '/videos/ts.mp4'
  },
  {
    title: 'Vue',
    description: 'Vue.js is an open source JavaScript framework for creating user interfaces. Easily integrates into projects using other JavaScript libraries. Can function as a web framework for developing single page applications in a reactive style.',
    image: '/images/skills-vue.webp',
    video: '/videos/vue.mp4'
  },
  {
    title: 'HTML5 & CSS3',
    description: 'HTML is a markup language used to create static web pages and web applications. CSS is a style sheet language responsible for the presentation of documents written in a markup language.',
    image: '/images/skills-base.webp',
    video: '/videos/base.mp4'
  },
  {
    title: 'Rust',
    description: 'Rust is another language that complements JavaScript and TypeScript that I use in my home development. This is an excellent tool that allows you to write truly productive desktop and server applications.',
    image: '/images/skills-rust.webp',
    video: '/videos/rust.mp4'
  },
]

const videoEl = ref<HTMLVideoElement>()

const activeSkill = ref<number>(0)
const cursorPos = reactive({ x: 0, y: 0 })

function videoHandler() {
  console.log('loaded')

  videoEl.value?.paused ? videoEl.value.play() : null
}

function presentationHandler(e: MouseEvent, targetIndex: number | null) {
  if (targetIndex === null) {
    animate('.skills__presentation', { opacity: 0 })

    return
  }

  activeSkill.value = targetIndex

  cursorPos.x = e.clientX
  cursorPos.y = e.clientY
  
  const sequence: TimelineDefinition = [
    ['.skills__presentation', { transform: `translate(calc(${e.clientX}px + 10vh), calc(${e.clientY}px - 20vh))` }],
    ['.skills__presentation', { opacity: 1 }]
  ]

  timeline(sequence, { duration: 0 })
}
</script>

<template>
  <div class="skills">
    <div class="skills__box">
      <div class="skills__presentation">
        <div class="skills__title">{{ skills[activeSkill].title }}</div>
        <video ref="videoEl" @loadeddata="videoHandler" class="skills__video" :src="skills[activeSkill].video" autoplay muted loop></video>
        <div class="skills__description">{{ skills[activeSkill].description }}</div>
      </div>
      <div @mouseout="presentationHandler($event, null)" @mousemove="presentationHandler($event, i)" class="skills__image" v-for="skill, i in skills" :key="skill.title">
        <img data-scroll :src="skill.image" alt="skills image">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.skills {
  .skills {
    &__box {
      position: relative;
      display: flex;
      justify-content: center;
    }

    &__presentation {
      --size: 20rem;

      z-index: 1;
      display: flex;
      flex-direction: column;
      gap: var(--gap);
      border-radius: var(--border-radius);
      pointer-events: none;
      opacity: 0;
      position: fixed;
      top: 0;
      left: 0;

      max-width: var(--size);
    }

    &__title {
      font-size: 2rem;
    }

    &__video {
      margin: 0 auto;
      height: calc(var(--size) * (9 / 16));
      width: 100%;
      position: relative;
    }

    &__image {
      padding: 1rem;
      cursor: pointer;

      img {
        pointer-events: none;
        --image-size: 3rem;

        height: var(--image-size);
        width: var(--image-size);
      }
    }
  }
}
</style>