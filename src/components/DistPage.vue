<template>
  <div class="DistPageApp">
    <div class="PageTop">
      <div class="PageTitle">
        <span class="title">{{ resourse.title }}</span>
        <span class="userId">第{{ resourse.id }}篇</span>
        <div class="userId">作者：{{ resourse.userId }}号</div>
        <div class="PageContent">{{ resourse.body }}</div>
        
      </div>
      
    </div>
    <div class="PageMid">
            <h4>评论<span class="comtitle">>>{{ comments.length }}条</span></h4>
            <div class="comTitcontent" v-for="c of comments" :key="c.id">
              <span class="comtitle">{{ c.name }}</span>
              <span class="comtitle">{{ c.email }}</span>
              <div >{{ c.body }}</div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    // name:'DistPage',
    data() {
      return {
        comments:[],
        photos:[],
        resourse:[],
        // loading: true

      }
    },
    computed:{
        postId(){
            return this.$store.state.postId
        },
    },
    mounted(){
        console.log();
        // 存取postId
        // sessionStorage.setItem('postId',this.$route.params.postId)
        this.$store.dispatch('showpostid','')
        // 获取这篇帖子的评论
        this.$axios.get(`https://jsonplaceholder.typicode.com/posts/${this.postId}/comments`).then(
        response=>{
          // console.log('获取这篇帖子的评论请求成功了',response.data);
          this.comments = response.data
          console.log(this.comments);
        },
        error=>{
          console.log('请求失败了',error.message);
        }
      ),
    //   获取这篇帖子的具体内容
      this.$axios.get(`https://jsonplaceholder.typicode.com/posts/${this.postId}`).then(
        response=>{
          // console.log('获取这篇帖子的具体内容请求成功了',response.data);
          this.resourse = response.data
          console.log(this.resourse);

        //   console.log(response.data.length);
        },
        error=>{
          console.log('请求失败了',error.message);
        }
      ),
      // 获取帖子的照片
      this.$axios.get(`https://jsonplaceholder.typicode.com/albums/${this.postId}/photos`).then(
        response=>{
          // console.log('获取帖子的照片请求成功了',response.data);
          this.photos = response.data
          console.log(this.photos);
        //   console.log(response.data.length);
        },
        error=>{
          console.log('请求失败了',error.message);
        }
      )
    }

}
</script>

<style scoped>
.DistPageApp{
  width: 90%;
  height: 90%;
  box-shadow: 5px 5px 5px #eee;
  /* border:1px solid red */
  border:1px solid #c9c7c7;

}
.PageTop{
  /* border:1px solid #dbd9d9; */
  border-bottom: white;
  width:100%;
  height: auto;
  /* padding-top: 3%;
  padding-left: 5%; */

}
.PageMid{
  /* border:1px solid yellow; */
  max-height: 70%;
  border-top:1px solid #c9c7c7;
  width:100%;
  height:auto ;
  overflow-x: hidden;
	overflow-y: scroll;
  padding-top: 1%;
  padding-left: 1%;
  /* display:flex;
  flex-direction: row */
}
.PageMid::-webkit-scrollbar{
				display: none;
}
.PageTitle{
  /* border:1px solid red; */
  margin: 0 auto;
  width:90%;
  height:20%;
  text-align: center;
  
}
.title{
  font-size:24px;
  font-weight: bolder;
}
.userId{
  font-size: 12px;
  /* border:1px solid yellow; */
  height: 50%;
}
.PageContent{
  /* border:1px solid blue; */
  margin: 0 auto;
  width:90%;
  /* height:45%; */
  text-align: center;
  font-size: 16px;
}
.comtitle{
  font-size:13px;
  color: #a7a5a5;
}
.comTitcontent{
  /* border:1px solid red; */
  height: auto;
  padding-bottom: 2%;
}
</style>