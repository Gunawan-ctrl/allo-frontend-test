<template>
  <v-card rounded="xl" elevation="1" class="border pa-4 pa-md-8">
    <v-row>
      <v-col cols="12" md="5">
        <div class="overflow-hidden rounded-xl bg-grey-lighten-4">
          <AppImage
            :src="rocket.image_url"
            height="460"
            :aspect-ratio="4 / 5"
          />
        </div>
      </v-col>

      <v-col cols="12" md="7">
        <v-chip color="primary" size="small" class="mb-3"> SpaceX </v-chip>

        <h1 class="text-h4 font-weight-bold mb-3">
          {{ rocket.full_name }}
        </h1>

        <p class="text-body-1 text-medium-emphasis mb-6">
          {{ rocket.description || "Description not available." }}
        </p>

        <RocketSpecifications :rocket="rocket" />
      </v-col>
    </v-row>

    <v-divider class="my-6" />

    <RocketDescription :description="rocket.description" />
  </v-card>
</template>
<script setup lang="ts">
import type { Rocket } from "@/types/rocket";
import AppImage from "@/components/common/AppImage.vue";
import RocketSpecifications from "./RocketSpecifications.vue";
import RocketDescription from "./RocketDescription.vue";

defineProps<{
  rocket: Rocket;
}>();
</script>
