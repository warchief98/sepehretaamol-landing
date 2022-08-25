<template>
    <div class="mobile-card-container w-full lg:w-1/4 p-2">
        <header>
            <figure>
                <img src="@/assets/img/pic/mobile-1.avif" alt="">
            </figure>
        </header>
        <footer>
            <div class="flex justify-between my-2">
                <span class="w-1/2">رنگ</span>
                <span class="w-1/2">{{ mobileData.color }}</span>
            </div>

            <div class="flex justify-between my-2">
                <span class="w-1/2">برند</span>
                <span class="w-1/2">{{ mobileData.brand }}</span>
            </div>

            <div class="flex justify-between my-2">
                <span class="w-1/2">مدل</span>
                <span class="w-1/2">{{ mobileData.model }}</span>
            </div>

            <div class="flex justify-between my-2">
                <span class="w-1/2">قیمت</span>
                <span class="w-1/2">{{ mobileData.price }}</span>
            </div>
        </footer>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';

    const props = defineProps([
        'mobileData'
    ])



</script>
<style lang="scss">
    .mobile-card-container{
        box-shadow: 0 0 5px black;
        margin: 15px;
        header{
            border-bottom: 1px solid #000;
            figure{
                img{
                    object-fit: contain;
                }
            }
        }
        footer{

        }
    }
</style>