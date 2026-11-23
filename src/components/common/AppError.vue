<template>
  <v-container class="py-16">
    <v-card
      max-width="480"
      class="mx-auto pa-8 text-center"
      rounded="lg"
      elevation="1"
    >
      <v-icon icon="mdi-alert-circle-outline" color="error" size="64" />

      <div class="text-h6 font-weight-bold mt-4">Failed to Load Rockets</div>

      <p class="text-body-2 text-medium-emphasis mt-2">
        {{ message || "Something went wrong. Please try again." }}
      </p>

      <v-btn
        color="primary"
        prepend-icon="mdi-refresh"
        class="mt-5 text-none"
        @click="$emit('retry')"
      >
        Retry
      </v-btn>
    </v-card>
  </v-container>
</template>
<script setup lang="ts">
defineProps<{
  message?: string;
}>();

defineEmits<{
  retry: [];
}>();
</script>
