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
    type: [String, Array],
    default: '',
  },
  ctas: {
    type: Array,
    default: () => [],
  },
  customClass: {
    type: String,
    default: '',
  },
  light: {
    type: Boolean,
    default: false,
  },
});

const eyebrowClasses = computed(() => [
  'eyebrow',
  `eyebrow--${props.eyebrow.color}`,
  'copy-block__eyebrow',
]);

const classes = computed(() => [
  'copy-block',
  { [`copy-block--${props.alignment}`]: props.alignment },
]);
</script>

<template>
  <div
    :class="[{ [customClass]: customClass }, classes]"
    :style="{ color: light ? 'white' : 'currentColor' }"
  >
    <span
      v-if="eyebrow"
      :class="eyebrowClasses"
    >
      {{ eyebrow.text }}
    </span>
    <h2 class="copy-block__heading">{{ heading }}</h2>
    <p
      v-if="subHeading && typeof subHeading === 'string'"
      class="copy-block__subheading"
    >
      {{ subHeading }}
    </p>
    <div v-else-if="subHeading && typeof subHeading !== 'string'">
      <p
        v-for="line in subHeading"
        class="copy-block__subheading"
        :key="line"
      >
        {{ line }}
      </p>
    </div>
    <div
      v-if="ctas.length !== 0"
      class="copy-block__ctas"
    >
      <span v-for="cta in ctas">
        <a
          :class="{
            button: true,
            'button--secondary': cta.type === 'secondary',
            'button--secondary-outlined': cta.type === 'secondary-outlined',
          }"
          v-if="cta.target === 'blank'"
          :href="cta.url"
          target="_blank"
          rel="noopener noreferrer"
          href=""
        >
          {{ cta.text }}
          <span
            v-if="cta.icon"
            class="material-symbols-outlined"
            >{{ cta.icon }}</span
          >
        </a>
        <router-link
          v-else
          key="cta.text"
          :to="{ name: cta.url }"
          :class="{
            button: true,
            'button--secondary': cta.type === 'secondary',
            'button--secondary-outlined': cta.type === 'secondary-outlined',
          }"
        >
          {{ cta.text }}
          <span
            v-if="cta.icon"
            class="material-symbols-outlined"
            >{{ cta.icon }}</span
          >
        </router-link>
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/sass/abstracts' as *;

.copy-block {
  grid-column: 1 / -1;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  text-align: left;
  place-items: flex-start;

  &__ctas {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: fit-content;
  }

  &__subheading {
    font-size: 18px;
    font-weight: 400;
    grid-column: 1 / -1;
    color: inherit;
    opacity: 0.7;

    & + p {
      margin-top: 1rem;
    }
  }

  @include breakpoint-min('sm') {
    grid-column: 2 / -2;
  }

  @include breakpoint-min('md') {
    &--centered {
      grid-column: 2 / -2;
      text-align: center;
      place-items: center;
    }
  }

  @include breakpoint-min('lg') {
    grid-column: 1 / span 6;
    text-align: left;
    place-items: flex-start;
  }

  &--centered {
    grid-column: 1 / -1;
    text-align: center;
    place-items: center;

    @include breakpoint-min('lg') {
      grid-column: 3 / -3;
      text-align: center;
      place-items: center;
    }
  }
}
</style>
