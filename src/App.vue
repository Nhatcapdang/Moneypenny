<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ToastPlacement from './common/ToastPlacement.vue';

</script>

<template>
  <header>
    <ul>
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">About</RouterLink>
      </li>
      <li>
        <RouterLink to="/blog">Test</RouterLink>
      </li>
    </ul>
  </header>

  <RouterView />
  <ToastPlacement />
</template>

<style lang="scss">
ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    font-size: 20px;
    font-weight: 600;
    padding: 20px;
  }
}
</style>
