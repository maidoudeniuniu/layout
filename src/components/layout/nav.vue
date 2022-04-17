<template>
    <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#3786FD"
        text-color="#fff"
        active-text-color="#ffffff"   
        :ellipsis='fristellipsis'     
        @select="handleSelect"
    >
        <el-menu-item  v-for="(item,index) in menufirst" :index='""+index' :key='""+index'>{{item.text}}</el-menu-item> 
    </el-menu>
    <el-menu 
        class="el-menu-demo"
        mode="horizontal"
        background-color="#3786FD"
        text-color="#fff"
        active-text-color="#ffffff"   
        :ellipsis="ellipsis"     
        @select="handleSelect"   
    > 
        <el-menu-item  v-for="(item,index) in menuth" :index='""+index' :key="index">{{item.text}}</el-menu-item> 
    </el-menu>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import $store from "@/store";
import { useRouter } from 'vue-router'
import { throttle } from '@/utils/help'
const router = useRouter()
const activeIndex2 = ref('0');
// 处理路由问题,一级菜单点击
const handleSelect = (key: string, keyPath: string[]) => {  
  router.push(menu.value[key].url)
  //处理子菜单的问题
  $store.commit("SET_SUBMENU",menu.value[key].url) 
}

//路由解析
const resetRouter = () =>{
    let pathname = window.location.pathname;
    $store.commit("SET_SUBMENU",pathname)  
}


//获取菜单
let menu = ref([]);
let menufirst = ref([]);
let menuth = ref([]);
let fristellipsis = ref(false);
let ellipsis = ref(false)
let leftWidth = ref(0)
let rightWidth = ref(0)
let centontWidth = ref(0) 

onMounted (()=>{
    menu.value = $store.getters['GET_MENU']
    leftWidth.value = document.getElementsByClassName("header-left")[0].offsetWidth;
    rightWidth.value = document.getElementsByClassName("header-right")[0].offsetWidth;
    totalWidth()
    resetRouter()
    window.onresize = throttle(function (){
        totalWidth()
    },300)
})  

const totalWidth = () =>{
    menufirst.value = []
    menuth.value = []
    //重置一下数据 
    centontWidth.value =  document.documentElement.clientWidth - (leftWidth.value + rightWidth.value);
    console.log(centontWidth.value)
    //获取菜单数量
    let itemNumTemp =  parseInt(centontWidth.value /124) 
    //业务场景有三种
    //第一种宽度大于菜单数量
    //第二种宽度小于菜单一个
    //第三种宽度大于一个菜单，小于菜单数量
    if(itemNumTemp > menu.value.length ){
        menufirst.value = menu.value;  
        ellipsis.value = false
    }else if (itemNumTemp >1 && itemNumTemp<(menu.value.length)){
        ellipsis.value = true
        menufirst.value = (menu.value).slice(0,itemNumTemp); 
        menuth.value = (menu.value).slice(itemNumTemp,menu.value.length);
    }else{
        menufirst.value = []
        menuth.value = []
        ellipsis.value = true
    }
} 
</script>
<style scoped>
.el-menu--horizontal{
    border-bottom: none;
}
</style>
