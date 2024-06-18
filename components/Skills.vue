<script setup lang="ts">
import { animate, timeline, type TimelineDefinition } from 'motion';

interface ISkill {
  target: string
  image: string
  video: string
}

const skills: Array<ISkill> = [
  {
    target: 'js',
    image: '/images/skills-js.webp',
    video: '/videos/js.mp4'
  },
  {
    target: 'ts',
    image: '/images/skills-ts.webp',
    video: '/videos/ts.mp4'
  },
  {
    target: 'vue',
    image: '/images/skills-vue.webp',
    video: '/videos/vue.mp4'
  },
  {
    target: 'base',
    image: '/images/skills-base.webp',
    video: '/videos/base.mp4'
  },
  {
    target: 'rust',
    image: '/images/skills-rust.webp',
    video: '/videos/rust.mp4'
  },
]

const videoEl = ref<HTMLVideoElement>()

const activeSkill = ref<number>(0)
const cursorPos = reactive({ x: 0, y: 0 })

function videoHandler() {
  videoEl.value?.paused ? videoEl.value.play() : null
}

function presentationHandler(e: MouseEvent, targetIndex: number | null) {
  if (window.innerWidth <= 600) return

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
        <div class="skills__title">{{ $t(`skills.${skills[activeSkill].target}.title`) }}</div>
        <video ref="videoEl" @loadeddata="videoHandler" class="skills__video" :src="skills[activeSkill].video" autoplay muted loop></video>
        <div class="skills__description">{{ $t(`skills.${skills[activeSkill].target}.description`) }}</div>
      </div>
      <div @mouseout="presentationHandler($event, null)" @mousemove="presentationHandler($event, i)" class="skills__image" v-for="skill, i in skills" :key="skill.target">
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
      color: var(--white-color);
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