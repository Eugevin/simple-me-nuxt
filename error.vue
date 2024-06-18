
<script setup lang="ts">
const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <main>
    <div class="container">
      <img src="/images/fire-code.webp" alt="error image">
      <h2>{{ $t('notFound.title') }}</h2>
      <p>{{ $t('notFound.description') }}</p>
      <Input type="button" @click="handleError">{{ $t('notFound.back') }}</Input>
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  text-align: center;

  .container {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
  }

  img {
    width: 100%;
    height: 24rem;
    border-radius: var(--border-radius);
  }
}
</style>