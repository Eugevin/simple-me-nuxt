<script setup lang="ts">
defineEmits<{
  accepted: []
}>()
</script>

<template>
  <div class="cookie">
    <div class="cookie__title">
      🍪
    </div>
    <div class="cookie__description">
      This site uses cookies. Without cookies, the internet would be shit. If you continue to use this site, you agree to the use of cookies.
    </div>
    <div
      class="cookie__close"
      @click="$emit('accepted')"
    />
  </div>
</template>

<style scoped lang="scss">
.cookie {
  z-index: 99;
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  padding: 1rem 2rem;
  background-color: var(--black-color);
  border-radius: var(--border-radius);
  box-shadow: 0 0 1rem #ffffff05;

  &__description {
    margin-top: 1rem;
    max-width: 500px;
  }

  &__close {
    filter: brightness(0) invert(1);
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 0.1rem;
      width: 1rem;
      background: var(--grey-color);
      transform: rotate(45deg) translate(1rem, .5rem);
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 0.1rem;
      width: 1rem;
      background: var(--grey-color);
      transform: rotate(-45deg) translate(-.5rem, 1rem);
    }
  }
}
</style>
