<script setup lang="ts">
import { animate, scroll } from 'motion'

const overflow = inject('overflow') as Ref<boolean>

interface IMenuItem {
  title: string
  progress: number
}

const menuItems: Array<IMenuItem> = reactive([
  {
    title: 'welcome',
    progress: 0
  },
  {
    title: 'skills',
    progress: 0
  },
  {
    title: 'projects',
    progress: 0
  },
  {
    title: 'contacts',
    progress: 0
  }
])

function teleportHandler(to: string) {
  if (!overflow.value) return

  document.querySelector(`#${to}`)?.scrollIntoView({
    behavior: 'smooth'
  })
}

onMounted(() => {
  const container = document.querySelector('main')!

  menuItems.forEach((item, i) => {
    scroll(animate(progress => {
      menuItems[i].progress = Number((progress * 100).toFixed(0))
    }), {
      container,
      target: document.querySelector(`#${item.title}`)!,
      offset: ['start start', 'end start']
    })
  })
})
</script>

<template>
  <header class="header">
    <nav>
      <ul>
        <li @click="teleportHandler(item.title)" v-for="item in menuItems" :key="item.title" :class="`link-${item.title}`">
          <span :style="{ '--width': `${item.progress}%`, '--content': `'${item.title}'` }">{{ item.title }}</span>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.header {
  z-index: 97;
  position: fixed;
  top: var(--gap);
  right: var(--gap);
  opacity: 0.8;
  transition: var(--transition);

  nav {
    padding: var(--gap);

    li {
      padding: .5rem;
      cursor: pointer;

      span {
        position: relative;

        &::before {
          overflow: hidden;
          content: var(--content);
          position: absolute;
          height: 100%;
          width: var(--width);
          color: var(--white-color);
        }
      }
    }
  }

  &:hover {
    opacity: 1;
  }
}
</style>