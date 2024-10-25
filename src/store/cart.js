// src/store/cart.js
import { ref, computed } from 'vue';

const cartItems = ref([]);

export function useCart() {
  const addToCart = (product) => {
    const item = cartItems.value.find((item) => item.id === product.id);
    if (item) {
      item.quantity++;
    } else {
      cartItems.value.push({ ...product, quantity: 1 });
    }
  };

  const removeItem = (index) => {
    cartItems.value.splice(index, 1);
  };

  const total = () => {
    return cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  };

  const cartCount = computed(() => {
    return cartItems.value.reduce((count, item) => count + item.quantity, 0);
  });

  return {
    cartItems,
    addToCart,
    removeItem,
    total,
    cartCount,
  };
}
