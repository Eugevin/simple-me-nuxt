<script setup lang="ts">
import Draft from './Draft.vue'
import Input from './Input.vue';

interface IDraftTarget {
  target: string
  time: [string, string | null]
  image: string
  link?: string
}

const drafts: Array<IDraftTarget> = [
  {
    target: 'pp',
    time: ['07.23', null],
    image: '/images/draft-pp.webp',
    link: 'https://ppr.ru/'
  },
  {
    target: 'platinum',
    time: ['01.22', '06.23'],
    image: '/images/draft-platinum.webp',
    link: 'https://sidusheroes.com/'
  },
  {
    target: 'travelask',
    time: ['06.21', '10.21'],
    image: '/images/draft-travelask.webp',
    link: 'https://travelask.ru/'
  },
  {
    target: 'r52',
    time: ['09.20', '06.21'],
    image: '/images/draft-r52.webp',
    link: 'https://r52.ru/'
  },
  {
    target: 'olumni',
    time: ['05.24', null],
    image: '/images/draft-olumni.webp',
    link: 'https://olumni.ru/'
  },
  {
    target: 'sms',
    time: ['04.21', null],
    image: '/images/draft-sms.webp',
  },
  {
    target: 'freelance',
    time: ['01.18', '01.22'],
    image: '/images/me.webp',
  },
]

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

onMounted(() => {
  currentDrafts.push(...drafts.slice(0, 3))
})
</script>

<template>
  <div ref="projectsEl" class="projects">
    <Draft data-scroll v-for="draft in currentDrafts" :key="draft.target" :data="{...draft, title: $t(`projects.${draft.target}.title`), description: $t(`projects.${draft.target}.description`), details: $t(`projects.${draft.target}.details`).split('**')}" />
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