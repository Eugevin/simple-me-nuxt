<script setup lang="ts">
import Chat from '~/components/Chat.vue';
import Skills from '~/components/Skills.vue';

import scrollHandler from '~/utils/scrollHandler';

onMounted(() => {
  scrollHandler()
})
</script>

<template>
  <div class="index-page light">
    <div class="container">
      <div class="welcome" id="welcome">
        <div class="welcome__colors">
          <h1 data-scroll class="light italic">Eugene<br />Vinokurov</h1>
        </div>
        <div class="welcome__me">
          <div data-scroll="zoom-me">
            <img src="/images/me.webp" alt="My photo">
            <img data-scroll="show-me" src="/images/lol.webp" alt="My second photo">
          </div>
        </div>
        <Chat />
      </div>
      <div class="skills" id="skills">
        <h2 data-scroll="zoom-in" class="light italic">Skills?</h2>
        <Skills />
        <p data-scroll>Yeah, that's it. <span class="important">I'm not a backend developer</span>, but sometimes (for my pet projects or important work projects) I have to use "backend stuff". That's why <span class="important">i didn't list Docker, Express and other thugs</span> here.</p>
        <p data-scroll>*I am also <span class="important">learning Rust for myself</span>, so that someday I can write something really cool on it.</p>
      </div>
      <div class="projects" id="projects">
        <h2 data-scroll="zoom-in" class="light italic">Projects?</h2>
        <p data-scroll>Some of my projects, that i can show to you, hermano:</p>
        <Projects />
      </div>
      <div class="contacts" id="contacts">
        <h2 data-scroll="zoom-in" class="light italic">Contacts?</h2>
        <p data-scroll>Do you want me? Do you? Ahem... Well, you can find me on telegram <span class="important">@eugevin</span> and <span class="important">eugene.vinokuroff@gmail.com</span> mail.</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.index-page {
  text-align: center;

  .welcome {
    &__colors {
      min-height: calc(100vh - 10rem);
      display: flex;
      justify-content: center;
      align-items: flex-end;

      h1 {
        margin: 3rem 0;
      }
    }

    &__me {
      height: 200vh;

      div {
        background: yellow;
        position: sticky;
        top: var(--gap);
        border-radius: var(--border-radius);
        max-width: 50rem;
        width: 100%;
        height: 24rem;
        margin: 0 auto 4rem;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        img:last-child {
          opacity: 0;
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
        }
      }
    }
  }

  .container > div {
    padding: 5rem 0;
    min-height: 100vh;
  }

  .skills, .works, .contacts {
    p {
      margin-top: var(--big-gap);
    }
  }

  h2 {
    margin-top: var(--big-gap);
    margin-bottom: var(--big-gap);
  }
}
</style>
