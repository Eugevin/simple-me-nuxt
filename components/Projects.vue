<script setup lang="ts">
import Draft from './Draft.vue'
import Input from './Input.vue'

import { type IDraftTarget } from '~/types'

const drafts = inject('drafts') as Array<IDraftTarget>

const currentDrafts: Array<IDraftTarget> = reactive([])
const canLoadMore = ref<boolean>(true)
const projectsEl = ref<HTMLElement>()
const projectsElStyles = reactive({
  maxHeight: '100%',
  transition: 'none',
})

async function loadMoreHandler() {
  const currentDraftsLength = currentDrafts.length
  const newDrafts = drafts.slice(currentDraftsLength, currentDraftsLength + 3)

  projectsElStyles.transition = 'none'
  projectsElStyles.maxHeight = `${projectsEl.value?.offsetHeight}px`

  // drop task in main thread and wait
  await wait(0)

  currentDrafts.push(...newDrafts)

  projectsElStyles.transition = '1s ease-in-out'
  projectsElStyles.maxHeight = `${Number(projectsElStyles.maxHeight.split('px')[0]) + Number(projectsElStyles.maxHeight.split('px')[0]) / currentDraftsLength * newDrafts.length}px`

  if (currentDrafts.length === drafts.length) canLoadMore.value = false
}

onMounted(() => currentDrafts.push(...drafts.slice(0, 3)))
</script>

<template>
  <div
    ref="projectsEl"
    class="projects"
    :style="projectsElStyles"
  >
    <Draft
      v-for="draft in currentDrafts"
      :key="draft.target"
      :data="{ ...draft, title: $t(`projects.${draft.target}.title`), description: $t(`projects.${draft.target}.description`), details: $t(`projects.${draft.target}.details`).split('**') }"
    />
  </div>
  <Transition mode="out-in">
    <Input
      v-if="canLoadMore"
      class="projects__load"
      type="button"
      @click="loadMoreHandler"
    >
      {{ $t('projects.more') }}
    </Input>
  </Transition>
</template>

<style scoped lang="scss">
.projects {
  padding: var(--big-gap) 0;
  display: flex;
  flex-direction: column;
  gap: var(--big-gap);
  height: 100%;
  overflow: hidden;
}
</style>
