import Vue from 'vue'
import App from './App.vue'

//引用请求数据模板
import VueResource from 'vue-resource';
Vue.use(VueResource)
    //引用动态路由
import VueRouter from 'vue-router';
Vue.use(VueRouter);

/*
1.创建组件
2.配置路由
3.实例化vue-router
4.挂载路由
5.需要引入的模板中  写上 <router-view></router-view> ，不然配置的路由不显示
*/
import Home from "./components/Home.vue";
import News from "./components/News.vue";
import Content from "./components/Content.vue";
import Shop from "./components/Shop.vue";

const routes = [
    { path: '/home', component: Home },
    { path: '/news', component: News },
    { path: '/shop', component: Shop },
    { path: '/content/:aid', component: Content }, //动态路由   aid为参数
    { path: '*', redirect: '/home' } /*默认跳转路由*/
]
const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})