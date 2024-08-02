<script setup lang="ts">
import { animate, stagger } from 'motion'
import Input from './Input.vue'
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
      { delay: stagger(0.1),
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
    <h3 class="bold draft__title">
      {{ data.title }}
    </h3>
    <div
      class="draft__image"
      @click="detailsHandler(true)"
    >
      <img
        :src="data.image"
        :alt="`${data.title} image`"
      >
      <p>{{ data.description }}</p>
    </div>
    <Transition mode="out-in">
      <Modal
        v-if="detailsActive"
        @close="detailsHandler(false)"
      >
        <div class="container">
          <div class="modal">
            <div class="modal__time">
              {{ `${data.time[0]} - ${data.time[1] ?? $t('projects.nowadays')}` }}
            </div>
            <h2 class="bold modal__title">
              {{ data.title }}
            </h2>
            <div class="modal__description">
              {{ data.description }}
            </div>
            <p>{{ $t('projects.responsibilities') }}:</p>
            <ul class="modal__details">
              <li
                v-for="detail in data.details"
                :key="detail"
              >
                {{ detail }}
              </li>
            </ul>
            <Input
              v-if="data.link"
              class="modal__to"
              type="button"
              @click="toHandler(data.link)"
            >
              {{ $t('projects.to') }}
            </Input>
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

  &__image {
    position: relative;
    cursor: pointer;
    width: 100%;
    border-radius: var(--border-radius);
    overflow: hidden;

    img {
      width: 100%;
    }

    p {
      padding: var(--gap);
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, 0.75);
      transform: scale(1.1);
      opacity: 0;
      transition: var(--transition);
      will-change: transform;
    }

    &:hover {
      p {
        transform: scale(1);
        opacity: 1;
      }

      @include screen-phone {
        p {
          opacity: 0;
        }
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
