<template>
  <v-card>
    <v-breadcrumbs
      :items="props.items"
      divider="/"
      style="font-size: 14px"
    />
  </v-card>
</template>

<script setup lang="ts">

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
  items: {
    type: Object,
    default: null,
  },
});
</script>
