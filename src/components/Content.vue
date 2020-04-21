<template>
    <div>
        <h2>我是详情页面</h2>
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
        console.log(this.$route.params);
    }
}
</script>