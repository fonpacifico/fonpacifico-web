<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="fp-container fp-padded-top programas-interes">
    <div class="programas-interes__heading">
      <h2>Programas de interés público</h2>
      <p>
        En Fonpacífico estamos convencidos de que el desarrollo social es la
        clave para un país más equitativo en oportunidades y conocimiento. Por
        eso, desarrollamos programas que han impactado a muchas personas,
        generando cambios positivos en sus comunidades.
      </p>
    </div>
    <div class="programas-interes__cards">
      <article
        class="programas-interes__card"
        v-for="item in items"
        :key="item.title"
      >
        <img
          :src="item.image"
          alt=""
        />
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <a
          :href="item.link"
          target="_blank"
          >Ver más
          <span class="material-symbols-outlined">arrow_forward</span>
        </a>
      </article>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/sass/abstracts' as *;

.programas-interes {
  display: flex;
  flex-flow: column nowrap;
  gap: 5rem;

  &__heading {
    grid-column: 1 / -1;
    display: flex;
    flex-flow: column nowrap;
    place-items: flex-start;
    gap: 1rem;

    @include breakpoint-min('md') {
      flex-flow: row nowrap;
      place-content: space-between;

      h2 {
        flex: 1 0 50%;
      }
    }
  }

  &__cards {
    display: flex;
    gap: 2rem;
    place-content: center;
    flex-flow: column wrap;

    @include breakpoint-min('md') {
      flex-flow: row wrap;
    }
  }

  &__card {
    flex: 1 0 30%;
    display: flex;
    flex-flow: column nowrap;
    gap: 1.5rem;

    img {
      width: 100%;
    }

    h3 {
      font-size: 1.5rem;
      line-height: 2.5rem;
    }

    p {
      line-height: 24px;
    }

    a {
      margin-top: auto;
      display: flex;
      place-items: center;
      gap: 0.5rem;
      font-weight: 700;
      color: get-color('primary');
    }
  }
}
</style>
