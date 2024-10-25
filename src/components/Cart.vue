<template>
  <div class="cart-page">
    <h1>Твоя корзина</h1>
    <div v-if="cartItems.length">
      <table class="cart-table">
        <thead>
          <tr>
            <th>Товар</th>
            <th>Цена</th>
            <th>Кол-во</th>
            <th>Сумма</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in cartItems" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.price }} ₽</td>
            <td>{{ item.quantity }}</td>
            <td>{{ (item.price * item.quantity).toFixed(2) }} ₽</td>
            <td><button @click="removeItem(index)">Удалить</button></td>
          </tr>
        </tbody>
      </table>
      <div class="total">
        <h3>Итоговая сумма: {{ total() }} ₽</h3>
      </div>
    </div>
    <div v-else>
      <p>Ваша корзина пуста.</p>
    </div>
  </div>
</template>

<script>
import { useCart } from '@/store/cart.js';

export default {
  name: 'Cart',
  setup() {
    const { cartItems, removeItem, total } = useCart();
    return { cartItems, removeItem, total };
  }
};
</script>

<style scoped>
.cart-page {
  padding: 40px;
  text-align: center;
  background: linear-gradient(135deg, #f4eeee, #e2dcdc);
  border-radius: 15px;
  max-width: 1200px;
  margin: 20px auto;
}

.cart-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.cart-table th, .cart-table td {
  border: 1px solid #ddd;
  padding: 15px;
  text-align: center;
  border-radius: 10px;
}

.cart-table th {
  background-color: #f8d7da;
  color: #333;
}

button {
  padding: 8px 12px;
  background-color: #f5b7b7;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}

button:hover {
  background-color: #f19494;
}

.total {
  font-size: 1.5em;
  margin-top: 20px;
}
</style>
