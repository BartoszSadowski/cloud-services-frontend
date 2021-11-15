<script setup lang="ts">
import { ref } from "vue";
import { mailGroupListItem } from "@/types/mail-groups";
import { mailGroupsStore } from "@/store/mail-groups";

const columns = [
  {
    name: "title",
    required: true,
    label: "Nazwa kampani",
    align: "left",
    field: (row) => row.title,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "description",
    label: "Opis",
    align: "left",
    field: (row) => row.description,
    format: (val) => val || "-",
    sortable: true,
  },
  {
    name: "subject",
    label: "Tytuł maila",
    align: "left",
    field: (row) => row.subject,
    format: (val) => val || "-",
    sortable: true,
  },
  {
    name: "actions",
    align: "center",
    label: "Akcje",
  },
];

const rows: mailGroupListItem[] = await mailGroupsStore.retrieveMailCampaigns();

const initialPagination = {
  rowsPerPage: 15,
};
const filter = ref("");
</script>

<template>
  <q-page class="row justify-center">
    <q-table
      class="q-my-md"
      spac
      title="Grupy Mailowe"
      :rows="rows"
      :columns="columns"
      :filter="filter"
      row-key="id"
      :pagination="initialPagination"
    >
      <template v-slot:top-right>
        <q-input
          class="q-mr-sm"
          borderless
          dense
          debounce="300"
          v-model="filter"
          placeholder="Search"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
        <q-btn outline>+</q-btn>
      </template>

      <template #body-cell-actions>
        <q-td>
          <q-btn icon="edit" no-caps flat dense />
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>
>
