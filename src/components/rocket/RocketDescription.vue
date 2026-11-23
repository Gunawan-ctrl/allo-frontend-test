<template>
  <div>
    <div class="d-flex align-center mb-3">
      <v-icon icon="mdi-text-box-outline" class="mr-2" color="primary" />

      <h3 class="text-h6 font-weight-bold">About This Rocket</h3>
    </div>

    <p class="text-body-1 text-medium-emphasis">
      {{ description || "Description not available." }}
    </p>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  description: string | null;
}>();
</script>
