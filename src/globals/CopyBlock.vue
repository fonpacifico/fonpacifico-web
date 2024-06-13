<script setup>
import { computed } from 'vue';

const props = defineProps({
  alignment: {
    type: String,
    default: 'left',
  },
  eyebrow: {
    type: Object,
    required: false,
  },
  heading: {
    type: String,
    required: true,
  },
  subHeading: {
    type: String,
    default: '',
  },
  ctas: {
    type: Array,
    default: () => [],
  },
});

const eyebrowClasses = computed(() => [
  'eyebrow',
  `eyebrow--${props.eyebrow.color}`,
  'copy-block__eyebrow',
]);
</script>

<template>
  <div
    class="copy-block"
    :class="{
      'copy-block--centered': alignment === 'centered',
    }"
  >
    <span
      v-if="eyebrow"
      :class="eyebrowClasses"
    >
      {{ eyebrow.text }}
    </span>
    <h2 class="copy-block__heading">{{ heading }}</h2>
    <p
      v-if="subHeading"
      class="copy-block__subheading"
    >
      {{ subHeading }}
    </p>
    <div
      v-if="ctas.length !== 0"
      class="copy-block__ctas"
    >
      <button
        class="button"
        :class="{
          'button--secondary': cta.type === 'secondary',
        }"
        v-for="cta in ctas"
        key="cta.text"
      >
        {{ cta.text }}
        <span
          v-if="cta.icon"
          class="material-symbols-outlined"
          >{{ cta.icon }}</span
        >
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../sass/abstracts/_mixins' as *;

.copy-block {
  grid-column: 1 / -1;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  text-align: center;
  place-items: center;

  &__ctas {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: fit-content;
  }

  @include breakpoint-min('sm') {
    grid-column: 2 / -2;
  }

  @include breakpoint-min('md') {
    &--centered {
      grid-column: 3 / -3;
      text-align: center;
      place-items: center;
    }
  }

  @include breakpoint-min('lg') {
    grid-column: 1 / span 5;
    text-align: left;
    place-items: flex-start;

    &__subheading {
      font-size: 1.215rem;
    }

    &--centered {
      grid-column: 3 / -3;
      text-align: center;
      place-items: center;
    }
  }
}
</style>
