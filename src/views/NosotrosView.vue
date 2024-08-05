<script setup>
import CarouselSection from '@/globals/CarouselSection.vue';
import CopyBlock from '@/globals/CopyBlock.vue';

import SplitHero from '@/components/SplitHero.vue';
import ServicesSection from '@/components/ServicesSection.vue';
import StatisticsSection from '@/components/StatisticsSection.vue';
import SociosEstrategicos from '@/components/SociosEstrategicos.vue';
import NewsLetter from '@/components/NewsLetter.vue';

import { carouselItems } from '@/content/nosotrosView';
import * as content from '@/content/nosotrosView';
</script>

<template>
  <main>
    <split-hero
      :img-url="content.heroData.imgUrl"
      :heading="content.heroData.heading"
      :subHeading="content.heroData.subHeading"
    />
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
    <statistics-section :items="content.statisticsItems">
      <template #heading>
        <copy-block
          :heading="content.statisticsHeading.heading"
          :subHeading="content.statisticsHeading.subheading"
          :alignment="content.statisticsHeading.alignment"
        />
      </template>
    </statistics-section>
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
    <socios-estrategicos
      :sociositems="content.sociosEstrategicos.sociosItems"
      :asociadosItems="content.sociosEstrategicos.asociadosItems"
    >
      <template #heading>
        <copy-block
          :heading="content.sociosEstrategicos.heading"
          :subHeading="content.sociosEstrategicos.subheading"
        />
      </template>
    </socios-estrategicos>
    <news-letter />
  </main>
</template>

<style scoped></style>
