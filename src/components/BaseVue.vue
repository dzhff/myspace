<template>
  <div class="BaseApp">
    <!-- <Login/> -->
    <!-- <router-link to="/home">点我</router-link> -->
    <router-view></router-view>
    
    <!-- <router-link to="/home">跳转主页面</router-link> -->
    
  </div>
</template>

<script scoped>
import Login from './Login.vue';
import Home from './Home.vue';
export default {
    name:'BaseVue',
    components:{
      Login,
      Home
    }
}
</script>

<style scoped>
.BaseApp{
  height: 100%;
  width:100%
}
</style>