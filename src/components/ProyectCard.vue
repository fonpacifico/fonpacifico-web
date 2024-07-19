<script setup>
import { computed } from 'vue';

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const classes = computed(() => ({
  card: true,
  [`card-${props.project.style}`]: true,
}));
</script>

<template>
  <li>
    <div :class="classes">
      <div class="card__text">
        <h3>{{ project.name }}</h3>
        <p>{{ project.description }}</p>
        <a
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver mas
          <span class="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>
      <div class="card__image">
        <img
          :src="project.image"
          alt=""
        />
      </div>
    </div>
  </li>
</template>

<style lang="scss">
@use '@/sass/abstracts' as *;

.card {
  background-color: get-color('white');
  overflow: hidden;
  color: black;
  display: flex;
  flex-flow: column-reverse nowrap;
  place-items: center;
  place-content: center;
  width: 100%;
  border-radius: 1rem;
  position: relative;
  height: 100%;

  &-large {
    flex-flow: column nowrap;

    .card__text {
      padding: 3rem;
    }
  }

  &-small {
    flex-flow: column-reverse nowrap;

    .card__text {
      padding: 1.5rem;
    }

    @include breakpoint-min('lg') {
      flex-flow: row nowrap;

      .card__text {
        padding: 3rem;
      }
    }
  }

  &__text {
    text-align: center;

    h3 {
      margin-bottom: 1rem;
    }

    p {
      margin-bottom: 2rem;
    }

    a {
      display: flex;
      place-items: center;
      place-content: flex-start;
      gap: 1rem;
      font-weight: 700;
      font-size: 1.2rem;
      color: get-color('primary');
      text-decoration: none;
    }

    @include breakpoint-min('md') {
      text-align: left;
    }
  }

  &__image {
    height: 100%;
    width: 100%;
    flex: 1 0 50%;

    img {
      max-width: 100%;
      max-height: 100%;
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: left;
    }
  }
}
</style>
