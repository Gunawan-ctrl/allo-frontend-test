<template>
  <div class="d-flex flex-column fill-height bg-background">
    <AppNavbar />

    <v-main class="flex-grow-1 bg-background">
      <router-view />
    </v-main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppFooter from "@/components/common/AppFooter.vue";
import AppNavbar from "@/components/common/AppNavbar.vue";
</script>
