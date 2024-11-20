<script setup>
const DOCUMENTS = [
  {
    image: '/documentos/doc_1.png',
    link: 'https://drive.google.com/file/d/19MdLiWOtoJH0LwlmbjnTT93mhmhYPrB5/view?usp=drive_link',
    text: 'Política de tratamiento de datos personales',
  },
];
</script>

<template>
  <main class="politicas fp-padded fp-container">
    <section class="politicas__heading">
      <div>
        <h1>Políticas</h1>
        <p>Última actualización: Abril 15, 2024</p>
      </div>
      <div class="politicas__subheading">
        <p>
          Esta sección describe nuestras políticas y procedimientos sobre la
          recopilación, uso y divulgación de Tu información cuando utilizas el
          Servicio y te informa sobre Tus derechos de privacidad bajo la ley.
        </p>
        <p>
          Utilizamos tus datos personales para proporcionar y mejorar el
          Servicio. Al utilizar el Servicio, aceptas la recopilación y el uso de
          la información de acuerdo con esta lista de políticas.
        </p>
      </div>
    </section>
    <section class="politicas__documents fp-padded--small">
      <a
        v-for="document in DOCUMENTS"
        class="document"
        :href="document.link"
        target="_blank"
        ><img
          :src="document.image"
          alt="icono de un documento legal"
        />
        <span class="document__text">
          <p>
            {{ document.text }}
          </p>
          <span class="material-symbols-outlined">open_in_new</span>
        </span></a
      >
    </section>
  </main>
</template>

<style lang="scss" scoped>
@use '@/sass/abstracts' as *;

.politicas {
  display: flex;
  flex-flow: column nowrap;
  gap: 2rem;

  &__heading {
    display: grid;
    grid-template-columns: 1fr;
    flex-flow: column nowrap;
    gap: 1.5rem;

    @include breakpoint-min('md') {
      grid-template-columns: 1fr 1fr;
    }

    h1 {
      margin-bottom: 1rem;
    }
  }

  &__subheading {
    display: flex;
    flex-flow: column nowrap;
    gap: 1.5rem;

    @include breakpoint-min('md') {
      grid-column: 2;
    }
  }

  &__documents {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .document {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 0 1 calc(100%);
    border: 1px solid #c5c5c5;
    border-radius: 1rem;
    overflow: hidden;
    padding: 1.5rem;
    transition: all 0.15s ease-in-out;
    text-decoration: none;
    box-shadow: none;
    transform: none;

    &:hover,
    &:focus {
      transform: translateY(-3px);
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
    }

    @include breakpoint-min('sm') {
      flex: 0 1 calc(50% - 0.5rem);
    }

    @include breakpoint-min('md') {
      flex: 0 1 calc(33.3333% - 0.6666rem);
    }

    @include breakpoint-min('lg') {
      flex: 0 1 calc(25% - 0.75rem);
    }

    &__text {
      display: flex;
      place-content: space-between;
      place-items: center;
      gap: 0.5rem;

      span {
        color: get-color('primary');
      }
    }

    p {
      color: get-color('primary');
    }
  }
}
</style>
