<script setup>
import { ref, computed, onBeforeMount } from 'vue';

const ASOCIADOS_URL = 'https://j4hvvf8.localto.net/';

const asociados = ref([]);

const asociadosConAvatar = computed(() => {
  return asociados.value
    .filter((asociado) => asociado.avatar !== '')
    .map((asociado) => {
      asociado.avatarUrl = `${ASOCIADOS_URL}pdf/${asociado.avatar}`;
      return asociado;
    });
});

const getAsociados = async () => {
  const response = await fetch(ASOCIADOS_URL);
  let data = await response.json();

  data = data.map(makeObjectKeysLowercase);

  data.sort((a, b) => a.nombre.localeCompare(b.nombre));

  asociados.value = data;
};

onBeforeMount(async () => {
  getAsociados();
});
</script>

<template>
  <section class="fp-grid asociados-tecnicos">
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
      <li
        v-for="item in asociadosConAvatar"
        class="asociado"
      >
        <figure class="asociado__img">
          <img :src="item.avatarUrl" />
        </figure>
        <p class="asociado__name">{{ item.nombre }}</p>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
@use '@/sass/abstracts' as *;

.asociado {
  display: flex;
  align-items: center;
  gap: 1rem;
  place-self: baseline;

  &__img {
    width: 72px;
    height: 72px;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}

.asociados-list {
  display: grid;
  place-items: center;
  gap: 2rem;
  grid-template-columns: 1fr;
  width: 100%;

  @include breakpoint-min('md') {
    grid-template-columns: 1fr 1fr;
  }

  @include breakpoint-min('lg') {
    grid-template-columns: 1fr 1fr 1fr;
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
