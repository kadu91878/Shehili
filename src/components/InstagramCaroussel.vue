<template>
  <div class="instagram-caroussel" id="caroussel">
    <div class="head-title">
      <span>#Instagram</span>
    </div>
    <div class="sub-title">
      <h2>Shehili</h2>
    </div>
    <div class="instagram-container">
      <div class="row">
        <div class="instagram-caroussel">
          <div class="arrows">
            <div class="arrow-left">
              <button @click="previous()"><i class="fa-solid fa-chevron-left"></i></button>
            </div>
            <div class="arrow-right">
              <button @click="next()"><i class="fa-solid fa-chevron-right"></i></button>
            </div>
          </div>
          <div class="insta-image" v-for="(image, index) in displayedImages" :key="index">
            <img :src="image" alt="" />
            <div class="buttons">
              <div class="insta-button">
                <button><i class="fa-brands fa-instagram"></i></button>
              </div>
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
 "src/assets/Instagram/instaimg(1).jpeg",
 "src/assets/Instagram/instaimg(2).jpeg",
 "src/assets/Instagram/instaimg(3).jpeg",
 "src/assets/Instagram/instaimg(4).jpeg",
 "src/assets/Instagram/instaimg(5).jpeg",
]);

const displayedImages = ref<string[]>(instagramImages.value.slice(0, 3));

function previous() {
 if (displayedImages.value.length > 1) {
 const firstImage = displayedImages.value.shift() as string;
 displayedImages.value.push(firstImage);
 }
}

function next() {
 if (displayedImages.value.length > 1) {
 const lastImage = displayedImages.value.pop() as string;
 displayedImages.value.unshift(lastImage);
 }
}
</script>
