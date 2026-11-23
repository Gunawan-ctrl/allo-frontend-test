<template>
  <v-footer color="white" class="border-t">
    <v-container
      class="d-flex flex-column flex-sm-row align-center justify-space-between ga-2 py-4 text-medium-emphasis text-body-2"
    >
      <div
        class="d-flex align-center ga-2 text-body-1 font-weight-bold text-high-emphasis"
      >
        <v-icon icon="mdi-rocket-launch-outline" color="primary" size="20" />
        <span>Rocket Explorer</span>
      </div>

      <p class="ma-0 text-center">
        SpaceX launch vehicles, all in one place.
      </p>

      <p class="ma-0">
        &copy; {{ new Date().getFullYear() }} Rocket Explorer
      </p>
    </v-container>
  </v-footer>
</template>
