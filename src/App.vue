<script setup>
import MainNav from './globals/MainNav.vue';
</script>

<template>
  <main-nav />

  <router-view v-slot="{ Component }">
    <transition
      name="slide"
      mode="out-in"
    >
      <component :is="Component" />
    </transition>
  </router-view>
  <footer>footer</footer>
</template>

<style scope>
/* we will explain what these classes do next! */
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
</style>
