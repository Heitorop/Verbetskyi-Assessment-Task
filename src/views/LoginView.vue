<template>
  <v-card class="pa-12 pb-8" elevation="8" max-width="500" rounded="lg">
    <LoginForm />
  </v-card>
</template>

<script setup>
import LoginForm from "@/components/LoginForm.vue";
</script>

<style lang="scss">
.v-card {
  width: 100%;
  min-width: 320px;
}
</style>
