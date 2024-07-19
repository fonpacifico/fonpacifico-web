<script setup>
defineProps({
  items: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section class="fp-container fp-grid statistics-section fp-padded-bottom">
    <slot name="heading" />
    <div class="statistics-section-wrapper">
      <div
        class="statistics-section-block"
        v-for="item in items"
      >
        <h3 class="statistics-section-block-header">{{ item.heading }}</h3>
        <p class="statistics-section-block-text">{{ item.text }}</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use '../sass/abstracts' as *;

.statistics-section {
  row-gap: 4rem;

  &-wrapper {
    grid-column: 1/-1;
    grid-row: 2;
    display: flex;
    flex-flow: row wrap;
    gap: 2rem;
    place-content: space-between;
  }

  &-block {
    flex: 1 0 100%;
    display: flex;
    flex-flow: column nowrap;
    gap: 1rem;

    &-header {
      font-size: 56px;
      font-weight: 700;
      line-height: 67px;
      color: get-color('primary');
    }

    &-text {
      font-weight: 700;
      font-size: 18px;
    }

    @include breakpoint-min('md') {
      flex: 1 0 calc(50% - 2rem);
    }

    @include breakpoint-min('lg') {
      flex: 1 0 calc(25% - 2rem);
    }
  }
}
</style>
