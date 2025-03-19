<script setup>
import { ref } from 'vue';

const props = defineProps(['items']);
const emit = defineEmits(['addItem']);
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
  
  emit('addItem', item);
  newItem.value = '';
  isPrioritari.value = false;
  isComprat.value = false;
};
</script>

<template>
  <div>
    <h2>Llista amb prioritats</h2>
    <button @click="newItem = ''; isPrioritari = false; isComprat = false">Cancel·lar</button>
    <input v-model="newItem" placeholder="Add an item" />
    <input type="checkbox" v-model="isPrioritari" /> Prioritari
    <input type="checkbox" v-model="isComprat" /> Comprat
    <button @click="addItem">Afegir</button>

    <ul>
      <li v-for="item in props.items" :key="item.id"
          :style="{
            color: item.altaPrioritat && !item.comprat ? 'red' : 'black',
            textDecoration: item.comprat ? 'line-through' : 'green',
          }">
        {{ item.label }} - Prioritari: {{ item.altaPrioritat }} - Comprat: {{ item.comprat }}
      </li>
    </ul>
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