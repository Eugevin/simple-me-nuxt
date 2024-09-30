<script setup lang="ts">
import { animate, scroll } from 'motion'

const { locale, setLocale } = useI18n()

const overflow = inject('overflow') as Ref<boolean>

const router = useRouter()
const route = useRoute()

const isIndexRoute = computed<boolean>(() => route.name === 'index')

interface IMenuItem {
  title: string
  progress: number
}

const menuItems: Array<IMenuItem> = reactive([
  {
    title: 'welcome',
    progress: 0,
  },
  {
    title: 'skills',
    progress: 0,
  },
  {
    title: 'projects',
    progress: 0,
  },
  {
    title: 'contacts',
    progress: 0,
  },
])

function teleportHandler(to: string) {
  if (!overflow.value) return

  document.querySelector(`#${to}`)?.scrollIntoView({
    behavior: 'smooth',
  })
}

function menuScrollHandler() {
  const container = document.querySelector('main')!

  menuItems.forEach((item, i) => {
    scroll(animate((progress) => {
      menuItems[i].progress = Number((progress * 100).toFixed(0))
    }), {
      container,
      target: document.querySelector(`#${item.title}`)!,
      offset: ['start start', 'end start'],
    })
  })
}

function backToHomepage() {
  if (!isIndexRoute.value) {
    router.push('/')

    setTimeout(() => menuScrollHandler(), 600)
  }
}

onMounted(() => {
  if (isIndexRoute.value) menuScrollHandler()
})
</script>

<template>
  <header class="header">
    <nav
      class="header__navigation"
      :class="{ header__navigation_active: !isIndexRoute }"
      @click="backToHomepage"
    >
      <Transition mode="out-in">
        <ul v-if="isIndexRoute">
          <li
            v-for="item in menuItems"
            :key="item.title"
            :class="`link-${item.title}`"
            @click="teleportHandler(item.title)"
          >
            <span :style="{ '--width': `${item.progress}%`, '--content': `'${$t('header.' + item.title)}'` }">{{ $t(`header.${item.title}`) }}</span>
          </li>
        </ul>
        <span v-else>←</span>
      </Transition>
    </nav>
    <div
      class="header__language"
      @click="setLocale(locale === 'en' ? 'ru' : 'en')"
    >
      {{ locale.toUpperCase() }}
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  z-index: 97;
  position: fixed;
  top: var(--gap);
  right: var(--gap);
  height: calc(100vh - var(--gap) * 2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  &__navigation {
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

    &_active {
      cursor: pointer;
    }

    @include header-hover;
  }

  &__language {
    cursor: pointer;
    padding: calc(var(--gap) + .5rem);

    @include header-hover;
  }

  @include screen-phone {
    flex-direction: row;
    top: 0;
    left: 0;
    width: 100%;
    height: initial;

    .header__language {
      height: 100%;
    }

    nav ul {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
