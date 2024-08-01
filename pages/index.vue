<script setup lang="ts">
onMounted(scrollHandler)

function getSectionTitle(title: string): string {
  return `${title.charAt(0).toUpperCase() + title.slice(1)}?`
}
</script>

<template>
  <div class="index-page light">
    <div class="container">
      <div
        id="welcome"
        class="welcome"
      >
        <div class="welcome__colors">
          <h1
            data-scroll
            class="light italic"
          >
            {{ $t('me.name') }}<br>{{ $t('me.surname') }}
          </h1>
        </div>
        <div class="welcome__me">
          <div data-scroll="zoom-me">
            <img
              src="/images/me.webp"
              alt="My photo"
            >
            <img
              data-scroll="show-me"
              src="/images/lol.webp"
              alt="My second photo"
            >
          </div>
        </div>
        <Chat />
      </div>
      <div
        id="skills"
        class="skills"
      >
        <h2
          data-scroll="zoom-in"
          class="light italic"
        >
          {{ getSectionTitle($t('header.skills')) }}
        </h2>
        <Skills />
        <p
          data-scroll
          v-html="$t('skills.description')"
        />
        <p
          data-scroll
          v-html="$t('skills.additional')"
        />
      </div>
      <div
        id="projects"
        class="projects"
      >
        <h2
          data-scroll="zoom-in"
          class="light italic"
        >
          {{ getSectionTitle($t('header.projects')) }}
        </h2>
        <p
          data-scroll
          v-html="$t('projects.description')"
        />
        <Projects />
      </div>
      <div
        id="contacts"
        class="contacts"
      >
        <h2
          data-scroll="zoom-in"
          class="light italic"
        >
          {{ getSectionTitle($t('header.contacts')) }}
        </h2>
        <div
          style="font-size: 2rem"
          data-scroll
        >
          {{ $t('contacts.description') }} <br>  <Copy copy-value="@eugevin">
            <span class="important">@eugevin</span>
          </Copy> & <Copy copy-value="eugene.vinokuroff@gmail.com">
            <span class="important">eugene.vinokuroff@gmail.com</span>
          </Copy>
        </div>
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
      height: 150vh;

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
