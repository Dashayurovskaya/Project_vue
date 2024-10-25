<template>
  <div class="product-page">
    <div class="product-card">
      <img class="product-image" :src="product.image" alt="Product Image" />
      <div class="product-info">
        <h1>{{ product.name }}</h1>
        <p class="price">{{ product.price }} ₽</p>
        <p class="description">{{ product.description }}</p>
        <button @click="addToCart">Добавить в корзину</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useCart } from '@/store/cart.js';

export default {
  name: 'ProductPage',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      product: {}
    };
  },
  setup() {
    const { addToCart } = useCart();
    return { addToCart };
  },
  mounted() {
    const products = [
      { id: 1, name: 'Гуашь', price: 748, image: '/images/1.jpg', description: 'Набор из 16 цветов.' },
      { id: 2, name: 'Маркеры', price: 3200, image: '/images/2.jpg', description: 'Набор цветных спиртовых маркеров' },
      { id: 3, name: 'Карандаши', price: 1540, image: '/images/3.jpg', description: 'Набор акварельных цветных карандашей' }
    ];
    this.product = products.find(p => p.id === parseInt(this.id));
  },
  methods: {
    addToCart() {
      this.addToCart(this.product);
    }
  }
};
</script>

<style scoped>
.product-page {
  padding: 40px 20px;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  background: linear-gradient(135deg, #f4eeee, #e2dcdc);
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image {
  margin-top: 5%;
  max-width: 200px;
  border-radius: 15px;
  margin-bottom: 20px;
}

.product-info {
  max-width: 500px;
  text-align: center;
}

h1 {
  font-size: 2em;
  color: #333;
  margin-bottom: 10px;
}

.price {
  font-size: 1.5em;
  color: #ff6666;
  margin-bottom: 15px;
}

.description {
  font-size: 1.1em;
  color: #666;
  margin-bottom: 25px;
}

button {
  padding: 12px 20px;
  background-color: #ffcccb;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #ffb6b3;
}
</style>
