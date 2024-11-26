<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  ordered: {
    type: Boolean,
    default: true,
  },
});

// Track the open state of accordion items
const openState = ref([]);

// Toggle accordion item state
const toggleAccordion = (index) => {
  openState.value[index] = !openState.value[index];
};

// Check if the accordion item is open
const isOpen = (index) => {
  return openState.value[index] || false;
};

// Initialize state to keep all accordions closed by default
onMounted(() => {
  openState.value = new Array(props.items.length).fill(false);
});
</script>

<template>
  <div class="accordion">
    <details>
      <summary class="accordion__button">
        <span>{{ title }}</span>
        <span class="material-symbols-outlined">expand_more</span>
      </summary>
      <ol
        v-if="ordered"
        class="accordion__content"
      >
        <li
          v-for="item in items"
          :key="item"
        >
          {{ item }}
        </li>
      </ol>
      <ul
        v-else
        class="accordion__content"
      >
        <li
          v-for="item in items"
          :key="item"
        >
          {{ item }}
        </li>
      </ul>
    </details>
  </div>
</template>

<style scoped lang="scss">
@use '@/sass/abstracts' as *;

.accordion {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.accordion__button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
}

.accordion__content {
  padding: 1.5rem 0 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  li {
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.7);
  }
}

.rotate {
  transform: rotate(180deg);
}

ol {
  list-style: auto;
}

ul {
  list-style-type: disc;
}

details {
  padding-inline: 1rem;
  border: 2px solid get-color('card-border');
  border-radius: 0.5rem;

  summary {
    padding: 1.5rem 1rem;
    cursor: pointer;

    span:last-of-type {
      color: get-color('primary');
      font-size: 2.5rem;
      cursor: pointer;
    }
  }
}

details[open] {
  summary {
    span:last-of-type {
      transform: rotate(180deg);
    }
  }
}
</style>
