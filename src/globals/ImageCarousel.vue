<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const carouselTrackElement = ref();
const containerElement = ref();
const carouselItemCount = computed(() => props.items.length);
const selectedCarouselItem = ref(0);

let resizeTimeout;
let scrollTimeout;
let mediaQuery;

const goTo = (index) => {
  if (index < props.items.length && index >= 0) {
    const scrollPosition = getCarouselItemWidth() * index;

    selectedCarouselItem.value = index;
    carouselTrackElement.value.parentElement.scrollLeft = scrollPosition;
  }
};

const goToNext = () => {
  if (selectedCarouselItem.value < carouselItemCount.value - 1) {
    goTo(selectedCarouselItem.value + 1);
  }
};

const goToPrevious = () => {
  if (selectedCarouselItem.value > 0) {
    goTo(selectedCarouselItem.value - 1);
  }
};

const getCarouselItemWidth = () => {
  const carouselItemWidth = carouselTrackElement.value.children[0].clientWidth;

  return carouselItemWidth;
};

onMounted(() => {
  mediaQuery = matchMedia('(min-width: 768px)');
});
</script>
<template>
  <div class="carousel">
    <ul
      class="carousel__track"
      ref="carouselTrackElement"
    >
      <li
        class="carousel__item"
        v-for="(item, index) in items"
        :key="index"
      >
        <img
          :src="item.image"
          alt=""
        />
      </li>
    </ul>
  </div>
  <div class="carousel-controls">
    <div class="carousel-controls__arrows">
      <button
        class="carousel-controls__arrow carousel-controls__arrow-left"
        @click="goToPrevious"
      >
        <span class="material-symbols-outlined">arrow_back</span>
      </button>
      <button
        class="carousel-controls__arrow carousel-controls__arrow-right"
        @click="goToNext"
      >
        <span class="material-symbols-outlined">arrow_forward</span>
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use '@/sass/abstracts' as *;
@use 'sass:map';

.carousel-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}

.carousel {
  scroll-behavior: smooth;
  width: 100vw;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &__track {
    display: flex;
    flex-flow: row nowrap;
    width: max-content;
  }

  &__item {
    width: calc(100svw - 12rem);
    aspect-ratio: 2.3;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &-controls {
    display: flex;
    flex-flow: row nowrap;
    place-content: space-between;
    place-items: center;
    width: 100%;

    &__arrows {
      display: flex;
      flex-direction: row;
      gap: 1rem;
    }

    &__arrow {
      cursor: pointer;
      padding: 1rem;
      border-radius: 50%;
      border: 2px solid get-color('primary');
      display: flex;
      place-content: center;
      background-color: get-color('white');

      span {
        color: get-color('primary');
        font-size: 1.5rem;
      }

      &:hover,
      &:focus {
        background-color: get-color('lightgray');
      }
    }
  }
}
</style>
