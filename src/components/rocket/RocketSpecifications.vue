<template>
  <v-card class="border rounded-xl bg-grey-lighten-5" flat>
    <v-list bg-color="transparent">
      <v-list-item
        prepend-icon="mdi-currency-usd"
        title="Cost per Launch"
        :subtitle="formatCost(rocket.launch_cost)"
      />

      <v-divider class="mx-4" />

      <v-list-item
        prepend-icon="mdi-earth"
        title="Country"
        :subtitle="rocket.manufacturer?.country_code || 'N/A'"
      />

      <v-divider class="mx-4" />

      <v-list-item
        prepend-icon="mdi-calendar"
        title="First Flight"
        :subtitle="formatDate(rocket.maiden_flight)"
      />
    </v-list>
  </v-card>
</template>

<script setup lang="ts">
import type { Rocket } from "@/types/rocket";

defineProps<{
  rocket: Rocket;
}>();

const formatCost = (cost: number | null) => {
  if (cost === null || cost === undefined) return "N/A";

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(cost);
};

const formatDate = (date: string | null) => {
  if (!date) return "N/A";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) return "N/A";

  return parsedDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
</script>
