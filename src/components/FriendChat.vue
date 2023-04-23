<template>
  <div class="FriendChatApp">
    <div class="ChatTop">
      这是聊天上半部
    </div>
    <div class="ChatMid">
        <el-upload
         class="ChatFile"
         :on-change="handleChange"
          action="http://8.134.134.68:8080/file/upload"
          :file-list="fileList"
          :on-success="fileSuccess"
          >
            <el-button  size="small" type="primary" >点击上传</el-button>
          <!-- <div slot="tip" class="el_upload_tit">只能上传jpg/png文件，且不超过500kb</div> -->
        </el-upload>
        
        <div class="loaddiv">
          <!-- <el-button  size="small" type="primary" class="loadBtn" @click="loadfile">点击下载</el-button> -->
          <el-button size="small" @click="loadfile">点击下载</el-button>
          <div>
            <img :src="loadimg" class="loadimg" alt="">
          </div>
        </div>
        
    </div>
  </div>
</template>

<script>
export default {
    name:'FriendChat',
    data() {
      return {
        fileList:[{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
        loadFileList:['files-1679323211045-bg.jpg'],
        loadimg:''
      }
    },
    methods: {
      // 文件列表上传发生变化的钩子
      handleChange(file, fileList) {
        console.log(file);
        console.log(fileList);
      },
      // 文件上传成功返回的钩子
      fileSuccess(file, fileList){
        console.log(file.data.fileName);
        this.loadFileList.push(file.data.fileName)
        console.log(fileList);
      },
      // 下载钩子，由于后台接口没有给我们返回所有文件的接口，只能下载已有的文件
      loadfile(){
        this.$axios.get(`http://8.134.134.68:8080/file/download/${this.loadFileList[0]}`,{responseType: 'blob'}).then(
            response=>{
              
              const { data } = response
              const reader = new FileReader()
              reader.readAsDataURL(data)
              reader.onload = (ev) => {
                  // const img = new Image()
                  // img.src = ev.target.result
                  this.loadimg = ev.target.result
                  
              }

                  },
                  error=>{
                    console.log('请求失败了',error);
                  }
                )
            }
    },
    mounted(){
      console.log(this.loadFileList[0]);
    }
}
</script>

<style scoped>
.FriendChatApp{
  /* border: 1px solid red; */
  width: 90%;
  height: 90%;
  box-shadow: 5px 5px 5px #eee;
}
.ChatTop{
  border:1px solid #dbd9d9;
  border-bottom: white;
  width:100%;
  height: 60%;
  padding-top: 3%;
  padding-left: 5%;

}
.ChatMid{
  /* border:1px solid yellow; */
  border:1px solid #c9c7c7;
  width:100%;
  height: 40%;
  padding-top: 1%;
  padding-left: 1%;
  display:flex;
  flex-direction: row
}
.el-upload{
  /* border:1px solid red; */
  /* display: -webkit-inline-box; */
  width: 15%;
  height: 40%;
}
.upload-demo{
  display:flex;
  flex-direction: row
}
.ChatFile{
  /* border: 1px solid red; */
  width: 30%;
  height: 40%;
}

.el_upload_tit{
  font-size:12px;
  height: 30%;
  border:1px solid blue
}
.loadBtn{
  /* width: 18%; */
  height: 22%;
  /* background-color: cadetblue; */
}
.loaddiv{
  width:30%;
  /* border:1px solid blue; */
  padding-left: 2%;
}
.loadimg{
    width: 40%;
    display: block;
    margin-top: 3%;
    margin-right:1%
}
</style>