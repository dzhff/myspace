<template>
    <div>
        <el-input class="inputSeach" v-model="inputSeach" placeholder="请输入内容"></el-input>
        <el-button @click="search">搜索</el-button>
        <div class="div_table">
            <table id="table" class="pure-table pure-table-horizontal">
                <thead>
                    <tr>
                        <!-- <th>序号</th> -->
                        <th width="20%">文章ID</th>
                        <th width="50%">标题</th>
                        <th width="30%">operate</th>
                    </tr>
                </thead>
                <tbody id="body">
                    <tr v-for="(t,index) of unTodos" :key="t.id">
                        <td>{{ index+1 }}</td>
                        <td><span v-show="!t.isEdit">{{ t.title }}</span>
                        <el-input 
                        class="inputTit"
                        type="text"
                        size="small" 
                        v-show="t.isEdit" 
                        @blur="handleBlur(t,$event)"
                        @forminput="iii($event)"
                        v-model="t.title"/></td>
                        <td>
                            <el-button size="small" @click="delbtn(t.id)">删除</el-button>
                            <el-button size="small" @click="editbtn(t)" v-show="!t.isEdit">修改</el-button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
        
</template>

<script>
export default {
    name:'HomeTodo',
    data() {
        return {
            unTodos:[],
            untempTodos:[],
            showUnTodos:[],
            inputSeach:'',
            Todos:[],
            isSearch:false
        }
    },
    computed:{
        todoId(){
            return localStorage.getItem('userid').slice(-1)
        },
        // unTodos(){
        //     return 
        // }
    },
    methods:{
        search(){
            sessionStorage.setItem('issearch',true)
            if(this.inputSeach!=''){
                this.isSearch = true
            }
            this.isSearch = true
            let input = this.inputSeach.replace(/\s/g,'')
            var Regtitle = /[\u4e00-\u9fa5]|[A-Za-z0-9_\-\u4e00-\u9fa5]+/
            if(Regtitle.test(input)){
                this.untempTodos = this.unTodos.filter(unTodo => {
                    return unTodo.title.indexOf(input)==-1
                });
                this.unTodos = this.unTodos.filter(unTodo => {
                    return unTodo.title.match(input)
                });
                
            }
            
            console.log(this.unTodos);
            
            console.log(this.untempTodos);
        },
        delbtn(id){
            console.log(id);
            this.unTodos = this.unTodos.filter(unTodo => {
                return unTodo.id!=id
            });
            console.log(this.unTodos);
            
            this.$store.commit('SHOWUNTODOS',this.unTodos)
        },
        editbtn(untodo){
            console.log(111);
            if(untodo.hasOwnProperty('isEdit')){
                untodo.isEdit = true
            }else{
                this.$set(untodo,'isEdit',true)
            }
        },
        // 失去焦点保存
        handleBlur(untodo,e){
            untodo.isEdit = false
            // let value = e.target.value;
            // console.log(this.unTodos);
            // this.unTodos.forEach((t)=>{
            //     if(t.id == untodo.id){
            //         t.title = value
            //     }
            // })
            // console.log(this.unTodos);
            this.$store.commit('SHOWUNTODOS',this.unTodos)


        },
        iii(e){
            console.log(e.target.value);
        }

    },
    created(){
        
    },

    created(){
        sessionStorage.setItem('issearch',false)
        // 判断是否在sessionStorage中存过了
        let untodos = JSON.parse(sessionStorage.getItem('untodos'))
        console.log(untodos);
        console.log();
        if(untodos&&untodos!=''){
            this.unTodos = untodos
            this.untempTodos = untodos
            console.log(this.untempTodos);
            
        }else{// 没存过则ajax请求数据
            this.$axios.get(`https://jsonplaceholder.typicode.com/users/${this.todoId}/todos`).then(
            response=>{
            console.log('获取帖子的照片请求成功了',response.data);
            response.data.forEach(d => {
                if(!d.completed){
                    this.unTodos.push(d)
                    this.untempTodos.push(d)
                }else{
                    this.Todos.push(d)
                }
            });
            console.log(this.untempTodos);
            //存储做了和没做的todos
            sessionStorage.setItem('untodos',JSON.stringify(this.unTodos))
            sessionStorage.setItem('todos',JSON.stringify(this.Todos))

            },
            error=>{
                console.log('请求失败了',error.message);
            },)
        }
                
        // console.log(untodos);
        

        // if(!sessionStorage.getItem('issearch')){
            window.addEventListener('beforeunload',()=>{
            console.log('I want to cancel');
            console.log(this);
            // sessionStorage.setItem('untodos',JSON.stringify(this.unTodos))
            sessionStorage.setItem('untodos',JSON.stringify(this.$store.state.untodos))

        })
        // }
            
        
        
        
    },
    mounted(){
        // this.$store.dispatch('showuntodos',untodos)
        // this.unTodos = this.$store.state.untodos
    }
}
</script>

<style>
.inputSeach{
    /* border:1px solid red; */
    height: auto;
    width:50%
}
/* table */
.div_table{
    width: 93%;
    height: auto;
    overflow-y: auto;
    /* border: 1px solid red; */

}
.div_table::-webkit-scrollbar{
				display: none;
}
.indexid{
    /* border: 1px solid red; */
    width: 100px !important;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    /* height: 60%; */
    margin-top: 2%;
    table-layout:fixed
    
}
 table 
td,th {
    padding: 0;
    
}
 
.pure-table {
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    /* border: 1px solid red; */
}
 
.pure-table td,.pure-table th {
    border-left: 1px solid #cbcbcb;
    border-width: 0 0 0 1px;
    font-size: inherit;
    margin: 0;
    overflow: visible;
    padding: .5em 1em;
}
 
.pure-table thead {
    /* background-color: #e0e0e0; */
    color: #000;
    text-align: left;
    vertical-align: bottom;
}
 
.pure-table td {
    background-color: transparent;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.pure-table-horizontal td,.pure-table-horizontal th {
    border-width: 0 0 1px 0;
    border-bottom: 1px solid #cbcbcb;
}
 
.pure-table-horizontal tbody>tr:last-child>td {
    border-bottom-width: 0;
}
.pure-table-horizontal tbody{
}
.inputTit{
    /* border:1px solid red; */
    /* width: 80%; */
}
</style>