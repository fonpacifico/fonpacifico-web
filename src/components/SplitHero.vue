<script setup>
import CopyBlock from '@/globals/CopyBlock.vue';

defineProps({
  reverse: {
    type: Boolean,
    default: false,
  },
  imgUrl: {
    type: String,
    default: '',
  },
  heading: {
    type: String,
    default: '',
  },
  subHeading: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <div
    class="split-hero fp-container fp-grid"
    :class="{ 'split-hero--reverse': reverse }"
  >
    <div class="split-hero__heading">
      <copy-block
        :heading="heading"
        :sub-heading="subHeading"
      />
    </div>
    <div class="split-hero__image-wrapper">
      <img
        class="split-hero__image"
        :src="imgUrl"
        alt="nosotros hero image"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/sass/abstracts' as *;

.split-hero {
  display: flex;
  flex-flow: column nowrap;
  gap: 2rem;

  @include breakpoint-min('md') {
    flex-flow: row nowrap;
  }

  &__heading {
    order: 2;
    display: grid;
    gap: 1.5rem;
    place-items: center;
    padding: 2rem 0 6rem;

    @include breakpoint-min('md') {
      // padding: 0 2rem;
    }
  }

  &__image-wrapper {
    display: flex;
    place-content: flex-start;
    order: 1;
    margin: 0 -32px;
    width: calc(100% + 64px);
    max-height: 380px;
    object-fit: cover;
    overflow: hidden;

    @include breakpoint-min('md') {
      margin: 0;
      overflow: visible;
      max-height: unset;
      max-width: calc(50vw - 2rem);
      order: 2;
      width: 50%;
    }

    img {
      object-fit: cover;
      min-width: 100%;

      @include breakpoint-min('md') {
        min-width: 50vw;
        max-height: calc(100svh - 64px);
      }
    }
  }

  &--reverse {
    & .split-hero__image-wrapper {
      place-content: flex-end;

      @include breakpoint-min('md') {
        order: 1;
      }
    }
  }
}
</style>
