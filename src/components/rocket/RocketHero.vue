<template>
  <v-card
    class="mx-sm-auto mt-4 mt-sm-6 overflow-hidden bg-indigo-darken-4"
    min-height="280"
    rounded="0"
    elevation="0"
  >
    <v-container
      class="d-flex align-center justify-space-between ga-6 py-8 py-sm-10 px-6 px-sm-12"
    >
      <div class="d-flex flex-column align-start">
        <div
          class="d-flex align-center ga-2 text-indigo-lighten-3 text-caption font-weight-bold"
        >
          <v-icon icon="mdi-orbit" size="16" />
          <span>THE SPACEX FLEET</span>
        </div>

        <h1 class="text-h3 text-sm-h2 font-weight-black text-white mt-4">
          Built to reach
          <span class="text-indigo-lighten-3"> beyond.</span>
        </h1>

        <p class="text-body-1 text-indigo-lighten-4 mt-4 mb-0">
          Discover the vehicles powering a new era of space exploration.
        </p>
      </div>

      <v-avatar
        color="white"
        variant="tonal"
        size="176"
        class="d-none d-sm-flex flex-shrink-0"
        aria-hidden="true"
      >
        <v-icon icon="mdi-rocket-launch" size="88" class="text-white" />
      </v-avatar>
    </v-container>
  </v-card>
</template>
