import { createRouter, createWebHistory } from 'vue-router';
import EmbassamentList from '@/components/EmbassamentList.vue';
import EmbassamentDetall from '@/components/EmbassamentDetall.vue';

const routes = [
  { path: '/', name: 'embassamentList', component: EmbassamentList },
  { path: '/embassament/:nom', name: 'embassamentDetall', component: EmbassamentDetall, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router
