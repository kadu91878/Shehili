<template>
  <div class="instagram-caroussel" id="caroussel">
    <div class="head-title">
      <span>#Instagram</span>
    </div>
    <div class="sub-title">
      <h2>Shehili</h2>
    </div>
    <div class="instagram-container">
      <div class="instagram-caroussel">
        <div class="insta-image" v-for="image in instagramImages">
          <img :src="image" alt="" />
          <div class="buttons">
            <div class="arrow-left">
              <button><i class="fa-solid fa-chevron-left"></i></button>
            </div>
            <div class="insta-button">
              <button><i class="fa-brands fa-instagram"></i></button>
            </div>
            <div class="arrow-right">
              <button><i class="fa-solid fa-chevron-right"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const instagramImages = ref<string[]>([
  "../assets/Instagram/instaimg(1).jpeg",
  "src/assets/Instagram/instaimg(2).jpeg",
  "src/assets/Instagram/instaimg(3).jpeg",
  "src/assets/Instagram/instaimg(4).jpeg",
  "src/assets/Instagram/instaimg(5).jpeg",
]);

for (const i of instagramImages.value) {
  console.log("aqui esta a imagem", i);
}
</script>
