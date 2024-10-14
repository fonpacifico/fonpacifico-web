<script setup>
import { useAsociados } from '@/store';

const store = useAsociados();
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
      <div
        v-for="item in store.asociadosConAvatar"
        class="asociado"
      >
        <figure class="asociado__img">
          <img :src="item.avatarUrl" />
        </figure>
        <p class="asociado__name">{{ item.nombre }}</p>
      </div>
    </ul>
  </main>
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
  grid-template-columns: 1fr 1fr;
  width: 100%;

  @include breakpoint-min('md') {
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
