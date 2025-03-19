<script setup>
import { onMounted, ref } from 'vue';
import { useEmbassaments } from '../composables/useEmbassaments';
const { embassaments, fetchEmbassaments } = useEmbassaments();
onMounted(() => { fetchEmbassaments(); });
</script>
<template>
  <div>
    <h1>Llista d'Embassaments</h1>
    <ul>
      <li v-for="emb in embassaments" :key="emb">
        <RouterLink :to="`/aigua/${emb}`">{{ emb }}</RouterLink>
      </li>
    </ul>
  </div>
</template>