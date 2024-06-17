<script setup lang="ts">
import { animate, stagger, type MotionKeyframesDefinition } from 'motion';
import Input from './Input.vue';
import Modal from './Modal.vue'

import { type IDraft } from '~/types'

defineProps<{
  data: IDraft
}>()

const overflow = inject('overflow') as Ref<boolean>

const detailsActive = ref<boolean>(false)
const detailsImageEl = ref<HTMLElement>()

function detailsHandler(show: boolean) {
  const { offsetHeight: mainHeight, offsetWidth: mainWidth } = document.querySelector('main')!
  const { offsetHeight: imageHeight, offsetWidth: imageWidth } = detailsImageEl.value!

  overflow.value = !show
  detailsActive.value = !overflow.value

  if (show) {
    detailsImageEl.value!.scrollIntoView({
      behavior: 'smooth'
    })
  }

  // SPLIT TASKS & MAKE IMAGE FLYYY

  setTimeout(() => {
    const requiredScale = mainHeight / imageHeight + mainWidth / imageWidth - 1

    let animationParams: MotionKeyframesDefinition = { transform: `scale(${requiredScale})`, filter: 'blur(.05rem)' }

    if (!show) animationParams = { transform: 'scale(1)', filter: 'blur(0)' }

    animate(detailsImageEl.value!, animationParams)
  }, 200)
  
  // SECOND TASK SPLIT & MAKE TEXT ANIMATION

  setTimeout(() => {
    if (!show) return

    animate(
      '.container > .modal > *',
      { opacity: [0, 1], transform: ['translateY(2rem)', 'translateY(0)'] },
      { delay: stagger(.1)
    })
  })
}

function toHandler(link?: string) {
  if (!link) return

  window.open(link, '_blank')
}
</script>

<template>
  <div class="draft">
    <div class="draft__image">
      <img :src="data.image" :alt="`${data.title} image`">
      <img ref="detailsImageEl" :src="data.image" :alt="`${data.title} image`">
    </div>
    <div class="draft__time">{{ `${data.time[0]} - ${data.time[1] ?? 'nowadays'}` }}</div>
    <h3 class="light draft__title">{{ data.title }}</h3>
    <p class="draft__description">{{ data.description }}</p>
    <Input @click="detailsHandler(true)" type="button">Show more</Input>
    <Transition mode="out-in">
      <Modal @close="detailsHandler(false)" v-if="detailsActive">
        <div class="container">
          <div class="modal">
            <div class="modal__time">{{ `${data.time[0]} - ${data.time[1] ?? 'nowadays'}` }}</div>
            <h2 class="modal__title italic light">
              {{ data.title }}
            </h2>
            <div class="modal__description">{{ data.description }}</div>
            <p>Which I participated in:</p>
            <ul class="modal__details">
              <li v-for="detail in data.details" :key="detail">{{ detail }}</li>
            </ul>
            <Input @click="toHandler(data.link)" class="modal__to" type="button">To project</Input>
          </div>
        </div>
      </Modal>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
@use "~/assets/scss/mixins";

.draft {
  display: flex;
  flex-direction: column;
  gap: var(--gap);


  &__time, .modal__time {
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

.container {
  margin-left: 0;
}

.modal {
  @include flex-col-half;
  text-align: left;

  &__title, > p {
    color: var(--white-color)
  }

  &__details {
    @include flex-col-half;
    padding-left: var(--gap);
    border-left: .05rem solid var(--white-color);

    li::first-letter {
      font-size: 1.5rem;
      padding-left: 1rem;
    }
  }
}
</style>