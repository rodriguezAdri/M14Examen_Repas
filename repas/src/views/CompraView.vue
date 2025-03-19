<script setup>
import { ref } from 'vue';

const items = ref([]);
const newItem = ref('');
const isPrioritari = ref(false);
const isComprat = ref(false);

const addItem = () => {
  if (newItem.value.trim() === '') return;
  
  const item = {
    id: Date.now(),
    label: newItem.value,
    comprat: isComprat.value,
    altaPrioritat: isPrioritari.value
  };
  
  items.value.unshift(item);
  newItem.value = '';
  isPrioritari.value = false;
  isComprat.value = false;
};
</script>

<template>
  <div>
    <h1>Llista amb prioritats</h1>
    <button @click="addItem">Afegir element</button>
    
    <ul>
      <li v-for="item in items" :key="item.id"
          :style="{
            color: item.altaPrioritat && !item.comprat ? 'red' : 'black',
            textDecoration: item.comprat ? 'line-through' : 'none'
          }">
        {{ item.label }} - Prioritari: {{ item.altaPrioritat }} - Comprat: {{ item.comprat }}
      </li>
    </ul>
    
    <h2>Llista amb prioritats</h2>
    <button @click="newItem = ''; isPrioritari = false; isComprat = false">Cancel·lar</button>
    <input v-model="newItem" placeholder="Add an item" />
    <input type="checkbox" v-model="isPrioritari" /> Prioritari
    <input type="checkbox" v-model="isComprat" /> Comprat
    <button @click="addItem">Afegir</button>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  font-size: 1.2rem;
  margin: 5px 0;
}
</style>