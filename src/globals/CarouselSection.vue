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
const carouselTrackGap = ref(0);

let resizeTimeout;
let scrollTimeout;
let mediaQuery;

const goTo = (index) => {
  if (index < props.items.length && index >= 0) {
    const scrollPosition =
      (getCarouselItemWidth() + carouselTrackGap.value) * index;

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

const onBreakpointChange = () => {
  carouselTrackGap.value = Number.parseInt(
    getComputedStyle(carouselTrackElement.value).gap
  );
};

const onResize = () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    const padding = containerElement.value.clientWidth - getCarouselItemWidth();
    carouselTrackElement.value.style.paddingRight = `${padding}px`;
  }, 200);
};

const onScroll = () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    const scrollableWidth =
      (getCarouselItemWidth() + carouselTrackGap.value) *
        (carouselItemCount.value - 1) -
      carouselTrackGap.value;
    const scrollPosition = carouselTrackElement.value.parentElement.scrollLeft;
    const index =
      (Math.min(scrollPosition, scrollableWidth) / scrollableWidth) *
      (carouselItemCount.value - 1);

    selectedCarouselItem.value = Math.floor(index);
  }, 200);
};

onMounted(() => {
  onBreakpointChange();
  mediaQuery = matchMedia('(min-width: 768px)');
  mediaQuery.addEventListener('change', onBreakpointChange);
  onResize();
  window.addEventListener('resize', onResize);

  if (carouselTrackElement.value?.parentElement) {
    carouselTrackElement.value.parentElement.addEventListener(
      'scroll',
      onScroll
    );
  }
});

onUnmounted(() => {
  window.removeEventListener('resize', onResize);
  mediaQuery.removeEventListener('change', onBreakpointChange);

  if (carouselTrackElement.value?.parentElement) {
    carouselTrackElement.value.parentElement.removeEventListener(
      'scroll',
      onScroll
    );
  }
});
</script>
<template>
  <section class="carousel-section fp-padded">
    <div
      class="fp-container fp-grid"
      ref="containerElement"
      style="width: 100%"
    >
      <slot name="heading" />
    </div>
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
          {{ item.text }}
        </li>
      </ul>
    </div>
    <div class="fp-container carousel-controls">
      <div class="container-dots">
        <nav>
          <ul>
            <li>
              <button
                @click="goTo(index)"
                v-for="(_, index) in items"
                :key="index"
              >
                {{ index + 1 }}
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div class="container-arrows">
        <button @click="goToPrevious">Left</button>
        <button @click="goToNext">Right</button>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@use '@/sass/abstracts/variables' as *;
@use '@/sass/abstracts/mixins' as *;
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
  padding: 0 1rem;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: map.get($breakpoints, 'xlg')) {
    padding: 0 calc((100vw - 1440px + 6rem) / 2);
  }

  &__track {
    display: flex;
    flex-flow: row nowrap;
    gap: 1rem;
    width: max-content;

    @include breakpoint-min('md') {
      gap: 2rem;
    }
  }

  &__item {
    width: 70vw;
    height: 200px;
    scroll-snap-align: left;
    background-color: red;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @include breakpoint-min('md') {
      width: 600px;
    }
  }
}
</style>
