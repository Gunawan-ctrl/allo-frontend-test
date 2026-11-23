<template>
  <v-app-bar color="white" elevation="0" height="76" class="border-b">
    <v-container class="d-flex align-center">
      <v-btn
        variant="text"
        class="d-flex align-center px-0 text-none"
        aria-label="Rocket Explorer home"
        @click="goToHome"
      >
        <v-avatar color="indigo-lighten-5" rounded="lg" size="40" class="mr-2">
          <v-icon icon="mdi-rocket-launch" color="primary" size="24" />
        </v-avatar>
        <div class="d-none d-sm-block text-h6 font-weight-bold text-high-emphasis">
          Rocket<span class="text-primary ml-1">Explorer</span>
        </div>
      </v-btn>

      <v-spacer />

      <div class="d-flex align-center ga-2">
        <v-btn
          variant="text"
          :color="!isDetailPage ? 'primary' : 'grey-darken-1'"
          class="rounded-lg font-weight-bold text-none"
          prepend-icon="mdi-home-outline"
          @click="goToHome"
        >
          Home
        </v-btn>

        <v-btn
          variant="text"
          :color="isDetailPage ? 'primary' : 'grey-darken-1'"
          class="rounded-lg font-weight-bold text-none"
          prepend-icon="mdi-rocket-launch-outline"
          @click="goToRockets"
        >
          Rocket
        </v-btn>
      </div>
    </v-container>
  </v-app-bar>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const isDetailPage = computed(() => route.name === "rocket-detail");

const goToHome = () => {
  router.push("/");
};

const goToRockets = () => {
  router.push({ name: "home" });
};
</script>
