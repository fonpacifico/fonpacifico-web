<script setup>
import CopyBlock from '@/globals/CopyBlock.vue';
</script>

<template>
  <section class="heading fp-container fp-padded">
    <h3>Sé parte de nuestro equipo de asociados técnicos</h3>
    <p>
      ¡Únete a nosotros en el desarrollo nacional, integral e inclusivo de
      nuestro país!
    </p>
  </section>
</template>

<style lang="scss" scoped>
@use '@/sass/abstracts' as *;

.heading {
  display: flex;
  flex-flow: column nowrap;
  gap: 2rem;

  @include breakpoint-min('md') {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    h1 {
      grid-column: 1;
    }

    p {
      grid-column: 2;
    }
  }
}
</style>
