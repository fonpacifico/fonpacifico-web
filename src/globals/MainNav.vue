<script setup>
import { ref, computed, watch } from 'vue';
import MobileMenuItem from './MobileMenuItem.vue';
import { mainNavLinks } from '../content/nav';

const navLinkData = computed(() =>
  mainNavLinks.map((link) => ({
    name: link.name,
    text: link.text,
    sublinks: link.sublinks,
  }))
);

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
  menuOpen.value = false;
  shouldShowLinks.value = false;
};

const hamburgerMenuClasses = computed(() => {
  return {
    'hamburger-button': true,
    'hamburger-button--open': menuOpen.value,
  };
});

const mainNavItemsClasses = computed(() => {
  return {
    'main-nav-items': true,
    'main-nav-items--open': menuOpen.value,
  };
});

const shouldShowLinks = computed(() => {
  return menuOpen.value;
});

watch(menuOpen, (value) => {
  if (value) {
    document.body.classList.add('menu-open');
  } else {
    document.body.classList.remove('menu-open');
  }
});
</script>

<template>
  <header class="fp-container">
    <nav class="main-nav main-nav--desktop">
      <ul class="main-nav__items">
        <span>
          <router-link :to="{ name: 'home' }">
            <img
              src="/logo_fonpacifico.svg"
              alt="logo de fonpacifico"
            />
          </router-link>
        </span>
        <li>
          <router-link :to="{ name: 'nosotros' }">Nosotros</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'contratacion' }">Contratacion</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'transparencia' }"
            >Transparencia</router-link
          >
        </li>
      </ul>
      <button class="cta-button">Contacto</button>
    </nav>
    <div class="main-nav main-nav--mobile">
      <span>
        <router-link
          @click="closeMenu"
          :to="{ name: 'home' }"
        >
          <img
            src="/logo_fonpacifico.svg"
            alt="logo de fonpacifico"
          />
        </router-link>
      </span>

      <button
        @click="toggleMenu"
        :class="hamburgerMenuClasses"
      >
        <span class="hamburger-button__line"></span>
        <span class="hamburger-button__line"></span>
        <span class="hamburger-button__line"></span>
      </button>
    </div>
    <nav :class="mainNavItemsClasses">
      <ul class="main-nav-items__list">
        <mobile-menu-item
          v-for="link in navLinkData"
          :main-link="link"
          :sublinks="link.sublinks"
          :is-closed="menuOpen === false"
          @close-menu="closeMenu"
        />
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@use '../sass/abstracts' as *;

summary {
  list-style: none;
}

.hamburger-button {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 2rem;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &__line {
    display: block;
    width: 100%;
    height: 0.25rem;
    background-color: get-color('primary');
    border-radius: 0.5rem;
    transition: all 0.3s ease-in-out;

    &:nth-child(1) {
      transform: translateY(0.5rem);
    }

    &:nth-child(2) {
      transform: translateY(0);
    }

    &:nth-child(3) {
      transform: translateY(-0.5rem);
    }
  }

  &--open {
    .hamburger-button__line {
      &:nth-child(1) {
        transform: translateY(1rem) rotate(45deg);
      }

      &:nth-child(2) {
        opacity: 0;
      }

      &:nth-child(3) {
        transform: translateY(-1rem) rotate(-45deg);
      }
    }
  }

  @include breakpoint-min('md') {
    display: none;
  }
}

.main-nav--desktop {
  display: none;

  @include breakpoint-min('md') {
    display: flex;
    place-content: space-between;
    padding-block: 1.5rem;

    .main-nav__items {
      display: flex;
      gap: 2rem;
    }
  }
}

.main-nav--mobile {
  display: flex;
  padding-block: 1.5rem;
  place-content: space-between;
  place-items: center;

  @include breakpoint-min('md') {
    display: none;
  }

  & + .main-nav-items--open::before {
    content: '';
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
}

.main-nav-items {
  position: fixed;
  background-color: get-color('white');
  width: calc(100% + 1rem);
  left: calc(100% + 1rem);
  height: 100%;
  transition: all 0.3s ease-in-out;
  padding: 2rem 1rem;

  @include breakpoint-min('md') {
    display: none;
  }

  &--open {
    left: 0;
    width: 100%;
  }

  &__list {
    display: flex;
    flex-flow: column nowrap;
    gap: 1rem;
  }
}
</style>
