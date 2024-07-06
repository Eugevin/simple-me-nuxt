<script setup lang="ts">
import { animate, stagger } from 'motion';
import Input from './Input.vue';
import Modal from './Modal.vue'

import { type IDraft } from '~/types'

defineProps<{
  data: IDraft
}>()

const overflow = inject('overflow') as Ref<boolean>

const detailsActive = ref<boolean>(false)

function detailsHandler(show: boolean) {
  overflow.value = !show
  detailsActive.value = !overflow.value

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
    <img class="draft__image" @click="detailsHandler(true)" :src="data.image" :alt="`${data.title} image`">
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
    width: 100%;
    border-radius: var(--border-radius);
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