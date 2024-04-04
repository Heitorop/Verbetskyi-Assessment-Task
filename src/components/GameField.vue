<template>
  <div class="game-field">
    <div v-for="(row, rowIndex) in xSize" :key="'row-' + rowIndex" class="row">
      <div
        v-for="(col, colIndex) in ySize"
        :key="'col-' + colIndex"
        :class="{ blue: colors[rowIndex][colIndex] === 'blue', square: true }"
        @mouseover="toggleColor(rowIndex, colIndex)"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { watch } from "vue";
import { ref } from "vue";

const props = defineProps({
  xSize: Number,
  ySize: Number,
});

const colors = ref([]);

const setColor = () => {
  const tempColors = [];
  for (let i = 0; i < props.xSize; i++) {
    const row = [];
    for (let j = 0; j < props.ySize; j++) {
      row.push("white");
    }
    tempColors.push(row);
  }
  colors.value = tempColors;
};

setColor();

const toggleColor = (rowIndex, colIndex) => {
  colors.value[rowIndex][colIndex] =
    colors.value[rowIndex][colIndex] === "white" ? "blue" : "white";
  console.log(colors.value);
};

watch([() => props.xSize, () => props.ySize], () => {
  setColor();
});
</script>

<style lang="scss">
.game-field {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  padding: 5px;
}
.row {
  display: flex;
}
.square {
  width: 36px;
  height: 36px;
  border: 1px solid black;
  background-color: white;

  &.blue {
    background-color: blue;
  }
}
</style>
