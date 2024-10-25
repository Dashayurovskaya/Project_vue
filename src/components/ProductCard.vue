<template>
    <div class="product-card">
      <router-link :to="'/product/' + product.id">
        <img :src="product.image" alt="Product Image" />
      </router-link>
      <router-link :to="'/product/' + product.id">
        <h2>{{ product.name }}</h2>
      </router-link>
      <p>{{ product.price }} ₽</p>
      <button @click="addToCart">Добавить в корзину</button>
    </div>
  </template>
  
  <script>
  import { useCart } from '@/store/cart.js';
  
  export default {
    name: 'ProductCard',
    props: {
      product: {
        type: Object,
        required: true
      }
    },
    setup(props) {
      const { addToCart } = useCart();
  
      const handleAddToCart = () => {
        addToCart(props.product);
      };
  
      return {
        addToCart: handleAddToCart
      };
    }
  };
  </script>
  
  <style scoped>
  .product-card {
    border: 1px solid #ddd;
    padding: 20px;
    text-align: center;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background: linear-gradient(135deg, #f8f8f8, #f2f2f2);
    transition: transform 0.3s ease;
  }
  
  .product-card:hover {
    transform: translateY(-5px);
  }
  
  .product-card img {
    max-width: 150px;
    border-radius: 12px;
  }
  
  .product-card h2 {
    color: #333;
    text-decoration: none;
    font-size: 1.4em;
  }
  
  button {
    margin-top: 15px;
    padding: 10px 20px;
    background-color: #ffcccb;
    color: #fff;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #ffb6b3;
  }
  </style>
  