<script setup>
import { ref } from 'vue';
import LlistaPrioritats from '../components/LlistaPrioritats.vue';

const items = ref([]);

const addItem = (item) => {
  items.value.unshift(item);
};
</script>

<template>
  <div>
    <h1>Compra</h1>
    <LlistaPrioritats :items="items" @addItem="addItem" />
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>