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

const asociados = ref([]);
const layout = ref('grid');
const rows = ref(12);

const sortedAsociados = computed(() => {
  return asociados.value.sort((a, b) => a.nombre.localeCompare(b.nombre));
});

const fetchAsociadosTecnicos = async () => {
  try {
    const response = await fetch(
      'https://j4hvvf8.localto.net/asociadostecnicos'
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching asociados tecnicos data:', error);
  }
};

onBeforeMount(async () => {
  asociados.value = await fetchAsociadosTecnicos();
});
</script>

<template>
  <main>
    <section class="heading fp-container fp-padded--small">
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
    <section class="inscription-form fp-container fp-padded-bottom">
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
          href="#"
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
        :value="sortedAsociados"
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
    padding: 1.5rem;

    @include breakpoint-min('md') {
      grid-row: 1;
      grid-column: 1;
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
