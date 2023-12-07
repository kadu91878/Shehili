<template>
    <div class="store-page">
        <div class="store-container">
            <div class="row">
                <div class="loja-container" v-for="product in paginatedItems" :key="product.id">
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
              <div class="page-buttons">
                <button v-for="pageNumber in totalPages" :key="pageNumber" @click="setCurrentPage(pageNumber)">
                    {{ pageNumber }}
                  </button>
              </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import {ref, computed, onMounted} from 'vue';
import axios from 'axios';
import type {products} from '../types/products';


const allItemsList = ref<products[]>([]);


const getProducts = async () =>{
  try{
    const response = await axios.get('https://fakestoreapi.com/products')
    allItemsList.value = response.data
  }catch(eror){
    console.log(console.error())
  }
}

onMounted(async () => {
  await getProducts()
})

const itemsPerPage = 6;
const currentPage = ref(1);

// Computed property to paginate items based on current page
const paginatedItems = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return allItemsList.value.slice(startIndex, endIndex);
});

// Computed property to calculate total pages
const totalPages = computed(() => Math.ceil(allItemsList.value.length / itemsPerPage));

// Function to set the current page
const setCurrentPage = (page: number) => {
  currentPage.value = page;
};
</script>