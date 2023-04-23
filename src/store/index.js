//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
import axios from 'axios'
//应用Vuex插件
Vue.use(Vuex)
// Vue.prototype.$axios = axios



//准备actions对象——响应组件中用户的动作---做一些业务逻辑，ajax
const actions = {
    // 存取个人信息
    showdata(context,value){
        var userdata = JSON.parse(localStorage.getItem('userdata'))
        if(userdata){
            context.commit('SHOWDATA',userdata)
            // console.log('showdata1被调动了',context,userdata);
        }else{
            context.commit('SHOWDATA',value)
            // console.log('showdata2被调动了',context,value);
        }
    },
    // 存取朋友信息
    showfriend(context,value){
        axios.get(`http://8.134.134.68:8080/friend/getRequestList?id=${value.id}`).then(
            response=>{
            //   console.log('请求成功了',response.data.data[0].friendInfo);
              context.commit('SHOWFRIEND',response.data.data[0].friendInfo)
            },
            error=>{
            //   console.log('请求失败了',error);
            }
          )
    },
    // 存取获取帖子的id
    showpostid(context,value){
        var postId = sessionStorage.getItem('postId')
        // console.log('uuuuuuuuuuuuuuuuuuuuuuuu');
        if(postId){
            context.commit('SHOWPOSTID',postId)
            // console.log('showdata1被调动了',context,postId);
        }else{
            context.commit('SHOWPOSTID',value)
            // console.log('showdata2被调动了',context,value);
        }
    },
    // 存取untodos
    // showuntodos(context,value){//传进的参数是从localstorage获取的untodos
    //     context.commit('SHOWUNTODOS',value)
    // }
}
//准备mutations对象——修改state中的数据---直接就是对传入的数据进行操作
const mutations = {
    SHOWDATA(state,value){
        // console.log('SHOWDATA被调用了',state,value);
        state.userdata= value
    },
    SHOWFRIEND(state,value){
        // console.log('SHOWFRIEND被调用了',state,value);
        state.friends.push(value)
    },
    // 存取获取帖子的id
    SHOWPOSTID(state,value){
        state.postId = value
    },
    // 存取untodos
    SHOWUNTODOS(state,value){
        state.untodos = value
        console.log('SHOWUNTODOS一作用');
        console.log(state.untodos);

    },

}
//准备state对象——保存具体的数据
const state = {
    userdata:{},
    friends:[],
    postId:-1,
    untodos:[],
    todos:[]
}

//创建并暴露store
export default new Vuex.Store({
	actions,
	mutations,
	state
})