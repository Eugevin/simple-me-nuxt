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

  &::-webkit-scrollbar {
    width: .1rem;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 .1rem var(--grey-color);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--grey-color);
    border-radius: 100px;
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
