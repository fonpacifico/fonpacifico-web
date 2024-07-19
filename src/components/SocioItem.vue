<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <li class="socio">
    <div class="socio__image">
      <img
        :src="item.image"
        alt=""
      />
    </div>
    <div>
      <h4 class="socio__title">{{ item.departamento }}</h4>
      <ul class="socio__list">
        <li
          v-for="socio in item.socios"
          :key="socio"
        >
          {{ socio }}
        </li>
      </ul>
    </div>
  </li>
</template>

<style lang="scss" scoped>
@use '@/sass/abstracts' as *;

.socio {
  display: flex;
  place-content: flex-start;
  gap: 1rem;

  &__title {
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 27px;
  }

  &__list {
    list-style: disc;
    display: flex;
    flex-flow: column nowrap;

    @include breakpoint-min('sm') {
      padding-left: 1.5rem;
    }

    li {
      font-size: 14px;
      line-height: 21px;
      color: rgba(0, 0, 0, 1);

      &::marker {
        color: #3d3d3d;
      }
    }
  }
}
</style>
