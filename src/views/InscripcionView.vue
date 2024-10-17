<script setup>
import CopyBlock from '@/globals/CopyBlock.vue';
import GlobalAccordion from '@/globals/GlobalAccordion.vue';
import DataView from 'primevue/dataview';
import {
  inscripcionPersonasNaturales,
  inscripcionPersonasJuridicas,
} from '@/content/inscripcion';
import { ref, computed, onBeforeMount, onUnmounted, onMounted } from 'vue';
import { items } from '@/content/transparencia';
import { useAsociados } from '@/store';

const layout = ref('grid');
const rows = ref(12);
const store = useAsociados();
</script>

<template>
  <main>
    <section class="inscripcion__heading fp-container fp-padded--small">
      <h3>Sé parte de nuestro equipo de asociados técnicos</h3>
      <p>
        ¡Únete a nosotros en el desarrollo nacional, integral e inclusivo de
        nuestro país!
      </p>
    </section>
    <section class="requirements fp-container">
      <div class="requirements__heading">
        <h4>Requerimientos</h4>
        <p>
          Para inscribirse como asociado técnico de Fonpacífico necesitarás:
        </p>
      </div>
      <div class="requirements__accordion">
        <global-accordion
          title="1. Personas naturales"
          :items="inscripcionPersonasNaturales"
        />
        <global-accordion
          title="2. Personas jurídicas"
          :items="inscripcionPersonasJuridicas"
        />
      </div>
    </section>
    <section class="inscription-form fp-container">
      <figure>
        <img
          src="/imagenes_inscripciones/inscripcion-form.jpeg"
          alt="Formulario de inscripción"
        />
      </figure>
      <div class="inscription-form__copy">
        <h2>¡Inscríbete ahora!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
        <a
          href="https://tyc43hr.localto.net/"
          class="button"
          target="_blank"
          >Ir al formulario de inscripción</a
        >
      </div>
    </section>
    <section class="asociados-grid fp-container">
      <data-view
        data-key="id"
        layout="list"
        :value="store.asociados"
        :rows="rows"
        paginator
      >
        <template #list="{ items }">
          <div class="asociados-grid-wrapper">
            <article
              v-for="(item, index) in items"
              key="index"
            >
              <span class="asociados-grid-wrapper__icon">
                {{ item.nombre.slice(0, 1) }}</span
              >
              <p>{{ item.nombre }}</p>
            </article>
          </div>
        </template>
        <template #footer> </template>
      </data-view>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@use '@/sass/abstracts' as *;

.inscripcion__heading {
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
}

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

.inscription-form {
  display: flex;
  flex-flow: column nowrap;
  gap: 1.5rem;
  border: 2px solid get-color('card-border');
  margin-bottom: 4rem;
  border-radius: 2rem;
  padding: 0 0 1.5rem;

  @include breakpoint-min('md') {
    display: grid;
    padding: 0;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    padding-right: 0;
    overflow: hidden;
    margin-bottom: 8rem;
  }

  figure {
    border-radius: 2rem 2rem 0 0;
    overflow: hidden;
    height: 100%;

    @include breakpoint-min('md') {
      grid-row: 1;
      grid-column: 2;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  &__copy {
    display: flex;
    flex-flow: column nowrap;
    gap: 1.5rem;
    padding: 0 1.5rem 0;

    @include breakpoint-min('md') {
      grid-row: 1;
      grid-column: 1;
      padding-block: 4rem;
    }
  }
}

.asociados-grid-wrapper {
  border: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @include breakpoint-min('md') {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  article {
    display: grid;
    grid-template-columns: 48px 1fr 1fr 1fr 1fr;
    gap: 1.5rem;
    align-items: center;
    place-content: center;

    p {
      grid-column: 2 / -1;
    }
  }

  &__icon {
    display: flex;
    place-content: center;
    place-items: center;
    width: 48px !important;
    height: 48px !important;
    background-color: #ebebeb;
  }
}

details {
  summary {
    cursor: pointer;
    span:last-of-type {
      cursor: pointer;
    }
  }
}

details[open] {
  summary {
    span:last-of-type {
      transform: rotate(180deg);
    }
  }
}
</style>
