<script setup>
import ServicesSection from '@/components/homeView/ServicesSection.vue';
import ProyectsGrid from '@/components/homeView/ProyectsGrid.vue';
import SociosEstrategicos from '@/components/homeView/SociosEstrategicos.vue';
import CarouselSection from '@/globals/CarouselSection.vue';
import CopyBlock from '@/globals/CopyBlock.vue';
import ProgramasInteres from '@/components/homeView/ProgramasInteres.vue';
import StatisticsSection from '@/components/homeView/StatisticsSection.vue';
import NewsLetter from '@/components/homeView/NewsLetter.vue';
import HomeHero from '@/components/homeView/HomeHero.vue';
import { carouselItems } from '@/content/homeView';

import * as content from '@/content/homeView';
</script>

<template>
  <main>
    <home-hero>
      <template #heading>
        <copy-block
          :heading="content.homeHero.heading"
          :subHeading="content.homeHero.subheading"
          :alignment="content.homeHero.alignment"
        />
      </template>
    </home-hero>
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
    <proyects-grid>
      <template #heading>
        <copy-block
          alignment="centered"
          :eyebrow="{
            text: 'BANCO DE EXITOS',
            color: 'blue',
            position: 'center',
          }"
          heading="Construyendo el futuro"
          subHeading="En Fonpacífico estamos orgullosos de tener una lista de contratos terminados con éxito, destacando los logros obtenidos y el impacto positivo generado en las comunidades beneficiadas."
        />
      </template>
    </proyects-grid>
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
    <programas-interes :items="content.programasInteres" />
    <news-letter />
  </main>
</template>

<style lang="scss">
@use '../sass/abstracts' as *;
</style>
