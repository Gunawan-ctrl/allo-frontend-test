<template>
  <v-row>
    <v-col
      v-for="rocket in rockets"
      :key="rocket.id"
      cols="12"
      sm="6"
      md="4"
      lg="3"
    >
      <RocketCard
        :rocket="rocket"
        @click="$emit('select', $event)"
      />
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import type { Rocket } from '@/types/rocket'
import RocketCard from './RocketCard.vue'

defineProps<{
  rockets: Rocket[]
}>()

defineEmits<{
  select: [id: number]
}>()
</script>
