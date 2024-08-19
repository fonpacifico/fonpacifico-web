<script setup>
import { programs } from '@/content/programasYCursosView.js';
</script>

<template>
  <figure class="hero__image">
    <img
      src="/hero-programas-y-cursos.jpeg"
      alt=""
    />
  </figure>
  <section class="heading fp-container fp-padded">
    <h1>Programas y cursos</h1>
    <p>
      En Fonpacífico nos esforzamos por devolverle a la comunidad tanto como sea
      posible. Para lo cual, hemos creado varios programas y cursos con el
      objetivo de fortalecer la calidad de vida colombiana.
    </p>
  </section>
  <section class="programs fp-container fp-padded-bottom">
    <article
      v-for="program in programs"
      class="program"
    >
      <figure class="program-image">
        <img
          :src="program.imgRoute"
          alt=""
        />
      </figure>
      <div class="program-copy">
        <h3>{{ program.title }}</h3>
        <p v-if="program.body.length === 1">
          {{ program.body[0] }}
        </p>
        <p
          v-else-if="program.body.length > 1"
          v-for="paragraph in program.body"
          :key="paragraph"
        >
          {{ paragraph }}
        </p>
        <div class="program-buttons">
          <a
            class="program-button button button--secondary"
            v-for="link in program.ctas"
            :key="link.text"
            :href="link.link"
          >
            <span v-if="link.icon">
              <img
                :src="link.icon"
                alt=""
              />
            </span>
            {{ link.text }}
          </a>
        </div>
      </div>
    </article>
  </section>
</template>

<style lang="scss" scoped>
@use '@/sass/abstracts' as *;

.hero {
  &__image {
    width: 100%;
    border-radius: 2rem;

    @include breakpoint-min('md') {
      aspect-ratio: 2.4 / 1;
      max-height: 600px;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}

.heading {
  display: flex;
  flex-flow: column nowrap;
  gap: 2rem;

  @include breakpoint-min('md') {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    h1 {
      grid-column: 1;
    }

    p {
      grid-column: 2;
    }
  }
}

.programs {
  display: flex;
  flex-flow: column nowrap;
  gap: 4rem;

  @include breakpoint-min('md') {
    gap: 8rem;
  }

  .program {
    display: flex;
    flex-flow: column nowrap;
    place-items: center;
    gap: 2rem;

    @include breakpoint-min('md') {
      display: grid;
      grid-template-columns: 1fr 1fr;
      row-gap: 8rem;
    }

    &-image {
      width: 100%;
      border-radius: 2rem;

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        aspect-ratio: 44 / 25;

        @include breakpoint-min('md') {
          aspect-ratio: unset;
        }
      }
    }

    &-copy {
      grid-column: 2;
      display: flex;
      flex-flow: column nowrap;
      gap: 1rem;

      @include breakpoint-min('md') {
        gap: 1.5rem;
      }
    }

    &-buttons {
      display: flex;
      flex-flow: row wrap;
      gap: 1rem;
    }
  }
}
</style>
