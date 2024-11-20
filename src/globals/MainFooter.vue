<script setup>
import { footerNavItems } from '@/content/footer';
import { socialMediaIcons } from '@/content/footer';
import FooterNavItems from './FooterNavItems.vue';

const footerAddresses = [
  {
    city: 'Oficina Cartago (Valle del Cauca)',
    address: 'Carrera 5 # 8-105.',
    link: 'https://maps.app.goo.gl/wSzPLiLezgoA3yJV6',
  },
  {
    city: 'Oficina Quibdó (Chocó)',
    address: 'Carrera 22 # 18B-10B UTCH Bloque 5 Piso 3.',
    link: 'https://maps.app.goo.gl/zu5Ez8jKzvJgsyqy5',
  },
];
</script>

<template>
  <footer>
    <div class="fp-container">
      <nav class="footer__menu">
        <span>
          <router-link :to="{ name: 'home' }">
            <img
              src="/logo_fonpacifico_white.svg"
              alt="logo de fonpacifico blanco"
            />
          </router-link>
        </span>
        <footer-nav-items :items="footerNavItems" />
        <div class="footer__get-in-touch">
          <h5>Trabajemos juntos</h5>
          <a
            href="mailto:info@fonpacifico.org?
          subject=Contacto para colaboración empresarial - Fonpacífico y [Nombre de tu empresa]"
            >info@fonpacifico.org</a
          >
        </div>
      </nav>
      <div class="footer-contact">
        <div class="footer-contact__wrapper">
          <h6 class="footer-contact__h6-title">Direcciones</h6>
          <ul class="footer-contact__list">
            <li v-for="address in footerAddresses">
              <p>{{ address.city }}</p>
              <p>{{ address.address }}</p>
              <a
                :href="address.link"
                class="footer_contact__link"
                target="_blank"
              >
                Ver en Maps
                <span class="material-symbols-outlined">arrow_outward</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-contact__phone">
          <h6 class="footer-contact__h6-title">Teléfonos</h6>
          <a href="tel:+573137488307">+(57) 313 748 8307</a>
          <a href="tel:+573117886674">+(57) 311 788 6674</a>
        </div>
      </div>
      <div class="footer__social-media">
        <div class="footer__social-media-copyright">
          <p>© 2024 Fonpacífico. Todos los derechos reservados.</p>
          <div class="pqrs-links">
            <a href="#">Políticas</a>
            <a href="#">Términos y Condiciones</a>
          </div>
        </div>
        <div class="footer__social-media-icons">
          <a
            href="#"
            v-for="icon in socialMediaIcons"
          >
            <img
              :src="icon.image"
              :alt="icon.alt"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '@/sass/abstracts' as *;

footer {
  background-color: get-color('primary-dark');
  color: get-color('white');
  padding: 5rem 1rem;
}

.footer {
  h6 {
    font-size: 20px;
    font-weight: 700;
  }

  &__menu {
    place-content: flex-start;
    flex-flow: row wrap;
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;

    span {
      width: 100%;

      @include breakpoint-min('md') {
        width: auto;
      }
    }

    @include breakpoint-min('md') {
      gap: 3rem;
      row-gap: 1.5rem;
    }

    @include breakpoint-min('lg') {
      place-content: space-between;
    }
  }

  &__menu-list {
    display: flex;
    flex-flow: row wrap;
    gap: 2rem;
    place-content: flex-start;
    width: 100%;

    @include breakpoint-min('md') {
      place-content: space-between;
    }

    @include breakpoint-min('lg') {
      width: auto;
      gap: 4.5rem;
    }
  }

  &__get-in-touch {
    display: flex;
    flex-flow: column nowrap;
    gap: 0.5rem;

    h5 {
      font-size: 20px;
      font-weight: 800;
    }

    a {
      font-size: 18px;
      color: get-color('light-blue');
      font-weight: 700;
    }
  }

  &-contact {
    display: flex;
    flex-flow: row wrap;
    place-content: flex-start;

    &__h6-title {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    &__wrapper {
      display: flex;
      flex-flow: column nowrap;

      @include breakpoint-min('md') {
        width: 68%;
      }
    }

    &__list {
      display: flex;
      flex-flow: row wrap;
      place-content: flex-start;
      gap: 4rem;
      row-gap: 2rem;

      @include breakpoint-min('md') {
        width: 100%;
        place-content: space-between;
      }

      li {
        p {
          font-size: 14px;
          font-weight: 400;
          color: white;
        }

        a {
          color: get-color('light-blue');
          font-weight: 700;
          display: flex;
          place-items: center;
          gap: 0.25rem;
          margin-top: 1rem;
        }

        @include breakpoint-min('md') {
          max-width: 50%;
        }
      }
    }

    &__phone {
      display: flex;
      flex-flow: column nowrap;
      gap: 1rem;

      a {
        color: get-color('light-blue');
      }

      @include breakpoint-min('md') {
        margin-left: auto;
      }
    }
  }

  &__social-media {
    margin-top: 4rem;
    padding-top: 2rem;
    border-top: 1px solid get-color('white');
    display: flex;
    flex-flow: row wrap;
    gap: 2rem;
    place-content: space-between;

    &-copyright {
      display: flex;
      flex-flow: row wrap;
      gap: 2rem;
      place-items: center;

      p {
        color: white;
      }

      .pqrs-links {
        display: flex;
        flex-flow: row nowrap;
        gap: 1rem;

        a {
          color: get-color('white');
          text-decoration: underline;
        }
      }
    }

    &-icons {
      display: flex;
      gap: 1rem;
    }
  }
}
</style>
