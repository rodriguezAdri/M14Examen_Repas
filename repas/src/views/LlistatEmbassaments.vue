<template>
    <div>
        <h1>Llistat d'Embassaments</h1>
        <ul>
            <li v-for="embassament in embassamentsUnics" :key="embassament.id">
                <router-link :to="`/embassament/${embassament.nom}`">{{ embassament.nom }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';

const embassaments = ref([]);

const embassamentsUnics = computed(() => {
    return [...new Set(embassaments.value.map(embassament => embassament.nom))];
})

onMounted(async () => {
    try{
        const response =  await axios.get('https://analisi.transparenciacatalunya.cat/resource/gn9e-3qhr.json')
    embassaments.value = response.data;
    } catch (error) {
        console.error('Error en obtenir les dades',error);
    }   
    

});
</script>

<style></style>