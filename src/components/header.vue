<template>
    <header>
        <div class="header-container clear">
            <span v-if="goback" @click="$router.go(-1)" class="back iconfont icon-houtui"></span>
            <span class="title">{{headtitle}}</span>
            <span v-if="right" class="more iconfont icon-ordinaryset"></span>
        </div> 
    </header>
</template>
<script>
    export default{
        props:['headtitle','goback','right']
    }
</script>
<style lang="scss" scoped>
@import '../style/mixin.scss';
    .header-container{
        height: 1.6rem;
        background: #e52e04;
        line-height: 1.6rem;
        text-align: center;
        position: relative;
        .back{
            color: white;
            font-size: 0.55rem;
            margin-left: 0.5rem;
            padding-right: 0.2rem;
            float: left;
        }
        .title{
            color: white;
            font-size: 0.5rem;
            @include center;
        }
        .more{
            color: white;
            font-size: 0.55rem;  
            float: right;
            margin-right: 0.5rem;
            padding-left: 0.2rem;
        }
    }
    
</style>