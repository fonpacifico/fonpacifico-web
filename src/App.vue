<script setup>
import MainNav from './globals/MainNav.vue';
import MainFooter from './globals/MainFooter.vue';
</script>

<template>
  <main-nav show-banner/>
  <router-view v-slot="{ Component }">
    <transition
      name="slide"
      mode="out-in"
    >
      <component :is="Component" />
    </transition>
  </router-view>
  <main-footer />
</template>

<style scope>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
</style>
./globals/MainNav.vue
