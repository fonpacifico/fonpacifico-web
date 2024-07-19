<script setup>
import ServicesList from './ServicesList.vue';
</script>

<template>
  <section class="fp-container fp-grid fp-padded">
    <slot name="heading" />
    <services-list />
  </section>
</template>
