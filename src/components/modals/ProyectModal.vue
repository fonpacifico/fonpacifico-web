<script setup>
import { VueFinalModal } from 'vue-final-modal';

defineProps({
  title: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['confirm', 'close']);
</script>

<template>
  <vue-final-modal
    class="test-modal"
    content-class="test-modal-content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    <div>
      <div class="test-modal-header">
        <h2>
          {{ title }}
        </h2>

        <button @click="emit('confirm')">close</button>
      </div>
      <slot />
    </div>
  </vue-final-modal>
</template>

<style lang="scss">
@use '@/sass/abstracts' as *;

.test-modal {
  display: grid;
  place-content: center;
  place-items: center;

  &-header {
    display: flex;
    place-content: space-between;
    align-items: center;
    gap: 1rem;
  }
}

.test-modal-content {
  background-color: #fff;
  padding: 2rem;
  height: 100%;
  max-width: 1300px;
  border-radius: 1.5rem;
}
</style>
