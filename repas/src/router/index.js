import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AiguaView from '../views/AiguaView.vue';
import CompraView from '../views/CompraView.vue';
import DetallEmbassament from '../components/DetallEmbassament.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/aigua', component: AiguaView },
  { path: '/compra', component: CompraView },
  { path: '/aigua/:nomEmbassament', component: DetallEmbassament, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
