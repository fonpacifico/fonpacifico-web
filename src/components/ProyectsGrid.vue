<script setup>
import ProyectCard from '@/components/ProyectCard.vue';
import ImageCarousel from '@/globals/ImageCarousel.vue';

import { projectCards } from '@/content/homeView';

import { ref } from 'vue';

const modalElement = ref(null);
const modalContent = ref(null);

const openModal = (project) => {
  modalContent.value = project;
  modalElement.value.showModal();
};

const handleCloseModal = () => {
  modalContent.value = null;
};
</script>

<template>
  <section class="proyects-section fp-padded fp-dark">
    <div class="fp-container fp-grid">
      <slot name="heading" />

      <ul class="cards-container">
        <ProyectCard
          v-for="project in projectCards"
          :key="project.id"
          :project="project"
          @cardClick="openModal(project)"
        />
      </ul>
    </div>
    <dialog
      ref="modalElement"
      class="modal-element"
      @close="handleCloseModal"
    >
      <template v-if="modalContent">
        <div class="modal-element__wrapper">
          <div class="modal-element__header">
            <h2>{{ modalContent.name }}</h2>
            <button @click="modalElement.close()">close</button>
          </div>

          <div class="modal-element__carousel">
            <image-carousel :items="modalContent.images" />
          </div>

          <div class="modal-element__content">
            <article>
              <h3>Descripción</h3>
              <p>{{ modalContent.modalDescription }}</p>
            </article>
            <aside>
              <h4>Convenio interadministrativo</h4>
              <p>{{ modalContent.modalData.convenio }}</p>
            </aside>
            <aside>
              <h4>Año</h4>
              <p>{{ modalContent.modalData.fecha }}</p>
            </aside>
            <aside>
              <h4>Proyecto para</h4>
              <p>{{ modalContent.modalData.proposito }}</p>
            </aside>
          </div>
        </div>
      </template>
    </dialog>
  </section>
</template>

<style lang="scss">
@use '@/sass/abstracts' as *;

.cards-container {
  grid-column: 1 / -1;
  display: flex;
  row-gap: 3rem;
  flex-flow: column nowrap;
  padding-bottom: 5rem;

  @include breakpoint-min('md') {
    grid-column: 2 / -2;
    padding-bottom: 2rem;
  }

  @include breakpoint-min('lg') {
    grid-column: 1 / -1;
    display: grid;
    column-gap: var(--grid-gap);
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    padding-bottom: 0;

    & :nth-child(1) {
      grid-column: 1;
      grid-row: 1 / span 2;
    }

    & :nth-child(2) {
      grid-column: 1;
      grid-row: 3;
    }

    & :nth-child(3) {
      grid-column: 2;
      grid-row: 1;
    }

    & :nth-child(4) {
      grid-column: 2;
      grid-row: 2 / span 2;
    }
  }
}

.modal-element {
  margin: 3rem;
  height: 100%;
  width: 100%;
  max-width: calc(100% - 6rem);
  max-height: calc(100% - 6rem);
  border-radius: 1.5rem;
  padding: 3rem;

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.8);
  }

  &__wrapper {
    display: flex;
    flex-flow: column nowrap;
    gap: 1.5rem;
  }

  &__carousel {
    overflow: hidden;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    h2 {
      margin: 0;
      font-size: 2rem;
      font-weight: 700;
    }

    button {
      background-color: get-color('primary');
      color: get-color('white');
      border: none;
      padding: 1rem;
      border-radius: 1rem;
      font-size: 1.2rem;
      font-weight: 700;
    }
  }

  &__content {
    display: grid;
    grid-template-areas:
      'descripcion'
      'data1'
      'data2'
      'data3';

    @include breakpoint-min('md') {
      grid-template-columns: 2fr 1fr;
      grid-template-areas:
        'descripcion data1'
        'descripcion data2'
        'descripcion data3';
    }

    article {
      grid-area: descripcion;
    }

    aside:nth-child(1) {
      grid-area: data1;
    }

    aside:nth-child(2) {
      grid-area: data2;
    }

    aside:nth-child(3) {
      grid-area: data3;
    }
  }
}
</style>
