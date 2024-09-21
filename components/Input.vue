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
  cursor: pointer;
  font-size: 2rem;
  outline: none;
  border-radius: var(--border-radius);
  background-color: var(--white-color);
  color: var(--black-color);
  padding: 1rem;
  border: .1rem solid var(--white-color);
  transition: var(--transition);
}
</style>
