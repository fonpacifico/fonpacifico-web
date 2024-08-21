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
  <section
    class="carousel-section fp-padded"
    v-fade-in
  >
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
          <img
            class="carousel__item-logo"
            :src="item.logo"
            alt=""
          />
          <p class="carousel__item-text">
            {{ item.text }}
          </p>
          <div class="carousel__item-user">
            <div class="carousel__item-user-data">
              <p class="carousel__item-user-name">
                <strong>{{ item.user.name }}</strong>
              </p>
              <p class="carousel__item-user-job">{{ item.user.position }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="fp-container carousel-controls">
      <nav class="carousel-controls__dots">
        <button
          class="carousel-controls__dot"
          :class="{
            'carousel-controls__dot--active': selectedCarouselItem === index,
          }"
          @click="goTo(index)"
          v-for="(_, index) in items"
          :key="index"
        ></button>
      </nav>
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
  </section>
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
    scroll-snap-align: left;
    border: 2px solid get-color('card-border');
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: center;
    padding: 2rem;
    border-radius: 1rem;

    @include breakpoint-min('md') {
      width: 600px;
    }

    &-logo {
      margin-bottom: 4rem;
    }

    &-text {
      margin-bottom: 2rem;
    }

    &-user {
      display: flex;
      place-items: center;
      gap: 1.5rem;

      &-avatar {
        border-radius: 50%;
      }
    }
  }

  &-controls {
    display: flex;
    flex-flow: row nowrap;
    place-content: space-between;
    place-items: center;
    width: 100%;

    &__dots {
      display: flex;
      flex-direction: row;
      gap: 0.6rem;
    }

    &__dot {
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      background-color: get-color('accent');
      cursor: pointer;

      &--active,
      &:focus,
      &:active {
        background-color: get-color('primary');
      }

      &:hover {
        background-color: get-color('lightgray');
      }
    }

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
