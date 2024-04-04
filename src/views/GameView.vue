<template>
  <div class="game-wrapper">
    <div>
      <p>You need set size of game filed!</p>
      <v-number-input
        v-model="xSize"
        controlVariant="split"
        label="Size X"
        :hideInput="false"
        :inset="false"
        min='0'
      />
      <v-number-input
        v-model="ySize"
        controlVariant="split"
        label="Size Y"
        :hideInput="false"
        :inset="false"
        min='0'
      />
    </div>
    <div>
      <GameField v-if="xSize && ySize" :xSize="xSize" :ySize="ySize" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import GameField from "@/components/GameField.vue";

const xSize = ref(0);
const ySize = ref(0);
</script>

<style lang="scss">
.game-wrapper {
  margin: auto;
}
p {
  font-size: 20px;
  margin-bottom: 20px;
}
.v-input {
  max-width: 200px;
}
</style>
