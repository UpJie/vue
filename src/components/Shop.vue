<template>
    <div>
        <h2>我是商品页面</h2>

    </div>
</template>

<script>

export default {
    data(){
        return{
            msg:"数据"
        }
    },
    mounted(){
        console.log(this.$route.query);//获取get传值
    }
}
</script>