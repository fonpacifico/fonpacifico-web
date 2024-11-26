<script setup>
import { items } from '@/content/pqrsd';
</script>

<template>
  <main class="fp-container">
    <section class="heading fp-padded">
      <h3>
        Realizar peticiones, quejas, reclamos, sugerencias y denuncias (PQRSD)
      </h3>
      <p><strong>¿Qué son PQRDS? </strong></p>
      <p>
        Instrumento de solicitud que tienen los ciudadanos colombianos para
        interactuar con entidades públicas y privadas. A continuación podrás
        leer sobre cada tipo de solicitud.
      </p>
    </section>
    <section class="items fp-padded-bottom">
      <article
        v-for="item in items"
        class="item"
      >
        <figure>
          <img
            :src="item.icon"
            alt=""
          />
        </figure>
        <h4>{{ item.title }}</h4>
        <p>{{ item.descripcion }}</p>
        <a
          :href="item.url"
          class="button button--secondary"
          >{{ item.cta }}</a
        >
      </article>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@use '@/sass/abstracts' as *;

.heading {
  display: flex;
  flex-flow: column nowrap;

  h3 {
    margin-bottom: 1.5rem;
  }
  p:first-of-type {
    margin-bottom: 0.5rem;
  }

  @include breakpoint-min('md') {
    max-width: 800px;
  }
}

.items {
  display: flex;
  flex-flow: column nowrap;
  gap: 4rem;

  @include breakpoint-min('md') {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
    column-gap: 2rem;
    row-gap: 4rem;
    align-items: baseline;
  }

  @include breakpoint-min('lg') {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
    align-items: baseline;
  }

  .item {
    display: flex;
    flex-flow: column nowrap;
    gap: 1.5rem;

    figure {
      width: 64px;
      padding: 1rem;
      border-radius: 50%;
      background-color: get-color('accent');
    }
  }
}
</style>
