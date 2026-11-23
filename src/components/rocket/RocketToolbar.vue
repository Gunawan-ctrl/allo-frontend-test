<template>
  <v-card class="border pa-4 pa-sm-7" rounded="xl" elevation="0">
    <div
      class="d-flex flex-column flex-sm-row align-start align-sm-center justify-space-between ga-4 mb-4"
    >
      <div>
        <div class="text-caption text-medium-emphasis font-weight-bold">
          ROCKET DIRECTORY
        </div>
        <h2 class="text-h5 font-weight-bold mt-1">
          Explore the fleet
        </h2>
        <p class="text-body-2 text-medium-emphasis mt-1 mb-0">
          Search the SpaceX launch vehicle collection.
        </p>
      </div>

      <v-btn
        color="primary"
        prepend-icon="mdi-plus"
        size="large"
        class="rounded-lg font-weight-bold text-none"
        @click="$emit('add')"
      >
        Add Rocket
      </v-btn>
    </div>

    <v-text-field
      :model-value="search"
      placeholder="Search rockets..."
      prepend-inner-icon="mdi-magnify"
      aria-label="Search rockets"
      variant="outlined"
      density="comfortable"
      hide-details
      clearable
      bg-color="grey-lighten-5"
      @update:model-value="$emit('update:search', $event ?? '')"
    />
  </v-card>
</template>

<script setup lang="ts">
defineProps<{
  search: string
}>()

defineEmits<{
  'update:search': [value: string]
  add: []
}>()
</script>
