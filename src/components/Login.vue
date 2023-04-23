<template>
  <div class="LoginApp">
    <div class="LoginMain">
        <div class="LoginTop">
          <!-- <image src="../assets/bg.jpg"></image> -->
            欢迎来到chat！
        </div>
        <div class="LoginBottom">
            <el-form  class="LoginForm" label-position="right" label-width="80px" :model="formLabelAlign">
              <el-form-item label="账号">
                <el-input v-model.trim="formLabelAlign.username"></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input v-model.trim="formLabelAlign.password"></el-input>
              </el-form-item>
            
            <!-- <el-button size="small">确认</el-button> -->
            <el-form-item>
              <el-button  @click="subLogin">确认</el-button>
              <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
            </el-form-item>
          </el-form>
        </div>
    </div>
    <!-- <router-link to="/home" class="tiaozhuan">跳转</router-link> -->
    <!-- <router-view/> -->
    <!-- <button @click="jumpMain">跳转</button> -->
  </div>
</template>

<script>
// import axios from 'axios'
export default {
    name:'Login',
    data() {
        return {
          formLabelAlign:{
            password:'111',
            username:'wff'
          },
          loginToHome:''
        }
    },

    methods:{
        subLogin(){
          console.log(this.formLabelAlign.password,this.formLabelAlign.username);
          this.$axios.post('http://8.134.134.68:8080/user/login',this.formLabelAlign).then(
            response=>{
              console.log('请求成功了',response.data.data);
              // 跳转到home页面
              this.$router.push({
              name:'home'
            })
            this.$store.dispatch('showdata',response.data.data)
            // 存user 的 id
            localStorage.setItem('userid',response.data.data.id)
            localStorage.setItem('userdata',JSON.stringify(response.data.data))
            },
            error=>{
              console.log('请求失败了',error);
            }
          )
        }
    }
}
</script>

<style scoped>
a{
  color: black;
}
.LoginApp{
  width: 100%;
  height: 100%;
  border:1px solid green;
  display: flex;
  
}
.LoginMain{
  /* 调整login框的整体大小 */
  width: 35%;
  height:55%;
  margin:auto;
  border: 1px solid red;

}
.LoginTop{
  border: 1px solid yellow;
  height: 30%;
  width:100%;
  /* background-color: rgb(21, 42, 179); */
  color: black;
  font-size:large;
  display: flex;
  align-items:center;
  justify-content:center
  /* margin: auto;
  text-align: center; */
  
}
.LoginBottom{
  /* border: 1px solid blue; */
  height: 70%;
  width: 100%;
  /* display: flex;
  align-items:center;
  justify-content:center */
}

.el-form{
  padding-top:2%;
  border: 1px solid yellow;
  width:100%;
  /* height: 80%; */
}
.el-input{
  width:60%
}
.el-button{
  font-size: 14px;
}
</style>