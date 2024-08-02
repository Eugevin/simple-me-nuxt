<script setup lang="ts"></script>

<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.card {
  padding: 1rem;
  background-color: var(--black-color);
  transition: var(--transition);
  border-radius: var(--border-radius);

  &:hover {
    box-shadow:  20px 20px 60px #0e0e0e,
             -20px -20px 60px #2a2a2a;
  }
}
</style>
