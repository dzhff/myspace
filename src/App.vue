<template>
  <div id="app">
    <!-- <router-link to="/login">登录</router-link>
    <div>
      <router-view></router-view>
    </div> -->
    <!-- <Login/> -->
    <BaseVue/>
    
  </div>
</template>

<script>
import BaseVue from './components/BaseVue.vue';
export default {
  name: 'App',
  components:{
    BaseVue,
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body,html{
    width:100%;
    height: 100%;
    box-sizing: border-box;
}
#app{
  width:100%;
  height: 100%;
}
a{
  color: black;
  text-decoration: none;
}
</style>
