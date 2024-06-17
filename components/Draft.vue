<script setup lang="ts">
import { timeline, type TimelineDefinition } from 'motion';
import Input from './Input.vue';

import { type IDraft } from '~/types'

defineProps<{
  data: IDraft
}>()

const overflow = inject('overflow') as Ref<boolean>

const detailsImage = ref<HTMLElement>()

function detailsHandler(show: boolean) {
  const { offsetHeight: mainHeight, offsetWidth: mainWidth } = document.querySelector('main')!
  const { offsetHeight: imageHeight, offsetWidth: imageWidth, offsetTop: imagePosY } = detailsImage.value!

  overflow.value = false

  detailsImage.value?.scrollIntoView({
    behavior: 'smooth'
  })

  setTimeout(() => {
    const requiredScale = mainHeight / imageHeight + mainWidth / imageWidth - 1

    const sequence: TimelineDefinition = [
      [detailsImage.value!, { transform: `scale(${requiredScale})` }],
      [detailsImage.value!, { filter: 'blur(.1rem)' }],
    ]

    timeline(sequence)
  }, 200)
}
</script>

<template>
  <div class="draft">
    <div class="draft__image">
      <img :src="data.image" :alt="`${data.title} image`">
      <img ref="detailsImage" :src="data.image" :alt="`${data.title} image`">
    </div>
    <div class="draft__time">{{ `${data.time[0]} - ${data.time[1] ?? 'nowadays'}` }}</div>
    <h3 class="light draft__title">{{ data.title }}</h3>
    <p class="draft__description">{{ data.description }}</p>
    <Input @click="detailsHandler(true)" type="button">Show more</Input>
  </div>
</template>

<style scoped lang="scss">
.draft {
  display: flex;
  flex-direction: column;
  gap: var(--gap);


  &__time {
    align-self: flex-start;
    opacity: .5;
  }

  &__title {
    color: var(--white-color);
  }

  &__image {
    position: relative;

    > img {
      width: 100%;
      border-radius: var(--border-radius);

      &:last-child {
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
}
</style>