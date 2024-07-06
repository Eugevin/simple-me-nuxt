<script setup lang="ts">
const emit = defineEmits<{
  close: [value: boolean]
}>()
</script>

<template>
  <div class="modal" @click.self="$emit('close', true)">
    <div class="modal__back" @click="$emit('close', true)">←</div>
    <slot />
  </div>
</template>

<style scoped lang="scss">
@use "~/assets/scss/mixins";

.modal {
  position: fixed;
  z-index: 96;
  top: var(--gap);
  left: var(--gap);
  width: calc(100% - var(--gap)* 2);
  height: calc(100vh - 4rem);
  overflow-x: hidden;
  padding: calc(var(--gap) * 2) var(--gap);
  background: rgba(0, 0, 0, 0.75);
  border-radius: var(--border-radius) 0 0 var(--border-radius);

  &__back {
    position: fixed;
    top: var(--gap);
    left: var(--gap);
    padding: var(--gap);
    cursor: pointer;

    @include screen-phone {
      top: 0;
      left: 0;
    }
  }

  @include scrollbar;

  @include screen-phone {
    z-index: 98;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 0;
    padding: calc(var(--gap) * 2) 0;
  }
}
</style>