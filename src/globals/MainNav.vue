<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const showMenu = ref(false);
const isDesktop = ref(false);
const overlay = ref(null);
const activeSubmenu = ref(null);

const links = ref([
  {
    name: 'Nosotros',
    sublinks: [
      {
        name: 'Acerca de Fonpacífico',
        link: 'nosotros',
        subtitle: 'Conoce más sobre nosotros',
      },
      {
        name: 'Servicios',
        link: 'servicios',
        subtitle: 'Soluciones para tus necesidades',
      },
      {
        name: 'Programas y cursos',
        link: 'programasYCursos',
        subtitle: 'Desarrollados por nosotros',
      },
    ],
  },
  {
    name: 'Contratación',
    sublinks: [
      {
        name: 'convocatorias',
        link: 'convocatorias',
        subtitle: 'Abiertas, en proceso y finalizadas',
      },
      {
        name: 'Manual de contratación (PDF)',
        link: 'home',
        subtitle: 'Descarga nuestro manual en PDF',
      },
      {
        name: 'Documentos precontractuales',
        link: 'home',
        subtitle: 'Acceso a PDFs de nuestro documentos',
      },
    ],
  },
  {
    name: 'Asociados Técnicos',
    sublinks: [
      {
        name: 'Inscripción de asociado técnico',
        link: 'inscripcion',
        subtitle: 'Regístrate para ser asociado de Fonpacífico',
      },
    ],
  },
  {
    name: 'Transparencia',
    sublinks: [
      {
        name: 'Información pública',
        link: 'transparencia',
        subtitle: 'Datos de interés público',
      },
      {
        name: 'PQRSD',
        link: 'pqrsd',
        subtitle: 'Instrumento de solicitud de Fonpacífico',
      },
      {
        name: 'Políticas',
        link: 'politicas',
        subtitle: 'Relacionadas con el uso del sitio web',
      },
    ],
  },
]);

const menuClasses = ref({
  nav: true,
  'nav--open': showMenu.value,
});

const mql = window.matchMedia('(max-width: 1024px)');

mql.addEventListener('change', (e) => {
  if (e.matches) {
    showMenu.value = false;
    isDesktop.value = false;
  }
});

const closeMenu = (e) => {
  e.target.blur();
  showMenu.value = false;
};

const toggleSubmenu = (index) => {
  if (activeSubmenu.value === index) {
    activeSubmenu.value = null;

    if (overlay.value) {
      overlay.value.style.display = 'none';
    }
  } else {
    activeSubmenu.value = index;
    if (overlay.value) {
      overlay.value.style.display = 'block';
    }
  }
};

const handleClickOutside = (event) => {
  const nav = document.querySelector('.nav');
  if (nav && !nav.contains(event.target) && !isDesktop.value) {
    activeSubmenu.value = null;
    if (overlay.value) {
      overlay.value.style.display = 'none';
    }
  }
};

onMounted(() => {
  // biome-ignore lint/complexity/noForEach: <explanation>
  document
    .querySelectorAll('.nav__list-item > button, .subnav-link')
    .forEach((button) => {
      button.addEventListener('focus', () => {
        overlay.value.style.display = 'block';
      });

      button.addEventListener('blur', () => {
        overlay.value.style.display = 'none';
      });
    });

  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  // biome-ignore lint/complexity/noForEach: <explanation>
  document
    .querySelectorAll('.nav__list-item > button, .subnav-link')
    .forEach((button) => {
      button.removeEventListener('focus', () => {
        overlay.value.style.display = 'block';
      });
    });
});
</script>

<template>
  <header>
    <div class="fp-container">
      <span>
        <router-link :to="{ name: 'home' }">
          <img
            class="logo"
            src="/logo_fonpacifico.svg"
            alt="logo de fonpacifico"
          />
        </router-link>
      </span>
      <nav
        class="nav"
        :class="{ open: showMenu }"
      >
        <ul class="nav__list">
          <li
            v-for="(link, index) in links"
            :key="link.name"
            class="nav__list-item"
          >
            <button @click.stop.prevent="toggleSubmenu(index)">
              {{ link.name }}
              <span class="material-symbols-outlined">
                keyboard_arrow_down
              </span>
            </button>
            <div
              :class="{
                nav__submenu: true,
                'nav__submenu--open': activeSubmenu === index,
              }"
            >
              <ul class="fp-container">
                <li
                  v-for="sublink in link.sublinks"
                  :key="sublink.name"
                >
                  <router-link
                    :to="sublink.link"
                    class="subnav-link"
                    @click="(e) => closeMenu(e)"
                  >
                    {{ sublink.name }}
                    <br />
                    <span class="subtitle">{{ sublink.subtitle }}</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <router-link
          class="contact-button"
          :to="{ name: 'contacto' }"
          @click="(e) => closeMenu(e)"
          >Contacto</router-link
        >
      </nav>
      <button
        class="nav__toggle"
        @click="showMenu = !showMenu"
      >
        <span class="material-symbols-outlined">{{
          showMenu ? 'close' : 'menu'
        }}</span>
      </button>
    </div>
  </header>
  <div
    ref="overlay"
    class="overlay"
  ></div>
