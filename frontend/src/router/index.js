import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import TopUp from '../views/TopUp.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/topup/:gameName',
    name: 'top-up',
    component: TopUp,
    props: true, // Agar params diteruskan sebagai props ke komponen TopUp
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
