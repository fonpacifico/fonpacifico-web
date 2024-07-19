<script setup></script>
<template>
  <section class="newsletter-section">
    <div class="newsletter-section--backdrop fp-padded">
      <div class="newsletter-section__content fp-container">
        <div class="newsletter-section__content-text">
          <h2>Trabajemos juntos</h2>
          <p>Soluciones integrales para el desarrollo de proyectos</p>
        </div>
        <div class="newsletter-section__content-ctas">
          <a
            href=""
            class="button button--white"
            >Escribir al correo</a
          >
          <a
            href=""
            class="button button--white--outlined"
            >Contacto</a
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
  background-image: url('/newsletter-background.png');
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