</template>

<style lang="scss" scoped>
@use '../sass/abstracts' as *;

.overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000000, $alpha: 0.35);
  z-index: 1;
}

.logo {
  margin-right: 16px;
}

.material-symbols-outlined {
  font-size: 2rem;
}

.subtitle {
  display: none;

  @include breakpoint-min('md2') {
    display: block;
    font-size: 14px;
    font-weight: 400;
    color: rgba($color: #000000, $alpha: 0.7);
    text-decoration: none;
  }
}

.contact-button {
  display: block;
  background-color: get-color('primary');
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 2rem;
  text-align: center;
  font-weight: 700;
  width: calc(100% - 2rem);
  margin: 2rem auto 0;
  transition: all 0.2s ease-in-out;

  @include breakpoint-min('md2') {
    width: fit-content;
    margin: 0;
  }

  &:hover {
    text-decoration: none;
    background-color: darken(get-color('primary'), 10%);
  }
}

header {
  width: 100%;
  background: white;
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  place-items: center;
  height: 64px;
  border-bottom: 2px solid rgba($color: #000000, $alpha: 0.1);
  box-shadow: 0px 2px 16px 0px #0000001a;
  > .fp-container {
    display: flex;
    width: 100%;
    place-items: center;
  }
}

.nav {
  position: fixed;
  top: 63px;
  width: 100%;
  right: 100%;
  bottom: 0;
  transition: transform 0.3s ease-in-out;
  transform: translateX(0);
  background-color: white;

  &.open {
    transform: translateX(100%);
  }

  @include breakpoint-min('md2') {
    position: static;
    right: 0;
    transform: none;
    display: flex;
    place-items: center;
    place-content: space-between;

    &.open {
      transform: none;
    }
  }

  &__toggle {
    display: block;
    margin-left: auto;
    background: transparent;
    color: get-color('primary');

    @include breakpoint-min('md2') {
      display: none;
    }
  }

  &__list {
    display: flex;
    flex-flow: column nowrap;

    @include breakpoint-min('md2') {
      flex-flow: row nowrap;
      place-content: center;
    }

    .nav__submenu--open {
      display: block;
    }

    // &-item:focus-within,
    // &-item:active {
    //   .nav__submenu {
    //     display: block;
    //   }

    //   .overlay {
    //     display: block;
    //   }

    //   > button > span {
    //     transform: rotate(180deg);
    //   }
    // }

    &-item > button {
      cursor: pointer;
      background: transparent;
      border: 0;
      display: flex;
      place-items: center;
      place-content: space-between;
      width: 100%;
      padding: 1rem 2rem;
      white-space: nowrap;
      font-weight: 700;
      font-size: 20px;
      color: get-color('primary');

      &:focus,
      &:active {
        color: get-color('primary');
      }

      span {
        transition: transform 0.3s ease-in-out;
      }

      @include breakpoint-min('md2') {
        color: black;
        font-size: 16px;

        span {
          display: none;
        }
      }
    }
  }

  &__submenu {
    display: none;
    background: white;
    z-index: 10;

    @include breakpoint-min('md2') {
      position: absolute;
      left: 0;
      right: 0;
      top: calc(100% + 1px);
      width: 100vw;
      padding: 2rem 0;
    }

    > ul {
      display: flex;
      place-content: flex-start;
      flex-flow: column nowrap;

      @include breakpoint-min('md2') {
        flex-flow: row nowrap;
      }

      > li {
        padding: 1rem 0.5rem;

        @include breakpoint-min('md2') {
          padding: 1rem 2rem 1rem 0;
          min-width: 312px;
        }

        > a {
          font-weight: 700;

          &:hover,
          &:focus {
            text-decoration: none;
            color: get-color('primary');
          }
        }
      }
    }
  }
}
</style>
