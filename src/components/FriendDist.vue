<template>
  <div class="DistApp">
    <div class="ttt"><h3>文章资源</h3></div>
    <div class="div_table">
    <table style="table-layout: fixed;" width="80%" class="table">
        <thead>
            <tr>
                <th style="width: 10%;">序号</th>
                <th style="width: 15%;">作者名号</th>
                <th style="width: 35%;">题目</th>
                <th style="width: 40%;">内容</th>
            </tr>
        </thead>
        <tbody>
          <tr class="trr" v-for="(t,index) of tableData" :key="index" @click="clicktr(t.id)">
            <td>{{ t.id }}</td>
            <td>{{ t.userId }}</td>
            <td>{{ t.title }}</td>
            <td>{{ t.body }}</td>
        </tr>
        </tbody>
        
    </table>
  </div>
    <el-pagination
    class="elPage"
    layout="prev, pager, next"
    :total="50"
    @current-change="currentPage">
  </el-pagination>
  
  </div>
</template>

<script scoped>
export default {
  name:'FriendDist',
  data() {
    return {
      tableData:[],
      userId:1
    }
  },
  methods:{
    currentPage(page){
      this.userId=page
    },
    clicktr(id){
      console.log(id);
      
      // 存储postid
      sessionStorage.setItem('postId',id)
      this.$store.dispatch('showpostid',id)
      // 跳转到具体页面
      this.$router.push({
        name:'distpage',
        params:{postId:id}
      })
    }
  },
  watch:{
    // 获取所有资源，分页获取
    userId:{
      immediate:true,
      handler(newValue,oldValue){
        this.$axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${this.userId}`).then(
        response=>{
          console.log('请求成功了',response.data);
          this.tableData = response.data
          console.log(response.data.length);
        },
        error=>{
          console.log('请求失败了',error.message);
        }
      )
      }
    }
  },
  mounted(){
    
  }

}
</script >

<style scoped>
.DistApp{
  /* border:1px solid red; */
  width:95%;
  height:100%
}
.ttt{
  /* border:1px solid red; */
  /* margin: auto; */
  width:100%;
  height:6%;
  padding-left:10%;
}
.div_table{
  height: 88%;
    overflow-y: auto;
}
table
        {
            /* border:1px solid blue; */
            border-collapse: collapse;
            margin: 0 auto;
            text-align: center;
            
        }
        table td, table th
        {
            border: 1px solid #cad9ea;
            color: #666;
            height: 50px;
        }
        table td{
          word-break:keep-all;/* 不换行 */
          white-space:nowrap;
          overflow:hidden;/* 内容超出宽度时隐藏超出部分的内容 */
          text-overflow:ellipsis;
        }
        table thead th
        {
            background-color: #CCE8EB;
            width: 100px;
        }
        table tr:nth-child(odd)
        {
            background: #fff;
        }
        table tr:nth-child(even)
        {
            background: #F5FAFA;
        }
.elPage{
  /* border: 1px solid red; */
  height:5%;
  padding-left:10%
  
}
.trr:hover{
  background-color: #eee;
}

</style>