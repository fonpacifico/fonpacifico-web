<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <ul class="footer__menu-list">
    <li
      class="footer__menu-item"
      v-for="item in items"
      :key="item.link.name"
    >
      <strong>{{ item.link.text }}</strong>
      <ul v-if="item.sublinks.length > 0">
        <li v-for="sublink in item.sublinks">
          <router-link
            class="sublink"
            :to="sublink.href"
          >
            {{ sublink.text }}</router-link
          >
        </li>
      </ul>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@use '../sass/abstracts' as *;

.footer {
  &__menu-item {
    max-width: 180px;
    display: flex;
    flex-flow: column nowrap;
    gap: 1.5rem;

    strong {
      font-size: 16px;
    }

    a {
      font-weight: 400;
    }

    ul {
      display: flex;
      flex-flow: column nowrap;
      gap: 1rem;

      li {
        a {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
