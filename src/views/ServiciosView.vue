<script setup>
import CarouselSection from '@/globals/CarouselSection.vue';
import CopyBlock from '@/globals/CopyBlock.vue';

import SplitHero from '@/components/SplitHero.vue';
import SplitSection from '@/globals/SplitSection.vue';
import ProgramasInteres from '@/components/ProgramasInteres.vue';
import StatisticsSection from '@/components/StatisticsSection.vue';
import NewsLetter from '@/components/NewsLetter.vue';

import { carouselItems } from '@/content/nosotrosView';
import * as content from '@/content/serviciosView';
</script>

<template>
  <main>
    <split-hero
      :reverse="true"
      :img-url="content.heroData.imgUrl"
      :heading="content.heroData.heading"
      :subHeading="content.heroData.subHeading"
    />
    <split-section>
      <template #heading>
        <copy-block
          light
          alignment="centered"
          :eyebrow="{
            text: 'SERVICIOS',
            color: 'blue',
            position: 'center',
          }"
          heading="Lista de servicios"
          sub-heading="Apoyamos con nuestras habilidades el desarrollo de un futuro próspero para Colombia."
          :ctas="[
            {
              text: 'Brochure de servicios',
              type: 'secondary-outlined',
              icon: 'download',
              target: 'blank',
              url: 'https://drive.google.com/file/d/1DuKuOgJriiE3ZFGuwH2KNEnl1VtPV1J1/view',
            },
          ]"
        />
      </template>
    </split-section>
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
    <programas-interes :items="content.programasInteres" />
    <news-letter />
  </main>
</template>

<style scoped></style>
