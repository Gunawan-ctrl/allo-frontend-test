<template>
  <div class="text-center pa-4">
    <v-dialog :model-value="props.modelValue" max-width="800">
      <v-card elevation="0" border>
        <v-toolbar
          dark
          color="#efebe9"
        >
          <v-toolbar-title class="text-capitalize">
            Detail
          </v-toolbar-title>
          <v-spacer />
          <v-toolbar-items>
            <v-btn
              variant="text"
              @click="closeDialog"
            >
              Close
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-card-subtitle class="pa-4">
          ID : {{ props.items }}
        </v-card-subtitle>
        <v-list>
          <v-row class="pa-4">
            <v-col
              v-for="(key, value) in props.items"
              :key="value"
              cols="12"
              md="6"
            >
              <v-card class="pa-2" elevation="0" border>
                <v-card-title class="text-capitalize">
                  {{ value }}
                </v-card-title>
                <v-card-subtitle
                  class="text-primary mb-2 d-flex justify-between"
                >
                  {{ key ? key : "-" }}
                </v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
        </v-list>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';


const props = defineProps({
  modelValue: {
    type: Boolean,
    default: true,
  },
  items: {
    type: Object,
    default: () => [],
  },
});

const emit = defineEmits(["update:modelValue"]);

const closeDialog = () => {
  emit("update:modelValue", false);
};

onMounted(() => {
  console.log("Detail Items:", props.items);
});
</script>
