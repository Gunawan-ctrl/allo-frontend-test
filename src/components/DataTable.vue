<template>
  <v-card elevation="0" border>
    <v-data-table
      :headers="props.headers"
      :items="props.data"
      :loading="props.loading"
      :search="search"
      :items-per-page="totalPage"
    >
      <template #top>
        <v-row>
          <v-col cols="12" sm="5" md="6" lg="6">
            <v-list-item
              class="mt-4 font-weight-black text-lowercase"
              title="Data"
              subtitle="daftar seluruh data"
            />
          </v-col>
          <v-spacer />
          <v-col cols="6" xs="8" sm="4" md="4" lg="4">
            <v-text-field
              v-model="search"
              label="Search"
              density="compact"
              class="my-4 mx-2"
              :class="totalPage ? 'mr-4' : 'mr-0'"
              color="primary"
              single-line
              hide-details
              append-inner-icon="mdi-magnify"
              variant="outlined"
            />
          </v-col>
          <v-col cols="auto">
            <v-btn
              class="my-4 mr-4 text-capitalize rounded-lg"
              color="primary"
              prepend-icon="mdi-plus"
              variant="text"
              @click="$emit('addItem')"
            >
              Add Data
            </v-btn>
          </v-col>
        </v-row>
      </template>
      <template #[`item.flickr_images`]="{ item }">
        <span>
          <img
            :src="(item as DataItem).flickr_images"
            alt="Image"
            style="max-width: 100px; max-height: 100px;"
          >
          </img>
        </span>
      </template>

      <template #[`item.actions`]="{ item: dataItem }">
        <v-btn
          color="primary"
          size="small"
          @click="$emit('showDetail', (dataItem as DataItem).id)"
        >
          Details
        </v-btn>
      </template>
      <template #no-data>
        <p class="text-red">
          The Table is Empty. Please insert data with the above Button.
        </p>
      </template>
    </v-data-table>
  </v-card>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

// define item types
interface DataItem {
  id: string;
  name: string;
  description: string;
  flickr_images: string[];
}

const props = defineProps({
  headers: {
    type: Array,
    default: () => [],
  },
  data: {
    type: Array,
    default: () => [],
  },
  totalPage: {
    type: Number,
    default: 0,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const search = ref<string>("");

const emit = defineEmits([
  "addItem",
  "editItem",
  "deleteItem",
  "showDetail",
]);

onMounted(() => {
  console.log('props.data', props.data);
})
</script>
