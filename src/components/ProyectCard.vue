<script setup>
import { computed } from 'vue';

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['cardClick']);

const classes = computed(() => ({
  card: true,
  [`card-${props.project.style}`]: true,
}));

const croppedText = computed(() => {
  const text = props.project.description;
  const maxLength = 60;

  if (text.length > maxLength) {
    return `${text.substring(0, maxLength)}...`;
  }

  return text;
});
</script>

<template>
  <li v-fade-in>
    <div :class="classes">
      <div class="card__image">
        <img
          :src="project.image"
          alt=""
        />
      </div>
      <div class="card__text">
        <h4>{{ project.name }}</h4>
        <p>{{ project.description }}</p>
        <button @click="emit('cardClick')">
          Ver más
          <span class="material-symbols-outlined">arrow_forward</span>
        </button>
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
  flex-flow: column nowrap;
  place-items: center;
  place-content: center;
  width: 100%;
  border-radius: 1rem;
  position: relative;
  height: 100%;

  @include breakpoint-min('lg') {
    place-content: flex-start;
  }

  &-large {
    .card__text {
      padding: 1.5rem;
    }

    @include breakpoint-min('lg') {
      flex-flow: column-reverse nowrap;
    }
  }

  &-small {
    .card__text {
      padding: 1.5rem 1rem;
      flex: 1 0 50%;

      @include breakpoint-min('lg') {
        button {
          margin-top: 1.5rem;
        }
      }
    }

    @include breakpoint-min('lg') {
      flex-flow: row nowrap;
    }
  }

  &__text {
    text-align: left;

    h4 {
      margin-bottom: 1rem;
    }

    p {
      font-size: 1rem;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      // block-overflow: ellipsis;
      overflow: hidden;
    }

    button {
      cursor: pointer;
      background-color: transparent;
      display: flex;
      place-items: center;
      place-content: flex-start;
      gap: 0.5rem;
      font-weight: 700;
      font-size: 1rem;
      color: get-color('primary');
      text-decoration: none;
      padding: 0.5rem 1rem 0.5rem 0;
      border-radius: 1rem;
      transition: background-color 0.2s ease-in-out;
      margin-top: 2rem;

      span {
        transition: transform 0.15s ease-in-out;
      }

      &:hover,
      &:focus {
        span {
          transform: translateX(0.25rem);
        }
      }
    }
  }

  &__image {
    height: 100%;
    width: 100%;
    flex: 1 0 50%;

    @include breakpoint-min('md') {
      // max-height: 400px;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}
</style>
