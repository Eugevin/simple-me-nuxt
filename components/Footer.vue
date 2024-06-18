<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__copy" v-html="$t('footer.top') + '<br />' + $t('footer.bottom')"></div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  border-top: .05rem solid var(--grey-color);
  margin-top: var(--big-gap);
  padding: var(--gap) 0;
  text-align: center;

  &__copy {
    font-size: 1rem;
  }
}
</style>