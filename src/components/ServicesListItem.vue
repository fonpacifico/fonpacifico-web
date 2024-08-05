<script setup>
defineProps({
  icon: {
    type: String,
    required: false,
  },
  heading: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <li
    class="services-list__item"
    v-fade-in
  >
    <span class="services-list__item-icon"
      ><img
        :src="icon"
        alt="services icon"
    /></span>
    <h3 class="services-list__item-heading">{{ heading }}</h3>
    <p class="services-list__item-description">{{ description }}</p>
  </li>
</template>

<style lang="scss" scoped>
@use '../sass/abstracts' as *;

.services-list__item {
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: 1.5rem;

  &-icon {
    display: block;
    padding: 1rem;
    border-radius: 50%;
    background-color: get-color(accent);
    width: fit-content;
  }

  &-heading {
    text-align: center;
  }

  &-description > ul {
    background-color: red;
  }

  @include breakpoint-min('md') {
    place-items: flex-start;

    &-heading {
      text-align: left;
    }
  }
}
</style>
