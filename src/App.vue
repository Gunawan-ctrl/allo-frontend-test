<template>
  <v-app>
    <component :is="layout">
      <router-view />
      <notifications />
    </component>
  </v-app>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const layout = computed(() => {
  return route.meta.layout || { template: '<router-view />' }
})
</script>
