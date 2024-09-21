<script setup lang="ts">
interface ISkill {
  target: string
  image: string
}

const skills: Array<ISkill> = [
  {
    target: 'js',
    image: '/images/skills-js.webp',
  },
  {
    target: 'ts',
    image: '/images/skills-ts.webp',
  },
  {
    target: 'vue',
    image: '/images/skills-vue.webp',
  },
  {
    target: 'base',
    image: '/images/skills-base.webp',
  },
  {
    target: 'express',
    image: '/images/skills-express.webp',
  },
  {
    target: 'mongo',
    image: '/images/skills-mongo.webp',
  },
  {
    target: 'docker',
    image: '/images/skills-docker.webp',
  },
  {
    target: 'rtc',
    image: '/images/skills-rtc.webp',
  },
  {
    target: 'jwt',
    image: '/images/skills-jwt.webp',
  },
  {
    target: 'rust',
    image: '/images/skills-rust.webp',
  },
]
</script>

<template>
  <div class="skills">
    <div
      v-for="skill in skills"
      :key="skill.target"
      class="box skill"
      data-scroll
    >
      <p class="skill__title">
        {{ $t(`skills.${skill.target}`) }}
      </p>
      <div class="skill__image">
        <img
          :src="skill.image"
          alt="skills image"
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.skills {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;

  .skill {
    cursor: pointer;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &__title {
      pointer-events: none;
      white-space: nowrap;
      position: absolute;
      left: 50%;
      transform: translateX(-50%) translateY(-3rem);
      opacity: 0;
      transition: var(--transition);
    }

    &__image {
      padding: 1rem;

      img {
        pointer-events: none;
        --image-size: 3rem;

        height: var(--image-size);
        width: var(--image-size);
      }
    }

    &:hover {
      .skill__title {
        transform: translateX(-50%) translateY(-5rem);
        opacity: 1;
      }
    }
  }
}
</style>
