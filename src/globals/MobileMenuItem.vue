<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  mainLink: {
    type: Object,
    required: true,
  },
  sublinks: {
    type: Array,
    required: true,
  },
  isClosed: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['closeMenu']);

const showLinks = ref(false);

const toggleLinks = () => {
  showLinks.value = !showLinks.value;
};

if (props.isClosed) {
  showLinks.value = false;
}

const navItemListClasses = computed(() => {
  return {
    'main-nav-item__list': true,
    'main-nav-item__list--open': showLinks.value,
  };
});

const listIcon = computed(() => {
  return showLinks.value ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
});

const handleClick = () => {
  showLinks.value = false;
  emit('closeMenu');
};
</script>
<template>
  <li class="main-nav-item">
    <div
      class="main-nav-item__header"
      @click.stop="toggleLinks"
    >
      <router-link
        :tabindex="showLinks ? 0 : -1"
        @click="handleClick"
        :to="{ name: mainLink.name }"
        >{{ mainLink.text }}
      </router-link>
      <span class="material-symbols-outlined">{{ listIcon }}</span>
    </div>
    <ul
      v-if="showLinks"
      :class="navItemListClasses"
    >
      <li
        class="main-nav-item__list__item"
        v-for="link in sublinks"
        @click="handleClick"
        :to="link.name"
      >
        {{ link.text }}
      </li>
    </ul>
  </li>
</template>

<style lang="scss" scoped>
@use '@/sass/abstracts' as *;

.main-nav-item {
  display: flex;
  flex-direction: column;

  &__header {
    padding: 1rem 0;
    cursor: pointer;
    display: flex;
    place-items: center;
    place-content: space-between;
    font-size: 20px;
    font-weight: 700;
    color: get-color('primary');

    a {
      font-size: inherit;
    }

    span {
      font-size: 48px;
    }
  }

  &__list {
    display: flex;
    flex-flow: column nowrap;
    gap: 0.5rem;

    &__item {
      padding: 0.5rem 0;
      font-weight: 700;
    }
  }
}
</style>
