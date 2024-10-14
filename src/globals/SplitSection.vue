<script setup>
import CopyBlock from '@/globals/CopyBlock.vue';

import { servicesCards } from '@/content/serviciosView';
</script>
<template>
  <section class="split-section fp-padded fp-grid">
    <slot name="heading" />
    <div class="split-section-cards fp-container">
      <article
        class="split-section-card"
        v-for="card in servicesCards"
        :key="card.logo"
      >
        <figure class="split-section-card__image">
          <img
            :src="card.image"
            alt=""
          />
        </figure>
        <div class="split-section-card__copy">
          <img
            class="split-section-card__logo"
            :src="card.logo"
            alt=""
          />
          <h3 class="split-section-card__copy-heading">{{ card.heading }}</h3>
          <p
            v-if="typeof card.body === 'string'"
            class="split-section-card__copy-body"
          >
            {{ card.body }}
          </p>
          <div
            v-else
            class="split-section-card__copy-body"
          >
            <p
              v-if="card.body.length"
              class="split-section-card__copy-body-item"
            >
              {{ card.body[0] }}
            </p>
            <p
              v-if="card.body.length > 1"
              class="split-section-card__copy-body-item"
            >
              {{ card.body[1] }}
            </p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
<style lang="scss">
@use '@/sass/abstracts' as *;

.split-section {
  background-color: get-color('primary-dark');

  &-cards {
    grid-column: 1 / -1;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @include breakpoint-min('md') {
      gap: 4rem;
    }
  }

  &-card {
    background-color: white;
    display: flex;
    flex-flow: column nowrap;
    gap: 0;
    border-radius: 2rem;
    overflow: hidden;

    @include breakpoint-min('md') {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;

      &:nth-child(even) {
        .split-section-card__copy {
          grid-row: 1;
          grid-column: 1;

          margin: 2rem 0 2rem 2rem;
        }

        .split-section-card__image {
          grid-column: 2;
        }
      }
    }

    &__image {
      width: 100%;
      border-radius: 2rem;

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        aspect-ratio: 16/9;

        @include breakpoint-min('md') {
          aspect-ratio: unset;
        }
      }
    }

    &__logo {
      padding: 1rem;
      border-radius: 50%;
      background-color: get-color('accent');
    }

    &__copy {
      display: flex;
      flex-flow: column nowrap;
      place-content: center;
      place-items: flex-start;
      margin: -2rem 2rem 2rem 2rem;
      gap: 1.5rem;

      @include breakpoint-min('md') {
        margin: 2rem 2rem 2rem 0;
      }
    }
  }
}
</style>
