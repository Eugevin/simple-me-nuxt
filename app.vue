<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Loader from './components/Loader.vue';

const preloadComplete = ref<boolean>(false)

const overflow = ref<boolean>(true)

provide('overflow', overflow)

const mainEl = ref<HTMLElement>()

watchEffect(() => {
  if (mainEl.value) {
    mainEl.value.style.overflowY = overflow.value ? 'auto' : 'hidden'
  }
})

function preloadHandler() {
  useHead({
    title: 'Frontend Developer - Eugene Vinokurov // eugevin'
  })

  preloadComplete.value = true
}
</script>

<template>
  <Loader @loaded="preloadHandler"/>
  <Transition mode="out-in">
    <main ref="mainEl" v-if="preloadComplete" >
      <Header />
      <NuxtPage />
      <Footer />
    </main>
  </Transition>
</template>

<style lang="scss">
@use "~/assets/scss/mixins";

main {
  position: fixed;
  top: var(--gap);
  left: var(--gap);
  width: calc(100% - var(--gap) * 2);
  height: calc(100vh - 4rem);
  overflow-x: hidden;

  padding: var(--gap);
  box-shadow: 0 0 10rem var(--black-color);
  border-radius: var(--border-radius) 0 0 var(--border-radius);
  background-color: var(--black-color);

  @include scrollbar;

  @include screen-phone {
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 0;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
