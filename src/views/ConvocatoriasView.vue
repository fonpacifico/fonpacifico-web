<script setup>
import { onMounted, ref } from 'vue';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import { FilterMatchMode } from '@primevue/core/api';

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

const fetchConvocatorias = async () => {
  const response = await fetch(
    'https://j4hvvf8.localto.net/maestroconvocatoriasx'
  );

  const data = await response.json();

  return data;
};

onMounted(async () => {
  convocatorias.value = await fetchConvocatorias();
  loading.value = false;
});
</script>

<template>
  <main>
    <div class="convocatorias fp-padded fp-container">
      <div class="convocatorias__heading">
        <h1>Convocatorias</h1>
        <div class="convocatorias__subheading">
          <h5>Construyendo un mejor futuro</h5>
          <p>
            Participa en convocatorias abiertas y trabaja en proyectos
            seleccionados, impulsando tu carrera y contribuyendo a iniciativas
            de desarrollo territorial.
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
            field="codigo"
            header="Código"
          ></Column>
          <Column
            field="estado"
            header="Estado"
          ></Column>
          <Column
            field="contrato"
            header="Tipo de contrato"
          ></Column>
          <Column
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
          <template #expansion="slotProps">
            <p>test content</p>
          </template>
        </data-table>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use '../sass/abstracts/_mixins' as *;

.test {
  background-color: red;
}
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
</style>
