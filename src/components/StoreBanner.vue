<template>
  <div class="loja-banner">
    <div class="head-title">
      <span>Destaques</span>
    </div>
    <div class="sub-title">
      <p>Lorem ipsum dolor sit.</p>
    </div>
    <div class="row">
      <div class="loja-container" v-for="product in bestList" :key="product.id">
        <div class="card">
          <img :src="product.image" alt="" />
          <div class="shopping-buttons">
            <button class="button-shop">
              <i class="fa-solid fa-bag-shopping"></i>
            </button>
            <button class="button-shop">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <button class="button-shop">
              <i class="fa-regular fa-heart"></i>
            </button>
          </div>
        </div>
        <div class="info-container">
          <div class="description">
            <p>{{product.title}}</p>
          </div>
          <div class="price">
            <p>R$ {{product.price}}</p>
          </div>
        </div>
      </div>
    </div>
  
  </div>
</template>


<script setup lang="ts">
import {ref, onMounted} from 'vue';
import axios from 'axios';
import type {products} from '../types/products';

const productList = ref<products[]>([]);
const bestList = ref<products[]>([]);


const getProducts = async () =>{
  try{
    const response = await axios.get('https://fakestoreapi.com/products')
    productList.value = response.data
    // console.log(productList.value)
  }catch(eror){
    console.log(console.error())
  }
}

onMounted(async () => {
  await getProducts()
  BestSeller()
  console.log(bestList.value)
})


const BestSeller:any = () => {
  for(const product of productList.value){
    if(product.rating.rate >=4.7){
      bestList.value.push(product)
    }
  }
  bestList.value = bestList.value
  return bestList
}

</script>