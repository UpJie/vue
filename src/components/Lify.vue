<template>
    <!-- 所有的组件要被根节点包含 -->
    <div class="lify">
        <h2>生命周期函数----{{msgg}}</h2>
        <div>{{msg}}</div>

        <button @click="setMsg()">改变数据</button>
        <button @click="runn('111')">接收父组件方法</button>
        <button @click="getParent()">接收父组件</button>
        <button @click="getParentAuto()">主动接受父组件</button>
        <button @click="sendData()">给News广播数据</button>

        <!-- 非父子组件之间传值
        import lify from "./Lify.vue";
        import New from "./News.vue";
        1.新建一个js文件，  然后引入vue  实例化vue  然后暴露这个实例
        2.在要广播的地方引入实例，
        //引入空实例  进行非父子组件之间传值
        import  VueEvent  from "../model/VueEvent.js";
        3.通过 VueEvent.$emit('名称','数据');
        4.在接收数据的地方通过  监听并接收数据
        VueEvent.$on('名称',function(data){
            console.log(data);
        })


        传出数据
        VueEvent.$emit('to-news',this.msg);

        监听数据  接收数据
        VueEvent.$on('to-news',function(data){
            console.log(data);
        })

         -->
    </div>
</template>

<script>
//引入空实例  进行非父子组件之间传值
import  VueEvent  from "../model/VueEvent.js";
export default {

    data(){
        return{
            msg:"65151"
        }
    },
    methods:{
        sendData(){
            VueEvent.$emit('to-news',this.msg);
        },
        getParentAuto(){
           alert(this.$parent.flag);
        },
        setMsg(){
            this.msg="456465465"
        },
        getParent(){
            alert(this.msgg);
            alert(this.home.msg)
            this.home.run("lll");
        }
    },
    props:["msgg","runn","home"],
    beforeCreate(){
        console.log("实例创建之前");
    },
    created(){
        console.log("实例创建完成");
    },
    beforeMount(){
        console.log("模板编译之前");
    },
    mounted(){
        console.log("模板编译完成");
    },
    beforeUpdate(){
        console.log("更新之前");
    },
    updated(){
        console.log("更新完成");
    },
    beforeDestroy(){
        console.log("销毁之前");
    },
    destroyed(){
        console.log("销毁完成");
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
    color: blue;
}

</style>