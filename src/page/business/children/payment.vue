<template>
    <div class=" childPage">
        <header-top :headtitle="titles" goback="true"></header-top>
    </div>
</template>
<script>
    import Vue from 'vue'
    import headerTop from '@/components/header'
    export default {
        data(){
            return {
                titles:'电力缴费'
            }
        },
        components:{
            headerTop
        }
    }
</script>
<style scoped lang='scss'>
    
</style>