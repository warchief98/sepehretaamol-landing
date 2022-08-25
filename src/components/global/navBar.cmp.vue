<template>
    <div class="menu-wrapper container-fluid flex flex-nowrap items-center justify-center px-4 mb-4">
        <figure class="logo-container w-1/5">
            <img src="@/assets/img/icon/main-logo.png" alt="">
        </figure>

        <nav class="nav-container w-full flex flex-wrap mx-4 space-x-1 items-center">
            <!-- 1 -->
            <div class="px-6">خانه</div>
            <!-- 2 -->
            <a-dropdown>
                <a class="ant-dropdown-link flex items-center" @click.prevent>
                خدمات پس از فروش
                <caret-down-filled class="mr-2" style="font-size:10px" />
                
                <DownOutlined />
                </a>
                
                <template #overlay>
                <a-menu>
                    <a-menu-item>1st menu item</a-menu-item>
                    <a-menu-item>2nd menu item</a-menu-item>
                        <a-sub-menu key="sub1" title="نمایندگان خدمات">
                            <a-menu-item>3rd menu item</a-menu-item>
                            <a-menu-item>4th menu item</a-menu-item>
                        </a-sub-menu>
                    <a-sub-menu key="sub2" title="disabled sub menu">
                    <a-menu-item>5d menu item</a-menu-item>
                    <a-menu-item>6th menu item</a-menu-item>
                    </a-sub-menu>
                </a-menu>
                </template>
            </a-dropdown>
            <!-- 3 -->
            <div class="px-6">استخدام</div>
            <!-- 4 -->
            <div class="px-6">درباره ما</div>
            <!-- 5 -->
            <div class="px-6">ارتباط با ما</div>
            <!-- 6 -->
            <div class="px-6">مجله تکنولوژی سپهر تعامل</div>
        </nav>

        <div class="search-container w-1/3 flex flex-wrap justify-between">
            <div class="w-full md:w-1/2 text-right">
                <button>search</button>
            </div>
            <div class="w-full md:w-1/2 text-right">
                <div class="whitespace-nowrap">021-8830000</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .menu-wrapper{
        min-height: 80px;
        .nav-container{
            // a{
            //     text-decoration: none;
            //     color: black;
            // }
        }
        .logo-container{
        }
    }
</style>
<script>
import { defineComponent } from 'vue';
import { CaretDownFilled } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    CaretDownFilled,
  },
});
</script>