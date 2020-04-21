<script>
import  storage  from "./model/storage.js";

/*
1.引入组件
2.挂载组件
3.在模板中使用组件

生命周期函数：
    组件挂载以及组件更新销毁的时候触发的一系列方法
*/

/*
请求数据模板

vue-resource  官方插件
安装：
cd到项目路径下   cnpm install vue-resource  --save
--save 是将依赖写到package.json中，方便移植
在main.js中引入

axios  第三方插件
安装：
cd到项目路径下   cnpm install axios --save
哪里使用哪里引入



fetch-jsonp  类似于axios
*/


/*
路由
vue-router
*/ 
// import Home from "./components/Home.vue";
// import News from "./components/News.vue";
import Lify from "./components/Lify.vue";

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      obj:{
        name:"zhangsan",
        money:15
      },
      list:[
        {
        title:"语文",
        checked:false
        },
        {
          title:"数学",
          checked:true
        }
      ],
      list1:[{
        "cate":"国内新闻",
        "content":[
          {"name":"国内新闻1"},
          {"name":"国内新闻2"}
          ]
      },
      {
        "cate":"国际新闻",
        "content":[
          {"name":"国际新闻1"},
          {"name":"国际新闻2"}
          ]
      }],
      tit:"我是提示",
      url:"/src/assets/logo.png",
      h:"<h2>我被解析</h2>",
      flag:false,
      boxwidth:300,
      boxback:"blue"
    }
  },
  methods: {
    getMsg(){
      alert(this.msg)
    },
    setMsg(){
      this.msg="change data"
    },
    getInput:function(){
      console.log(this.$refs.datainfo),
      alert(this.$refs.datainfo.value),
      this.$refs.box.style.background="red"
    },
    requestList(){
      for(let i=0;i<5;i++){
        this.list.push(i)
      }
    },
    deleteList(val){
      // this.list.pop()
      this.list.splice(val,1)
      // this.list.remove(val)
    },
    eventFn(e){
      console.log(e.srcElement.dataset.aid)
      // e.srcElement.style.background="red"
      // this.$refs.buttoncolor.style.background="blue"
    },
    doAdd(e){
      this.list.push({"title":this.msg,"checked":false});
      this.msg="";
      storage.set("list",JSON.stringify(this.list));
    },
    doAdd1(){
      this.list.push({"title":this.msg,"checked":false});
      this.msg="";
    },
    doDelete(val){
    this.list.splice(val,1)
    storage.set("list",JSON.stringify(this.list));
    },
    saveList(){
      storage.set("list",JSON.stringify(this.list));
    }
  },
  mounted(){
    let list =JSON.parse(storage.get("list"));
    if(list){
      this.list=list
    }
   }//,
  // components:{
  //   'v-home':Home,
  //   'v-news':News 
  // }
}
</script>

<template>
  <div id="app">



    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>

    <!-- <v-news></v-news> -->
    <!-- <v-home></v-home> -->
    <router-link to="/home">首页</router-link>
    <router-link to="/news">新闻</router-link>
    <router-link to="/shop">商品</router-link>
    <router-view></router-view>

    <!-- 动态路由配置 
     { path: '/content/:aid', component: Content }, //动态路由   aid为参数
     <router-link to="/content/123"> {{key}}--{{item}}</router-link>

     this.$route.params  获取动态路由的值
    -->

 

    <hr>
    <hr>
    <!-- 实现增加简单功能 -->
    <input type="text" v-model="msg" v-on:keyup.13="doAdd($event)">
    <!-- <button @click="doAdd1()" >++</button>   -->

    <h2>进行中</h2>
    <ul>
      <li v-for="(item,key) in list" v-if="!item.checked">
        <input type="checkbox" v-model="item.checked" @change="saveList()">
        {{item.title}}
        <button @click="doDelete(key)">--</button>   
      </li>
    </ul>

    <br>
    <hr>
    <h2>已完成</h2>
    <ul>
      <li v-for="(item,key) in list" v-if="item.checked">
        <input type="checkbox" v-model="item.checked" @change="saveList()">
        {{item.title}}
        <button @click="doDelete(key)">--</button>   
      </li>
    </ul>

    <!-- 获取自定义属性 -->
    <button data-aid="sd" @click="eventFn($event)" ref="buttoncolor">获取button事件</button>   

    <br>
    <hr>
    <!-- 通过绑定事件来请求数据 -->
    <ul>
      <li v-for="(l,key) in list">
        {{key}}: {{l}}
      </li>
    </ul>
    <button @click="requestList()">改变数据</button>   
    <button @click="deleteList('2')">删除数据</button>   

    <br>
    <hr>
    <!-- ref 主要用来获取dom节点  操作dom节点 -->
    <!-- v-on:click 或者  @click -->
    <input type="text" ref="datainfo">
    <button @click="getInput()">获取dom节点及其value</button>   
    <div ref="box">改变我的颜色</div>

    <br>
    <hr>

    <!-- 双向数据绑定  MVVM   必须在表单中使用
    m：model 
    v：view
    m 和 v 之间改变互相影响
     -->
    <h2>{{msg}}</h2>
    <input type="text" v-model="msg">
    <button v-on:click="getMsg()">获取数据</button>
    <button v-on:click="setMsg()">设置数据</button>

    <br>
    <hr>
    <!-- 绑定图片 -->
    <img v-bind:src="url">
    <h1>{{ msg }}</h1>
    <div v-text="msg"></div>
    <br>

    <h2>{{obj.name}}:{{obj.money}}</h2>

  <!-- 循环 -->
    <br>
    <hr>
    <ul>
    <li v-for="(l,key) in list1" :class="{'red':key==0,'blue':key==1}">
      {{key+1}}:{{l.cate}}
      <ol>
        <li v-for="ll in l.content">
          {{ll.name}}
        </li>
      </ol>
    </li>
    </ul>

<!-- 绑定数据 -->
    <br>
    <hr>
  <div v-bind:title="tit">鼠标放上去</div>
  
  <!-- 绑定HTML -->
    <br>
    <hr>
{{h}}
<div v-html="h"></div>

<!-- 绑定class -->
    <br>
    <hr>
  <div v-bind:class="{'red':flag,'blue':!flag}">变换颜色</div>

<!-- 绑定style -->
    <br>
    <hr>
    <div class="box" v-bind:style="{'background':boxback,'width':boxwidth+'px'}">样式变化</div>


  </div>
</template>



<style lang="scss">
.red{
  color: red;
}
.blue{
  color: blue;
}
.box{
  width: 100px;
  height: 100px;
  background: red;
}
</style>
