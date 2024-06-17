<script setup lang="ts">
import Button from '~/components/Input.vue';

interface IChatMessages {
  user?: string
  me?: string
  cv?: boolean
}

const chatMessages: Array<IChatMessages> = [
  {
    user: '- Who are you?',
    me: `- I'm a <span class="important">Frontend Developer</span>. Currently working with <span class="important">Vue 3.0</span> & <span class="important">TypeScript</span> projects.`
  },
  {
    user: `- Okey, i get it. But <span class="important">WHO ARE YOU</span>?`,
    me: `- Hm... I started to be <span class="important">interested in computers and technology</span> at the <span class="important">age of 7</span> when I first got into a computer store with my father. I saw a bunch of randomly placed...`
  },
  {
    me: `- Wait, <span class="important">you're actually interested in reading this</span>? Seriously? If so, you better contact me on Telegram - i have a lot of stories from my life. But if you're HR (I'm not implying anything, but <span class="important">you're probably HR</span>), click on the button below - <span class="important">i've already made everything</span> for you in one PDF file.`
  },
  {
    user: `- Oh... Appreciate that. But im not a HR (<span class="important">LIAR</span>) and you don't pinned CV link!`,
    me: `- Sorry! I pinned it here. Anyway - if you further want to read on and find out how <span class="important">I'm going to flex next</span>, you're welcome - <span class="important">just scroll down</span>!`,
    cv: true
  },
  {
    user: '- Scroll? What a f...',
  },
]
</script>

<template>
  <div class="chat" v-for="message in chatMessages" :key="message.user">
    <div v-if="message.user" class="chat__person">
      <p v-html="message.user" data-scroll="slide-left" />
    </div>
    <div v-if="message.me" class="chat__me">
      <p v-html="message.me" data-scroll="slide-right" />
      <Button v-if="message.cv" data-scroll type="button" class="cv">Show CV</Button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.chat {
  display: flex;
  flex-direction: column;
  gap: var(--big-gap);

  > div {
    width: 80%;
  }

  &__person {
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