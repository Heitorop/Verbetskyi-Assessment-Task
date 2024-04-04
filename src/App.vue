<template>
  <v-container fill-height>
    <router-view />
  </v-container>
</template>

<script setup>
import "@/styles/settings.scss";
</script>

<style lang="scss">
.v-container {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
}
</style>
