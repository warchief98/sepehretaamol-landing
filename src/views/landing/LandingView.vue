<template>
  <div class="landing">
  

    <!-- LandingView main slider component -->
    <SliderCmp />

    <!-- STORE -->
    <!-- added Store part to landing for test  -->
    <StoreCmp />

    <div class="container">


      <!-- sub slider's cards -->
      <div class="flex flex-wrap mb-8">
        <SubSliderCard v-for="index in 4" :key="index" />
      </div>

      <!-- attachments -->
      <div class="space-y-5 flex flex-wrap">

        <!-- full width attachments -->
        <div 
        class="rounded-md overflow-hidden"
        v-for="i in 2"
        :key="i"
        >
          <a href="">
            <img src="@/assets/img/pic/guarantee.jpg" alt="">
          </a>
        </div>

        

        <div class="flex">

          <!-- half width attachments -->
          <div class="rounded-md overflow-hidden ml-2">
            <a href="">
              <img src="@/assets/img/pic/guarantee.jpg" alt="">
            </a>
          </div>

          <!-- half width attachments -->
          <div class="rounded-md overflow-hidden mr-2">
            <a href="">
              <img src="@/assets/img/pic/guarantee.jpg" alt="">
            </a>
          </div>

        </div>

      </div>

      <!--  -->
      <div class="flex flex-wrap py-4 mb-8">
        <!-- card 1 -->
        <div class="w-full md:w-1/2 lg:w-1/3 flex flex-col items-center">
          <figure class="w-1/2 p-8">
            <img src="@/assets/img/icon/wholesale-icon-1.svg" alt="">
          </figure>

          <h3 class="fz-1 fw-bold">فروش عمده برای همکاران</h3>
        </div>

        <!-- card  2-->
        <div class="w-full md:w-1/2 lg:w-1/3 flex flex-col items-center">
          <figure class="w-1/2 p-8">
            <img src="@/assets/img/icon/wholesale-icon-1.svg" alt="">
          </figure>

          <h3 class="fz-1 fw-bold">فروش عمده برای همکاران</h3>
        </div>

        <!-- card 3 -->
        <div class="w-full md:w-1/2 lg:w-1/3 flex flex-col items-center">
          <figure class="w-1/2 p-8">
            <img src="@/assets/img/icon/wholesale-icon-1.svg" alt="">
          </figure>

          <h3 class="fz-1 fw-bold">فروش عمده برای همکاران</h3>
        </div>


      </div>

      <!-- bot carousel tech megazin -->
      <div class="megazine-container mb-8">

        <div class="flex">

          <div class="pl-4">
            <div class="card">
              <figure>
                <img src="@/assets/img/pic/Samsung-Galaxy-A52s-5G-400x400.jpg" alt="">
              </figure>
              <p class="fz-1 fw-bold text-center my-8 px-4">
                بهترین گوشی ها با ظرفیت باتری در سال 2021 ؛ گوشی‌هایی که ساعت‌ها با شما هستند
              </p>
              <footer class="text-left">
                <a href="#">ادامه مطلب&larr;</a>
              </footer>
            </div>
          </div>

          <div class="pl-4">
            <div class="card">
              <figure>
                <img src="@/assets/img/pic/Samsung-Galaxy-A52s-5G-400x400.jpg" alt="">
              </figure>
              <p class="fz-1 fw-bold text-center my-8 px-4">
                بهترین گوشی ها با ظرفیت باتری در سال 2021 ؛ گوشی‌هایی که ساعت‌ها با شما هستند
              </p>
              <footer class="text-left">
                <a href="#">ادامه مطلب&larr;</a>
              </footer>
            </div>
          </div>

          <div class="">
            <div class="card">
              <figure>
                <img src="@/assets/img/pic/Samsung-Galaxy-A52s-5G-400x400.jpg" alt="">
              </figure>
              <p class="fz-1 fw-bold text-center my-8 px-4">
                بهترین گوشی ها با ظرفیت باتری در سال 2021 ؛ گوشی‌هایی که ساعت‌ها با شما هستند
              </p>
              <footer class="text-left">
                <a href="#">ادامه مطلب&larr;</a>
              </footer>
            </div>
          </div>

        </div>

      </div>

      <h2 class="fz-4 fw-bold mb-8">برند های ما</h2>
    </div>

    <div class="container-fluid flex justify-center items-center bg-gray-400 py-10">

      <div class="w-1/3 flex justify-center">
        <figure class="w-1/3">
          <img src="@/assets/img/icon/brand-icon-samsung-300x88.png" alt="">
        </figure>
      </div>

      <div class="w-1/3 flex justify-center">
        <figure class="w-1/3">
          <img src="@/assets/img/icon/brand-icon-samsung-300x88.png" alt="">
        </figure>
      </div>

      <div class="w-1/3 flex justify-center">
        <figure class="w-1/3">
          <img src="@/assets/img/icon/brand-icon-samsung-300x88.png" alt="">
        </figure>
      </div>


    </div>
  </div>
</template>

<script setup>
import SliderCmp from './components/SliderCmp.vue'
import SubSliderCard from './components/SubSliderCard.vue';
import StoreCmp from './components/StoreCmp.vue'


</script>
