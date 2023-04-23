<template>
  <div class="HomeLeftApp">
    <!-- <div class="MyImg"> -->
        <img class="img_tou" :src="userdata.profile" alt="">
    <!-- </div> -->
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-chat-line-round"></i>
          <span>好友列表</span>
        </template>
        <el-menu-item-group v-for="(f,index) of friends" :key="index" >
          <router-link to="/home/friendchat">
          <el-menu-item class="friend_list" index="1-1">
            <img object-fit="fill" class="friend_img" :src="f.profile" alt="">
            {{ f.username }}
          </el-menu-item >
        </router-link>
          <!-- <el-menu-item index="1-2">好友2</el-menu-item> -->
        </el-menu-item-group>
      </el-submenu>
      <router-link to="/home/frienddist">
      <el-menu-item index="2" >
        <i class="el-icon-menu"></i>
        <span slot="title">资源库</span>
      </el-menu-item>
      </router-link>
      <router-link to="/home/homemymessage">
      <el-menu-item index="3" >
        <i class="el-icon-setting"></i>
        <span slot="title">个人信息</span>
      </el-menu-item>
      </router-link>
      <router-link to="/home/hometodo">
      <el-menu-item index="4" >
        <i class="el-icon-setting"></i>
        <span slot="title">Mytodo</span>
      </el-menu-item>
      </router-link>
    </el-menu>
  </div>
</template>

<script>
export default {
    name:'HomeLeft',
    data() {
        return {
           
        }
    },
    computed:{
        userdata(){
            return this.$store.state.userdata
        },
        friends(){
            return this.$store.state.friends
        }
    },
    methods:{
        handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      }
    },
    mounted(){
        this.$store.dispatch('showdata','')
        // console.log('在home页面弹出',this.$store.state.userdata);
        this.$store.dispatch('showfriend',this.userdata)
        // console.log(this.friends);
        // console.log(this.$store.state.friends);
    }
}
</script>

<style scoped>
.HomeLeftApp{
  /* border: 1px solid red; */
  height: 98%;
}
.img_tou{
    width: 30%;
    /* height: ; */
    display: block;
    margin: 4% auto
}
.friend_list{
    /* border:1px solid red; */
    /* width:80%; */
    display: flex;
    flex-direction: row;
    align-items: center;
    
}
.el-submenu .el-menu-item{
    min-width:100%;
    /* padding:0 20px; */
}
.friend_img{
    width: 20%;
    /* height: ; */
    display: block;
    margin: 10%
}
el-menu{
    /* border:1px solid yellow */
}
</style>