<script setup>
import {
  saveToLocalStorage,
  getFromLocalStorage,
  capitalizeFirstLetter,
} from '@/utils';
import { onMounted, ref } from 'vue';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import { FilterMatchMode } from '@primevue/core/api';

const MAX_AGE = 24 * 60 * 60 * 1000; // 24 hours

const convocatorias = ref();
const expandedRows = ref({});
const loading = ref(true);
const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
});

const formatDate = (dateString) => {
  const date = new Date(dateString);

  const formatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return formatter.format(date);
};

const fetchDocuments = async (id) => {
  try {
    const response = await fetch(
      `https://j4hvvf8.localto.net/obtenerconvocatoriadocumentos?id_convocatoria=${id}`
    );

    if (!response.ok) {
      console.error(
        `Failed to fetch documents for convocatoria ${id}: HTTP ${response.status}`
      );
      return [];
    }

    // Check if the response is JSON
    if (!response.headers.get('content-type')?.includes('application/json')) {
      const text = await response.text(); // Log the actual response text
      console.error(
        `Expected JSON, but got something else for id ${id}:`,
        text
      );
      return [];
    }

    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch documents for convocatoria ${id}:`, error);
    return [];
  }
};

const fetchAndBuildConvocatorias = async () => {
  try {
    const response = await fetch(
      'https://j4hvvf8.localto.net/maestroconvocatoriasx'
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const convocatorias = await response.json();

    const convocatoriasWithDocuments = await Promise.all(
      convocatorias.map(async (convocatoria) => {
        const documents = await fetchDocuments(convocatoria.id_convocatoria);

        convocatoria.documents = documents.map(({ documento, ruta }) => ({
          documento: capitalizeFirstLetter(documento),
          url: `https://j4hvvf8.localto.net/pdf/${ruta}`,
        }));

        return convocatoria;
      })
    );

    return convocatoriasWithDocuments;
  } catch (error) {
    console.error('Error fetching convocatorias:', error);
    const cachedData = getFromLocalStorage(
      'convocatoriasWithDocuments',
      MAX_AGE
    );

    if (cachedData) {
      console.log('Loaded complete data from localStorage');
      return cachedData;
    }
  }
};

onMounted(async () => {
  fetchAndBuildConvocatorias()
    .then((data) => {
      convocatorias.value = data;
      loading.value = false;
    })
    .catch((error) => console.error('Error fetching or building data:', error));
});
</script>

<template>
  <main class="convocatorias fp-padded fp-container">
    <div class="convocatorias__heading">
      <h1>Convocatorias</h1>
      <div class="convocatorias__subheading">
        <h5>Construyendo un mejor futuro</h5>
        <p>
          Participa en convocatorias abiertas y trabaja en proyectos
          seleccionados, impulsando tu carrera y contribuyendo a iniciativas de
          desarrollo territorial.
        </p>
      </div>
    </div>
    <div class="convocatorias__table">
      <div class="convocatorias__table-heading">
        <div>
          <h2>Lista de convocatorias</h2>
          <p>
            Puedes buscar o filtrar convocatorias si estás buscando algo
            específico
          </p>
        </div>
        <div class="icon-wrapper">
          <icon-field>
            <input-icon>
              <span class="material-symbols-outlined">search</span>
            </input-icon>
            <input-text
              v-model="filters['global'].value"
              placeholder="Buscar"
            />
          </icon-field>
        </div>
      </div>
      <data-table
        :loading="loading"
        v-model:expandedRows="expandedRows"
        v-model:filters="filters"
        filterDisplay="row"
        :value="convocatorias"
        paginator
        :rows="8"
        dataKey="id_convocatoria"
        tableStyle="min-width: 60rem"
      >
        <Column
          expander
          style="width: 0"
        />
        <Column
          sortable
          field="codigo"
          header="Código"
        ></Column>
        <Column
          sortable
          field="estado"
          header="Estado"
        ></Column>
        <Column
          sortable
          field="contrato"
          header="Tipo de contrato"
        ></Column>
        <Column
          sortable
          field="modoContratacion"
          header="Contratación"
        ></Column>
        <Column
          sortable
          field="fecha"
          header="Fecha"
        >
          <template #body="{ data }">{{ formatDate(data.fecha) }}</template>
        </Column>
        <template #expansion="{ data }">
          <div class="expansion-description">
            <div class="expansion-description__objeto">
              <h4><strong>Objeto</strong></h4>
              <p>{{ data.objeto }}</p>
            </div>
            <div class="expansion-description__links">
              <h4><strong>Documentos</strong></h4>
              <ul>
                <li v-for="document in data.documents">
                  <a
                    :href="document.url"
                    target="_blank"
                    >{{ document.documento }}
                    <span class="material-symbols-outlined"
                      >open_in_new</span
                    ></a
                  >
                </li>
              </ul>
              <h4><strong>SECOP</strong></h4>
            </div>
          </div>
        </template>
      </data-table>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use '@/sass/abstracts' as *;

.icon-wrapper {
  display: grid;
  place-content: flex-start;

  @include breakpoint-min('md') {
    place-content: center;
  }
}

.convocatorias {
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
  }

  &__subheading {
    display: flex;
    flex-flow: column nowrap;
    gap: 1.5rem;

    @include breakpoint-min('md') {
      grid-column: 2;
    }
  }

  &__table-heading {
    display: flex;
    flex-flow: column nowrap;
    gap: 1.5rem;

    h2 {
      font-size: 1.5rem;
    }

    @include breakpoint-min('md') {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
}

.expansion-description {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr 1fr;

  &__objeto {
    display: flex;
    flex-flow: column nowrap;
    gap: 0.5rem;

    h4 {
      font-size: 1.125rem;
    }

    p {
      text-transform: lowercase;
    }
  }

  &__links {
    display: flex;
    flex-flow: column nowrap;
    gap: 0.5rem;

    h4 {
      font-size: 1.5rem;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      list-style-type: disc;
      padding-left: 1.5rem;
      font-size: 1rem;
      margin-bottom: 1rem;

      li::marker {
        color: get-color('primary');
      }

      a {
        display: flex;
        gap: 0.5rem;
        place-items: center;
        font-size: inherit;
        color: get-color('primary');
      }

      span {
        font-size: inherit;
      }
    }
  }
}
</style>
