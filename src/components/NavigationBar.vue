<template>
  <div class="navigation-bar">
    <router-link to="/" class="head-title">
      <span> <img src="../assets/images/Shehili.png" alt="" /></span
    ></router-link>
    <ul class="nav-item" :class="{ show: showState }">
      <li>
        <a v-if="route.name != 'main'"
          ><router-link to="/" replace>home</router-link></a
        >
        <a href="#home" v-else>home</a>
      </li>
      <li>
        <a v-if="route.name != 'main'"
          ><router-link to="/"> loja</router-link></a
        >
        <a href="#work" v-else>loja</a>
      </li>
      <li>
        <a v-if="route.name != 'car-section'"
          ><router-link to="/car-section">sobre</router-link></a
        >
        <a href="#car" v-else>contato</a>
      </li>
      <li>
        <a v-if="route.name != 'main'"><router-link to="/">faq</router-link></a>
      </li>
    </ul>
    <div class="account-box">
      <div class="login">
        <i class="fa-solid fa-circle-user"></i>
        <p>login</p>
      </div>
      <div class="cart-box">
        <div class="cart">
          <i class="fa-solid fa-cart-shopping"></i>
          <p>0</p>
        </div>
      </div>
      <div
        class="menu-toggle"
        @click="toggleMenu()"
        :class="{ show: showState }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";

const showState = ref(false);

const toggleMenu = () => {
  showState.value = !showState.value;
};

window.onscroll = () => {
  showState.value = false;
};

const router = useRouter();
const route = useRoute();

function navigateToHome() {
  router.push("/");
}
</script>
