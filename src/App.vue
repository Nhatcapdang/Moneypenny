<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
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
        <RouterLink to="/test">Test</RouterLink>
      </li>
    </ul>
  </header>

  <RouterView />
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
