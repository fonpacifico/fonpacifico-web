<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const carouselTrackElement = ref();
const carouselItemCount = computed(() => props.items.length);
const selectedCarouselItem = ref(0);

const goTo = (index) => {
  if (index < props.items.length && index >= 0) {
    const scrollPosition = getCarouselItemWidth() * index;
    console.log(scrollPosition);

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
  console.log(carouselItemWidth);

  return carouselItemWidth;
};

onMounted(() => {});
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
  position: relative;

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
    &__arrows {
      width: 100%;
      display: flex;
      flex-direction: row;
      place-content: space-between;
      position: absolute;
      top: calc(50% - 1rem);
      padding: 0 0.5rem;
    }

    &__arrow {
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 50%;
      border: 2px solid get-color('primary');
      display: flex;
      place-content: center;
      background-color: get-color('white');

      @include breakpoint-min('md') {
        padding: 1rem;
      }

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
