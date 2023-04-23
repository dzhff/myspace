<template>
  <div class="HomeApp">
    <!-- 头部 -->
    <div class="HomeTop">
      <HomeTop/>
    </div>
    <!-- 中间 -->
    <div class="HomeMid">
      <!-- 左侧 -->
      <div class="HomeLeft">
        <HomeLeft/>
      </div>
      <!-- 主要部分 -->
      <div class="HomeMain">
        <!-- <router-link to="/home/friendchat"></router-link> -->
        <router-view></router-view>
      </div>
    </div>
    
  </div>
</template>

<script scoped>
import HomeTop from './HomeTop.vue';
import HomeLeft from './HomeLeft.vue';
import FriendChat from './FriendChat.vue';
import HomeBase from './HomeBase.vue';
import HomeMymessage from './HomeMymessage.vue';
export default {
    name:'Home',
    components:{
      HomeTop,
      HomeLeft,
      FriendChat,
      HomeBase,
      HomeMymessage
    },
    mounted(){
      // console.log('我是Home组件，我被调用了');
    }
}
</script>

<style scoped>
.HomeApp{
  /* border:1px solid red; */
  width:100%;
  height: 100%;
}
.HomeTop{
  /* border:1px solid blue; */
  width:100%;
  height:10%;
  background-color: #1074C2;
}
.HomeMid{
    /* border:1px solid blue; */
    width:100%;
    height: 90%;
    flex-direction: row;
    display: flex;
}
.HomeLeft{
  /* border:1px solid green; */
  border-right: 1px solid #dbd9d9;
  width:20%;
  height:100%
}
.HomeMain{
    /* border: 1px solid green; */
    width: 80%;
    height: 100%;
    padding-top: 3%;
    padding-left: 5%;
    /* padding-right: */
}
</style>