<script setup>
import CopyBlock from '@/globals/CopyBlock.vue';
</script>

<template>
  <section class="contacto-section fp-padded fp-container">
    <copy-block
      heading="Conversemos"
      subHeading="Queremos escuchar más acerca de ti y lo que podemos lograr juntos."
    />

    <div class="contacto-section__wrapper">
      <img
        src="/contact-placeholder.png"
        alt=""
      />
      <aside class="contacto-section__info">
        <div class="contacto-section__info-item">
          <span class="material-symbols-outlined">email</span>
          <h4>Correo</h4>
          <p>Conversemos sobre tu proyecto</p>
          <a href="mailto:info@fonpacifico.org">info@fonpacifico.org</a>
        </div>
        <div class="contacto-section__info-item">
          <span class="material-symbols-outlined">call</span>
          <h4>Teléfono</h4>
          <p>Llamanos y recibe una atención más personalizada</p>
          <a href="tel:+577488307">+(57) 313 748 8307</a>
          <a href="tel:+531139390">+(53) 113 939 90</a>
        </div>
        <div class="contacto-section__info-item">
          <span class="material-symbols-outlined">location_on</span>
          <h4>Ubicación</h4>
          <ul class="locations">
            <li class="location">
              <p>
                Oficina Cartago (Valle del Cauca)<br />
                Carrera 5 # 8-105.
              </p>
              <a
                href="#"
                class="footer_contact__link"
              >
                Ver en Maps
                <span class="material-symbols-outlined">arrow_outward</span>
              </a>
            </li>
            <li class="location">
              <p>
                Oficina Quibdó (Chocó) <br />
                Carrera 22 # 18B-10B UTCH Bloque 5 Piso 3.
              </p>
              <a
                href="#"
                class="footer_contact__link"
              >
                Ver en Maps
                <span class="material-symbols-outlined">arrow_outward</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/sass/abstracts' as *;

span.material-symbols-outlined {
  text-decoration: none !important;
}

.contacto-section {
  &__wrapper {
    margin-block-start: 2.5rem;
    display: flex;
    flex-flow: column nowrap;
    place-content: space-between;
    gap: 2rem;

    @include breakpoint-min('md') {
      flex-flow: row nowrap;
      margin-block-start: 5rem;
    }

    img {
      display: block;
      max-width: 100%;
      aspect-ratio: 1 / 1;
      object-fit: cover;
      border-radius: 1.5rem;

      @include breakpoint-min('md') {
        order: 2;
        max-width: 50%;
      }
    }
  }

  &__info {
    display: flex;
    flex-flow: column nowrap;
    gap: 2.5rem;

    @include breakpoint-min('md') {
      order: 1;
    }

    &-item {
      display: flex;
      flex-flow: column nowrap;
      gap: 0.5rem;

      span,
      a {
        color: get-color(primary);
        font-weight: 700;
      }

      a {
        display: flex;
        place-content: flex-start;
        place-items: center;
        gap: 0.5rem;
      }

      h4 {
        font-size: 1.25rem;
      }

      ul {
        display: flex;
        flex-flow: column nowrap;
        gap: 1.5rem;
      }
    }
  }
}
</style>
