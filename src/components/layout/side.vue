<template>
   <div class="aside">  
      <el-menu
         default-active="2" 
         class="el-menu-vertical-demo" 
         :collapse="isCollapses">
         <el-sub-menu index="1">
            <template #title>
               <el-icon>
                  <location />
               </el-icon>
               <span>Navigator One</span>
            </template>
            <el-menu-item-group>
               <template #title><span>Group One</span></template>
               <el-menu-item index="1-1">item one</el-menu-item>
               <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
               <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
               <template #title><span>item four</span></template>
               <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
         </el-sub-menu>
         <el-menu-item index="2">
            <el-icon>
               <icon-menu />
            </el-icon>
            <template #title>Navigator Two</template>
         </el-menu-item>
         <el-menu-item index="3" disabled>
            <el-icon>
               <document />
            </el-icon>
            <template #title>Navigator Three</template>
         </el-menu-item>
         <el-menu-item index="4">
            <el-icon>
               <setting />
            </el-icon>
            <template #title>Navigator Four</template>
         </el-menu-item>
      </el-menu>
      <div class="sidebar-footer">
         <div @click="handleClose"> 
            <el-icon :size="25" v-if="isCollapses"><Expand /></el-icon>
            <el-icon :size="25" v-if="!isCollapses"><Fold /></el-icon>
         </div>
      </div>
   </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  Fold,
  Expand
} from '@element-plus/icons-vue'
import $store from "@/store";
let submenu = ref([]);
const isCollapses = ref(false)
onMounted(() => {
   submenu.value = $store.getters['GET_SUBMENU'] 
}) 
 
const handleClose = (key: string, keyPath: string[]) => {
   setTimeout(()=>{
      isCollapses.value = !isCollapses.value
   },0)
} 
</script>
<style lang="scss" scoped>
.aside{
   position: relative; 
   .sidebar-footer{
      position: absolute;
      left:0;
      bottom:20px;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
   }
} 
.el-menu{
   height: 100%;
} 
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>