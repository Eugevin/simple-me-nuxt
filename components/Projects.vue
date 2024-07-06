<script setup lang="ts">
import { type IDraftTarget } from '~/types';

import Draft from './Draft.vue'
import Input from './Input.vue';

const drafts = inject('drafts') as Array<IDraftTarget>

const currentDrafts: Array<IDraftTarget> = reactive([])
const canLoadMore = ref<boolean>(true)
const projectsEl = ref<HTMLElement>()

function loadMoreHandler() {
  const currentDraftsLength = currentDrafts.length
  const newDrafts = drafts.slice(currentDraftsLength, currentDraftsLength + 3)

  const currentContainerHeight = projectsEl.value!.clientHeight

  currentDrafts.push(...newDrafts)

  // BAD SHIT, BUT I'LL DO IT 💀
  projectsEl.value!.style.overflow = 'hidden'
  projectsEl.value!.style.height = `calc(${currentContainerHeight}px - var(--big-gap) * 2)`

  // BAD SHIT X2, BUT I'LL DO IT 💀
  setTimeout(() => {
    projectsEl.value!.style.height = `calc(${currentContainerHeight}px + var(--big-gap) * 6`

    setTimeout(() => {
      projectsEl.value!.removeAttribute('style')
    }, 1100)
  })

  if (currentDrafts.length === drafts.length) canLoadMore.value = false
}

onMounted(() => currentDrafts.push(...drafts.slice(0, 3)))
</script>

<template>
  <div ref="projectsEl" class="projects">
    <Draft v-for="draft in currentDrafts" :key="draft.target" :data="{...draft, title: $t(`projects.${draft.target}.title`), description: $t(`projects.${draft.target}.description`), details: $t(`projects.${draft.target}.details`).split('**')}" />
    <Transition mode="out-in">
      <Input v-if="canLoadMore" class="projects__load"type="button" @click="loadMoreHandler">{{ $t('projects.more') }}</Input>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.projects {
  padding: var(--big-gap) 0;
  display: flex;
  flex-direction: column;
  gap: var(--big-gap);
  transition: 1s ease-in-out;

  &__load {
    margin-right: auto;
  }
}
</style>