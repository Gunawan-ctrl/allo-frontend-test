<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    :width="300"
  >
    <v-img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD3bmp4WtJSPBpmqra1Y3knF0ajhPKE5q8Rg&s"
      class="pa-0 relative"
      cover
      height="150px"
    >
      <div class="absolute inset-0 flex flex-col bg-transparent ma-4">
        <v-avatar size="60" image="https://png.pngtree.com/png-vector/20241019/ourmid/pngtree-cartoon-rocket-ship-clipart-illustration-png-image_14113052.png" />
        <div class="font-weight-bold">Rocket Admin</div>
        <div
          class="text-capitalize text-overline text-brown-500"
          style="margin-top: -8px"
        >
          Administrator
        </div>
      </div>
    </v-img>

    <v-divider />

    <v-list nav class="text-black">
      <v-list-subheader style="font-size: 14px" class="text-black">
        MENU
      </v-list-subheader>
      <v-list-item
        color="brown"
        title="Dashboard"
        prepend-icon="mdi-view-dashboard-outline"
        value="dashboard"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue";
const drawer = ref(true);
</script>
