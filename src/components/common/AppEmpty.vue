<template>
  <v-card
    flat
    color="blue-grey-lighten-5"
    class="pa-10 text-center"
    rounded="lg"
  >
    <v-icon icon="mdi-rocket-launch-outline" size="64" color="primary" />

    <div class="text-h6 font-weight-bold mt-4">
      {{ title }}
    </div>

    <p class="text-body-2 text-medium-emphasis mt-2">
      {{ description }}
    </p>
  </v-card>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
    description?: string;
  }>(),
  {
    title: "No Rockets Found",
    description: "Try adjusting your search or filter.",
  },
);

defineEmits<{
  reset: [];
}>();
</script>
