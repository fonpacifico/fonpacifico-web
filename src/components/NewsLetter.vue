<template>
  <section
    class="newsletter-section"
    v-fade-in
  >
    <div class="newsletter-section--backdrop fp-padded">
      <div class="newsletter-section__content fp-container">
        <div class="newsletter-section__content-text">
          <h2>Trabajemos juntos</h2>
          <p>Soluciones integrales para el desarrollo de proyectos</p>
        </div>
        <div class="newsletter-section__content-ctas">
          <a
            href="mailto:info@fonpacifico.org"
            class="button button--white"
            >Escribir al correo</a
          >
          <router-link
            :to="{ name: 'contacto' }"
            href=""
            class="button button--white--outlined"
            >Contacto</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
@use '../sass/abstracts' as *;

.newsletter-section {
  position: relative;
  color: get-color('white');
  background-image: url('/newsletter-background.jpeg');
  background-size: cover;
  background-position: center;

  &--backdrop {
    background-color: rgba(black, 0.4);
  }

  &__content {
    display: flex;
    place-content: space-between;
    flex-flow: row wrap;
    gap: 5rem;

    &-text {
      display: flex;
      flex-flow: column nowrap;
      gap: 1rem;
      color: white;

      p {
        color: inherit;
      }
    }

    &-ctas {
      display: flex;
      gap: 1rem;
      place-content: center;
      align-items: center;
    }
  }
}
</style>
