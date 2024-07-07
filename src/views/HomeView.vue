<script setup>
import ServicesSection from '@/components/homeView/ServicesSection.vue';
import ProyectsGrid from '@/components/homeView/ProyectsGrid.vue';
import SociosEstrategicos from '@/components/homeView/SociosEstrategicos.vue';
import CarouselSection from '@/globals/CarouselSection.vue';
import CopyBlock from '@/globals/CopyBlock.vue';
import ProgramasInteres from '@/components/homeView/ProgramasInteres.vue';

import { carouselItems } from '@/content/homeView';

import * as content from '@/content/homeView';
</script>

<template>
  <div>
    <programas-interes :items="content.programasInteres" />
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
@use '../sass/abstracts' as *;
</style>
