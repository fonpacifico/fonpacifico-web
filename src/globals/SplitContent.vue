<script setup>
import SplitListContent from '@/globals/SplitListContent.vue';
import { splitListContent } from '@/content/nosotrosView';
</script>
<template>
  <div class="split-copy-background fp-padded">
    <div class="split-copy fp-container">
      <div class="split-copy__left">
        <slot name="left" />
      </div>
      <div class="split-copy__right">
        <slot name="right" />
      </div>
    </div>
    <split-list-content
      :list-content="splitListContent.listContent"
      :img="splitListContent.img.src"
    />
  </div>
</template>

<style lang="scss">
@use '../sass/abstracts' as *;

.split-copy-background {
  background-color: get-color('primary-dark');
  display: flex;
  flex-flow: column nowrap;
  place-items: center;
  place-content: center;
  gap: 4rem;

  @include breakpoint-min('md') {
    gap: 8rem;
  }
}

.split-copy {
  display: flex;
  flex-flow: column nowrap;
  border-radius: 2rem;
  overflow: hidden;
  background-color: white;
  padding-inline: 0;

  @include breakpoint-min('md') {
    flex-flow: row nowrap;
  }

  &__left {
    img {
      flex: 0 1 50%;
      object-fit: cover;
      height: 100%;
      width: 100%;

      @include breakpoint-min('md') {
        width: 100%;
      }
    }
  }

  &__right {
    flex: 0 1 50%;
    padding: 2rem;
    display: grid;
    place-content: center;

    p {
      text-align: left;
    }

    @include breakpoint-min('md') {
      padding-inline: 2rem;
      gap: 2rem;
    }
  }
}
</style>
