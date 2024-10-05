<script setup>
import { onBeforeMount, ref } from 'vue';

const asociadosItems = ref([]);

const fetchAsociados = async () => {
  try {
    const response = await fetch(
      'https://j4hvvf8.localto.net/asociadostecnicos'
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching asociados data:', error);
  }
};

onBeforeMount(async () => {
  asociadosItems.value = await fetchAsociados();
});
</script>

<template>
  <main class="fp-grid asociados-tecnicos">
    <div class="asociados-tecnicos__heading">
      <h3>Asociados técnicos</h3>
      <router-link
        :to="{ name: 'inscripcion' }"
        class="button"
      >
        Ver todos los asociados
        <span class="material-symbols-outlined">arrow_forward</span>
      </router-link>
    </div>
    <ul class="asociados-list">
      <div v-for="item in asociadosItems">
        {{ item }}
      </div>
      <!-- <asociado-item
        v-for="item in asociadosItems"
        :item="item"
        class="asociado-item"
      /> -->
    </ul>
  </main>
</template>

<style lang="scss" scoped>
@use '@/sass/abstracts' as *;

.asociados-list {
  display: flex;
  flex-flow: column nowrap;
  place-items: center;
  gap: 2rem;
  grid-column: 1 / -1;
  width: 100%;

  @include breakpoint-min('sm') {
    flex-flow: row wrap;
    place-items: flex-start;
  }

  li {
    width: 100%;
    flex: 0 1 calc(50% - 1rem);

    @include breakpoint-min('md') {
      flex: 1 1 30%;
    }
  }
}

.asociados-tecnicos {
  display: flex;
  flex-flow: column nowrap;
  gap: 2rem;

  &__heading {
    grid-column: 1 / -1;
    display: flex;
    flex-flow: column nowrap;
    place-items: flex-start;
    gap: 1rem;
    margin-bottom: 2rem;

    h3 {
      font-size: 20px;
    }

    @include breakpoint-min('md') {
      flex-flow: row nowrap;
      place-content: space-between;
    }
  }

  .button {
    background-color: get-color('accent');
    color: get-color('primary');
    font-weight: 700;
    border: 1px solid get-color('accent');

    &:hover {
      text-decoration: none;
      background-color: darken(get-color('accent'), 10%);
    }
  }
}
</style>
