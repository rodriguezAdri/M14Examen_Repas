<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useEmbassaments } from '../composables/useEmbassaments';

const route = useRoute();
const router = useRouter();
const { fetchDetallEmbassament } = useEmbassaments();
const detall = ref([]);

onMounted(async () => { detall.value = await fetchDetallEmbassament(route.params.nomEmbassament); });

const tornar = () => { router.push('/aigua'); };
</script>
<template>
  <div>
    <h1>Embassament de {{ route.params.nomEmbassament }}</h1>
    <p>Nivells d'aigua corresponent als últims 100 dies</p>
    <div class="info-box">
      <h2>Capacitat total: <strong>5.56 (hm³)</strong></h2>
      <div v-for="(dia, index) in detall" :key="index" class="day-box">
        <h3>Dia {{ index + 1 }}: {{ dia.dia }}</h3>
        <ul>
          <li><strong>Nivell absolut sobre el nivell del mar:</strong> {{ dia.nivell_absolut }} m</li>
          <li><strong>Percentatge volum embassat:</strong> {{ dia.percentatge_volum_embassat }} %</li>
          <li><strong>Volum embassat:</strong> {{ dia.volum_embassat }} (hm³)</li>
        </ul>
      </div>
    </div>
    <button @click="tornar" class="btn">Tornar</button>
  </div>
</template>
<style scoped>
.info-box {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 5px;
  background-color: #f9f9f9;
  margin-bottom: 1rem;
}
.day-box {
  border: 1px solid #ddd;
  padding: 0.5rem;
  margin-bottom: 1rem;
  background-color: white;
}
.btn {
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}
.btn:hover {
  background-color: #0056b3;
}
</style>