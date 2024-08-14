<script setup></script>
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
  </div>
</template>

<style lang="scss">
@use '../sass/abstracts' as *;

.split-copy-background {
  background-color: get-color('primary-dark');
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
