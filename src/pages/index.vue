<template>
  <Breadcrumbs class="mb-6" :items="['Table', 'Rockets']" />
  <DataTable
    :headers="headers"
    :data="dataRocketStore.rockets"
    :loading="dataRocketStore.isLoading"
    @show-detail="showDetail"
    @add-item="openDialog"
  />

  <v-dialog v-model="dialog" persistent width="704" @click:outside="resetForm">
    <v-card>
      <v-list>
        <v-list-item
          title="Data Rocket"
          subtitle="Tambah data rocket"
        >
          <template #append>
            <v-btn
              icon="mdi-close"
              size="small"
              variant="text"
              @click="resetForm()"
            />
          </template>
        </v-list-item>
      </v-list>
      <v-divider class="border-opacity-100" />

      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="form.name"
              label="Nama Rocket"
              :rules="[() => !!form.name || 'This field is required']"
              required
              density="compact"
              variant="outlined"
              color="primary"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="form.description"
              label="Description"
              required
              density="compact"
              variant="outlined"
              color="primary"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="form.type"
              label="Type"
              required
              density="compact"
              variant="outlined"
              color="primary"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="form.flickr_images"
              label="Link Image"
              density="compact"
              variant="outlined"
              color="primary"
            />
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider class="border-opacity-100" />
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="blue-darken-1"
          @click="onSubmit()"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <DialogDetail v-model="detailDialog" :items="dataRocketStore.detailRocket" />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useDataRocketStore } from "@/stores/dataRocketStore";

interface Header {
  title: string;
  align?: string;
  sortable?: boolean;
  key: string;
  width?: string;
}

const dataRocketStore = useDataRocketStore();
const dialog = ref<boolean>(false);
const detailDialog = ref<boolean>(false);
const form = ref({
  name: "",
  description: "",
  flickr_images: "",
  type: "",
});

const headers = ref<Header[]>([
  {
    title: "Name",
    align: "start",
    sortable: false,
    key: "name",
    width: "200px",
  },
  { title: "Description", key: "description", width: "600px" },
  { title: "Image", key: "flickr_images", },
  { title: "Actions", key: "actions", sortable: false, align: "center" },
]);

const openDialog = () => {
  dialog.value = true;
};

const showDetail = async (id: string) => {
  try {
    detailDialog.value = true;
    await dataRocketStore.fetchRocketById(id);
  } catch (error) {
    detailDialog.value = false;
    console.error("Error fetching rocket details:", error);
  }
};

const resetForm = () => {
  dialog.value = false;
  form.value = {
    name: "",
    description: "",
    flickr_images: "",
    type: "",
  };
};

const onSubmit = () => {
  dataRocketStore.addRocket(form?.value);
  resetForm();
};


onMounted(() => {
  dataRocketStore.fetchData();
});
</script>
