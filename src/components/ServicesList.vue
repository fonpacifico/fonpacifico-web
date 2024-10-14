<script setup>
import ServicesListItem from './ServicesListItem.vue';
import { servicesList } from '../content/homeView';
</script>

<template>
  <ul class="services-list">
    <services-list-item
      v-for="service in servicesList"
      :icon="service.icon"
      :heading="service.heading"
      :description="service.description"
    />
  </ul>
</template>

<style lang="scss" scoped>
@use '@/sass/abstracts' as *;

.services-list {
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 2rem;

  @include breakpoint-min('md') {
    padding-top: 0;
  }
}

@include breakpoint-min('sm') {
  .services-list {
    grid-column: 2 / -2;
  }
}

@include breakpoint-min('lg') {
  .services-list {
    grid-column: 7 / span 6;
    gap: 3rem;
  }
}
</style>
../content/homeView
