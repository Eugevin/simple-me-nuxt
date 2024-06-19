<script setup lang="ts">
import { animate, glide, stagger, type AnimationControls, type AnimationOptionsWithOverrides, type MotionKeyframesDefinition } from 'motion';
import preloadHandler from '~/utils/preloadHandler'

const emit = defineEmits<{
  loaded: [value: boolean]
}>()

const preloaded = ref<boolean>(false)
const preloadProgress = ref<number>(0)

interface ITextAnimation {
  selector: string,
  keyframes: MotionKeyframesDefinition,
  params: AnimationOptionsWithOverrides
}

function textAnimation(show: boolean): Promise<void> {
  const animation: ITextAnimation = {
    selector: '.loader h1 span',
    keyframes: show ? { transform: 'translateY(0) rotate(0)' } : { opacity: 0 },
    params: { delay: stagger(0.05), easing: glide({ velocity: 2 }) }
  }

  return animate(animation.selector, animation.keyframes, animation.params).finished
}

function loadingAnimation(): AnimationControls {
  const animation = animate(progress => {
    if (!preloaded.value && preloadProgress.value >= 70) {
      animation.pause()

      return
    }

    preloadProgress.value = progress * 100
  }, { duration: 2, easing: 'ease-in-out' })

  return animation
}

watchEffect(async () => {
  // If all files are preloaded, hide the text and give enter to user
  if (preloadProgress.value === 100) {
    await textAnimation(false)
    emit('loaded', true)
  }
})

onMounted(async () => {
  // Initial text reveal
  await textAnimation(true)
  // Text preload animation
  const initialText = loadingAnimation()
  // Wait for files preload
  await preloadHandler(window.innerWidth <= 600)

  // Preload completed, make sure that animation continue
  preloaded.value = true
  initialText.play()
})
</script>

<template>
  <div class="loader">
    <div class="container__full">
      <h1 class="bold" :style="{ '--width': `${preloadProgress}%`, '--display': `${preloadProgress === 100 ? 'none' : 'block'}`, 'color': `${preloadProgress === 100 ? 'var(--white-color)' : ''}` }">
        <span v-for="char in 'Eugevin'" :key="char">{{ char }}</span>
      </h1>
    </div>
  </div>
</template>

<style scoped lang="scss">
.loader {
  background-color: var(--black-color);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  text-align: center;
  place-content: center;

  h1 {
    -webkit-text-stroke: .1rem var(--white-color);
    color: transparent;
    display: inline-block;
    position: relative;
    text-transform: uppercase;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);

    span {
      display: inline-block;
      transform: translateY(8rem) rotate(90deg);
    }

    &::before {
      content: 'Eugevin';
      width: var(--width);
      overflow: hidden;
      position: absolute;
      color: var(--white-color);
      display: var(--display);
    }
  }
}
</style>