<script setup></script>

<template>
  <header class="fp-container">
    <nav class="main-nav">
      <ul class="main-nav__items">
        <span>
          <router-link :to="{ name: 'home' }">
            <img src="/public/logo_fonpacifico.svg" alt="logo de fonpacifico">
          </router-link>
        </span>
        <li>
          <router-link :to="{ name: 'nosotros' }">Nosotros</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'contratacion' }">Contratacion</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'transparencia' }">Transparencia</router-link>
        </li>
      </ul>
      <button class="cta-button">Contacto</button>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
  .main-nav {
    display: flex;
    place-content: space-between;
    padding-block: 1.5rem;

    &__items {
      display: flex;
      gap: 2rem;
    }
  }
</style>
