<script setup lang="ts">
import preloadHandler from '~/utils/preloadHandler'

const emit = defineEmits<{
  loaded: [value: boolean]
}>()

const preloadError = ref<boolean>(false)

useHead({
  title: 'Preload assets...'
})

onMounted(() => {
  preloadHandler(false)
    .then(() => {
      emit('loaded', true)
    })
    .catch(() => {
      useHead({
        title: 'Preload assets...'
      })

      preloadError.value = true
    })
})

</script>

<template>
  <div class="loader">
    <Transition mode="out-in">
      <div v-if="!preloadError" class="container">
        <h2 class="light loader__title">Preload assets...</h2>
        <div class="loader__inner"></div>
      </div>
      <div v-else class="container">
        <p class="loader__message">An error occurred during the preload. Please, try again later 😿</p>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.loader {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  padding: var(--gap);
  text-align: center;

  .container {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
    justify-content: flex-start;
    align-items: center;
  }

  &__title, &__message {
    color: var(--black-color);
  }

  &__inner {
    position: relative;
    height: 5rem;
    width: 5rem;
    border-radius: 100%;
    border: .2rem solid var(--black-color);
    animation: loaderAnimation 1s linear infinite;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      height: 2rem;
      width: 2rem;
      transform: translateX(-50%) translateY(-1rem);
      background-color: #ffffff;
    }
  }

  @keyframes loaderAnimation {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
}
</style>