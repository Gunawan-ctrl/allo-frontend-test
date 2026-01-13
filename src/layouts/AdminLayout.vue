<template>
  <v-app id="inspire">
    <Sidebar v-model="drawer" />
    <Header @drawerEvent="drawer = !drawer" />
    <v-main style="background-color: #efebe9">
      <v-container class="py-4 px-4" fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup lang="ts">
import { ref } from "vue";

const drawer = ref(null);
</script>
