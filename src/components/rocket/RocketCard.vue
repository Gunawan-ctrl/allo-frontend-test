<template>
  <v-card
    rounded="xl"
    elevation="1"
    height="100%"
    class="d-flex flex-column h-100 overflow-hidden border cursor-pointer"
    @click="$emit('click', rocket.id)"
  >
    <div class="position-relative bg-grey-lighten-4">
      <AppImage :src="rocket.image_url" height="200" />
      <v-chip
        class="position-absolute top-0 left-0 ma-3 font-weight-medium"
        color="surface"
        size="small"
        prepend-icon="mdi-rocket-launch-outline"
      >
        {{ rocket.family }}
      </v-chip>
    </div>

    <v-card-item class="px-5 pt-5 pb-0">
      <v-card-title class="text-h6 font-weight-bold px-0">
        {{ rocket.full_name }}
      </v-card-title>

      <v-card-text class="text-body-2 text-medium-emphasis px-0">
        {{ rocket.description || "Description not available." }}
      </v-card-text>
    </v-card-item>

    <v-spacer />

    <v-card-actions class="px-5 pb-5">
      <v-btn
        color="primary"
        variant="tonal"
        append-icon="mdi-arrow-right"
        class="rounded-lg font-weight-bold text-none"
        @click.stop="$emit('click', rocket.id)"
      >
        View Details
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import type { Rocket } from "@/types/rocket";
import AppImage from "@/components/common/AppImage.vue";

defineProps<{
  rocket: Rocket;
}>();

defineEmits<{
  click: [id: number];
}>();
</script>
