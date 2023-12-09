<template>
  <div class="store-page">
    <div class="filter-container">
      <div class="filter-button">
        <button @click="toggleShow()"><i class="fa-solid fa-filter"></i>Filtro</button>
      </div>
      <div class="filter-box" :class="{ show: showState }">
        <div class="filter-options">
          <div class="category-content" v-for="product in catregoryList" :key="product.id">
            <div class="category-car">
              <input type="checkbox" :id="product.name" :name="product.name"
              v-model="catregoryList" :value="product.id"
              />
              <label :for="product.name">{{product.name  }}</label>
              </div>
          </div>
        </div>
        <div class="filter-options">
          <div class="preco">
            <p>Preco</p>
            <div class="categoria">
              <input type="checkbox" id="1-20" name="1-20" />
              <label for="1-20">1-20R$</label>
            </div>
            <div class="categoria">
              <input type="checkbox" id="20-40" name="20-40" />
              <label for="20-40">20-40R$</label>
            </div>
            <div class="categoria">
              <input type="checkbox" id="40-60" name="40-60" />
              <label for="40-60">40-60R$</label>
            </div>
            <div class="categoria">
              <input type="checkbox" id="60+" name="60+" />
              <label for="60+">60+R$</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="store-container">
      <div class="row">
        <div
          class="loja-container"
          v-for="product in paginatedItems"
          :key="product.id"
        >
          <div class="card">
            <img :src="product.images" alt="" />
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
              <p>{{ product.title }}</p>
            </div>
            <div class="price">
              <p>R$ {{ product.price }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="page-buttons">
        <button
          v-for="pageNumber in totalPages"
          :key="pageNumber"
          @click="setCurrentPage(pageNumber)"
        >
          {{ pageNumber }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import axios, { all } from "axios";
import type { products } from "../types/products";


const showState = ref(false)

const toggleShow = () => {
  showState.value = !showState.value
}

const allItemsList = ref<products[]>([]);
const selectedItemList = ref<products[]>([]);
const catregoryList = ref<products[]>([]);

const getProducts = async () => {
  try {
    const response = await axios.get("https://api.escuelajs.co/api/v1/products");
    allItemsList.value = response.data;
  } catch (eror) {
    console.log(console.error());
  }
};

onMounted(async () => {
  await getProducts();
  filterCarsByCategoriaId();
  console.log("a lista aqui brother", catregoryList.value)
});

const itemsPerPage = 6;
const currentPage = ref(1);

// Computed property to paginate items based on current page
const paginatedItems = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return allItemsList.value.slice(startIndex, endIndex);
});

// Computed property to calculate total pages
const totalPages = computed(() =>
  Math.ceil(allItemsList.value.length / itemsPerPage)
);

// Function to set the current page
const setCurrentPage = (page: number) => {
  currentPage.value = page;
};


const filterCarsByCategoriaId = () => {
  if (selectedItemList.value.length === 0) {
    const uniqueCategoryNames = [...new Set(allItemsList.value.map(product => product.category.name))];
    catregoryList.value = uniqueCategoryNames.map(name => ({ name }));
  } else {
    catregoryList.value = allItemsList.value
      .filter(product => selectedItemList.value.includes(product.category.id))
      .map(product => ({ name: product.category.name }));
  }
};
</script>
