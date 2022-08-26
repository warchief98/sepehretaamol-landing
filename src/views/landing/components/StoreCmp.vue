<template>
    <div id="store">
        <div class="side-box">
            <a-menu
                id="menu"
                v-model:openKeys="openKeys"
                v-model:selectedKeys="selectedKeys"
                style="width: 256px"
                mode="inline"
                @click="handleClick"
            >   
                <!-- sub menu 1 -->
                <a-sub-menu key="sub1" @titleClick="titleClick">
                    <!-- <template #icon>
                        <MailOutlined />
                    </template> -->
                    <template #title>Navigation One</template>
                        <a-tree
                            v-model:expandedKeys="expandedKeys"
                            v-model:selectedKeys="selectedKeys"
                            v-model:checkedKeys="checkedKeys"
                            checkable
                            :tree-data="treeData"
                        >
                            <template #title="{ title, key }">
                                <span v-if="key === '0-0-1-0'" style="color: #1890ff">{{ title }}</span>
                                <template v-else>{{ title }}</template>
                            </template>
                        </a-tree>
                </a-sub-menu>

                <!-- sub menu 2 -->
                <a-sub-menu key="sub2" @titleClick="titleClick">
                    <!-- <template #icon>
                        <AppstoreOutlined />
                    </template> -->
                    <template #title>Navigation Two</template>
                    <a-menu-item key="5">Option 5</a-menu-item>
                    <a-menu-item key="6">Option 6</a-menu-item>
                    <a-sub-menu key="sub3" title="Submenu">
                        <a-menu-item key="7">Option 7</a-menu-item>
                        <a-menu-item key="8">Option 8</a-menu-item>
                    </a-sub-menu>
                </a-sub-menu>

                <!-- sub menu 3 -->
                <a-sub-menu key="sub4">
                        <!-- <template #icon>
                            <SettingOutlined />
                        </template> -->
                    <template #title>Navigation Three</template>
                    <a-menu-item key="9">Option 9</a-menu-item>
                    <a-menu-item key="10">Option 10</a-menu-item>
                    <a-menu-item key="11">Option 11</a-menu-item>
                    <a-menu-item key="12">Option 12</a-menu-item>
                </a-sub-menu>
            </a-menu>
            <div>
                <button @click="submit">ok</button>
            </div>
        </div>

        <div class="main-box flex flex-wrap justify-between">
            <MobileCard 
            v-for="item in mobileDataTemp"
            :key="item.id"
            :mobileData="item"
            />
        </div>
    </div>
</template>

<script setup>
    import MobileCard from '@/views/landing/components/StoreCard.vue'
    import { DATA_MOB } from '@/data/MOBILE_DATA'
    import {  ref, watch, onMounted, reactive } from 'vue'


    /*
        ___________________________________________mobiles data
    */
    const mobileData = reactive(DATA_MOB)

    const mobileDataTemp = ref(mobileData)
    

    const submit = () => {
        const template = mobileData

        console.log('DATA', template)

        if(checkedKeys.value.find(x => x == '0-0')){
            mobileDataTemp.value = mobileData
        }
        else{
            checkedKeys.value.forEach(item => {
                mobileDataTemp.value = template.filter((e) => {
                    if(e.brand == item){
                        return e
                    }
                })
            })
        }

        // console.log(checkedKeys._rawValue)
        // console.log('mobile dATA:', mobileData)
        
        console.log('availableData',mobileDataTemp.value)
    }


   /*
    ______________________________________________filters for search
   */ 
    // side navigation menu data(Antd)
    const selectedKeys = ref(['1']);
    const openKeys = ref(['']);

    const handleClick = e => {
      console.log('click', e);
    };

    const titleClick = e => {
      console.log('titleClick', e);
    };

    watch(() => openKeys, val => {
      console.log('openKeys', val);
    });

    // side navigation menu data(Antd)
    const expandedKeys = ref(['0-0']);
    const selectedKeys2 = ref(['']);
    const checkedKeys = ref(['']);
    watch(expandedKeys, () => {
    //   console.log('expandedKeys', expandedKeys);
    });
    watch(selectedKeys2, () => {
      console.log('selectedKeys2', selectedKeys2);
    });
    watch(checkedKeys, () => {
      console.log('checkedKeys', checkedKeys._rawValue);
    });
    const treeData = [{
        title: 'برند',
        key: '0-0',
        children: [{
            title: 'َApple',
            key: 'apple',
            disabled: false,
        },
        {
            title: 'Samsung',
            key: 'samsung',

        }],
    }];


</script>


<script>
import { defineComponent, watch } from 'vue';
import { MailOutlined, QqOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    MailOutlined,
    QqOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
});
</script>

<style scoped lang="scss">
    #store{
        box-shadow: inset 0 0 5px lightseagreen;
        height: 90vh;
        display: flex;
        .side-box{
            height: 100%;
            width: 20%;
            border: 1px solid goldenrod;
            overflow-y: auto;
            overflow-x: hidden;
            #menu{
                width: 100% !important;
                max-width: 100% !important;
            }
        }
        .main-box{
            height: 100%;
            width: 80%;
            overflow-y: auto;
        }
    }
</style>