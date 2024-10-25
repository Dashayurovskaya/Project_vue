<template>
  <div class="product-list">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';

export default {
  name: 'ProductList',
  components: {
    ProductCard
  },
  data() {
    return {
      products: [
        { id: 1, name: 'Гуашь', price: 748, image: '/images/1.jpg' },
        { id: 2, name: 'Маркеры', price: 3200, image: '/images/2.jpg'},
        { id: 3, name: 'Карандаши', price: 1540, image: '/images/3.jpg'}
     ]
    };
  }
};
</script>

<style scoped>
.product-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
