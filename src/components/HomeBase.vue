<template>
  <div>
    <h2>
      现在为home组件测试接口页面
    </h2>
    <div class="allList">
      <!-- {{ showTestData }} -->
    </div>
    <div class="sendList">
      <form @submit.prevent="demo">
        title:<input v-model.trim="sendList.title" type="text">
        body:<input v-model.trim="sendList.body" type="text">
        userId: <input v-model.trim="sendList.userId" type="text">
        <button>提交</button>
      </form>
    </div>
    <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {
    name:"HomeBase",
    data() {
      return {
        showTestData:[],
        sendList:{
          title:'',
          body:'',
          userId:1,
        },
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
      }
    },
    methods:{
      demo(){
        console.log(this.sendList);
        this.$axios({
          method:'post',
          url:'https://jsonplaceholder.typicode.com/posts',
          data:this.sendList,
          // body: JSON.stringify({
          //   title: 'foo',
          //   body: 'bar',
          //   userId: 1,
          // }),
          headers:{'Content-type': 'application/json; charset=UTF-8',}
          }).then(
            response=>{
              console.log('请求成功了',response);
            },
            error=>{
              console.log('请求失败了',error);
            }
          )
        
      }
    },
    mounted(){
      this.$axios.get('https://jsonplaceholder.typicode.com/posts').then(
        response=>{
          console.log('请求成功了',response.data);
          this.showTestData = response.data
        },
        error=>{
          console.log('请求失败了',error.message);
        }
      )
      // this.$axios({
      //     method:'post',
      //     url:'https://jsonplaceholder.typicode.com/posts',
      //     // body:JSON.stringify(this.sendList),
      //     body: JSON.stringify({
      //       title: 'foo',
      //       body: 'bar',
      //       userId: 1,
      //     }),
      //     headers:{'Content-type': 'application/json; charset=UTF-8',}
      //     }).then(
      //       response=>{
      //         console.log('请求成功了',response);
      //       },
      //       error=>{
      //         console.log('请求失败了',error);
      //       }
      //     )
      
    }
    
}
</script >

<style scoped>
.allList{
  border:1px solid red;
  height:60%
}
</style>