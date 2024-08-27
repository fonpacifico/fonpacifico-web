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
      <router-link
        class="footer__main-link"
        :to="{ name: 'nosotros' }"
        >{{ item.link.text }}</router-link
      >
      <ul v-if="item.sublinks.length > 0">
        <li v-for="sublink in item.sublinks">
          <a
            target="_blank"
            :href="sublink.href"
          >
            {{ sublink.text }}</a
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
    display: flex;
    flex-flow: column nowrap;
    gap: 1rem;

    a {
      font-weight: 700;
    }

    ul {
      display: flex;
      flex-flow: column nowrap;
      gap: 1rem;
    }
  }
}
</style>
