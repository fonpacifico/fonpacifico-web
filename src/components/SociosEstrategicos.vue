<script setup>
import SocioItem from './SocioItem.vue';
import AsociadoItem from './AsociadoItem.vue';
import AsociadosTecnicos from './AsociadosTecnicos.vue';

defineProps({
  sociositems: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section
    class="fp-container fp-padded-bottom socios-section"
    v-fade-in
  >
    <div class="fp-grid socios-main-heading">
      <slot name="heading" />
    </div>
    <div class="fp-grid">
      <h3 class="socios-heading">Socios adherentes</h3>
      <ul class="socios-list">
        <socio-item
          v-for="item in sociositems"
          :item="item"
          class="socio-item"
        />
      </ul>
    </div>
    <suspense>
      <asociados-tecnicos />
    </suspense>
  </section>
</template>

<style lang="scss" scoped>
@use '@/sass/abstracts' as *;

.socios-section {
  display: flex;
  flex-flow: column nowrap;
  gap: 4rem;
}

.socios-heading {
  grid-column: 1 / -1;
  text-align: left;
  margin-bottom: 2rem;
  font-size: 20px;

  @include breakpoint-min('md') {
    grid-column: 1 / span 5;
    text-align: left;
  }
}

.socios-list {
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
</style>
