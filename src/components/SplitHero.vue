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
    class="split-hero fp-container fp-grid fp-padded-bottom"
    :class="{ 'split-hero--reverse': reverse }"
  >
    <div class="split-hero__heading">
      <copy-block
        :heading="heading"
        :sub-heading="subHeading"
      />
    </div>
    <img
      class="split-hero__image"
      :src="imgUrl"
      alt="nosotros hero image"
    />
  </div>
</template>

<style lang="scss" scoped>
@use '../sass/abstracts' as *;

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
    place-items: center;
    padding: 2rem 2rem 0;

    @include breakpoint-min('md') {
      padding: 0 4rem;
    }
  }

  &__image {
    order: 1;
    margin: 0 -32px;
    max-height: 380px;
    object-fit: cover;

    @include breakpoint-min('md') {
      max-height: unset;
      order: 2;
      max-width: 50%;
    }
  }

  &--reverse {
    & .split-hero__image {
      @include breakpoint-min('md') {
        order: 1;
        margin: 0 -32px;
      }
    }
  }
}
</style>
