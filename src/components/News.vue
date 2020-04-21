<template>
    <div>
        <h2>我是新闻组件</h2>
    <ul>
      <li v-for="(item,key) in list">
       <router-link :to="'/content/'+key"> {{key}}--{{item}}</router-link>
      </li>
    </ul>

        <ul>
      <li v-for="(item,key) in list">
          <!-- 静态传值 to -->
       <!-- <router-link to="/shop?aa=123"> {{key}}--{{item}}</router-link> -->
       <!-- <router-link to="/shop/123"> {{key}}--{{item}}</router-link> -->
       <!-- 动态传值 :to-->
        <router-link :to="'/shop?aa='+key"> {{key}}--{{item}}</router-link>
      </li>
    </ul>
    </div>
</template>

<script>
//引入空实例  进行非父子组件之间传值
import  VueEvent  from "../model/VueEvent.js";

export default {
    data(){
        return{
            msg:"ghgggh",
            list:['111','222','333'],
            list:['s111','s222','s333']
        }
    },
    mounted(){
        VueEvent.$on('to-news',function(data){
            console.log(data);
        })
    }
}
</script>