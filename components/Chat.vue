<script setup lang="ts">
import Button from '~/components/Input.vue';

interface IChatMessages {
  user?: number
  me?: number
  cv?: boolean
}

const chatMessages: Array<IChatMessages> = [
  {
    user: 0,
    me: 1
  },
  {
    user: 2,
    me: 3
  },
  {
    me: 4
  },
  {
    user: 5,
    me: 6,
    cv: true
  },
  {
    user: 7
  }
]
</script>

<template>
  <div class="chat" v-for="message in chatMessages" :key="message.user">
    <div v-if="message.user || message.user === 0" class="chat__user">
      <p v-html="$t(`chat[${message.user}]`)" data-scroll="slide-left" />
    </div>
    <div v-if="message.me" class="chat__me">
      <p v-html="$t(`chat[${message.me}]`)" data-scroll="slide-right" />
      <Button v-if="message.cv" data-scroll type="button" class="cv">{{ $t('cv') }}</Button>
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