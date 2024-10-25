import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import ProductPage from './components/ProductPage.vue';
import Cart from './components/Cart.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/product/:id', component: ProductPage, props: true },
  { path: '/cart', component: Cart }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
