<script setup>
import CarouselSection from '@/globals/CarouselSection.vue';
import CopyBlock from '@/globals/CopyBlock.vue';

import ProgramasInteres from '@/components/ProgramasInteres.vue';
import StatisticsSection from '@/components/StatisticsSection.vue';
import NewsLetter from '@/components/NewsLetter.vue';

import { carouselItems } from '@/content/nosotrosView';
import * as content from '@/content/serviciosView';
</script>

<template>
  <main>
    <div class="convocatorias fp-padded fp-container">
      <div class="convocatorias__heading">
        <h1>Convocatorias</h1>
        <div class="convocatorias__subheading">
          <h5>Construyendo un mejor futuro</h5>
          <p>
            Participa en convocatorias abiertas y trabaja en proyectos
            seleccionados, impulsando tu carrera y contribuyendo a iniciativas
            de desarrollo territorial.
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use '../sass/abstracts/_mixins' as *;

.convocatorias {
  display: flex;
  flex-flow: column nowrap;
  gap: 2rem;

  &__heading {
    display: grid;
    grid-template-columns: 1fr;
    flex-flow: column nowrap;
    gap: 1.5rem;

    @include breakpoint-min('md') {
      grid-template-columns: 1fr 1fr;
    }
  }

  &__subheading {
    display: flex;
    flex-flow: column nowrap;
    gap: 1.5rem;

    @include breakpoint-min('md') {
      grid-column: 2;
    }
  }
}
</style>
