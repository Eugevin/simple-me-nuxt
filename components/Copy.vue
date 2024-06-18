<script setup lang="ts">
const props = defineProps<{
  copyValue: string
}>()

const copied = ref<boolean>(false)
let copiedTimeout: string | number | NodeJS.Timeout | undefined

async function copyHandler() {
  await navigator.clipboard.writeText(props.copyValue)

  copied.value = true

  clearTimeout(copiedTimeout)

  copiedTimeout = setTimeout(() => {
    copied.value = false    
  }, 1000)
}
</script>

<template>
  <div class="copy">
    <Transition mode="out-in">
      <div class="copy__text" @click="copyHandler">{{ copied ? `${$t('copied')}!` : $t('copy') }}</div>
    </Transition>
    <slot />
  </div>
</template>

<style scoped lang="scss">
.copy {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  &__text {
    user-select: none;
    cursor: pointer;
    z-index: 1;
    padding-bottom: .5rem;
    position: absolute;
    min-width: 15rem;
    width: 100%;
    top: 100%;
    transition: var(--transition);
    color: var(--white-color);
    visibility: hidden;
    opacity: 0;

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: .1rem;
      background: var(--white-color)
    }

    &:hover {
      color: var(--black-color);
      background-color: var(--white-color);
    }
  }

  &:hover {
    .copy__text {
      visibility: visible;
      opacity: 1;
    }
  }
}
</style>