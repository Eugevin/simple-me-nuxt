<script setup lang="ts">
import type { IDraftTarget } from '~/types'

const { t } = useI18n()

interface IChatMessages {
  user?: number
  me?: number
  cv?: boolean
}

const drafts = inject('drafts') as Array<IDraftTarget>

const chatMessages: Array<IChatMessages> = [
  {
    user: 0,
    me: 1,
  },
  {
    user: 2,
    me: 3,
  },
  {
    me: 4,
  },
  {
    user: 5,
    me: 6,
    cv: true,
  },
  {
    user: 7,
  },
]

function cvDownload() {
  cvHandler(drafts.map((draft) => {
    return {
      time: [draft.time[0], draft.time[1] ?? t('projects.nowadays')],
      title: t(`projects.${draft.target}.title`),
      description: t(`projects.${draft.target}.description`),
      details: t(`projects.${draft.target}.details`).split('**'),
      link: draft.link,
    }
  }), `${t('me.name')} ${t('me.surname')}`)
}
</script>

<template>
  <div
    v-for="message in chatMessages"
    :key="message.user"
    class="chat"
  >
    <div
      v-if="message.user || message.user === 0"
      class="chat__user"
    >
      <p
        data-scroll="slide-left"
        v-html="$t(`chat[${message.user}]`)"
      />
    </div>
    <div
      v-if="message.me"
      class="chat__me"
    >
      <p
        data-scroll="slide-right"
        v-html="$t(`chat[${message.me}]`)"
      />
      <Input
        v-if="message.cv"
        data-scroll
        type="button"
        class="cv"
        @click="cvDownload"
      >
        {{ $t('downloadCV') }}
      </Input>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "~/assets/scss/mixins";

.chat {
  display: flex;
  flex-direction: column;
  gap: var(--big-gap);

  > div {
    width: 80%;

    @include screen-phone {
      width: 90%;
    }
  }

  &__user {
    text-align: left;
    align-self: flex-start;
  }

  &__me {
    text-align: right;
    align-self: flex-end;
  }

  .cv {
    margin-top: 2rem;
  }

  ~ .chat {
    margin-top: var(--big-gap);
  }
}
</style>
