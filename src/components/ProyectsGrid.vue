<script setup>
import ProyectCard from '@/components/ProyectCard.vue';

import { projectCards } from '@/content/homeView';
</script>

<template>
  <section class="proyects-section fp-padded fp-dark">
    <div class="fp-container fp-grid">
      <slot name="heading" />

      <ul class="cards-container">
        <ProyectCard
          v-for="project in projectCards"
          :key="project.id"
          :project="project"
        />
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
@use '@/sass/abstracts' as *;

.cards-container {
  grid-column: 1 / -1;
  display: flex;
  row-gap: 3rem;
  flex-flow: column nowrap;
  padding-bottom: 5rem;

  @include breakpoint-min('md') {
    grid-column: 2 / -2;
    padding-bottom: 2rem;
  }

  @include breakpoint-min('lg') {
    grid-column: 1 / -1;
    display: grid;
    column-gap: var(--grid-gap);
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    padding-bottom: 0;

    & :nth-child(1) {
      grid-column: 1;
      grid-row: 1 / span 2;
    }

    & :nth-child(2) {
      grid-column: 1;
      grid-row: 3;
    }

    & :nth-child(3) {
      grid-column: 2;
      grid-row: 1;
    }

    & :nth-child(4) {
      grid-column: 2;
      grid-row: 2 / span 2;
    }
  }
}
</style>
