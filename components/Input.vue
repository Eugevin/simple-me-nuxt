<script setup lang="ts">
defineProps<{
  type?: 'button'
}>()
</script>

<template>
  <button v-if="type === 'button'">
    <slot />
  </button>
  <input
    v-else
    type="text"
  >
</template>

<style scoped lang="scss">
button {
  font-family: Raleway, Helvetica, sans-serif;
  font-weight: bold;
  background: var(--white-color);
  color: var(--black-color);
  border-radius: 100px;
  cursor: pointer;
  padding: 1rem 2rem;
  font-size: 2rem;
  will-change: transform;
  transition: var(--transition);

  &:hover {
    transform: scale(1.1);
  }
}
</style>
