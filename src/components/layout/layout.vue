<template>
   <div class="cm-admin-layout">
        <header class="header cci">
          <div class="header-left">
             <div class="logo-container">
               <img src="http://10.10.77.172:9568/app-admin-web/static/img/logo.1d2ad7ff.png" alt="">
               <h1>乐清后台管理系统主应用</h1>
             </div>
          </div>
          <div class="header-center">
            <cci-nav></cci-nav>
          </div>
          <div class="header-right">
            <div class="header-item"><div class="user-dropdown-reference"><span class="el-avatar el-avatar--icon el-avatar--circle" style="height: 24px; width: 24px; line-height: 24px;"><i class="el-icon-user-solid"></i></span><span class="username hide-on-mobile">阿牛综合科</span></div></div>
            <div class="header-logout-wrapper"><span class="header-right-separator">|</span><span class="header-logout">退出</span></div>
          </div>
        </header>
        <div class="tags-view">tags-view</div>
        <cci-side></cci-side>
        <div class="page-main">
          <router-view></router-view>
        </div> 
   </div>
</template>

<script lang="ts">
import cciNav from './nav.vue'
import cciSide from './side.vue'
export default {
    components:{
      cciNav,
      cciSide
    },
    setup () {  
        return {
          
        }
    }
}
</script>

<style lang="scss" scoped>
.cm-admin-layout{
  display: grid;
  width: 100%;
  height: 100%;
  overflow: hidden;
  grid-template-columns: min-content 1fr;
  grid-template-rows: min-content min-content 1fr;
}
.header{
  background: #3786FD;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  height: 64px;
  z-index: 10; 
  grid-column-start: 1;
  grid-column-end: 3;
  box-shadow: 0 4px 4px -4px rgb(0 0 0 / 50%);
  .header-left, .header-center, .header-right{
    height: 100%;
    display: flex;
  }
  .logo-container{
    width: auto;
    min-width: 236px;
    padding-left: 8px;
    display: flex;
    width: 100%;
    height: 64px;
    cursor: pointer;
    padding: 0 28px;
    box-sizing: border-box;
    align-items: center;
    img{
      height: 38px;
    }
    h1{
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 22px;
      font-weight: 500;
      color: #fff;
    }
  }
  .header-center {
    flex:1
  }
  .header-item{
      display: flex;
      align-items: center;
      padding: 0 8px;
      cursor: pointer;
    .user-dropdown-reference{
      display: flex;
      align-items: center;
      height: 100%;
      .username{
        font-size: 14px;
        padding: 0 5px;
      }
    }
  }
  .header-logout-wrapper{
    display: flex;   
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    .header-right-separator{
      width: 1px;
      height: 12px;
      opacity: 0.4;
      margin-top: -6px;
    }
    .header-logout{
      padding: 0px 20px 0 12px;
       cursor: pointer;
    } 
  }
}
.header.cci {
  .header-logout-wrapper,.header-item{
    color: rgba(255, 255, 255, 0.85);
  }
}
.layout-side{
  height: 100vh;
  background: #ddd;
}
.tags-view{
    grid-column: 2 / 3;
  }
  .page-main{
    grid-column: 2 / 3;
  } 
  .aside{
    grid-row-start: 2;
    grid-row-end: 4;
  }
</style>