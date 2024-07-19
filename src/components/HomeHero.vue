<script setup></script>
<template>
  <div class="home-hero__wrapper">
    <section class="fp-padded-top--small home-hero">
      <div class="fp-container fp-grid">
        <slot name="heading" />
      </div>
      <div class="fp-container home-hero__video-wrapper">
        <img
          src=""
          alt=""
        />
        <iframe
          class="home-hero__video"
          allow="autoplay"
          frameBorder="0"
          src="https://www.youtube.com/embed/EColTNIbOko?autoplay=1&mute=1&controls=0&loop=1&playsinline=1"
        >
        </iframe>
      </div>
    </section>
    <div class="home-hero-spacer"></div>
  </div>
</template>

<style lang="scss" scoped>
@use '../sass/abstracts' as *;

.home-hero {
  background-image: url('/home-hero-background.png');
  background-size: cover;
  color: white;
  display: flex;
  flex-flow: column nowrap;
  gap: 2rem;

  @include breakpoint-min('md') {
    gap: 4rem;
  }

  &__wrapper {
    display: flex;
    flex-flow: column nowrap;
  }

  &-spacer {
    height: 4rem;

    @include breakpoint-min('md') {
      height: 10rem;
    }
  }

  &__video-wrapper {
    overflow: hidden;
    position: relative;
    max-width: 1156px;
    aspect-ratio: 16/9;
    border-radius: 2rem;
    margin-bottom: -4rem;

    @include breakpoint-min('md') {
      margin-bottom: -10rem;
    }
  }

  &__video {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
}
</style>
