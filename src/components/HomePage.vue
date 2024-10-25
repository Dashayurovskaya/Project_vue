<template>
  <div class="home-page">
    <h1>Добро пожаловать в Магазин!</h1>
    <ProductList />
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';

export default {
  name: 'HomePage',
  components: {
    ProductList
  }
};
</script>

<style scoped>
.home-page {
  text-align: center;
  padding: 40px;
  background: linear-gradient(135deg, #f0e4e4, #e0d4d4);
  border-radius: 15px;
  max-width: 1200px;
  margin: 20px auto;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 30px;
  color: #333;
}
</style>
