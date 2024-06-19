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

  // SCALE IMAGE TO FULLSCREEN

  setTimeout(() => {
    const requiredScale = mainHeight / imageHeight + mainWidth / imageWidth - 1.2

    let animationParams: MotionKeyframesDefinition = { transform: `scale(${requiredScale})`, filter: 'blur(.05rem)' }

    if (!show) animationParams = { transform: 'scale(1)', filter: 'blur(0)' }

    // TODO: OPTIMIZATION FOR MOBILE
    if (window.innerWidth > 600) animate(detailsImageEl.value!, animationParams)
  }, 200)

  // SCROLL IMAGE TO VIDEW AND SCALE IT TO FULLSCREEN SIZE
  
  setTimeout(() => {
    if (!show) return

    detailsImageEl.value!.scrollIntoView({ behavior: 'smooth' })

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
    <div class="draft__image" @click="detailsHandler(true)">
      <img :src="data.image" :alt="`${data.title} image`">
      <img ref="detailsImageEl" :src="data.image" :alt="`${data.title} image`">
    </div>
    <div class="draft__time">{{ `${data.time[0]} - ${data.time[1] ?? $t('projects.nowadays')}` }}</div>
    <h3 class="bold draft__title">{{ data.title }}</h3>
    <p class="draft__description">{{ data.description }}</p>
    <Input @click="detailsHandler(true)" type="button">{{ $t('projects.details') }}</Input>
    <Transition mode="out-in">
      <Modal @close="detailsHandler(false)" v-if="detailsActive">
        <div class="container">
          <div class="modal">
            <div class="modal__time">{{ `${data.time[0]} - ${data.time[1] ?? $t('projects.nowadays')}` }}</div>
            <h2 class="bold modal__title">
              {{ data.title }}
            </h2>
            <div class="modal__description">{{ data.description }}</div>
            <p>{{ $t('projects.responsibilities') }}:</p>
            <ul class="modal__details">
              <li v-for="detail in data.details" :key="detail">{{ detail }}</li>
            </ul>
            <Input v-if="data.link" @click="toHandler(data.link)" class="modal__to" type="button">{{ $t('projects.to') }}</Input>
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
    cursor: pointer;
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
  display: flex;
  flex-direction: column;
  gap: var(--gap);
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