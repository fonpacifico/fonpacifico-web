<script setup>
import CopyBlock from '@/globals/CopyBlock.vue';
import {
  inscripcionPersonasNaturales,
  inscripcionPersonasJuridicas,
} from '@/content/inscripcion';
import { ref } from 'vue';

const showAccordion = ref(false);
const showAccordion2 = ref(false);
</script>

<template>
  <section class="heading fp-container fp-padded">
    <h3>Sé parte de nuestro equipo de asociados técnicos</h3>
    <p>
      ¡Únete a nosotros en el desarrollo nacional, integral e inclusivo de
      nuestro país!
    </p>
  </section>
  <main>
    <section class="requirements fp-container">
      <div class="requirements__heading">
        <h4>Requerimientos</h4>
        <p>
          Para inscribirse como asociado técnico de Fonpacífico necesitarás:
        </p>
      </div>
      <div class="requirements__accordion">
        <details>
          <summary class="accordion__button">
            <span>1. Personas naturales</span>
            <span class="material-symbols-outlined">expand_more</span>
          </summary>
          <ol class="accordion__content">
            <li v-for="item in inscripcionPersonasNaturales">{{ item }}</li>
          </ol>
        </details>
        <details>
          <summary class="accordion__button">
            <span>2. Personas juridicas</span>
            <span class="material-symbols-outlined">expand_more</span>
          </summary>
          <ol class="accordion__content">
            <li v-for="item in inscripcionPersonasJuridicas">{{ item }}</li>
          </ol>
        </details>
      </div>
    </section>
    <section class="inscription-form fp-container fp-padded-bottom">
      <figure>
        <img
          src="/imagenes_inscripciones/inscripcion-form.jpeg"
          alt=""
        />
      </figure>
      <div class="inscription-form__copy">
        <h2>¡Inscríbete ahora!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
        <a
          href="#"
          class="button"
          >Ir al formulario de inscripción</a
        >
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@use '@/sass/abstracts' as *;

.rotate {
  transform: rotate(180deg);
}

.requirements {
  padding-bottom: 4rem;

  &__heading {
    display: flex;
    flex-flow: column nowrap;
    gap: 1.5rem;
  }

  &__accordion {
    display: flex;
    flex-flow: column nowrap;
    gap: 1.5rem;

    @include breakpoint-min('md') {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
}

.accordion {
  position: relative;

  &__button {
    flex: 1;
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    font-weight: 700;
    font-size: 18px;
  }

  &__content {
    list-style: auto;
    padding-left: 1.2rem;

    li {
      font-size: 1rem;
      color: rgba($color: #000000, $alpha: 0.7);
    }
  }
}

.inscription-form {
  display: flex;
  flex-flow: column nowrap;
  gap: 1.5rem;

  @include breakpoint-min('md') {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
  }

  figure {
    border-radius: 2rem 2rem 0 0;
    overflow: hidden;

    @include breakpoint-min('md') {
      border-radius: 0 2rem 2rem 0;
      grid-row: 1;
      grid-column: 2;
    }

    img {
      object-fit: cover;
    }
  }

  &__copy {
    display: flex;
    flex-flow: column nowrap;
    gap: 1.5rem;
    padding: 1.5rem;

    @include breakpoint-min('md') {
      grid-row: 1;
      grid-column: 1;
    }
  }
}
</style>
