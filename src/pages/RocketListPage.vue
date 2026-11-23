<template>
  <RocketHero />

  <v-container class="py-8">
    <RocketToolbar v-model:search="search" @add="showForm = true" />

    <div class="mt-6">
      <AppLoading v-if="store.loading" />

      <AppError
        v-else-if="store.error"
        :message="store.error"
        @retry="store.fetchRockets"
      />

      <AppEmpty
        v-else-if="!filteredRockets.length"
        title="No Rockets Found"
        description="Try adjusting your search."
      />

      <RocketList
        v-else
        :rockets="filteredRockets"
        @select="handleSelectRocket"
      />
    </div>
  </v-container>

  <RocketFormModal v-model="showForm" @submit="handleAddRocket" />
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

import AppLoading from "@/components/common/AppLoading.vue";
import AppError from "@/components/common/AppError.vue";
import AppEmpty from "@/components/common/AppEmpty.vue";

import RocketHero from "@/components/rocket/RocketHero.vue";
import RocketToolbar from "@/components/rocket/RocketToolbar.vue";
import RocketList from "@/components/rocket/RocketList.vue";
import RocketFormModal from "@/components/rocket/RocketFormModal.vue";

import { useRocketStore } from "@/stores/rocket";
import type { RocketForm } from "@/types/rocket";

const router = useRouter();
const store = useRocketStore();

const search = ref("");
const showForm = ref(false);

const filteredRockets = computed(() => {
  const keyword = search.value.trim().toLowerCase();

  if (!keyword) return store.rockets;

  return store.rockets.filter((rocket) =>
    rocket.full_name.toLowerCase().includes(keyword),
  );
});

const handleAddRocket = (form: RocketForm) => {
  store.addRocket(form);
};

const handleSelectRocket = (id: number) => {
  router.push({ name: "rocket-detail", params: { id } });
};

onMounted(() => {
  store.fetchRockets();
});
</script>
