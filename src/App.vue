<template>
  <div id="app">
    <nav>
      <router-link to="/">ГЛАВНАЯ</router-link>
      <router-link to="/cart">
        КОРЗИНА <span v-if="cartCount > 0">({{ cartCount }})</span>
      </router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { useCart } from '@/store/cart.js';

export default {
  name: 'App',
  setup() {
    const { cartCount } = useCart();
    return {
      cartCount
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 15px 0;
  background: #f5b5b5;
  border-radius: 12px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

nav a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 12px;
  transition: background-color 0.3s ease;
}

nav a:hover {
  background-color: #f19292;
}

nav a span {
  color: #ff6666;
}

.router-view-container {
  margin-top: 70px; 
}
</style>
