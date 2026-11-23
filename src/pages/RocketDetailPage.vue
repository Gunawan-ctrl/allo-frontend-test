<template>
  <v-container class="py-8">
    <v-btn
      variant="text"
      color="primary"
      prepend-icon="mdi-arrow-left"
      class="mb-5 text-none"
      @click="goBack"
    >
      Back to List
    </v-btn>

    <AppLoading v-if="rocketStore.detailLoading" />

    <AppError
      v-else-if="rocketStore.detailError"
      :message="rocketStore.detailError"
      @retry="loadRocketDetail"
    />

    <RocketDetail
      v-else-if="rocketStore.selectedRocket"
      :rocket="rocketStore.selectedRocket"
    />

    <v-alert v-else type="warning" variant="tonal"> Rocket not found. </v-alert>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

import AppLoading from "@/components/common/AppLoading.vue";
import AppError from "@/components/common/AppError.vue";
import RocketDetail from "@/components/rocket/RocketDetail.vue";

import { useRocketStore } from "@/stores/rocket";

const route = useRoute();
const router = useRouter();

const rocketStore = useRocketStore();

const loadRocketDetail = async () => {
  if (!route.params.id) {
    router.replace("/rockets");
    return;
  }

  await rocketStore.fetchRocketById(Number(route.params.id));
};

const goBack = () => {
  router.push({ name: "home" });
};

onMounted(loadRocketDetail);
</script>
