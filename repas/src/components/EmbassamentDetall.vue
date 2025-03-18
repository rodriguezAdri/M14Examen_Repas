<template>
    <div>
        <h1>Detall de l'Embassament: {{ nom }}</h1>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['nom']);
</script>