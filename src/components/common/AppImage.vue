<template>
  <v-img
    :src="src || undefined"
    :height="height"
    :aspect-ratio="aspectRatio"
    cover
    class="bg-grey-lighten-3"
  >
    <template #placeholder>
      <div class="d-flex align-center justify-center fill-height">
        <v-icon
          icon="mdi-rocket-launch-outline"
          size="56"
          color="grey-lighten-1"
        />
      </div>
    </template>

    <template #error>
      <div class="d-flex align-center justify-center fill-height">
        <v-icon
          icon="mdi-image-off-outline"
          size="48"
          color="grey"
        />
      </div>
    </template>
  </v-img>
</template>

<script setup lang="ts">
defineProps<{
  src?: string | null
  height?: string | number
  aspectRatio?: number | string
}>()
</script>

