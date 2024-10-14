<script setup>
defineProps({
  listContent: {
    type: Array,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="split-list fp-container">
    <div class="split-list__content-copy">
      <ul>
        <li
          v-for="(item, index) in listContent"
          :key="index"
        >
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <a
            v-if="item.link"
            :href="item.link"
            target="_blank"
          >
            {{ item.linkText }}
            <span class="material-symbols-outlined">arrow_forward</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="split-list__content-img">
      <img
        :src="img"
        alt=""
      />
    </div>
  </div>
</template>

<style lang="scss">
@use '@/sass/abstracts' as *;

.split-list {
  display: flex;
  flex-flow: column nowrap;
  place-items: center;
  place-content: center;
  gap: 2rem;
  padding: 0;

  @include breakpoint-min('md') {
    flex-flow: row nowrap;
    gap: 8rem;
  }

  &__content-copy {
    color: white;
    flex: 1 0 40%;

    ul {
      display: flex;
      flex-flow: column nowrap;
      gap: 2rem;

      @include breakpoint-min('md') {
        gap: 4rem;
      }

      li {
        display: flex;
        flex-flow: column nowrap;
        gap: 1.5rem;

        a {
          display: inline-flex;
          place-items: center;
          gap: 0.5rem;
          font-weight: 700;
          font-size: 1rem;
          text-decoration: none;
          color: get-color('light-blue');

          span {
            transition: transform 0.15s ease-in-out;
          }

          &:hover,
          &:focus {
            span {
              transform: translateX(0.25rem);
            }
          }
        }
      }
    }
    p {
      color: inherit;
    }
  }

  &__content-img {
    background-color: get-color('primary-dark');
    color: white;
    flex: 1 1 60%;
    height: 560px;
    border-radius: 2rem;
    overflow: hidden;

    img {
      width: 100%;
      height: -webkit-fill-available;
      object-fit: cover;
    }
  }
}
</style>
