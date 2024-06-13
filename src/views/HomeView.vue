<script setup>
import ServicesSection from '@/components/homeView/ServicesSection.vue';
import CarouselSection from '@/globals/CarouselSection.vue';
import CopyBlock from '@/globals/CopyBlock.vue';

import { carouselItems } from '@/content/homeView';

import * as content from '@/content/homeView';
</script>

<template>
  <div>
    <div class="fp-container fp-grid">
      <div class="hero">hero</div>
    </div>
    <carousel-section :items="carouselItems">
      <template #heading>
        <copy-block
          alignment="centered"
          :eyebrow="{
            text: 'EXPERIENCIAS COMPARTIDAS',
            color: 'blue',
            position: 'center',
          }"
          heading="Fomentando el desarrollo territorial y social"
        />
      </template>
    </carousel-section>
    <services-section>
      <template #heading>
        <copy-block
          :eyebrow="content.servicesEyebrow"
          :heading="content.servicesHeading"
          :subHeading="content.servicesSubheading"
          :ctas="content.servicesCtas"
        />
      </template>
    </services-section>
  </div>
</template>

<style lang="scss">
@use '../sass/abstracts/_mixins' as *;

.hero {
  grid-column: 1 / span 1;
  background: red;

  @include breakpoint-min('sm') {
    grid-column: 1 / span 4;
  }

  @include breakpoint-min('lg') {
    grid-column: 1 / -1;
  }
}
</style>
