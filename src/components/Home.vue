<template>
    <!-- 所有的组件要被根节点包含 -->
    <div class="home">
        <h2>Home Page</h2>
        
        <button @click="getChildData()">获取子组件的数据</button>

       <ul>
      <li v-for="(l,key) in list">
        {{key}}: {{l}}
      </li>
       </ul>  
       <button @click="getData()">请求api</button>
        <hr>
        <br>
        <br>
        <br>
        <br>
        <div>{{msg}}</div>
        <hr>
        <!-- <v-lify v-if="flag" :msgg="msg" :runn="run" :home="this"></v-lify> -->
        <v-lify ref="header"></v-lify>
        <v-new ref="news"></v-new>
        <!-- 父组件与子组件传值 
        1.父组件调用子组件的时候，绑定动态属性
        :msgg="msg"
        2.在子组件里面通过 props接受父组件的参数，不建议在传值设置 子父组件重名，可以加上父组件名称

        3.传方法到子组件  
         :runn="run"

        4.传整个模块到子组件
        :home="this"
            alert(this.home.msg)
            this.home.run("lll");

        5.传递的参数可以进行验证
        props:["msgg","runn","home"]
        props:{
            "msgg":string
        }

        父组件主动获取子组件数据和方法
        1.调用子组件的时候定义一个ref
        <v-lify ref="header"></v-lify>

        2.在父组件里面通过
        this.$refs.header.属性
        this.$refs.header.方法

        子组件主动获取父组件的数据和方法
        this.$parent.数据
        this.$parent.方法
        -->

        <!-- 非父子组件之间传值
        import lify from "./Lify.vue";
        import New from "./News.vue";
         -->
        <button @click="changeFlag()">销毁组件</button>
    </div>
</template>

<script>
import lify from "./Lify.vue";
import New from "./News.vue";
import axios from 'axios';

export default {
    data(){
        return{
            msg:"title1212tttt",
            flag:true,
            list:[]
        }
    },
    methods:{
        getChildData(){
            this.$refs.header.setMsg();
            alert(this.$refs.header.msg);
        },
        changeFlag(){
            this.flag=!this.flag;
        },
        run(key){
            alert("我是home组件方法  "+key);
        },
        getData(){
            let api = 'http://localhost:8080/mock/test.json'
            // this.$http.get(api).then(function(response){
            //     console.log(response);
            //     console.log(response.body);
            //     console.log(response.data);
            //     this.list=response.data;
            // },function(err){
            //     console.log(err);
            // })
            axios.get(api).then((response)=>{
                console.log(response)
                this.list=response.data;
            }).catch((error)=>{
                console.log(err);
            })

        }
    },
    mounted(){
        this.getData();
    },
    components:{
        "v-lify":lify,
        "v-new":New
    }
}
</script>

<style lang="scss" scoped>
// 局部作用域  scoped  只在当前组件生效  或者给根节点取一个名字，使用样式时，根据名字定义范围
// .home{
//     h2{
//     color: red;
// }
// }
h2{
    color: red;
}

</style>