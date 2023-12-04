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

let initialIndex = 0;

function getDisplayedImages(): string[] {
  const displayed: string[] = [];
  for (let i = 0; i < instagramImages.value.length; i++) {
    const index = (initialIndex + i) % instagramImages.value.length;
    displayed.push(instagramImages.value[index]);
  }
  return displayed;
}

const displayedImages = ref<string[]>(getDisplayedImages());

function next() {
  initialIndex = (initialIndex - 1 + instagramImages.value.length) % instagramImages.value.length;
  displayedImages.value = getDisplayedImages();
  updateImageTransition('slide-prev');
}

function previous() {
  initialIndex = (initialIndex + 1) % instagramImages.value.length;
  displayedImages.value = getDisplayedImages();
  updateImageTransition('slide-next');
}

function updateImageTransition(className: string) {
  const images = document.querySelectorAll('.insta-image');
  images.forEach((image, index) => {
    if (index ===  index) {
      image.classList.add(className);
      setTimeout(() => {
        image.classList.remove(className);
        image.classList.add('active');
      }, 500);
    } else {
      image.classList.remove('active', 'slide-prev', 'slide-next');
    }
  });
}
</script>
