<script setup>
import NewsLetter from '@/components/NewsLetter.vue';
import GlobalAccordion from '@/globals/GlobalAccordion.vue';
import { items } from '@/content/transparencia';
</script>

<template>
  <main>
    <div class="transparencia fp-padded fp-container">
      <div class="transparencia__heading">
        <h1>Comprometidos con la transparencia</h1>
        <p>
          Fonpacífico al ser una empresa público-privada, comparte todos los
          documentos necesarios de manera responsable para que estén disponibles
          para visualización pública.
        </p>
        <a
          href="#"
          class="button"
          >Quiero más información</a
        >
      </div>
      <div class="transparencia__accordion">
        <global-accordion
          v-for="item in items"
          :title="item.title"
          :items="item.items"
          :ordered="false"
        />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use '@/sass/abstracts' as *;

.transparencia {
  display: flex;
  flex-flow: column nowrap;
  gap: 2rem;

  @include breakpoint-min('md') {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  &__heading {
    display: flex;
    flex-flow: column nowrap;
    gap: 1.5rem;
  }

  // &__accordion {
  //   details {
  //     border-top: 2px solid get-color('card-border');
  //     padding: 1.5rem 0;

  //     summary {
  //       display: flex;
  //       flex-flow: row nowrap;
  //       gap: 1rem;
  //       align-items: center;
  //       place-content: space-between;
  //       cursor: pointer;

  //       span {
  //         font-size: 18px;
  //         font-weight: 700;
  //       }

  //       span:last-of-type {
  //         transition: transform 0.2 s ease-in-out;
  //       }
  //     }
  //   }

  // details[open] {
  //   summary {
  //     span:last-of-type {
  //       transform: rotate(180deg);
  //     }
  //   }
  // }
  // }
}
</style>
